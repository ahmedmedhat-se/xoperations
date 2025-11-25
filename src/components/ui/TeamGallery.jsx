import { useState } from "react";
import "../styles/achievments-gallery.css";
import ahmedmedhat from "../assets/xoperations-team/ahmedmedhat.jpg";
import lucasmonir from "../assets/xoperations-team/lucasmonir.jpeg";
import muhammedessam from "../assets/xoperations-team/muhammedessam.jpeg";
import mahmoudabdelkreem from "../assets/xoperations-team/mahmoudabdelkreem.jpeg";

const TeamGallery = () => {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "Ahmed Medhat",
      date: "2025-01-01",
      description: "🥉 Bronze Medalist at BASEF 'Software Branch' (ISEF-Sponsored) and two-time global qualifier to IEEE YESIST12 JE Track.",
      category: "Full Stack Developer",
      image: ahmedmedhat,
    },
    {
      id: 2,
      title: "Mohammed Essam",
      date: "2025-01-01",
      description: "🥇 2x Winner at the Afro-Asian Forum for Innovation and Technology.",
      category: "Web Publisher",
      image: muhammedessam
    },
    {
      id: 3,
      title: "Lucas Monir",
      date: "2025-06-01",
      description: "🥇 IEEE YESIST12 JE National Champion and two-time global qualifier, with multiple wins across tech competitions 🇲🇾🇹🇳.",
      category: "Full Stack Developer",
      image: lucasmonir
    },
    {
      id: 4,
      title: "Mahmoud Abdelkreem",
      date: "2025-06-01",
      description: "🌍 Finalist at Fanny Mobtaker and two-time global qualifier to IEEE YESIST12 Junior Einstein Track",
      category: "UI/UX Designer",
      image: mahmoudabdelkreem
    }
  ]);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredAchievements = activeFilter === "All"
    ? achievements
    : achievements.filter(a => a.category === activeFilter);

  const categories = ["All", ...new Set(achievements.map(a => a.category))];

  return (
    <div className="achievements-gallery">
      <header>
        <h1>XOperations Team</h1>
        <div className="controls">
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                className={activeFilter === cat ? "active" : ""}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="gallery-grid">
        {filteredAchievements.length > 0 ? (
          filteredAchievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="card-image" style={{ backgroundImage: `url(${achievement.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'})` }}>
                <span className="category-badge">{achievement.category}</span>
              </div>
              <div className="card-content">
                <h3>{achievement.title}</h3>
                <p className="date">{new Date(achievement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="description fw-bold">{achievement.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>No team member found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamGallery;