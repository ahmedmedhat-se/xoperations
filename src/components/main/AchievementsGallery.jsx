import { useState } from "react";
import "../styles/achievments-gallery.css";

const AchievementsGallery = () => {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "Africa 1st Place!",
      date: "2024",
      description: "Mohamed won 1st place in Africa (2022) and 2nd place (2024) in mobile app contests, representing Egypt, earning UN support and multiple national honors.",
      category: "Work",
      image: "https://www.dostor.org/Upload/libfiles/440/1/533.jpeg"
    },
    {
      id: 2,
      title: "Top 7 Achievers - Mini Shark Tank!",
      date: "2025",
      description: "WattWizards, Egypt’s first all-in-one circuit analysis platform by XOperations, ranked top 7 in Mini Shark Tank Egypt for simplifying engineering with powerful, offline-capable tools.",
      category: "Work",
      image: "https://powernews.cc/wp-content/uploads/2025/05/IMG-20250515-WA0043-scaled.jpg"
    },
    {
      id: 3,
      title: "IEEE YESIST12 - JE 1st Place!",
      date: "2024-04-20",
      description: "WattWizards—Egypt’s first all-in-one circuit analysis platform—won 1st place at IEEE YESIST12 Egypt, qualifying twice globally in Tunisia and Malaysia for its innovation.",
      category: "Personal Growth",
      image: "https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/481970727_522038784260671_6311098493098016517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yWT1jTTFMxYQ7kNvwHWbFSz&_nc_oc=AdkYpv9zFE8r6AuG8tr6OMzIYI5Wm_ZF3FDtsX-6oHsrseYKjBqhMsvCfaKN_vJ28yU&_nc_zt=23&_nc_ht=scontent.fcai19-8.fna&_nc_gid=F_OYaQkPNHMo8pmI1FKbog&oh=00_AfPsA3VMNaZsS0L84m0bdByUIpDeDbsCn6RyJY61Eae-7A&oe=68536724"
    },
    {
      id: 4,
      title: "IEEE YESIST12 - NEW Gloabl Qualificaction!",
      date: "2024-04-20",
      description: "AquaFlow has qualified for the global stage of IEEE YESIST12 – Junior Einstein Track, proudly representing its innovation journey in Tunisia.",
      category: "Work",
      image: "https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/481256809_522038730927343_8187646580348958202_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j478Vboc8AYQ7kNvwEBdr6a&_nc_oc=AdlPjggPc_7beN75bSL266n2qx8JeokyUgGUOYrx74RllNUPki9UUfj4jAtzKXDbo44&_nc_zt=23&_nc_ht=scontent.fcai19-8.fna&_nc_gid=bAXpmYgijWUXleT8U9By8A&oh=00_AfN2-y4bjdQVxe05RmllHMmbmUgKr0gPKLYgqcvc0DtBWA&oe=68538C12"
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
        <h1>XOperations Achievements</h1>
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
            <p>No achievements found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsGallery;