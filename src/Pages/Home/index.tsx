import React from "react";
import { Link } from "react-router-dom";

//import images
import banner from "assets/images/banner/banner_img_3.png";
import generator from "assets/images/generator/01.jpg";
import generator2 from "assets/images/generator/02.jpg";
import generator3 from "assets/images/generator/09.jpg";
import generator4 from "assets/images/generator/10.jpg";
import generator5 from "assets/images/generator/06.webp";
import generator6 from "assets/images/generator/11.jpg";
import useSidebarToggle from "Common/UseSideberToggleHooks";

const Home = () => {
    const themeSidebarToggle = useSidebarToggle();
    return (
        <>
            <div className={`main-center-content-m-left main-center-content-m-left ${themeSidebarToggle ? "collapsed" : ""}`}>
                <div className="banner-badge bg_image">
                    <div className="inner">
                        <h3 className="title">Unleash Your Imagination — No Limits, No Filters</h3>
                        <p className="dsic">
                            Create stunning AI-generated images with full creative freedom. No censorship. Just pure generative power.
                        </p>
                        <Link to="/image-generator" className="rts-btn btn-blur">Get Started</Link>
                        <div className="inner-right-iamge">
                            <img src={banner} width={370} style={{"transform": "scaleX(-1)"}} alt="banner" />
                        </div>
                    </div>
                </div>
                <div className="search__generator mt--50">
                    <h4 className="title color-white-title-home">Powerful Features, All in One Place</h4>

                    <div className="tab-content mt--50" id="pills-tabContent">
                        <div className="row g-5">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="single-image-generator">
                                    <Link to="image-generator" className="thumbnail">
                                        <img src="https://res.cloudinary.com/dxf1ecdlq/image/upload/v1753795180/image-generator_fhdgbf.webp" alt="images" />
                                    </Link>
                                    <div className="inner-content">
                                        <div className="left-content-area">
                                            <h5 className="title">Image Generator</h5>
                                            <p className="disc">
                                                Turn your text prompts into high-quality images in seconds — from surreal to hyperrealistic.
                                            </p>
                                        </div>
                                        <Link to="/image-generator" className="rts-btn btn-primary">Generate</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="single-image-generator">
                                    <Link to="/" className="thumbnail">
                                        <img src="https://res.cloudinary.com/dxf1ecdlq/image/upload/v1753795179/image2_sw9t71.webp" alt="images" />
                                    </Link>
                                    <div className="inner-content">
                                        <div className="left-content-area">
                                            <h5 className="title">Inpaint Mode</h5>
                                            <p className="disc">
                                                Paint over any part of an image and regenerate it with a new vision. Perfect for edits and creativity.
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
                                            <h5 className="title">Upscale</h5>
                                            <p className="disc">
                                                Enhance resolution and clarity — upscale images up to 4x without losing quality.
                                            </p>
                                        </div>
                                        <Link to="/" className="rts-btn btn-primary">Generate</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="single-image-generator">
                                    <Link to="/" className="thumbnail">
                                        <img src={generator5} alt="images" />
                                    </Link>
                                    <div className="inner-content">
                                        <div className="left-content-area">
                                            <h5 className="title">Reimagine</h5>
                                            {/* <p className="disc">
                                                Upload a base image and transform it with a new style, prompt, or vibe.
                                            </p> */}
                                        </div>
                                        {/* <Link to="/" className="rts-btn btn-primary">Generate</Link> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="single-image-generator">
                                    <Link to="/" className="thumbnail">
                                        <img src={generator4} alt="images" />
                                    </Link>
                                    <div className="inner-content">
                                        <div className="left-content-area">
                                            <h5 className="title">Describe Image</h5>
                                            <p className="disc">
                                                Upload any image and let the AI describe it in detailed, intelligent text.
                                            </p>
                                        </div>
                                        <Link to="/" className="rts-btn btn-primary">Generate</Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="search__generator mt--50">
                    <h4 className="title color-white-title-home">Upcoming Features</h4>

                    <div className="tab-content mt--50" id="pills-tabContent">
                        <div className="row g-5">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="single-image-generator">
                                    <Link to="" className="thumbnail">
                                        <img src={generator} alt="images" />
                                    </Link>
                                    <div className="inner-content">
                                        <div className="left-content-area">
                                            <h5 className="title">Scene Creator</h5>
                                            <p className="disc">
                                                Turn your text prompts into high-quality 3D scenes.
                                            </p>
                                        </div>
                                        <Link to="/image-generator" className="rts-btn btn-primary">Generate</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="single-image-generator">
                                    <Link to="/" className="thumbnail">
                                        <video src="./vid_gen.mp4" loop autoPlay muted > </video>
                                    </Link>
                                    <div className="inner-content">
                                        <div className="left-content-area">
                                            <h5 className="title">Video Generator</h5>
                                            <p className="disc">
                                                Unleash the power of AI to create stunning videos from text prompts.
                                            </p>
                                        </div>
                                        <Link to="/" className="rts-btn btn-primary">Generate</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="single-image-generator">
                                    <Link to="/" className="thumbnail">
                                        <img src={generator6} alt="images" />
                                    </Link>
                                    <div className="inner-content">
                                        <div className="left-content-area">
                                            <h5 className="title">3D Model Generator</h5>
                                            <p className="disc">
                                                Generate high-quality 3D models from text prompts, ready for use in games and simulations.
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
