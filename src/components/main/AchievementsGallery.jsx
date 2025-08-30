import { useState } from "react";
import "../styles/achievments-gallery.css";

const AchievementsGallery = () => {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "Africa 1st Place!",
      date: "2024",
      description: "Mohamed won 1st place in Africa (2022) and 2nd place (2024) in mobile app contests, representing Egypt, earning UN support and multiple national honors.",
      category: "Middle East",
      image: "https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/528078136_122132121878886582_3866704816453095838_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4g3GSEQHjXAQ7kNvwFaffcF&_nc_oc=AdnSZaQULtcEGC_qIWNoaGyqdo7GRCec8Jjllp5hLXHwZ1tmq-zugIPEvwvlOYC2Z64&_nc_zt=23&_nc_ht=scontent.fcai19-8.fna&_nc_gid=HzmQvPUr_krChp9hgRuh1g&oh=00_AfVUqmg1k4RPxVcLPHb0wUKdPkVCE0JcGZxgSGrG4HPqxA&oe=68B904B7"
    },
    {
      id: 2,
      title: "Top 7 Achievers - Mini Shark Tank!",
      date: "2025",
      description: "WattWizards, Egypt’s first all-in-one circuit analysis platform by XOperations, ranked top 7 in Mini Shark Tank Egypt for simplifying engineering with powerful, offline-capable tools.",
      category: "Egypt",
      image: "https://powernews.cc/wp-content/uploads/2025/05/IMG-20250515-WA0043-scaled.jpg"
    },
    {
      id: 3,
      title: "IEEE YESIST12 - JE 1st Place!",
      date: "2024-04-20",
      description: "WattWizards—Egypt’s first all-in-one circuit analysis platform—won 1st place at IEEE YESIST12 Egypt, qualifying twice globally in Tunisia and Malaysia for its innovation.",
      category: "Global",
      image: "https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/522629876_634775932986955_8486617300484209578_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XZjDpxhDhqUQ7kNvwElERbe&_nc_oc=Adl_W508TJVopCmyYX4XgU__PXwyHY2G0f-0OcFtKwu-vMSzAAWxizW8_vpqymbXOOg&_nc_zt=23&_nc_ht=scontent.fcai19-8.fna&_nc_gid=GGLtrfonk2zD35mHfbKosw&oh=00_AfUz9qvPtfRrHFidtr4M3u6uI5NHtbsJ2smt2cHTmL_ykA&oe=68B8F44E"
    },
    {
      id: 4,
      title: "IEEE YESIST12 - NEW Gloabl Qualificaction!",
      date: "2024-04-20",
      description: "AquaFlow has qualified for the global stage of IEEE YESIST12 – Junior Einstein Track, proudly representing its innovation journey in Tunisia.",
      category: "Global",
      image: "https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/481256809_522038730927343_8187646580348958202_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WzL-u6YRI-IQ7kNvwEAGBG5&_nc_oc=AdkuL_-N3nX57owBoQkHmjqjrEL_WK1qwHN576c4gYmxESRo7-nKXh7hIs1MHGb6ZhY&_nc_zt=23&_nc_ht=scontent.fcai19-8.fna&_nc_gid=RNZWxS5qdyHoQlO9yPL-hA&oh=00_AfVw79I3Ob7qg0yFccYo5Jy7dZewN7kEv9dqCL3gO_73yA&oe=68B90F92"
    },
    {
      id: 5,
      title: "ISF - AI Category Winners!",
      date: "2025-04-01",
      description: "Emovate secures 1st Place Nationwide 🥇 in the ISF 2025 Competition – AI Category!",
      category: "Egypt",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQG8-cFs6rfhbQ/feedshare-shrink_2048_1536/B4DZahvEfIHwAw-/0/1746470216140?e=1759363200&v=beta&t=o-jkGgk4Q192LesfL2nqWqA4qB0Ri22JeimcQ-uXQBM"
    },
    {
      id: 6,
      title: "iSchool - Startup Teen Finalists!",
      date: "2025-08-15",
      description: "Medoniq has qualified for the final stage of iSchool - Startup Teen, proudly representing its innovation journey.",
      category: "Egypt",
      image: "https://media.licdn.com/dms/image/v2/D4E22AQHXchuw47hWEw/feedshare-shrink_2048_1536/B4EZjmZ_zMIMA0-/0/1756212249055?e=1759363200&v=beta&t=6Fp2L2DOUaFaCpifT2vYDK3b3XIS5vWLpnWNlRGYO8c"
    },
    {
      id: 7,
      title: "TEDxDokki Youth Sponsorship!",
      date: "2025-08-20",
      description: "New sponsorship and collaboration with such an interesting youth event.",
      category: "Youth Event",
      image: "https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/537526875_122135741366886582_5509269093359899417_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4AUJbdx4XD0Q7kNvwE_07zv&_nc_oc=AdmmTNl5X-hM-Kw2QvMze1ssm4M8wXDyKSvWwYR6N8vZmTIT13ayVLqeixQb5lke4Ks&_nc_zt=23&_nc_ht=scontent.fcai19-8.fna&_nc_gid=u7BmgNU5XfkCTDH3Jemhhg&oh=00_AfVk2c-98k8JRfXLw3GuCRIe-GLasReiOfmrqejFkogyow&oe=68B8E16C"
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