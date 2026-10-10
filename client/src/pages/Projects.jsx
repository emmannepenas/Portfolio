import React from 'react';
import '../styles/Projects.css';

import HulabImg from '../assets/images/Hulab.jpg';
import VitalsyncImg from '../assets/images/Vitalsync.jpg';
import AwesometodosImg from '../assets/images/Awesometodos.jpg';
import PortfolioImg from '../assets/images/Portfolio.jpg';

export default function Projects() {
    const projectList = [
        {
            id: 1,
            title: "HuLab",
            desc: "A comprehensive laboratory equipment inventory and borrowing managment system designed to streamline tracking, request, and asset maintenance",
            image: HulabImg,
            tags: ["MongoDb", "Express.js", "React.js", "Node.js"],
            demo: "https://www.figma.com/proto/vVSXfrgRsE9sPKs2laiqWP/HULAB?node-id=601-227&starting-point-node-id=601%3A227"
        },
                {
            id: 2,
            title: "Vital Sync",
            image: VitalsyncImg,
            desc: "A clinical and health tracking platform engineered for monitoring patient vital signs, managing digital medical records, and analyzing health metrics.",           
            tags: ["MongoDb", "Express.js", "React.js", "Node.js"],
           demo: "https://www.figma.com/design/CCLwTicHEFEoo1RTJ2Mwdy/Untitled?node-id=0-1&p=f&t=45oH2SMixLQhAyDx-0"
        },
        {
            id: 3, 
            title: "AwesomeTodos",
            desc: "A high-performance productivity and task management platform featuring dynamic task categorization, subtask workflows, and status analytics",
            image: AwesometodosImg,
            tags: ["MongoDb", "Express.js", "React.js", "Node.js"],
            demo: "https://awwesome-todos-youtube-1b25.onrender.com/"
        },
        {
            id: 4,
            title: "My Portfolio",
            image: PortfolioImg,
            desc: "Passionate Full Stack developer specializiing in MERN stack development and modern web architectures to build high-performance digital experience",
            tags: ["React.js"],
            demo: "https://emmanne-portfolio.vercel.app/"
        }
    ];
    return(
        <section className="projects-container fade-in">
            <div className="projects-header">
                <span className="projects-badge">Portfolio</span>
                <h2>All Features Projects</h2>
                <p>Explore a selection of my full-stack web applications, UI architecture, and software solutions.</p>
            </div>

            <div className="projects-grid">
                {projectList?.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="image-overlay"></div>
                    </div>
                    <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>

                        <div className="project-tags">
                            {project.tags?.map((tag, idx) => (
                                <span key={idx} className="project-tag-item">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="project-links">
                            <a 
                            href={project.demo}
                            target="_bank"
                            rel="noopener noreffere"
                            className="btn btn-secondary"
                            >
                              Live Demo
                            </a>
                    </div>
                </div>
            </article>
        ))}
    </div>
</section>
    )
};