import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Emmanne from '../assets/images/Emmemm.jpg';

export default function Home() {
    const navigate = useNavigate();

    return (
        <section className="hero-section fade-in">
            <div className="hero-content-wrapper">
                <div className="profile-container">
                    <div className="profile-avatar-wrapper">
                        <img
                            src={Emmanne}
                            alt="Emmanne Angelo T. Penas"
                            className="profile-avatar"
                        />
                        <div className="avatar-border-glow"></div>
                    </div>
                    <span className="hero-tag">
                        <span className="status-dot"></span> Available for Projects   
                    </span>
                </div>

                <div className="hero-text-content">
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlighted-name">Emmanne Angelo T. Penas</span>, a Full-Stack Web Developer & UI Architect.
                    </h1>

                    <p className="hero-description">
                        I create engaging, user-friendly web applications with a focus on performance and modern development practices.
                    </p>

                    <div className="cta-group">
                        <button className="primary-btn" onClick={() => navigate('/projects')}>
                            View My Work
                        </button>
                        <button className="secondary-btn" onClick={() => navigate('/contact')}>
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>

            <div className="metrics-container">
                <div className="metric-card">
                    <span className="metric-number">2+</span>
                    <span className="metric-label">Years Experience</span>
                </div>
                <div className="metric-card">
                    <span className="metric-number">10+</span>
                    <span className="metric-label">Projects Completed</span>
                </div>
                <div className="metric-card">
                    <span className="metric-number">100%</span>
                    <span className="metric-label">Happy Clients</span>
                </div>
            </div>

            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">💻</div>
                    <h3>Frontend Designer</h3>
                   < p>Creating responsive, high-contrast, user-centric interfaces focused on seamless user experience and accessibility.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">⚡</div>
                    <h3>Backend Integration</h3>
                   < p>Seamlessly integrating frontend and backend systems to create efficient, scalable web applications.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🎨</div>
                    <h3>UI/UX Design</h3>
                   < p>Designing intuitive, visually appealing user interfaces that enhance the overall user experience.</p>
                </div>
            </div>
        </section> 
    );
}