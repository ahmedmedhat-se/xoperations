import { useState } from "react";
import "../styles/team-gallery.css";
import ahmedmedhat from "../assets/xoperations-team/ahmedmedhat.jpg";
import lucasmonir from "../assets/xoperations-team/lucasmonir.jpeg";
import muhammedessam from "../assets/xoperations-team/muhammedessam.jpeg";
import mahmoudabdelkreem from "../assets/xoperations-team/mahmoudabdelkreem.jpeg";
import ahmedtarek from "../assets/xoperations-team/ahmedtarek.jpg";

const TeamGallery = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Ahmed Medhat",
      role: "Full Stack Developer",
      description: "🥉 Bronze Medalist at BASEF 'Software Branch' (ISEF-Sponsored) and two-time global qualifier to IEEE YESIST12 JE Track.",
      image: ahmedmedhat,
      skills: ["ReactJS", "ExpressJS", "MySql", "Laravel", "TypeScript"]
    },
    {
      id: 2,
      name: "Mohammed Essam",
      role: "Web Publisher",
      description: "🥇 2x Winner at the Afro-Asian Forum for Innovation and Technology.",
      image: muhammedessam,
      skills: ["WordPress", "SEO", "Content Strategy", "Flutter", "Android"]
    },
    {
      id: 3,
      name: "Lucas Monir",
      role: "Full Stack Developer",
      description: "🥇 IEEE YESIST12 JE National Champion and two-time global qualifier, with multiple wins across tech competitions 🇲🇾🇹🇳.",
      image: lucasmonir,
      skills: ["Laravel", "ExpressJS", "ASP.net", "MongoDB", "NestJs"]
    },
    {
      id: 4,
      name: "Mahmoud Abdelkreem",
      role: "UI/UX Designer",
      description: "🌍 Finalist at Fanny Mobtaker and two-time global qualifier to IEEE YESIST12 Junior Einstein Track",
      image: mahmoudabdelkreem,
      skills: ["Figma", "UI Design", "UX Research", "Prototyping", "ReactJs"]
    },
    {
      id: 5,
      name: "Ahmed Tarek",
      role: "Pentester & Cyber Security",
      description: "Enthusiastic pentester passionate about securing scalable, efficient software solutions.",
      image: ahmedtarek,
      skills: ["Cyber Security", "Pentesting", "Bug Hunting", "Android Development"]
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredMembers = activeFilter === "All"
    ? teamMembers
    : teamMembers.filter(member => member.role === activeFilter);

  const categories = ["All", ...new Set(teamMembers.map(member => member.role))];

  return (
    <div className="team-showcase">
      <div className="team-hero">
        <div className="container mt-2">
          <div className="hero-content">
            <h1 className="hero-title">
              Meet the <span className="text-gradient">XOperations</span> Team
            </h1>
            <p className="hero-subtitle">
              A passionate group of innovators, creators, and problem solvers working together to build amazing things.
            </p>
          </div>
        </div>
      </div>

      <div className="team-stats">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="stat-card">
                <i className="fas fa-trophy"></i>
                <h3>10+</h3>
                <p>International Awards</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="stat-card">
                <i className="fas fa-globe-americas"></i>
                <h3>4</h3>
                <p>Global Qualifications</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="stat-card">
                <i className="fas fa-code"></i>
                <h3>15+</h3>
                <p>Technologies</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="stat-card">
                <i className="fas fa-project-diagram"></i>
                <h3>100%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-controls">
        <div className="container">
          <div className="control-wrapper">
            <div className="filter-label">
              <i className="fas fa-filter"></i>
              Filter by Role:
            </div>
            <div className="filter-buttons">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className="filter-count">
                      {teamMembers.filter(m => m.role === cat).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="team-grid-section">
        <div className="container">
          <div className="team-grid">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <div key={member.id} className="team-card">
                  <div className="team-card-image">
                    <div 
                      className="member-image" 
                      style={{ backgroundImage: `url(${member.image})` }}
                    >
                      <div className="image-overlay"></div>
                    </div>
                    <span className="role-badge">{member.role}</span>
                  </div>

                  <div className="team-card-content">
                    <div className="member-header">
                      <h3 className="member-name">{member.name}</h3>
                    </div>

                    <div className="member-description">
                      <p>{member.description}</p>
                    </div>

                    <div className="member-skills">
                      <div className="skills-label">
                        <i className="fas fa-code"></i>
                        Skills & Expertise
                      </div>
                      <div className="skills-tags">
                        {member.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-icon">
                  <i className="fas fa-user-slash"></i>
                </div>
                <h4>No team members found</h4>
                <p>Try selecting a different role filter</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamGallery;