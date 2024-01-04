import React from 'react';
import { projectData } from "../resources/data";

const ProjectsPage = () => {
  return (
    <section id='projects'>
        <h3 className="heading">Projects</h3>
        <div className="cards">
            {
                projectData.map((item, index) => (
                    <div key={index} className="card">
                        <img src={item.img} alt={item.title} className="project-img" />
                        <h3 className="project-title">{item.title}</h3>
                        <p className="project-stack">{item.stack}</p>
                        <div className="card-content">
                            <p className="description">
                                {item.description}
                            </p>
                            <a href={item.link} target="_blank" rel="noreferrer" className="github">Project Code</a>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default ProjectsPage