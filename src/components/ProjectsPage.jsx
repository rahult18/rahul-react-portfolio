import React, { useState, useRef } from 'react';
import { projectData } from "../resources/data";
import GitHubIcon from '@mui/icons-material/GitHub';

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

    return (
        <section id='projects'>
            <div className="main-container">
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
            </div>
        </section>
    );
};

export default ProjectsPage;
