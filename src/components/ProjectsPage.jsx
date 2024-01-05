import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData } from "../resources/data";
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectsPage = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardInteraction = (index, screenSize) => {
        if (screenSize > 768) {
            // Handle mouse hover for screen sizes greater than 768px
            setExpandedCard(index);
        } else {
            // Handle click for screen sizes less than 768px
            setExpandedCard(expandedCard === index ? null : index);
        }
    };

    const handleCardHoverOut = () => {
        setExpandedCard(null);
    };

    const handleCardClick = (index, screenSize) => {
        if (screenSize <= 768) {
            setExpandedCard(expandedCard === index ? null : index);
        }
    };

    return (
        <section id='projects'>
            <div className="main-container">
                <h3 className="heading">Projects</h3>
                <div className="cards">
                    {projectData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`card ${expandedCard === index ? 'expanded' : ''}`}
                            onMouseEnter={() => handleCardInteraction(index, window.innerWidth)}
                            onMouseLeave={handleCardHoverOut}
                            onClick={() => handleCardClick(index, window.innerWidth)}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={item.img} alt={item.title} className="project-img" />
                            <h3 className="project-title">{item.title}</h3>
                            <p className="project-stack">{item.stack}</p>
                            <AnimatePresence mode='wait'>
                                {expandedCard === index && (
                                    <motion.div
                                        className="card-content"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0, transition: { ease: 'easeOut' } }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="description">{item.description}</p>
                                        <a href={item.link} target="_blank" rel="noreferrer" className="github">
                                            <GitHubIcon /> &nbsp;
                                            Project Code
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
