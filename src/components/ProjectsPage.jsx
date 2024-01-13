import React, { useState, useRef } from 'react';
import { projectData } from "../resources/data";
import { motion, useScroll, useTransform } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

const ProjectsPage = () => {
    const [expandContent, setExpandContent] = useState(null);
    const timeoutRef = useRef(null);

    const handleCardInteraction = (index, isMouseEnter) => {
        if (isMouseEnter) {
            // Debounce onMouseEnter
            timeoutRef.current = setTimeout(() => {
                setExpandContent(index);
            }, 300);
        } else {
            // Clear the timeout on onMouseLeave
            clearTimeout(timeoutRef.current);
            setExpandContent(null);
        }
    };

    const elementRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ["0 1", "1.25 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.87, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.87, 1]);

    return (
        <section id='projects'>
            <motion.div className="main-container"
                ref={elementRef}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress,
                }}
                viewport={{
                    once: true,
                }}>
                <div style={{ height: "90px" }}></div>
                <h3 className="heading">Projects</h3>
                <div className="cards">
                    {projectData.map((item, index) => (
                        <div
                            key={index}
                            className={`card ${expandContent === index ? 'expanded' : ''}`}
                            onMouseEnter={() => handleCardInteraction(index, true)}
                            onMouseLeave={() => handleCardInteraction(index, false)}
                        >
                            {expandContent === index ? (
                                <>
                                    <h3 className="project-title">{item.title}</h3>
                                    <p className="project-stack">{item.stack}</p>
                                    <div className="card-content">
                                        <p className="description">{item.description}</p>
                                        <a href={item.link} target="_blank" rel="noreferrer" className="github">
                                            <GitHubIcon /> &nbsp;
                                            Project Code
                                        </a>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <img src={item.img} alt={item.title} className="project-img" />
                                    <h3 className="project-title">{item.title}</h3>
                                    <p className="project-stack">{item.stack}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
            <div className="load-more">
                <a href="https://github.com/rahult18?tab=repositories" target="_blank" rel="noreferrer" className="button">
                    <ReplayOutlinedIcon className="icon" />
                    {' '} <span className="text">Load More</span>
                </a>
            </div>
            <div style={{ height: "50px" }}></div>
        </section>
    );
};

export default ProjectsPage;
