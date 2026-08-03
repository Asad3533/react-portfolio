import "./Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-overlay"></div>

      <div className="container">

        <div
          className="contact-header"
          data-aos="fade-up"
        >
          <span className="contact-badge">
            Let's Connect
          </span>

          <h2>Get In Touch</h2>

          <p>
            I'm always open to discussing internships,
            entry-level opportunities, freelance projects,
            and collaborations in software development
            and data analytics.
          </p>
        </div>

        <div className="row justify-content-center">

          <div
            className="col-lg-8"
            data-aos="zoom-in"
          >
            <div className="contact-card">

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h5>Email</h5>
                  <a href="mailto:ar2366296@gmail.com">
                    ar2366296@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h5>Phone</h5>
                  <a href="tel:+923033533463">
                    +92 303 3533463
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h5>Location</h5>
                  <span>Pakistan</span>
                </div>
              </div>

              <div className="social-links">

                <a
                  href="https://github.com/Asad3533"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/asad-rafeeq-b95930268"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

              </div>

              <div className="contact-buttons">

                <a
                  href="mailto:ar2366296@gmail.com"
                  className="btn btn-light contact-btn"
                >
                  <FaPaperPlane /> Send Email
                </a>

                <a
                  href="https://www.linkedin.com/in/asad-rafeeq-b95930268"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light contact-btn"
                >
                  <FaLinkedin /> LinkedIn
                </a>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;