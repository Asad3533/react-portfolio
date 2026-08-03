import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    // DATA ANALYTICS
    {
      category: "Power BI & Data Analytics",
      title: "HR Analytics Dashboard",
      tech: "Power BI, DAX",
      description:
        "Built an interactive dashboard analyzing employee attrition, overtime impact, workforce trends, salary patterns, and employee demographics using the IBM HR Analytics dataset.",
      github:
        "https://github.com/Asad3533/powerbi-hr-analytics-dashboard",
    },
    {
      category: "Power BI & Data Analytics",
      title: "Railway Reservation System Analytics Dashboard",
      tech: "Power BI, SQL, MySQL, DAX",
      description:
        "Developed an end-to-end BI dashboard for railway reservations, revenue analysis, passenger trends, booking performance, and payment insights with interactive slicers and KPI tracking.",
      github:
        "https://github.com/Asad3533/railway-analytics-powerbi-dashboard",
    },
    {
      category: "Power BI & Data Analytics",
      title: "Superstore Sales Performance Dashboard",
      tech: "Power BI",
      description:
        "Created a business intelligence dashboard analyzing sales, profit, orders, customer segments, and regional performance using the Superstore dataset.",
      github:
        "https://github.com/Asad3533/Superstore-Sales-Performance-Dashboard-Power-BI",
    },
    {
      category: "Excel Analytics",
      title: "HR Analytics Dashboard (Excel)",
      tech: "Excel, Power Query, Pivot Tables",
      description:
        "Designed an interactive HR dashboard with Power Query, Pivot Tables, XLOOKUP, INDEX-MATCH, KPI cards, and slicers for workforce analysis.",
      github:
        "https://github.com/Asad3533/HR-Analytics-Dashboard",
    },

    // SQL
    {
      category: "Database & SQL",
      title: "SQL Practice Solutions",
      tech: "MySQL, SQL",
      description:
        "Solved 12+ SQL interview problems covering joins, subqueries, aggregate functions, window functions, self joins, and database operations.",
      github:
        "https://github.com/Asad3533/sql-practice-solutions",
    },

    // FYP
    {
      category: "Final Year Project",
      title: "Smart Vertical Gardening",
      tech: "IoT, Flutter, Firebase",
      description:
        "Developed an IoT-based smart gardening system with environmental monitoring, automated irrigation, and a Flutter mobile application for real-time tracking.",
      github:
        "https://github.com/Asad3533/Smart_vertical_Gardening",
    },

    // WEB DEVELOPMENT
    {
      category: "Web Development",
      title: "Laravel Portfolio Website",
      tech: "Laravel 12, PHP, Bootstrap 5, MySQL",
      description:
        "Responsive portfolio website showcasing projects, technical skills, certifications, resume, and GitHub repositories using Laravel MVC architecture.",
      github:
        "https://github.com/Asad3533/laravel-portfolio",
    },
    {
      category: "Web Development",
      title: "Clothing Store Website",
      tech: "React.js",
      description:
        "Responsive e-commerce website featuring product browsing, reusable React components, dynamic rendering, and a modern user experience.",
      github:
        "https://github.com/Asad3533/clothing-store",
      live:
        "https://clothing-store-1f3qc0xur-asads-projects-0dcebe01.vercel.app/",
    },
    {
      category: "Web Development",
      title: "Weather Forecast Web App",
      tech: "React.js, REST API",
      description:
        "Real-time weather application displaying temperature, humidity, wind speed, and weather conditions using external weather APIs.",
      github:
        "https://github.com/Asad3533/weather-forecast",
      live:
        "https://weather-forcast3533-e7gwhxv4e-asads-projects-0dcebe01.vercel.app/",
    },
  ];
return (
  <section id="projects" className="projects-section">
    <div className="container">

      {/* Section Title */}
      <div data-aos="fade-up">
        <h2 className="projects-title">Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="row">

        {projects.map((project, index) => (
          <div
            key={index}
            className="col-lg-6 mb-4"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
          >
            <div className="project-card h-100">

              <span
                className="project-category"
                data-aos="zoom-in"
              >
                {project.category}
              </span>

              <h4>{project.title}</h4>

              <p className="project-tech">
                {project.tech}
              </p>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark me-2"
                >
                  <FaGithub /> GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}

              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  </section>
);
}
export default Projects;