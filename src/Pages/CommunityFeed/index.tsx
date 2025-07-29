import React, { useEffect } from "react";
import { Nav, Tab, TabContainer } from "react-bootstrap";
import { Box, Film, Image } from 'lucide-react';
//import images
import icons10 from "assets/images/icons/10.png";
import icons11 from "assets/images/icons/11.png";
import icons12 from "assets/images/icons/12.png";
import ImageTabs from "./ImageTabs";
import { Link } from "react-router-dom";
import useSidebarToggle from "Common/UseSideberToggleHooks";

const CommunityFeed = () => {
    const themeSidebarToggle = useSidebarToggle();
    useEffect(() => {
        document.body.classList.add("community-feed");

        return () => {
            document.body.classList.remove("community-feed");
        };
    }, []);

    return (
        <>
            <div className={`main-center-content-m-left ${themeSidebarToggle ? "collapsed" : ""}`}>
                <div className="search__generator">
                    <TabContainer defaultActiveKey="home">
                        <div className="nav-search-between">
                            <div className="left-area">
                                <h4 className="title">Explore</h4>
                                <form action="#">
                                    <input type="text" placeholder="Search Feed..." />
                                    <button>Search</button>
                                </form>
                            </div>

                            <Nav className="nav-pills mb-3" id="pills-tab" role="tablist">
                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link as="button" eventKey="home">
                                        <Image color="#ffffff" size={20} />
                                        Image
                                    </Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item as="li" role="presentation">
                                    <Nav.Link as="button" eventKey="profile">
                                        <Film color="#ffffff" size={20} />
                                        Video
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link as="button" eventKey="contact">
                                        <Box color="#ffffff" size={20} />
                                        3D Model
                                    </Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                        </div>

                        <Tab.Content className="mt--50" id="pills-tabContent">

                            <Tab.Pane eventKey="home">
                                <ImageTabs />
                            </Tab.Pane>

                            <Tab.Pane eventKey="profile">
                                <ImageTabs />
                            </Tab.Pane>

                            <Tab.Pane eventKey="contact">
                                <ImageTabs />
                            </Tab.Pane>
                        </Tab.Content>
                    </TabContainer>
                </div>
            </div>
            <div className="copyright-area-bottom">
                <p><Link to="#">Lucid Layers©</Link> 2025. All Rights Reserved.</p>
            </div>
        </>
    )
};

export default CommunityFeed;