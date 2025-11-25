import { useState, useMemo, memo } from "react";
import "../styles/achievments-gallery.css";
import africanasianforum from "../assets/achievments/asianafricanforum.jpeg";
import startupteens from "../assets/achievments/iSchool finalists.jpeg";
import tedxdokkiyouthcollab from "../assets/achievments/tedxdokkiyouthcollab.jpeg";
import techtank from "../assets/achievments/techtank.jpeg";
import ieee from "../assets/achievments/ieee.jpeg";

const AchievementCard = memo(({ achievement }) => {
  const formattedDate = useMemo(() => {
    return new Date(achievement.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }, [achievement.date]);

  return (
    <div className="achievement-card">
      <div 
        className="card-image" 
        style={{ backgroundImage: `url(${achievement.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'})` }}
      >
        <span className="category-badge">{achievement.category}</span>
      </div>
      <div className="card-content">
        <h3>{achievement.title}</h3>
        <p className="date">{formattedDate}</p>
        <p className="description fw-bold">{achievement.description}</p>
      </div>
    </div>
  );
});

AchievementCard.displayName = 'AchievementCard';

const FilterButton = memo(({ category, isActive, onClick }) => (
  <button
    className={isActive ? "active" : ""}
    onClick={onClick}
  >
    {category}
  </button>
));

FilterButton.displayName = 'FilterButton';

const AchievementsGallery = () => {
  const ACHIEVEMENTS = useMemo(() => [
    {
      id: 1,
      title: "Africa 1st Place!",
      date: "2024",
      description: "Mohamed won 1st place in Africa (2022) and 2nd place (2024) in mobile app contests, representing Egypt, earning UN support and multiple national honors.",
      category: "Egypt",
      image: africanasianforum
    },
    {
      id: 2,
      title: "Top 7 Achievers - Mini Shark Tank!",
      date: "2025",
      description: "WattWizards, Egypt's first all-in-one circuit analysis platform by XOperations, ranked top 7 in Mini Shark Tank Egypt for simplifying engineering with powerful, offline-capable tools.",
      category: "Egypt",
      image: techtank
    },
    {
      id: 3,
      title: "IEEE YESIST12 - JE 1st Place!",
      date: "2024-04-20",
      description: "WattWizards—Egypt's first all-in-one circuit analysis platform—won 1st place at IEEE YESIST12 Egypt, qualifying twice globally in Tunisia and Malaysia for its innovation.",
      category: "Global",
      image: ieee
    },
    {
      id: 4,
      title: "iSchool - Startup Teen Finalists!",
      date: "2025-08-15",
      description: "Medoniq has qualified for the final stage of iSchool - Startup Teen, proudly representing its innovation journey.",
      category: "Egypt",
      image: startupteens
    },
    {
      id: 5,
      title: "TEDxDokki Youth Sponsorship!",
      date: "2025-08-20",
      description: "New sponsorship and collaboration with such an interesting youth event.",
      category: "Egypt",
      image: tedxdokkiyouthcollab
    }
  ], []);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredAchievements = useMemo(() => 
    activeFilter === "All" 
      ? ACHIEVEMENTS 
      : ACHIEVEMENTS.filter(a => a.category === activeFilter),
    [activeFilter, ACHIEVEMENTS]
  );

  const categories = useMemo(() => 
    ["All", ...new Set(ACHIEVEMENTS.map(a => a.category))],
    [ACHIEVEMENTS]
  );

  return (
    <div className="achievements-gallery">
      <header>
        <h1>XOperations Achievements</h1>
        <div className="controls">
          <div className="filter-buttons">
            {categories.map(cat => (
              <FilterButton
                key={cat}
                category={cat}
                isActive={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
              />
            ))}
          </div>
        </div>
      </header>

      <div className="gallery-grid">
        {filteredAchievements.length > 0 ? (
          filteredAchievements.map((achievement) => (
            <AchievementCard 
              key={achievement.id} 
              achievement={achievement}
            />
          ))
        ) : (
          <div className="empty-state">
            <p>No achievements found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsGallery;