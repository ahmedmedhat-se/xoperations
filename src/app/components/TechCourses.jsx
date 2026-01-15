import { useState, useMemo } from "react";
import "../styles/achievments-gallery.css";
import expressjsCourse from "../assets/courses/expressjs-course.jpg";

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
      <div
        className="milestone-image"
        style={{ backgroundImage: `url(${milestone.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'})` }}
      >
        <div className="image-overlay"></div>
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

const TechCourses = () => {
  const MILESTONES = useMemo(() => [
    {
      id: 1,
      title: "ExpressJs Mastery Courses",
      date: "2026",
      description: "ExpressJS course for absolute begineers. From zero to hero.",
      image: expressjsCourse,
      evidence: {
        video: "https://youtube.com/playlist?list=PLZH4VfVSJIF6TZ64xSto9Q2UJ5g427Twf&si=W82dxAkU1jM73rOs"
      }
    }
  ], []);

  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="legacy-showcase">
      <div className="container">
        <header className="showcase-header text-center mb-2">
          <h1 className="display-4 fw-bold mb-3">
            XOperations <span className="text-gradient">Free</span> Tech Courses
          </h1>
        </header>

        <div className={`milestones-${viewMode} mb-3`}>
          {MILESTONES.map((milestone) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TechCourses;