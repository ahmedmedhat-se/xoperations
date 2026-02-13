import { useState, useMemo } from "react";
import expressjsCourse from "../assets/courses/expressjs-course.jpg";
import softwareworkshops from "../assets/courses/software-workshops.png";

const MilestoneCard = ({ milestone }) => {
  const formattedDate = useMemo(() => {
    return new Date(milestone.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }, [milestone.date]);

  return (
    <div className="col">
      <div className="card h-100 shadow-sm border-0 overflow-hidden">
        <div className="position-relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
          <img 
            src={milestone.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'} 
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            alt={milestone.title}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
        </div>

        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h3 className="h5 fw-bold text-truncate" style={{ maxWidth: '70%' }}>
              {milestone.title}
            </h3>
            <span className="badge bg-light text-dark border">
              <i className="fas fa-calendar-alt me-1 small"></i>
              {formattedDate}
            </span>
          </div>

          <p className="card-text text-secondary small mb-3">
            {milestone.description}
          </p>

          <div className="d-flex justify-content-between align-items-center mt-auto">
            {milestone.evidence?.video && (
              <a
                href={milestone.evidence.video}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-primary"
              >
                <i className="fas fa-play-circle me-2"></i>
                Watch Video
              </a>
            )}
            <span className="text-warning small">
              <i className="fas fa-star me-1"></i>
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
      description: "ExpressJS course for absolute beginners. From zero to hero.",
      image: expressjsCourse,
      evidence: {
        video: "https://youtube.com/playlist?list=PLZH4VfVSJIF6TZ64xSto9Q2UJ5g427Twf&si=W82dxAkU1jM73rOs"
      }
    },
    {
      id: 2,
      title: "Software Workshops",
      date: "2026",
      description: "Software tutorials for absolute beginners. From zero to hero.",
      image: softwareworkshops,
      evidence: {
        video: "https://www.youtube.com/watch?v=AYNxJeSqzEg&list=PLZH4VfVSJIF48sC5MOWQypDN78Tn3qzne"
      }
    },
  ], []);

  const [viewMode, setViewMode] = useState("grid");

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-end mb-4">
          <div className="col-md-8">
            <h1 className="display-5 fw-bold mb-3">
              XOperations <span className="text-primary">Free</span> Tech Courses
            </h1>
            <p className="text-secondary lead small">
              Master modern technologies with our comprehensive free courses
            </p>
          </div>
          
          <div className="col-md-4">
            <div className="d-flex justify-content-md-end gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`btn btn-sm ${viewMode === "grid" ? "btn-primary" : "btn-outline-secondary"}`}
              >
                <i className="fas fa-grid-2 me-2"></i>
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`btn btn-sm ${viewMode === "list" ? "btn-primary" : "btn-outline-secondary"}`}
              >
                <i className="fas fa-list me-2"></i>
                List
              </button>
            </div>
          </div>
        </div>

        <div className={`row g-4 ${viewMode === "grid" ? "row-cols-1 row-cols-md-2" : "row-cols-1"}`}>
          {MILESTONES.map((milestone) => (
            viewMode === "grid" ? (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
              />
            ) : (
              <div key={milestone.id} className="col">
                <div className="card shadow-sm border-0">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img 
                        src={milestone.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'} 
                        className="img-fluid rounded-start h-100 object-fit-cover"
                        alt={milestone.title}
                        style={{ maxHeight: '200px' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h3 className="h5 fw-bold">{milestone.title}</h3>
                          <span className="badge bg-light text-dark border">
                            <i className="fas fa-calendar-alt me-1"></i>
                            {new Date(milestone.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <p className="card-text text-secondary mb-3">
                          {milestone.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          {milestone.evidence?.video && (
                            <a
                              href={milestone.evidence.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline-primary"
                            >
                              <i className="fas fa-play-circle me-2"></i>
                              Watch Video
                            </a>
                          )}
                          <span className="text-warning small">
                            <i className="fas fa-star me-1"></i>
                            Featured
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="text-secondary mb-3">
            <i className="fas fa-info-circle me-2 text-primary"></i>
            All courses are completely free and available on YouTube
          </p>
          <a 
            href="https://youtube.com/@xoperations" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-danger btn-sm p-2"
          >
            <i className="fab fa-youtube"></i>
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechCourses;