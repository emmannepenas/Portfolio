import React from 'react';
import '../styles/Skills.css';

export default function Skills () {
    const skillCategories = [
        {
            title: "Frontend Development Tools",
            description: "Building responsive, accessible, and high-performance user interfaces.",
            skills: [
                { name: "React.js", level: "Advanced"},
                { name: "JavaScript (ES6+)", level: "Advanced"},
                { name: "TypeScript", level: "Intermediate"},
                { name: "HTML5 & CSS3", level: "Expert"},
                { name: "Tailwind Css", level: "Advanced"}
            ]
        },
        {
            title: "Backend Development Tools",
            description: "Designing efficient relational schemas and NoSQL document models.",
            skills: [
                { name: "MongoDB", level: "Advanced"},
                { name: "Express.js (ES6+)", level: "Intermediate"},
                { name: "Node.js", level: "Intermediate"},
                { name: "Api & JWT Authentications", level: "Intermediate"},
            ]
        },
        {
            title: "Networkking, Deployment, &  Design Tools",
            description: "Managing version control, cloud infrastructure, and network topologies.",
            skills: [ 
                { name: "Figma", level: "Advanced"},
                { name: "Github", level: "Advanced"},
                { name: "Vercel & Render", level: "Expert"},
                { name: "Cisco Packet Tracer", level: "Intermediate"},

            ]
        }
    ];

    return(
        <section className="skills-container fade-in">
            <div className="skills-header">
                <span className="skills-badge">Expertise</span>
                <h2>Skills & Tech Stacks</h2>
                <p>A comprehensive overview of the technical tools, frameworks, and architectures I work with.</p>
            </div>

            <div className="skills-grd">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-card">
                        <h3>{category.title}</h3>
                        <p className="category-desc">{category.description}</p>

                        <div className="skills-list">
                            {category.skills.map((skill, idx) => (
                                <div key={idx} className="skill-item">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-level">{skill.level}</span>
                                    </div>
                            ))}
                        </div>
                  </div>
                ))}
            </div>
        </section>
    );
};