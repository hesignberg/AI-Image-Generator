import React, { useEffect, useState } from "react";
import { SendHorizontal } from 'lucide-react';
import { useNavigate } from "react-router-dom";

type Role = "user" | "assistant";
type MsgType = "text" | "image";

interface ChatMessage {
  id: string;
  role: Role;
  type: MsgType;
  content: string;
  createdAt: string;
  lucidlayers_url?: string;
}

interface ChatResponse {
  messages: ChatMessage[];
}

const ChatMessages: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ChatMessage | null>(null);
  const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchChat = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("/api/chat/images", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      const data: ChatResponse = await res.json();
      setMessages(data.messages);
    } catch (err) {
      console.error("Error fetching chat:", err);
    }
  };

  useEffect(() => {
    fetchChat();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const prompt = input.trim();
    const token = localStorage.getItem("token");

    if (!token) {
      setShowLoginPopup(true); // Show popup if not logged in
      return;
    }

    const tempId = Date.now().toString();
    const now = new Date().toISOString();

    const userMessage: ChatMessage = {
      id: `${tempId}-prompt`,
      role: "user",
      type: "text",
      content: prompt,
      createdAt: now,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/image/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (res.ok && data.cloudinary_url) {
        const aiMessage: ChatMessage = {
          id: `${tempId}-image`,
          role: "assistant",
          type: "image",
          content: data.cloudinary_url,
          createdAt: now,
          lucidlayers_url: data.lucidlayers_url,
        };

        setMessages((prev) => [...prev, aiMessage]);
      }
    } catch (err) {
      console.error("Image generation error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (msg: ChatMessage) => {
    setModalImage(msg);
  };

  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (url: string) => {
    if (navigator.share) {
      navigator
        .share({
          title: "AI Generated Image",
          text: "Check out this image!",
          url,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Sharing not supported in your browser.");
    }
  };

  return (
    <div style={{
    
    }} className="max-w-7xl md:h-[67vh] h-[75vh] overflow-y-auto  scrollbar-hide   mx-auto mt-8 pl-14 sm:px-20">
      {/* Chat Messages */}
      <div className="mb-6 space-y-10">
      {Array.isArray(messages) && messages.length > 0 ? (
  messages.map((msg) => (
    <div
      key={msg.id}
      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`rounded-xl flex justify-center items-center flex-col py-1 max-w-xs shadow-md text-white`}
      >
        {msg.type === "text" ? (
          <p className="bg-[#151a24] px-4 py-1  rounded-xl text-white">{msg.content}</p>
        ) : (
          <img
            onClick={() => handleImageClick(msg)}
            src={msg.content}
            alt="Generated"
            className="rounded-lg cursor-pointer hover:scale-150 scale-125 transition duration-200"
          />
        )}
      </div>
    </div>
  ))
) : (
  <div className="text-center text-white text-xl mt-10">
     No messages found. <br />
    {/* <span className="text-yellow-400">Upgrade your plan to generate images.</span> */}
  </div>
)}

      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-2 fixed bottom-10 w-[85vw] sm:w-[45vw]  bg-[#121b32] rounded-full py-4 px-5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="flex-grow p-2  rounded-lg text-white"
          disabled={loading}
        />
        
        <button
  type="submit"
  disabled={loading || !input.trim()}
  className="bg-[#2563EB] text-white px-3 py-3 rounded-full w-fit flex items-center gap-2"
>
  {loading ? "Generating…" : <SendHorizontal className="w-10  h-10" />}
</button>
      </form>

      {/* Modal for Fullscreen Image */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative max-w-3xl w-full mx-4">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-0 z-50 right-0 text-right px-2 py-2 text-black text-3xl"
            >
              ✖
            </button>

            <img
              src={modalImage.content}
              alt="Full Screen"
              className="rounded-lg w-full max-h-[80vh] object-contain"
            />

            <div className="flex justify-center mt-4 gap-4">
              <button
                onClick={() => handleDownload(modalImage.content)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Download
              </button>
              <button
                onClick={() => handleShare(modalImage.content)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      )}
     {showLoginPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
    <div className="bg-[#1f2937] w-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl shadow-2xl p-6 sm:p-8 text-center border border-gray-700">
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
        Login Required
      </h2>
      <p className="text-sm sm:text-xl text-gray-400 mb-6">
        Please login to generate images.
      </p>
      <div className="flex justify-center gap-3 flex-wrap">
        <button
          onClick={() => setShowLoginPopup(false)}
          className="px-5 py-2 text-sm sm:text-xl bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-200"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setShowLoginPopup(false);
            navigate("/login");
          }}
          className="px-5 py-2 text-sm sm:text-xl bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default ChatMessages;
