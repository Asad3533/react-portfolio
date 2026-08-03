import "./Skills.css";

import { FaReact, FaPhp, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiLaravel, SiMysql, SiJavascript } from "react-icons/si";
import { FaChartBar } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

function Skills() {
  const skills = [
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <TbSql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Power BI", icon: <FaChartBar /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
  ];

  return (
    <div data-aos="zoom-in">
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-title">My Skills</h2>

        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h5>{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
    </div>
  );
}

export default Skills;