import { useMemo, useState, useCallback, useEffect } from 'react';
import "../styles/projects.css";

const projects = [
    {
        title: "Anany AC",
        year: "2025",
        genres: ["Vite", "ReactJS", "JavaScript", "Bootstrap 5"],
        description: "An expert air conditioning repair company website across the UAE.",
        imageUrl: "https://content3.jdmagicbox.com/comp/surat/n9/0261px261.x261.180825175254.q6n9/catalogue/anany-air-conditioners-surat-1ql7b6ngto.jpg",
        projectUrl: "https://anany-ac.com/"
    },
    {
        title: "WattWizards",
        year: "2023 - Present",
        genres: ["Web App", "Electrical Services", "ERP System"],
        description: "WattWizards—Egypt's first all-in-one circuit analysis platform—turns complex engineering into click-and-go simplicity.",
        imageUrl: "https://img.freepik.com/premium-photo/male-electrician-hard-hat-works-with-wires-art-electrician-s-day-labor-day-ai-generated_894218-1825.jpg",
        projectUrl: "https://ahmedmedhat-se.github.io/wattwizards/"
    },
    {
        title: "Blood Bank",
        year: "2023 - 2024",
        genres: ["Mobile App", "Health & Care", "Hospitals", "Blood Donations"],
        description: "A Blood Bank Flutter mobile app connects donors and recipients, enabling fast blood requests, donations, and real-time availability tracking.",
        imageUrl: "https://www.sarasolutions.in/assets/images/products/b-bank-3.png",
        projectUrl: "https://www.dostor.org/4685613"
    },
    {
        title: "Medoniq",
        year: "2025 - Present",
        genres: ["Mobile App", "Educational System", "AI", "ML"],
        description: "Medoniq is an AI-powered healthcare app that provides smart scheduling, personalized insights, and modern tools to enhance patient care delivery.",
        imageUrl: "https://swisscognitive.ch/wp-content/uploads/2020/03/apps.png",
        projectUrl: "https://medoniqeg.vercel.app/"
    },
];

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [ref, setRef] = useState(null);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(ref);

        return () => observer.disconnect();
    }, [ref, options]);

    return [setRef, isIntersecting];
};

// Custom hook for image loading
const useImageLoader = (src) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (!src) return;

        const img = new Image();
        img.src = src;
        
        const handleLoad = () => {
            setIsLoaded(true);
            setHasError(false);
        };

        const handleError = () => {
            setIsLoaded(false);
            setHasError(true);
        };

        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleError);

        return () => {
            img.removeEventListener('load', handleLoad);
            img.removeEventListener('error', handleError);
        };
    }, [src]);

    return { isLoaded, hasError };
};

// Loading spinner component
const LoadingSpinner = () => (
    <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
    </div>
);

const ProjectCard = ({ project, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { isLoaded: imageLoaded, hasError: imageError } = useImageLoader(project.imageUrl);
    
    const [cardRef, isCardVisible] = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '50px'
    });

    useEffect(() => {
        if (isCardVisible) {
            setIsVisible(true);
        }
    }, [isCardVisible]);

    // Memoized project genres
    const genreTags = useMemo(() => (
        project.genres.map((genre, i) => (
            <div className="genre-tag" key={i}>
                {genre}
            </div>
        ))
    ), [project.genres]);

    return (
        <div 
            className={`project-card ${isVisible ? 'visible' : ''}`}
            ref={cardRef}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="project-img-container">
                <div
                    className={`project-img ${imageLoaded ? 'loaded' : 'loading'} ${imageError ? 'error' : ''}`}
                    style={{ 
                        backgroundImage: imageLoaded && !imageError ? `url(${project.imageUrl})` : 'none' 
                    }}
                >
                    {!imageLoaded && !imageError && (
                        <div className="image-placeholder">
                            <LoadingSpinner />
                        </div>
                    )}
                    {imageError && (
                        <div className="image-error">
                            <div className="error-icon">📷</div>
                            <p>Failed to load image</p>
                        </div>
                    )}
                </div>
                <div className="movie-overlay"></div>
            </div>
            
            <div className="project-content">
                <div className="title-row">
                    <div className="project-title">{project.title}</div>
                    <div className="year-badge">{project.year}</div>
                </div>
                
                <div className="genres">
                    {genreTags}
                </div>
                
                <div className="description-section">
                    <div className="section-title">Description</div>
                    <div className="project-description">{project.description}</div>
                </div>
                
                <div className="action-row">
                    <a 
                        className="project-btn" 
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} project`}
                    >
                        View Project
                        <span className="btn-arrow">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    // Memoize projects data to prevent unnecessary re-renders
    const memoizedProjects = useMemo(() => projects, []);

    return (
        <section className="project-container container-fluid p-4 p-md-5" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="fw-bold text-center text-light pt-4 pt-md-5 mb-5">
                <span style={{ color: "#186cc7" }}>X</span>Operations Projects!
            </h2>
            
            <div className="row gy-4 gx-4 justify-content-center">
                {memoizedProjects.map((project, index) => (
                    <div className="col-12 col-md-6 col-lg-6" key={`${project.title}-${index}`}>
                        <ProjectCard project={project} index={index} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;