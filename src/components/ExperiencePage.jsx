import { experienceData } from "../resources/data";
import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperiencePage = () => {
    return (
        <section id="experience">
            <div className="main-content">
                <div style={{ height: "90px" }}></div>
                <h3 className="heading">Work Experience</h3>
                <VerticalTimeline lineColor="#0984e3">
                    {
                        experienceData.map((item, index) => (
                            <React.Fragment key={index}>
                                <VerticalTimelineElement
                                    contentStyle={{
                                        background: "#fdfdfd",
                                        border: "1px solid rgba(0,0,0,0.05)",
                                        textAlign: "left",
                                    }}
                                    contentArrowStyle={{
                                        borderRight: "0.4rem solid #9ca3af",
                                    }}
                                    date={item.date}
                                    icon={item.icon}
                                    iconStyle={
                                        {
                                            background: "white",
                                            fontSize: "1.5rem",
                                            border: "2px solid #0984e3"
                                        }
                                    }
                                    className="vertical-timeline-element"
                                >
                                    <h3 style={{
                                        fontWeight: "bold",
                                        fontFamily: "'Montserrat', sans-serif",
                                    }}>{item.title}</h3>
                                    <p style={{
                                        marginTop: "0 !important",
                                        fontFamily: "'Montserrat', sans-serif",
                                    }}>{item.location}</p>
                                    {
                                        index === 0 && (
                                            <p style={{fontFamily: "'Montserrat', sans-serif",}}> 
                                                <b>Project: Investigational Drug Management System Modernization</b> 
                                                <span style={{ fontWeight: 800, color: "grey" }}> involved transforming a critical VB6 application that was becoming increasingly difficult to maintain and scale. The project required analyzing the existing system, designing a modern architecture using React & Node, and ensuring zero data loss during migration. The modernization resulted in 35% improved scalability through better resource utilization and 40% reduction in maintenance efforts due to modern tooling and clear separation of concerns.</span> 
                                                <br /><br /> 
                                                <b>As a Software Development Engineer I:</b> 
                                            </p>
                                        )
                                    }
                                    {
                                        index === 1 && (
                                            <p style={{fontFamily: "'Montserrat', sans-serif",}}> 
                                                <b>Project: Energy Efficiency in Large Language Models</b> 
                                                <span style={{ fontWeight: 800, color: "grey" }}> focused on optimizing energy efficiency in LLMs, specifically GPT-2, to address the growing environmental impact of AI model deployments. The research involved implementing and evaluating various optimization techniques including quantization, knowledge distillation, and low-rank factorization. Tools and libraries including PyTorch, Transformers, Accelerate, and Auto-GPTQ were utilized to measure and track CO2 emissions, power consumption, and energy metrics during model training.</span> 
                                                <br /><br /> 
                                                <b>As a ML Research Assistant I:</b> 
                                            </p>
                                        )
                                    }
                                    {
                                        index === 2 && (
                                            <p style={{fontFamily: "'Montserrat', sans-serif",}}> 
                                                <b>Project: Wishlist Plus & Back in Stock Alerts</b> 
                                                <span style={{ fontWeight: 800, color: "grey" }}> are powerful e-commerce apps that enhance the shopping experience and drive sales. Wishlist Plus enables personalized wishlists with cross-device access, customization, and social sharing, providing valuable insights. Back in Stock Alerts allows customers to receive notifications for out-of-stock or pre-order items, maximizing sales potential with advanced controls and SMS support. Both apps facilitate social re-engagement, targeted emails, and list growth, offering businesses actionable insights and analytics for optimal performance.</span> 
                                                <br /><br /> 
                                                <b>As a Software Development Engineer I:</b> 
                                            </p>
                                        )
                                    }
                                    {
                                        index === 3 && (
                                            <p style={{fontFamily: "'Montserrat', sans-serif",}}> 
                                                <b>Project: Gateway for supporting IMS signalling.</b> 
                                                <span style={{ fontWeight: 800, color: "grey" }}> The primary objective was to address the interoperability challenge between two distinct realms of communication technology: VOIP controlled by Over-The-Top (OTT) players and Voice over LTE (VoLTE) managed by telecom operators. The focus was on creating a gateway that could seamlessly handle websocket SIP requests, transform them into UDP/TCP or TLS, and vice versa, facilitating communication between these two worlds.</span> 
                                                <br /><br /> 
                                                <b>As an Intern I:</b> 
                                            </p>
                                        )
                                    }
                                    
                                    {item.description.split('\n').map((line, i) => (
                                        <p key={i} style={{ fontWeight: 800, color: "grey", fontFamily: "'Montserrat', sans-serif", }}>{line}</p>
                                    ))}

                                </VerticalTimelineElement>
                            </React.Fragment>
                        ))
                    }
                </VerticalTimeline>
            </div>
            <div style={{ height: "50px" }}></div>
        </section>
    );
}

export default ExperiencePage;
