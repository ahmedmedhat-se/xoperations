import { useMemo, useState, useEffect, useCallback, useRef } from 'react';
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

const useInView = (threshold = 0.1) => {
    const [ref, setRef] = useState(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref);
                }
            },
            { threshold, rootMargin: '50px' }
        );
        
        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref, threshold]);

    return [setRef, inView];
};

const useParallax = () => {
    const ref = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const scrollPosition = window.scrollY;
            const elementTop = rect.top + scrollPosition;
            setOffset((scrollPosition - elementTop) * 0.1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return [ref, offset];
};

const StatusBadge = ({ status }) => {
    const statusConfig = {
        live: { color: '#10b981', icon: 'fa-bolt' },
        'active development': { color: '#f59e0b', icon: 'fa-code-branch' },
        completed: { color: '#3b82f6', icon: 'fa-check-circle' },
        beta: { color: '#8b5cf6', icon: 'fa-flask' }
    };

    const config = statusConfig[status.toLowerCase()] || { color: '#6b7280', icon: 'fa-circle' };

    return (
        <span className="status-badge" style={{ backgroundColor: `${config.color}20`, color: config.color }}>
            <i className={`fas ${config.icon}`} style={{ marginRight: '6px', fontSize: '10px' }}></i>
            {status}
        </span>
    );
};

const MetricCard = ({ icon, value, label }) => {
    const [ref, inView] = useInView(0.5);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        
        let start = 0;
        const end = parseInt(value.replace(/[^0-9]/g, ''));
        if (end === 0) return;
        
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start > end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        
        return () => clearInterval(timer);
    }, [inView, value]);

    return (
        <div ref={ref} className="metric-card">
            <div className="metric-icon-wrapper">
                <i className={`fas ${icon}`}></i>
                <div className="metric-glow"></div>
            </div>
            <div className="metric-content">
                <h3 className="metric-value">
                    {value.includes('+') ? `${count}+` : count || value}
                </h3>
                <p className="metric-label">{label}</p>
            </div>
        </div>
    );
};

const GenreCloud = ({ genres }) => {
    return (
        <div className="genre-cloud">
            {genres.map((genre, i) => (
                <span 
                    key={i} 
                    className="genre-bubble"
                    style={{ 
                        animationDelay: `${i * 0.1}s`,
                        transform: `rotate(${Math.random() * 5 - 2.5}deg)`
                    }}
                >
                    <span className="genre-dot">●</span>
                    {genre}
                </span>
            ))}
        </div>
    );
};

