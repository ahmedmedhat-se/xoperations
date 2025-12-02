import { useState, useMemo } from "react";
import "../styles/achievments-gallery.css";
import africanasianforum from "../assets/achievments/asianafricanforum.jpeg";
import startupteens from "../assets/achievments/iSchool finalists.jpeg";
import tedxdokkiyouthcollab from "../assets/achievments/tedxdokkiyouthcollab.jpeg";
import techtank from "../assets/achievments/techtank.jpeg";
import ieee from "../assets/achievments/ieee.jpeg";

const MilestoneCard = ({ milestone }) => {
  const formattedDate = useMemo(() => {
    return new Date(milestone.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }, [milestone.date]);

  return (
    <div className="milestone-card">
      <div className="milestone-badge">
        <span className="milestone-icon">
          <i className="fas fa-trophy"></i>
        </span>
      </div>
      
      <div 
        className="milestone-image" 
        style={{ backgroundImage: `url(${milestone.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'})` }}
      >
        <div className="image-overlay"></div>
        <span className="category-badge">{milestone.category}</span>
      </div>
      
      <div className="milestone-content">
        <div className="milestone-header">
          <h3>{milestone.title}</h3>
          <p className="date">
            <i className="fas fa-calendar-alt me-2"></i>
            {formattedDate}
          </p>
        </div>
        
        <p className="description">{milestone.description}</p>
        
        <div className="milestone-footer">
          {milestone.evidence && (
            <div className="evidence-links">
              {milestone.evidence.article && (
                <a 
                  href={milestone.evidence.article} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="evidence-btn"
                >
                  <i className="fas fa-newspaper me-2"></i>
                  Article
                </a>
              )}
              {milestone.evidence.certificate && (
                <a 
                  href={milestone.evidence.certificate} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="evidence-btn"
                >
                  <i className="fas fa-certificate me-2"></i>
                  Certificate
                </a>
              )}
              {milestone.evidence.video && (
                <a 
                  href={milestone.evidence.video} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="evidence-btn"
                >
                  <i className="fas fa-play-circle me-2"></i>
                  Video
                </a>
              )}
            </div>
          )}
          <div className="milestone-stats">
            <span className="stat">
              <i className="fas fa-star text-warning me-1"></i>
              Featured
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterButton = ({ category, isActive, onClick, count }) => (
  <button
    className={`filter-btn ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    {category}
    {count > 0 && <span className="filter-count">{count}</span>}
  </button>
);

const AchievementsGallery = () => {
  const MILESTONES = useMemo(() => [
    {
      id: 1,
      title: "Africa 1st Place Winner",
      date: "2024",
      description: "Mohamed won 1st place in Africa (2022) and 2nd place (2024) in mobile app contests, representing Egypt, earning UN support and multiple national honors.",
      category: "Egypt",
      image: africanasianforum,
      evidence: {
        article: "https://www.dostor.org/4685613",
        video: "https://www.youtube.com/watch?v=8cEUVErC914"
      }
    },
    {
      id: 2,
      title: "Top 7 - Mini Shark Tank Egypt",
      date: "2025",
      description: "WattWizards, Egypt's first all-in-one circuit analysis platform by XOperations, ranked top 7 in Mini Shark Tank Egypt for simplifying engineering with powerful tools.",
      category: "Egypt",
      image: techtank,
      evidence: {
        article: "https://identity-mag.com/elsewedy-university-of-technology-sutech-announces-winner-of-techtank-2025-competition-after-strong-showdown-among-seven-teams/",
        certificate: "https://drive.google.com/file/d/1yAhqolPO5XiG07zht1LVw75CGFfH2vJ-/view"
      }
    },
    {
      id: 3,
      title: "IEEE YESIST12 - 1st Place Egypt",
      date: "2024-04-20",
      description: "WattWizards won 1st place at IEEE YESIST12 Egypt, qualifying twice globally in Tunisia and Malaysia for its innovative circuit analysis platform.",
      category: "Global",
      image: ieee,
      evidence: {
        article: "https://ieeeypegypt.org/ieee-yesist12-prelim-eg/",
        certificate: "https://drive.google.com/file/d/11durFfO02Rsa975ABx_RyQCH2X5IyKNn/view",
      }
    },
    {
      id: 4,
      title: "iSchool Startup Teen Finalist",
      date: "2025-08-15",
      description: "Medoniq has qualified for the final stage of iSchool - Startup Teen, proudly representing its innovation journey in educational technology.",
      category: "Egypt",
      image: startupteens,
      evidence: {
        article: "https://www.facebook.com/people/Medoniq/61579766157171/"
      }
    },
    {
      id: 5,
      title: "TEDxDokki Youth Sponsorship",
      date: "2025-08-20",
      description: "Strategic sponsorship and collaboration with TEDxDokki Youth, supporting innovative ideas and youth empowerment initiatives.",
      category: "Egypt",
      image: tedxdokkiyouthcollab,
      evidence: {
        article: "https://tedx-dokki-youth-44194.web.app/",
        video: "https://www.facebook.com/61574933524337/videos/"
      }
    }
  ], []);

  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const filteredMilestones = useMemo(() => 
    activeFilter === "All" 
      ? MILESTONES 
      : MILESTONES.filter(a => a.category === activeFilter),
    [activeFilter, MILESTONES]
  );

  const categories = useMemo(() => 
    ["All", ...new Set(MILESTONES.map(a => a.category))],
    [MILESTONES]
  );

  const getCategoryCount = (category) => {
    if (category === "All") return MILESTONES.length;
    return MILESTONES.filter(m => m.category === category).length;
  };

  return (
    <div className="legacy-showcase">
      <div className="container">
        <header className="showcase-header text-center mb-2 mt-4">
          <h1 className="display-4 fw-bold mb-3">
            XOperations <span className="text-gradient">Legacy</span> Showcase
          </h1>
          <p className="lead text-muted">
            Celebrating our journey of innovation, excellence, and impact across global stages
          </p>
        </header>

        <div className="controls-section mb-5">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="filter-group">
                <span className="filter-label me-3">
                  <i className="fas fa-filter me-2"></i>
                  Filter by:
                </span>
                <div className="filter-buttons">
                  {categories.map(cat => (
                    <FilterButton
                      key={cat}
                      category={cat}
                      isActive={activeFilter === cat}
                      onClick={() => setActiveFilter(cat)}
                      count={getCategoryCount(cat)}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="col-md-4 text-end">
              <div className="view-toggle">
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <i className="fas fa-th-large"></i>
                </button>
                <button 
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`milestones-${viewMode} mb-3`}>
          {filteredMilestones.length > 0 ? (
            filteredMilestones.map((milestone) => (
              <MilestoneCard 
                key={milestone.id} 
                milestone={milestone}
              />
            ))
          ) : (
            <div className="empty-state text-center py-5">
              <div className="empty-icon mb-3">
                <i className="fas fa-trophy fa-3x text-muted"></i>
              </div>
              <h4 className="mb-2">No milestones found</h4>
              <p className="text-muted">Try selecting a different filter</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementsGallery;