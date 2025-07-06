import React from "react";
import { Link } from "react-router-dom";

//import images
import banner from "assets/images/banner/01.png";
import generator from "assets/images/generator/01.jpg";
import generator2 from "assets/images/generator/02.jpg";
import generator3 from "assets/images/generator/03.jpg";
import useSidebarToggle from "Common/UseSideberToggleHooks";

const Home = () => {
    const themeSidebarToggle = useSidebarToggle();
    return (
        <>
            <div className={`main-center-content-m-left main-center-content-m-left ${themeSidebarToggle ? "collapsed" : ""}`}>
                <div className="banner-badge bg_image">
                    <div className="inner">
                        <h3 className="title">Generate New Ideas for Your Content</h3>
                        <p className="dsic">
                            Lucid Layers is the place to create, publish and monetize content using the power of AI. Use the Lucid Layers AI Studio to create amazing generative images, music, and audio.
                        </p>
                        <Link to="#" className="rts-btn btn-blur">Try Now</Link>
                        <div className="inner-right-iamge">
                            <img src={banner} alt="banner" />
                        </div>
                    </div>
                </div>
                <div className="search__generator mt--50">
                    <h4 className="title color-white-title-home">👋 Welcome, Mack Gok</h4>

                    <div className="tab-content mt--50" id="pills-tabContent">
                        <div className="row g-5">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="single-image-generator">
                                    <Link to="image-generator" className="thumbnail">
                                        <img src={generator} alt="images" />
                                    </Link>
                                    <div className="inner-content">
                                        <div className="left-content-area">
                                            <h5 className="title">Image Generator</h5>
                                            <p className="disc">
                                                Our text-to-image feature turns your words into beautiful AI visuals.
                                            </p>
                                        </div>
                                        <Link to="/image-generator" className="rts-btn btn-primary">Generate</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="single-image-generator">
                                    <Link to="/" className="thumbnail">
                                        <img src={generator2} alt="images" />
                                    </Link>
                                    <div className="inner-content">
                                        <div className="left-content-area">
                                            <h5 className="title">Video Generator</h5>
                                            <p className="disc">
                                                Our text-to-image feature turns your words into beautiful AI visuals.
                                            </p>
                                        </div>
                                        <Link to="/" className="rts-btn btn-primary">Generate</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="single-image-generator">
                                    <Link to="/" className="thumbnail">
                                        <img src={generator3} alt="images" />
                                    </Link>
                                    <div className="inner-content">
                                        <div className="left-content-area">
                                            <h5 className="title">3D Model Generator</h5>
                                            <p className="disc">
                                                Our text-to-image feature turns your words into beautiful AI visuals.
                                            </p>
                                        </div>
                                        <Link to="/" className="rts-btn btn-primary">Generate</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area-bottom">
                    <p> <Link to="#">Lucid Layers©</Link> 2025. All Rights Reserved.</p>
                </div>
            </div>
        </>
    );
};

export default Home;