import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CommunityDetails = () => {
  const darkThemeStyles = {
    wrapper: {
      background: "#090E18",
      color: "#e0e0e0",
      minHeight: "100vh",
    },
    topArea: {
      background: "#090E18",
      padding: "60px 0 40px",
      borderBottom: "1px solid #2a2a2a",
    },
    modernHeading: {
      fontSize: "2.8rem",
      // background: 'linear-gradient(90deg, #563EED 0%, #8C7EFF 100%)',
      // WebkitBackgroundClip: 'text',
      // WebkitTextFillColor: 'transparent',
      color: "#fff",
      marginBottom: "1rem",
      textAlign: "center",
    },
    section: {
      background: "#090E18",
      borderRadius: "15px",
      padding: "30px",
      marginBottom: "30px",
      // boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      border: "1px solid #2a2a2a",
    },
    subHeading: {
      fontSize: "1.5rem",
      color: "#fff",
      marginTop: "2rem",
      marginBottom: "1rem",
      padding: "10px 0",
      borderBottom: "2px solid #2a2a2a",
    },
    bulletPoint: {
      background: "#090E18",
      padding: "15px 20px",
      borderRadius: "10px",
      margin: "10px 0",
      borderLeft: "4px solid #563EED",
    },
    highlightBox: {
      background: "linear-gradient(135deg, #563EED 0%, #8C7EFF 100%)",
      padding: "30px",
      borderRadius: "15px",
      color: "#fff",
      marginTop: "2rem",
    },
    listItem: {
      background: "#090E18",
      padding: "15px 20px",
      borderRadius: "10px",
      margin: "8px 0",
      border: "1px solid #333",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={darkThemeStyles.wrapper}>
      <div className="blog-details-right-wrapper">
        <div
          className="rts-blog-details-area-top"
          style={darkThemeStyles.topArea}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-area">
                  <h2
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    Terms & Conditions
                  </h2>
                  <p
                    style={{
                      color: "#888",
                      fontSize: "1.1rem",
                      textAlign: "center",
                    }}
                  >
                    Last Updated: 08/07/2025
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="blog-detail-inenr-area pt--45 rts-section-gapBottom plr_sm--5">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="para-area-wrapper">
                  {/* Terms Section */}
                  <div style={darkThemeStyles.section}>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        color: "#e0e0e0",
                        marginBottom: "2rem",
                      }}
                    >
                      By using our platform, you agree to the following:
                    </p>

                    <h4 style={darkThemeStyles.subHeading}>
                      1. User Responsibility
                    </h4>
                    <div style={darkThemeStyles.bulletPoint}>
                      <p style={{ margin: "0", color: "#e0e0e0" }}>
                        • You must be 18+ to access uncensored features
                        <br />
                        • You are responsible for the content you create
                        <br />• You must not upload or distribute illegal
                        content
                      </p>
                    </div>

                    <h4 style={darkThemeStyles.subHeading}>
                      2. Prohibited Use
                    </h4>
                    <div style={darkThemeStyles.bulletPoint}>
                      <p style={{ margin: "0", color: "#e0e0e0" }}>
                        • Generate content involving real individuals without
                        consent
                        <br />
                        • Create non-consensual deepfakes
                        <br />• Use the service for harassment or illegal
                        activity
                      </p>
                    </div>
                    <h4 style={darkThemeStyles.subHeading}>
                      3. AI Limitations
                    </h4>
                    <div style={darkThemeStyles.bulletPoint}>
                      <p style={{ margin: "0", color: "#e0e0e0" }}>
                        We do not guarantee the factual accuracy,
                        appropriateness, or ethical compliance of generated
                        content. The results are machine-generated and not
                        always predictable.
                      </p>
                    </div>
                    <h4 style={darkThemeStyles.subHeading}>4. Moderation</h4>
                    <div style={darkThemeStyles.bulletPoint}>
                      <p style={{ margin: "0", color: "#e0e0e0" }}>
                        We reserve the right to: Log prompt data for abuse
                        detection Suspend or ban users Report illegal activity
                        to appropriate authorities
                      </p>
                    </div>
                    <h4 style={darkThemeStyles.subHeading}>5. Liability</h4>
                    <div style={darkThemeStyles.bulletPoint}>
                      <p style={{ margin: "0", color: "#e0e0e0" }}>
                        We are not liable for: Damages arising from user misuse
                        Legal consequences from generated content Mental,
                        emotional, or societal impacts caused by usage
                      </p>
                    </div>

                    <div style={darkThemeStyles.highlightBox}>
                      <h4 style={{ color: "#fff", marginBottom: "15px" }}>
                        ⚠️ Important Notice
                      </h4>
                      <p style={{ margin: "0", fontSize: "1.1rem" }}>
                        We actively monitor the platform for abuse. Violations
                        will result in immediate account termination.
                      </p>
                    </div>
                  </div>

                  {/* Privacy Section */}
                  <div style={darkThemeStyles.section}>
                    <h4
                      style={{ ...darkThemeStyles.subHeading, marginTop: "0" }}
                    >
                      Privacy Policy
                    </h4>
                    <p style={{ color: "#e0e0e0", lineHeight: "1.8" }}>
                      We respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and protect your information when you use our AI Image Generator platform.
                    </p>

                    <div style={{ marginTop: "20px" }}>
                      <h5 style={{ color: "#fff", marginBottom: "15px" }}>
                        Information We Collect:
                      </h5>
                      {[
                        "🔹 User Inputs: Prompts and interactions",
                        "🔹 Technical Data: IP address and browser info",
                        "🔹 Account Information: Email and username",
                        "🔹 Analytics: Usage data and cookies",
                      ].map((item, index) => (
                        <div key={index} style={darkThemeStyles.listItem}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Disclaimer Section */}
                  <div
                    style={{
                      ...darkThemeStyles.section,
                      background: "#090E18",
                    }}
                  >
                    <h4
                      style={{
                        color: "#fff",
                        marginBottom: "20px",
                        fontSize: "1.8rem",
                      }}
                    >
                      Disclaimer
                    </h4>
                    <p
                      style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.8",
                        color: "#e0e0e0",
                      }}
                    >
                      The content generated on our platform is fully AI-based
                      and user-prompt-driven. By using this tool, you
                      acknowledge that: You take full legal and ethical
                      responsibility for the output you generate. This platform
                      is intended for creative, research, and experimental
                      purposes only. We do not condone, support, or encourage:
                      Non-consensual deepfakes Misuse of identities CSAM or
                      other illegal imagery (zero tolerance) We monitor the
                      platform for abuse and may log suspicious prompts. Use at
                      your own risk. Violation of our policies may lead to:
                      Permanent ban Data sharing with legal authorities
                      Potential legal action.
                    </p>
                    <div
                      style={{
                        background: "rgba(86, 62, 237, 0.1)",
                        padding: "20px",
                        borderRadius: "10px",
                        marginTop: "20px",
                        border: "1px solid rgba(86, 62, 237, 0.2)",
                      }}
                    >
                      <p
                        style={{
                          margin: "0",
                          fontSize: "0.9rem",
                          color: "#e0e0e0",
                          textAlign: "center",
                        }}
                      >
                        For questions about these terms, contact:&nbsp;
                        <span style={{ color: "#8C7EFF" }}>
                          support@lucidlayers.com
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetails;
