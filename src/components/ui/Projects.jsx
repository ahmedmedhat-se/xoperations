import { useMemo, useState, useEffect } from 'react';
import "../styles/projects.css";

const projects = [
    {
        title: "Anany AC",
        year: "2025",
        genres: ["Vite", "ReactJS", "JavaScript", "Bootstrap 5"],
        description: "An expert air conditioning repair company website across the UAE.",
        imageUrl: "https://content3.jdmagicbox.com/comp/surat/n9/0261px261.x261.180825175254.q6n9/catalogue/anany-air-conditioners-surat-1ql7b6ngto.jpg",
        projectUrl: "https://anany-ac.com/",
        status: "Live",
    },
    {
        title: "WattWizards",
        year: "2023 - Present",
        genres: ["Web App", "Electrical Services", "ERP System"],
        description: "WattWizards—Egypt's first all-in-one circuit analysis platform—turns complex engineering into click-and-go simplicity.",
        imageUrl: "https://img.freepik.com/premium-photo/male-electrician-hard-hat-works-with-wires-art-electrician-s-day-labor-day-ai-generated_894218-1825.jpg",
        projectUrl: "https://ahmedmedhat-se.github.io/wattwizards/",
        status: "Active Development",
    },
    {
        title: "Blood Bank",
        year: "2023 - 2024",
        genres: ["Mobile App", "Health & Care", "Hospitals", "Blood Donations"],
        description: "A Blood Bank Flutter mobile app connects donors and recipients, enabling fast blood requests, donations, and real-time availability tracking.",
        imageUrl: "https://www.sarasolutions.in/assets/images/products/b-bank-3.png",
        projectUrl: "https://www.dostor.org/4685613",
        status: "Completed",
    },
    {
        title: "Medoniq",
        year: "2025 - Present",
        genres: ["Mobile App", "Educational System", "AI", "ML"],
        description: "Medoniq is an AI-powered healthcare app that provides smart scheduling, personalized insights, and modern tools to enhance patient care delivery.",
        imageUrl: "https://swisscognitive.ch/wp-content/uploads/2020/03/apps.png",
        projectUrl: "https://medoniqeg.vercel.app/",
        status: "Beta",
    },
];

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

const LoadingSpinner = () => (
    <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
    </div>
);

const StatusBadge = ({ status }) => {
    const getStatusColor = (status) => {
        switch(status.toLowerCase()) {
            case 'live': return 'success';
            case 'active development': return 'warning';
            case 'completed': return 'info';
            case 'beta': return 'primary';
            default: return 'secondary';
        }
    };

    return (
        <span className={`status-badge bg-${getStatusColor(status)}`}>
            <i className={`fas fa-circle me-1`}></i>
            {status}
        </span>
    );
};

const ProjectCard = ({ project, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    
    const [cardRef, isCardVisible] = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '50px'
    });

    useEffect(() => {
        if (isCardVisible) {
            setIsVisible(true);
        }
    }, [isCardVisible]);

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
            <div className="project-header">
                <div className="header-left">
                    <div className="project-number">0{index + 1}</div>
                    <div className="header-titles">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-subtitle">
                            <StatusBadge status={project.status} />
                            <span className="year-badge">{project.year}</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="project-img-container">
                <div
                    className={`project-img ${imageLoaded ? 'loaded' : 'loading'}`}
                    style={{ 
                        backgroundImage: `url(${project.imageUrl})`
                    }}
                >
                    {!imageLoaded && (
                        <div className="image-placeholder">
                            <LoadingSpinner />
                        </div>
                    )}
                    <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        style={{ display: 'none' }}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)}
                    />
                </div>
                <div className="image-overlay"></div>
            </div>
            <div className="project-content">
                <div className="genres-section">
                    <div className="section-title">
                        <i className="fas fa-tags me-2"></i>
                        Technologies Used
                    </div>
                    <div className="genres">
                        {genreTags}
                    </div>
                </div>
                <div className="description-section">
                    <div className="section-title">
                        <i className="fas fa-align-left me-2"></i>
                        Project Description
                    </div>
                    <div className="project-description">{project.description}</div>
                </div>
                <div className="action-row">
                    <a 
                        className="project-btn primary-btn" 
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} project`}
                    >
                        <i className="fas fa-external-link-alt me-2"></i>
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesFilter = filter === 'all' || 
                project.genres.some(genre => 
                    genre.toLowerCase().includes(filter.toLowerCase())
                );
            
            const matchesSearch = searchTerm === '' ||
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.genres.some(genre => 
                    genre.toLowerCase().includes(searchTerm.toLowerCase())
                );
            
            return matchesFilter && matchesSearch;
        });
    }, [filter, searchTerm]);

    return (
        <section className="projects-showcase" aria-labelledby="projects-heading">
            <div className="hero-section">
                <div className="container mt-5">
                    <div className="hero-content">
                        <h1 id="projects-heading" className="hero-title">
                            XOperations <span className="highlight">Projects</span>
                        </h1>
                        <p className="hero-subtitle">
                            Discover our innovative solutions that transform ideas into impactful digital experiences
                        </p>
                    </div>
                </div>
            </div>

            <div className="overview-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4 col-sm-6">
                            <div className="overview-card">
                                <i className="fas fa-code overview-icon"></i>
                                <h3>{projects.length}</h3>
                                <p>Projects Deployed</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="overview-card">
                                <i className="fas fa-calendar-alt overview-icon"></i>
                                <h3>3</h3>
                                <p>Years Active</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="overview-card">
                                <i className="fas fa-users overview-icon"></i>
                                <h3>5K+</h3>
                                <p>Total Users</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projects-grid-section">
                <div className="container">
                    {filteredProjects.length > 0 ? (
                        <div className="row gy-5">
                            {filteredProjects.map((project, index) => (
                                <div className="col-12" key={`${project.title}-${index}`}>
                                    <ProjectCard project={project} index={index} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results text-center py-5">
                            <i className="fas fa-search fa-3x mb-3"></i>
                            <h3>No projects found</h3>
                            <p className="text-muted">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;