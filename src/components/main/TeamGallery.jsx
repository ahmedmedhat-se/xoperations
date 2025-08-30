import { useState } from "react";
import "../styles/achievments-gallery.css";

const TeamGallery = () => {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "Ahmed Medhat",
      date: "2025-01-01",
      description: "🥉 Bronze Medalist at BASEF 'Software Branch' (ISEF-Sponsored) and two-time global qualifier to IEEE YESIST12 JE Track.",
      category: "Full Stack Developer",
      image: "https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/518374392_629970866800795_9090920634277966377_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ajyzN2PStE0Q7kNvwHj8oN2&_nc_oc=AdmGhCs_1JEUHxLKbBpKBCOPjK5LvFsvx4GIManOSBDCaK2dBW6WDzkP_JnHqLiyXLs&_nc_zt=23&_nc_ht=scontent.fcai19-8.fna&_nc_gid=oOdeMkh1qrO_Bkq89EEeUQ&oh=00_AfVYMnfcuXRuM3-CiQIxmU22uhQKUPGJ9dseCKP6mHjbGA&oe=68B8F31F"
    },
    {
      id: 2,
      title: "Mohammed Essam",
      date: "2025-01-01",
      description: "🥇 2x Winner at the Afro-Asian Forum for Innovation and Technology.",
      category: "Web Publisher",
      image: "https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/534286460_122134454558886582_4390965487289057776_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UxlM6tP742gQ7kNvwFjJMw1&_nc_oc=AdmbQ-e6AeAoKJz6cbjZagsOGWWuZWHtFV1bZKuW60Zegjj0cUwAZS5m--WJUiGhQqU&_nc_zt=23&_nc_ht=scontent.fcai19-8.fna&_nc_gid=cadTxMjlWDaAJweIgogP0g&oh=00_AfX7Ob3Y0VlUfxAbF9nQIp3svuEJwlBt3uli1QRQtrmZFQ&oe=68B8FC1C"
    },
    {
      id: 3,
      title: "Lucas Monir",
      date: "2025-06-01",
      description: "🥇 IEEE YESIST12 JE National Champion and two-time global qualifier, with multiple wins across tech competitions 🇲🇾🇹🇳.",
      category: "Full Stack Developer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGvXmAfrpP-MA/profile-displayphoto-shrink_400_400/B4DZiZ0LO.HsAg-/0/1754927249955?e=1759363200&v=beta&t=wiqBvtGy9EasIJ4Jn3TpQ7NEuZ-Wf1NenY_upxWM1j0"
    },
    {
      id: 4,
      title: "Mahmoud Abdelkreem",
      date: "2025-06-01",
      description: "🌍 Finalist at Fanny Mobtaker and two-time global qualifier to IEEE YESIST12 Junior Einstein Track",
      category: "UI/UX Designer",
      image: "https://media.licdn.com/dms/image/v2/D4E22AQEY7nVZxOiiRg/feedshare-shrink_1280/B4EZjmZ_zrHgAw-/0/1756212237393?e=1759363200&v=beta&t=VzAdy8baxDx4wWIvj1MEPQ9Rxz4UtwXezi0088hyiz4"
    },
    {
      id: 5,
      title: "Mazen ElSaka",
      date: "2025-08-01",
      description: "🏆 1st Place at ISF and globally qualified to IEEE YESIST12 Junior Einstein Track in Malaysia",
      category: "Project Manager",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQFmP14LAyrjhQ/feedshare-shrink_1280/B4DZY_JHscGwAk-/0/1744816143174?e=1759363200&v=beta&t=EAE3bjBN8CEmMVuAFP82M9zpH8egHsPjAxI6dawCq8o"
    },
    {
      id: 6,
      title: "Mohand Abdo",
      date: "2025-08-01",
      description: "🌍 Finalist at Fanny Mobtaker and two-time global qualifier to IEEE YESIST12 Junior Einstein Track",
      category: "Social Media Merketer",
      image: "https://media.licdn.com/dms/image/v2/D4E22AQESrm9qMqpaUw/feedshare-shrink_1280/B4EZjYbAnCGUAs-/0/1755977643527?e=1759363200&v=beta&t=ds9L-5nrAIMQ1v6MIl0fKGB6lXhGlKD0UaBam8OhXp8"
    },
    {
      id: 7,
      title: "Muhammed Hassan",
      date: "2025-08-01",
      description: "IEEE YESIST12 JE 2x Global Finalist & ECPC Finalist 🏆🎖️",
      category: "Telemarketing Representative",
      image: "https://media.licdn.com/dms/image/v2/D5622AQHRGrWBYFlWjQ/feedshare-shrink_2048_1536/B56ZYB8AXnHQAs-/0/1743789235420?e=1759363200&v=beta&t=zs5e5bALU3qH15DUWy_RSp3pfBdXgonvR71qQ-CECrU"
    },
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