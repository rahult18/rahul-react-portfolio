import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImage from '../resources/profile.jpg';

const AboutPage = () => {
    const elementRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ["0 1", "1.25 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1],[0.75,1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1],[0.75,1]);
    
    return (
        <section id="about">
            <motion.div
                className="about-me"
                ref={elementRef}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress,
                }}
                viewport={{
                    once:true,
                }}
                >
                <div className="photo">
                    <img src={profileImage} alt="profile" className="profile-img" />
                </div>
                <div className="content">
                    <span className="heading">
                        About Me ✨
                    </span>
                    <p className="intro-text">
                        Hello world! 👋 I'm Rahul, a digital architect and data explorer with an AWS Certification and a Master's in Computer Science from the University at Buffalo. I craft elegant solutions at the intersection of cloud innovation and data engineering.
                    </p>
                    
                    <p>
                        My journey has been a fascinating evolution—from revolutionizing legacy VB6 systems at Eminent Services to engineering seamless e-commerce experiences for 30+ clients at Swym Corporation. Each challenge has been an opportunity to transform complexity into clarity.
                    </p>
                    
                    <h3 className="section-title">🛠️ My Engineering Canvas</h3>
                    <p>I bring systems to life through:</p>
                    <ul className="skills-list">
                        <li><span className="highlight">Cloud Orchestration:</span> Building resilient, scalable infrastructures that breathe and adapt</li>
                        <li><span className="highlight">Legacy Transformation:</span> Turning yesterday's systems into tomorrow's innovations</li>
                        <li><span className="highlight">Performance Optimization:</span> Finding the perfect balance between power and efficiency</li>
                        <li><span className="highlight">AI Implementation:</span> Deploying ML systems that deliver real-world impact</li>
                    </ul>
                    
                    <p>
                        My research passion recently led me to reduce GPT-2's energy footprint by 19.8% while preserving its intelligence—because sustainable AI is the future I'm helping build. 🌱
                    </p>
                    
                    <h3 className="section-title">🧰 Technical Toolbox</h3>
                    <div className="tech-domains">
                        <div className="domain-card">
                            <span className="domain-title">Cloud & DevOps:</span> AWS, GCP, Azure, Kubernetes, Terraform
                        </div>
                        <div className="domain-card">
                            <span className="domain-title">Data Engineering:</span> Spark, Kafka, Snowflake, ETL/ELT Pipelines
                        </div>
                        <div className="domain-card">
                            <span className="domain-title">AI/ML Systems:</span> LangChain, CrewAI, MLflow, PyTorch
                        </div>
                        <div className="domain-card">
                            <span className="domain-title">Full-Stack:</span> Spring Boot, React, Next.js, FastAPI
                        </div>
                    </div>
                    
                    <h3 className="section-title">🌍 Beyond the Terminal</h3>
                    <p>
                        When the code stops compiling, I'm hunting for rare coins from distant lands and times—each with its own story, much like the systems I build. Numismatics connects me to history, art, and global narratives in tangible form. 🪙
                    </p>
                    
                    <p className="connect-text">
                        Let's connect and explore how we might build something remarkable together! 🚀
                    </p>
                </div>
            </motion.div>
            
            <style jsx>{`
                .about-me {
                    display: flex;
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .content {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .heading {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    display: block;
                }
                
                .intro-text {
                    font-size: 1.1rem;
                    font-weight: 500;
                }
                
                .section-title {
                    margin-top: 1.5rem;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                    color: #0070f3;
                }
                
                .skills-list {
                    list-style-type: none;
                    padding-left: 0.5rem;
                }
                
                .skills-list li {
                    margin-bottom: 0.5rem;
                    position: relative;
                    padding-left: 1.5rem;
                }
                
                .skills-list li:before {
                    content: "→";
                    position: absolute;
                    left: 0;
                    color: #0070f3;
                }
                
                .highlight {
                    font-weight: 600;
                    color: #333;
                }
                
                .tech-domains {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1rem;
                    margin: 1rem 0;
                }
                
                .domain-card {
                    padding: 1rem;
                    border-radius: 8px;
                    background-color: rgba(240, 240, 255, 0.5);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                
                .domain-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                }
                
                .domain-title {
                    font-weight: 600;
                    color: #0070f3;
                    display: block;
                    margin-bottom: 0.5rem;
                }
                
                .connect-text {
                    font-weight: 500;
                    margin-top: 1rem;
                }
                
                @media (max-width: 768px) {
                    .about-me {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .photo {
                        width: 70%;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
}

export default AboutPage;
