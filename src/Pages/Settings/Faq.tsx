import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'What is this platform used for?',
            content: 'It’s an AI-powered image generator that allows users to create, edit, upscale, and describe images using prompts. You can generate original content, transform existing images, and explore your creativity without censorship.'
        },
        {
            title: 'Can I try it for free?',
            content: 'We do not offer a free plan or trial. To ensure uncensored access and avoid ads, everything is behind a one-time paid plan.'
        },
        {
            title: 'Why is there no free version?',
            content: 'Free models often come with restrictions or surveillance. We built this platform to give full creative freedom — with no censorship or tracking — and that means supporting a sustainable paid model.'
        },
        {
            title: 'Is NSFW content allowed?',
            content: 'Yes, as long as it abides by legal and ethical boundaries. We strictly prohibit any content involving minors, abuse, or non-consensual imagery.'
        },
        {
            title: 'Can I generate images of real people?',
            content: 'No. Deepfakes or likenesses of identifiable individuals — celebrities, public figures, or private individuals — are not allowed and may lead to account suspension.'
        },
        {
            title: 'What happens if I break the rules?',
            content: 'Your account may be permanently suspended without refund, and in severe cases, we may cooperate with law enforcement.'
        },
    ];
    return (
        <>
            <div className="main-center-content-m-left">

                <div className="rts-faq-area rts-section-gapBottom bg_faq">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-conter-area dashboard">
                                    <h2 className="title">
                                        Questions About Lucid Layers? <br />
                                        We have Answers!
                                    </h2>
                                    <p className="disc">
                                        please feel free to reach out to us. We are always happy to assist <br /> you and provide any additional information you may need.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt--60">
                            <Col lg={12}>
                                <div className="accordion-area-one">
                                    <div className="accordion" id="accordionExample">
                                        {accordionData.map((item, index) => (
                                            <div className="accordion-item" key={index}>
                                                <h2 className="accordion-header" id={`heading${index}`}>
                                                    <button
                                                        className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                                                        type="button"
                                                        onClick={() => handleToggle(index)}
                                                        aria-expanded={activeIndex === index}
                                                        aria-controls={`collapse${index}`}
                                                    >
                                                        {item.title}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse${index}`}
                                                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                                                    aria-labelledby={`heading${index}`}
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        {item.content}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </>
    );
};

export default Faq;