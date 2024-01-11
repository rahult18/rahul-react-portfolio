import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { educationData } from '../resources/data';

const EducationPage = () => {
  const elementRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["0 1", "1.25 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <section id="education" ref={elementRef}>
      <div style={{height:"90px"}}></div>
      <h3 className="heading">Education</h3>
      <div className="main-container">
        <div className="education-list">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="education-item"
              style={{ scale: scaleProgress }}
            >
              <div key={index} className="education-icon" id={index}>
                {item.title === 'Sri Chaitanya Junior College, India' ? (
                  <img src={item.icon} alt={item.title} />
                ) : (
                  item.icon
                )}
              </div>
              <div className="education-info">
                <p className="degree">{item.degree}</p>
                <p className="title">{item.title}</p>
                <p className="year">{item.year}</p>
                <p className="gpa">
                  {item.title === 'Sri Chaitanya Junior College, India' ? `Score: ${item.gpa}` : `GPA: ${item.gpa}`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div style={{height:"70px"}}></div>
    </section>
  );
};

export default EducationPage;