const ProjectCard = ({ project, index }) => {
    const [ref, inView] = useInView(0.2);
    const [cardRef, offset] = useParallax();
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const imageStyles = useMemo(() => ({
        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
        filter: isHovered ? 'brightness(1.1)' : 'brightness(0.9)',
        transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), filter 0.5s ease'
    }), [isHovered]);

    return (
        <div 
            ref={cardRef}
            className={`project-card-wrapper ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
        >
            <article 
                ref={ref}
                className={`project-card ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="project-card-inner">
                    <div className="project-media-section">
                        <div className="project-number-badge">
                            <span className="number">0{index + 1}</span>
                            <span className="number-glow"></span>
                        </div>
                        
                        <div className="project-image-frame">
                            <div 
                                className="project-image"
                                style={{
                                    backgroundImage: imageError 
                                        ? 'linear-gradient(145deg, #2a2a4a, #1a1a3a)' 
                                        : `url(${project.imageUrl})`,
                                    ...imageStyles
                                }}
                            >
                                <div className="image-overlay-gradient"></div>
                                <div className="image-shine"></div>
                            </div>
                            <img 
                                src={project.imageUrl} 
                                alt={project.title}
                                style={{ display: 'none' }}
                                onLoad={() => setImageLoaded(true)}
                                onError={() => setImageError(true)}
                            />
                            
                            <div className="project-status-chip">
                                <StatusBadge status={project.status} />
                            </div>
                        </div>
                    </div>

                    <div className="project-content-section">
                        <div className="project-header">
                            <div className="project-title-wrapper">
                                <h2 className="project-title">
                                    {project.title}
                                    <span className="title-accent"></span>
                                </h2>
                                <span className="project-year">
                                    <i className="far fa-calendar-alt"></i>
                                    {project.year}
                                </span>
                            </div>
                        </div>

                        <div className="project-body">
                            <div className="project-description">
                                <i className="fas fa-quote-right quote-icon"></i>
                                <p>{project.description}</p>
                            </div>

                            <div className="project-tech-section">
                                <div className="tech-header">
                                    <i className="fas fa-microchip"></i>
                                    <span>Technology Stack</span>
                                    <div className="tech-line"></div>
                                </div>
                                <GenreCloud genres={project.genres} />
                            </div>
                        </div>

                        <div className="project-footer">
                            <a 
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-action-button"
                            >
                                <span className="button-text">Explore Project</span>
                                <span className="button-icon">
                                    <i className="fas fa-arrow-right"></i>
                                </span>
                                <span className="button-glow"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.3 + 0.1
        }));

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;
                
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(106, 17, 203, ${p.opacity})`;
                ctx.fill();
            });
            
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="particle-canvas"></canvas>;
};

const Projects = () => {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const filterOptions = [
        { id: 'all', label: 'All Projects', icon: 'fa-layer-group' },
        { id: 'react', label: 'React', icon: 'fa-react' },
        { id: 'mobile', label: 'Mobile', icon: 'fa-mobile-alt' },
        { id: 'ai', label: 'AI/ML', icon: 'fa-brain' }
    ];

    useEffect(() => {
        const filtered = projects.filter(project => {
            const matchesFilter = activeFilter === 'all' || 
                project.genres.some(g => g.toLowerCase().includes(activeFilter.toLowerCase()));
            
            const matchesSearch = searchQuery === '' ||
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));
            
            return matchesFilter && matchesSearch;
        });
        
        setFilteredProjects(filtered);
    }, [activeFilter, searchQuery]);

    const handleSearch = useCallback((e) => {
        setSearchQuery(e.target.value);
    }, []);

    const clearSearch = useCallback(() => {
        setSearchQuery('');
    }, []);

    return (
        <section className="projects-showcase">
            <ParticleBackground />
            
            <div className="projects-container">
                <div className="hero-area">
                    <div className="hero-content-wrapper">
                        <div className="hero-badge">
                            <span className="badge-pulse"></span>
                            Portfolio Showcase 2025
                        </div>
                        
                        <h1 className="hero-main-title">
                            <span className="title-line">Crafting Digital</span>
                            <span className="title-gradient">Experiences</span>
                        </h1>
                        
                        <p className="hero-description">
                            Exploring the intersection of creativity and technology through innovative solutions
                        </p>
                        
                        <div className="hero-metrics">
                            <MetricCard icon="fa-code-branch" value="4" label="Active Projects" />
                            <MetricCard icon="fa-rocket" value="3+" label="Years Innovation" />
                            <MetricCard icon="fa-users" value="5K+" label="Users Impacted" />
                        </div>
                    </div>
                </div>

                <div className="projects-control-panel">
                    <div className="control-header">
                        <h2 className="control-title">
                            <i className="fas fa-grid-2"></i>
                            Project Gallery
                        </h2>
                        <span className="project-count">
                            {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
                        </span>
                    </div>

                    <div className="control-filters">
                        <div className="filter-chips">
                            {filterOptions.map(option => (
                                <button
                                    key={option.id}
                                    className={`filter-chip ${activeFilter === option.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(option.id)}
                                >
                                    <i className={`fas ${option.icon}`}></i>
                                    {option.label}
                                </button>
                            ))}
                        </div>

                        <div className={`search-wrapper ${isSearchFocused ? 'focused' : ''}`}>
                            <i className="fas fa-search search-icon"></i>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={handleSearch}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                            />
                            {searchQuery && (
                                <button className="clear-search" onClick={clearSearch}>
                                    <i className="fas fa-times"></i>
                                </button>
                            )}
                            <div className="search-glow"></div>
                        </div>
                    </div>
                </div>

                <div className="projects-grid">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <ProjectCard 
                                key={`${project.title}-${index}`} 
                                project={project} 
                                index={index} 
                            />
                        ))
                    ) : (
                        <div className="no-results">
                            <div className="no-results-content">
                                <div className="no-results-icon">
                                    <i className="fas fa-compass"></i>
                                    <div className="icon-ring"></div>
                                </div>
                                <h3>No projects found</h3>
                                <p>Try adjusting your search or filter to find what you're looking for</p>
                                <button 
                                    className="reset-button"
                                    onClick={() => {
                                        setActiveFilter('all');
                                        setSearchQuery('');
                                    }}
                                >
                                    <i className="fas fa-sync-alt"></i>
                                    Reset Filters
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;