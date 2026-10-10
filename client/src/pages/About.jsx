import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/About.css';
import Emmanne from '../assets/images/emmanne.jpg';

export default function About() {
   const navigate = useNavigate();

   return(
      <section className="about-section fade-in">
        <div className="about-hero-card">
            <div className="hero-avatar-wrapper">
                <div className="avatar-ring">
                    <img src={Emmanne} alt="Emmanne Angelo T. Penas" className="circle-avatar-ring" />
                </div>
                <span className="welcome-tag">
                    <span className="status-dot"></span>
                    Available for Projects
                </span>
            </div>
            <div className="hero-text-content">
                <h1 className="hero-name-title">
                    Hi, I'm <span className="highlighted-cyan">Emmanne Angelo T. Penas</span>
                </h1>
            </div>
        </div>

        <div className="about-card bio-card">
            <h3>My Journey</h3>
            <p>
                I am a Full Stack Developer dedicated to crafting modern digital experiences.
                With a strong focus on clean code, responsive design, and intuitive UI/UX principles,
                I translate complex ideas into seamless web applications.
            </p>
            <p>
                Whether designing high-contrast frontends or integrating backend services,
                I aim for optimal performance, accessibility, and clean component architecture.
            </p>

            <div className="quick-facts">
                <div className="fact-item">
                    <span className="fact-title">Location:</span>
                    <span className="fact-value">Philippines</span>
                </div>
                  <div className="quick-facts">
                <div className="fact-item">
                    <span className="fact-title">Experience:</span>
                    <span className="fact-value">2+ Years</span>
                </div>
                  <div className="quick-facts">
                <div className="fact-item">
                    <span className="fact-title">Status:</span>
                    <span className="fact-value available">Available</span>
                </div>
            </div>
        </div>
    </div>
</div>
      </section>
   );

};
