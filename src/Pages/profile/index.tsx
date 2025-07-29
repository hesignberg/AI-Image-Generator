import React, { useEffect, useState } from "react";
import axios from "axios";
import { Download, Share2, X } from "lucide-react";

interface User {
  email: string;
  username: string;
  photo?: string;
  plan: string;
}

interface Image {
  _id: string;
  prompt: string;
  cloudinary_url: string;
  createdAt: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }

    const fetchImages = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get<{ images: Image[] }>(
          "http://localhost:5000/api/image/my-images",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setImages(response.data.images);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Image URL copied to clipboard!");
    } catch (err) {
      alert("Failed to copy image URL.");
    }
  };

  if (!user) return <div className="text-white p-4">User not found</div>;

  return (
    <div className="min-h-screen bg-[#090E18] text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#151A24] p-6 rounded-2xl shadow-xl mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={user.photo || "/default-profile.png"}
              alt="User"
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-500"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl text-blue-500 font-bold">{user.username}</h1>
              <p className="text-lg text-gray-400 mt-2">{user.email}</p>
              <p className="text-lg text-yellow-500 mt-1 capitalize">
                {user.plan}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl text-blue-400 font-semibold mb-4">Gallery</h2>

        {loading ? (
          <p>Loading images...</p>
        ) : images.length === 0 ? (
          <p>No images found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img) => (
              <div
                key={img._id}
                onClick={() => setSelectedImage(img)}
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img.cloudinary_url}
                  alt={img.prompt}
                  className="w-full h-40 object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 mt-5 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative bg-[#151A24] rounded-xl overflow-hidden max-w-4xl w-full">
            <button
              className="absolute  flex item-center justify-end  text-white p-3 bg-gray-600 hover:bg-gray-700 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage.cloudinary_url}
              alt={selectedImage.prompt}
              className="w-full max-h-[80vh] object-contain rounded-t-xl"
            />
            <div className="px-4 py-3 flex justify-between items-center">
              <p className="text-xl text-gray-300 max-w-md truncate">
                {selectedImage.prompt}
              </p>
              <div className="flex gap-3">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1"
                  onClick={() => handleDownload(selectedImage.cloudinary_url)}
                >
                  <Download size={16} /> Download
                </button>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1"
                  onClick={() => handleShare(selectedImage.cloudinary_url)}
                >
                  <Share2 size={16} /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
