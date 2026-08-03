import "./Hero.css";
import profileImg from "../assets/profile.jpg";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container">

        <div className="row align-items-center min-vh-100">

          {/* LEFT SIDE */}
          <div
            className="col-lg-7 hero-content"
            data-aos="fade-right"
          >

            <span className="hero-badge">
              Welcome To My Portfolio
            </span>

            <h1>
              Hi, I'm <span>Asad Rafeeq</span>
            </h1>

            <h3>
              Software Engineer & Data Analyst
            </h3>

            <p>
              Passionate about Web Development,
              Data Analytics, Power BI, SQL,
              Laravel, React.js and building
              impactful digital solutions.
            </p>

            <div className="hero-buttons">

              <a
                href="https://github.com/Asad3533"
                target="_blank"
                rel="noreferrer"
                className="btn btn-light hero-btn"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/asad-rafeeq-b95930268"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light hero-btn"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href="#"
                className="btn btn-warning hero-btn"
              >
                <FaDownload /> Resume
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div
            className="col-lg-5 text-center"
            data-aos="zoom-in"
          >

            <div className="hero-image-container">

              <img
                src={profileImg}
               alt="Asad Rafeeq"
               className="hero-image"
               />

            </div>

          </div>

        </div>

        <div className="scroll-indicator">
          <FaArrowDown />
        </div>

      </div>
    </section>
  );
}

export default Hero;