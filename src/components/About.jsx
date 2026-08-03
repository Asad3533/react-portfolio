import "./About.css";
import { FaCode, FaDatabase, FaChartBar } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        <div className="about-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="row align-items-center">

          <div className="col-lg-7">
            <div data-aos="fade-right">
            <div className="about-content">

              <h3>Hello, I'm Asad Rafeeq 👋</h3>

              <p>
                I am a <strong>BS Software Engineering graduate</strong>
                with a passion for building modern web applications,
                analyzing data, and transforming complex information
                into meaningful insights.
              </p>

              <p>
                My technical expertise includes
                <strong> Laravel, React.js, PHP, MySQL, SQL, Power BI </strong>
                and data analytics. I enjoy solving real-world problems
                through software development and business intelligence
                solutions.
              </p>

              <p>
                From developing responsive web applications to creating
                interactive dashboards, I continuously explore new
                technologies and best practices to improve my skills and
                deliver impactful solutions.
              </p>

            </div>
          </div>
          </div>

          <div className="col-lg-5">
            <div data-aos="fade-left">
            <div className="about-cards">

              <div className="about-card">
                <FaCode className="about-icon" />
                <h5>Web Development</h5>
                <p>Laravel, React.js, PHP, Bootstrap</p>
              </div>

              <div className="about-card">
                <FaDatabase className="about-icon" />
                <h5>Database</h5>
                <p>MySQL, SQL, Query Optimization</p>
              </div>

              <div className="about-card">
                <FaChartBar className="about-icon" />
                <h5>Data Analytics</h5>
                <p>Power BI, DAX, Excel, Visualization</p>
              </div>

            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}

export default About;