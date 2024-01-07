import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { skillsData, certificationData } from "../resources/data";

const SkillsPage = () => {
    const elementRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ["0 1", "1.25 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1],[0.9,1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1],[0.9,1]);
    
    return (
        <section id="skills">
            <h3 className="heading">Skills & Certifications</h3>
            <div className="main-container">
                <div className="skills-container">
                    <div className="skills-list">
                        {
                            skillsData.map((item, index) => (
                                <motion.div
                                    whileInView={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.5 }}
                                    className="skills-item"
                                    key={index}
                                    style={{
                                        scale: scaleProgress,
                                        opacity: opacityProgress,
                                    }}
                                    viewport={{
                                        once:true,
                                    }}
                                    ref={elementRef}
                                >
                                    <div className="skills-flex-img" style={{ backgroundColor: item.bgColor }}>
                                        <img src={item.icon} alt={item.title} />
                                    </div>
                                    <p className="skill-title">{item.title}</p>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
                <div className="certifications-container">
                    <div className="certifications-list">
                        {
                            certificationData.map((item, index) => (
                                <motion.div
                                    whileInView={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.5 }}
                                    className="certifications-item"
                                    key={index}
                                >
                                    <a href={item.link} target="_blank" rel="noreferrer" className="certification-title">{item.title}</a>
                                    <span className="certification-year">{item.year}</span>

                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsPage;