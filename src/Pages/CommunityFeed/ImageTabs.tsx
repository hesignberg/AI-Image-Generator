import React, { useState, useEffect } from "react";
import Masonry from 'react-masonry-css';
import { Col, Row, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';

//import images
import avatar01 from "assets/images/community/avatar-01.png";

// Define the interface for your image data
interface Image {
    _id: string;
    prompt?: string;
    lucidlayers_url?: string;
    cloudinary_url?: string;
    user: string;
    createdAt: string;
}

const ImageTabs = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const breakpointColumns = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                return;
            }
            const response = await axios.get<{ images: Image[] }>('/api/image/my-images', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setImages(response.data.images);
        } catch (error) {
            console.error('Error fetching images:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleImageClick = (image: Image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleCloseModal();
            }
        };

        if (showModal) {
            document.addEventListener('keydown', handleKeyPress);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Row className="g-5">
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column"
                >
                    {images.map((image) => (
                        <div key={image._id} className="single-cummunity-feed">
                            <div 
                                className="thumbnail" 
                                onClick={() => handleImageClick(image)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={image.cloudinary_url || image.lucidlayers_url} alt="community" />
                            </div>
                            <div className="inner-content-area">
                                <div className="top">
                                    {/* Your existing top content */}
                                </div>
                                <p className="disc">
                                    {image.prompt || "Vibrant colorful shooting falling from the night sky on a distant."}
                                </p>
                            </div>
                        </div>
                    ))}
                </Masonry>
                <Col lg={12} className="mt--50 justify-content-end d-flex">
                    <Link to="/manage-subscription" className="rts-btn btn-primary loadmore-btn">
                        Load More Feed
                    </Link>
                </Col>
            </Row>
 {/* Modal */}
 {showModal && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-10 text-white bg-white/10 backdrop-blur hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-3xl"
            >
              &times;
            </button>
            <img
              src={selectedImage.cloudinary_url || selectedImage.lucidlayers_url}
              alt="Full View"
              className="max-h-[80vh] w-full object-contain rounded-lg shadow-lg"
            />
           
          </div>
        </div>
      )}
          
        </>
    );
};

export default ImageTabs;