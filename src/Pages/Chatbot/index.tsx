import React, { useEffect } from "react";

//import images
import avatar03 from "assets/images/avatar/03.png";
import avatar04 from "assets/images/avatar/04.png";
import { Link } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import useSidebarToggle from "Common/UseSideberToggleHooks";

const Chatbot = () => {
    const themeSidebarToggle = useSidebarToggle();
    useEffect(() => {
        document.body.classList.add("chatbot");

        return () => {
            document.body.classList.remove("chatbot");
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const distanceFromBottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;

            const threshold = 200;
            const searchForm: any = document.querySelector('.chatbot .search-form');

            if (distanceFromBottom < threshold) {
                searchForm.classList.add('active');
            } else {
                searchForm.classList.remove('active');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`main-center-content-m-left center-content search-sticky ${themeSidebarToggle ? "collapsed" : ""}`}>
                {/* <div className="question_answer__wrapper__chatbot">
                    <div className="single__question__answer">
                        <div className="question_user">
                            <div className="left_user_info">
                                <img src={avatar03} alt="avatar" />
                                <div className="question__user">what is openup?</div>
                            </div>
                            <div className="edit__icon openuptip">
                                <i className="fa-regular fa-pen-to-square"></i>
                            </div>
                        </div>
                        <div className="answer__area">
                            <div className="thumbnail">
                                <img src={avatar04} alt="avatar" />
                            </div>
                            <div className="answer_main__wrapper">
                                <h4 className="common__title">Openup</h4>
                                <p className="disc">
                                    The Open Unified Process, is a simplified version of the Rational Unified Process (RUP) used for agile and iterative software development. It was developed within the Eclipse Foundation and is based on the donation of process content by IBM. OpenUP targets small and colocated teams interested in agile and iterative development and is a lean Unified Process that applies iterative and incremental approaches within a structured lifecycle. It embraces a pragmatic approach and is positioned as an easy and flexible version of RUP [1][2][3]
                                </p>
                            </div>
                        </div>

                        <div className="share-reaction-area">
                            <ul>
                                <li><Link to="#" className="openuptip"><i className="fa-regular fa-bookmark"></i></Link></li>
                                <li><Link to="#" className="openuptip" ><i className="fa-light fa-thumbs-up"></i></Link></li>
                                <li><Link to="#" className="openuptip"><i className="fa-regular fa-thumbs-down"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single__question__answer">
                        <div className="question_user">
                            <div className="left_user_info">
                                <img src={avatar03} alt="avatar" />
                                <div className="question__user">what is openup?</div>
                            </div>
                            <div className="edit__icon openuptip" >
                                <i className="fa-regular fa-pen-to-square"></i>
                            </div>
                        </div>
                        <div className="answer__area">
                            <div className="thumbnail">
                                <img src={avatar04} alt="avatar" />
                            </div>
                            <div className="answer_main__wrapper">
                                <h4 className="common__title">Openup</h4>
                                <p className="disc">
                                    The Open Unified Process, is a simplified version of the Rational Unified Process (RUP) used for agile and iterative software development. It was developed within the Eclipse Foundation and is based on the donation of process content by IBM. OpenUP targets small and colocated teams interested in agile and iterative development and is a lean Unified Process that applies iterative and incremental approaches within a structured lifecycle. It embraces a pragmatic approach and is positioned as an easy and flexible version of RUP [1][2][3]
                                </p>
                            </div>
                        </div>

                        <div className="share-reaction-area">
                            <ul>
                                <li><Link to="#" className="openuptip"><i className="fa-regular fa-bookmark"></i></Link></li>
                                <li><Link to="#" className="openuptip"><i className="fa-light fa-thumbs-up"></i></Link></li>
                                <li><Link to="#" className="openuptip"><i className="fa-regular fa-thumbs-down"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single__question__answer">
                        <div className="question_user">
                            <div className="left_user_info">
                                <img src={avatar03} alt="avatar" />
                                <div className="question__user">what is openup?</div>
                            </div>
                            <div className="edit__icon openuptip">
                                <i className="fa-regular fa-pen-to-square"></i>
                            </div>
                        </div>
                        <div className="answer__area">
                            <div className="thumbnail">
                                <img src={avatar04} alt="avatar" />
                            </div>
                            <div className="answer_main__wrapper">
                                <h4 className="common__title">Openup</h4>
                                <p className="disc">
                                    Working with a chatbot involves several steps, from designing and building the bot to deploying and maintaining it. Here's a general overview of how to work with a chatbot:
                                </p>
                                <div className="order_list_answer">
                                    <ol>
                                        <li>
                                            <p>Define the Purpose: Determine the purpose and goals of the chatbot. What tasks or interactions do you want the bot to handle? Who is the target audience?</p>
                                        </li>
                                        <li>
                                            <p>Define the Purpose: Determine the purpose and goals of the chatbot. What tasks or interactions do you want the bot to handle? Who is the target audience?</p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="share-reaction-area">
                            <ul>
                                <li><Link to="#" className="openuptip"><i className="fa-regular fa-bookmark"></i></Link></li>
                                <li><Link to="#" className="openuptip"><i className="fa-light fa-thumbs-up"></i></Link></li>
                                <li><Link to="#" className="openuptip" ><i className="fa-regular fa-thumbs-down"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                <form action="#" className="search-form">
                    <input type="text" placeholder="Message openup..." />
                    <button><i className="fa-regular fa-arrow-up"></i></button>
                </form>
                <div className="copyright-area-bottom">
                    <p> <Link to="#">Lucid Layers©</Link> 2025. All Rights Reserved.</p>
                </div>
            </div>

            <RightSidebar />
        </>
    );
};

export default Chatbot;