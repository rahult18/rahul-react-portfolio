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
                                            background:"white",
                                            fontSize: "1.5rem",
                                            border: "2px solid #0984e3"
                                        }
                                    }
                                    className="vertical-timeline-element"
                                >
                                    <h3 style={{
                                        fontWeight:"bold",
                                    }}>{item.title}</h3>
                                    <p style={{
                                        marginTop: "0 !important",
                                    }}>{item.location}</p>
                                    {item.description.split('\n').map((line, i) => (
                                        <p key={i} style={{fontWeight:800,color:"grey"}}>{line}</p>
                                    ))}

                                </VerticalTimelineElement>
                            </React.Fragment>
                        ))
                    }
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default ExperiencePage;