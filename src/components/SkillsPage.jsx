import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { skillsData, certificationData } from "../resources/data";

const SkillsPage = () => {
    const elementRef = useRef(null);
    const controls = useAnimation();

    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ["0 1", "1.25 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const sectionTop = elementRef.current.offsetTop;
                const sectionBottom = sectionTop + elementRef.current.offsetHeight;
                const windowTop = window.scrollY;
                const windowBottom = windowTop + window.innerHeight;

                if (windowTop < sectionBottom && windowBottom > sectionTop) {
                    controls.start({ opacity: 1 });
                } else {
                    controls.start({ opacity: 0 });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <section id="skills">
            <div style={{height:"90px"}}></div>
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
                                        scale: scaleProgress
                                    }}
                                    viewport={{
                                        once: true,
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
                    <div className="certifications-list" ref={elementRef}>
                        {
                            certificationData.map((item, index) => (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={controls}
                                    transition={{ duration: 0.4 }}
                                    className="certifications-item"
                                    key={index}
                                    viewport={{
                                        once: true,
                                    }}
                                >
                                    <a href={item.link} target="_blank" rel="noreferrer" className="certification-title">{item.title}</a>
                                    <span className="certification-year">{item.year}</span>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div style={{height:"30px"}}></div>
        </section>
    );
}

export default SkillsPage;
