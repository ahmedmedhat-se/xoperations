import { useState, useMemo, useCallback, useEffect } from 'react';
import data from "../json/XOperations.json";
import XOperationsCover from "../assets/Xoperations Cover.png";
import "../styles/about-us.css";

const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [ref, setRef] = useState(null);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(([entry]) => {
            const intersecting = entry.isIntersecting;
            setIsIntersecting(intersecting);
            if (intersecting && !hasAnimated) {
                setHasAnimated(true);
            }
        }, options);

        observer.observe(ref);

        return () => observer.disconnect();
    }, [ref, options, hasAnimated]);

    return [setRef, isIntersecting, hasAnimated];
};

const LoadingSpinner = ({ size = "medium" }) => {
    const sizes = {
        small: "spinner-sm",
        medium: "spinner-md",
        large: "spinner-lg"
    };

    return (
        <div className={`loading-spinner-container ${sizes[size]}`}>
            <div className="spinner-ring">
                <div className="spinner-inner-ring"></div>
            </div>
            <div className="spinner-dots">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="spinner-dot" style={{ animationDelay: `${i * 0.1}s` }}></div>
                ))}
            </div>
        </div>
    );
};

const LazyImage = ({ src, alt, className, onLoad, parallax = true }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [imageRef, isVisible, hasAnimated] = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '100px'
    });

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
        onLoad?.();
    }, [onLoad]);

    return (
        <div 
            ref={imageRef} 
            className={`image-container ${className} ${parallax ? 'parallax-container' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="image-frame">
                <div className="image-corner corner-tl"></div>
                <div className="image-corner corner-tr"></div>
                <div className="image-corner corner-bl"></div>
                <div className="image-corner corner-br"></div>
                
                {isVisible && (
                    <>
                        {!isLoaded && (
                            <div className="image-skeleton">
                                <LoadingSpinner />
                                <div className="skeleton-shimmer"></div>
                            </div>
                        )}
                        <img
                            src={src}
                            alt={alt}
                            onLoad={handleLoad}
                            className={`lazy-image ${isLoaded ? 'loaded' : 'loading'} ${isHovered ? 'hovered' : ''}`}
                            loading="lazy"
                            style={{
                                transform: parallax ? `scale(${isHovered ? 1.05 : 1})` : 'none'
                            }}
                        />
                    </>
                )}
                <div className="image-overlay"></div>
                <div className="image-reflection"></div>
            </div>
            <div className="image-particles">
                {[...Array(8)].map((_, i) => (
                    <div 
                        key={i} 
                        className="image-particle"
                        style={{
                            '--particle-index': i,
                            animationDelay: `${i * 0.2}s`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

const ContactInfo = ({ contact }) => {
    const [activeContact, setActiveContact] = useState(null);

    const contactItems = useMemo(() => [
        {
            label: "Phone",
            value: contact.phone,
            type: "phone",
            href: `tel:${contact.phone}`,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C18.75 20.92 16.68 20.31 14.93 19.21C13.32 18.2 11.96 16.83 10.94 15.22C9.84 13.47 9.23 11.4 9.23 9.15C9.23 8.6 9.68 8.15 10.23 8.15H13.23C13.78 8.15 14.23 7.7 14.23 7.15C14.23 5.14 13.64 3.26 12.55 1.69C12.29 1.29 11.83 1.08 11.36 1.15C10.99 1.21 10.64 1.45 10.43 1.82L8.45 5.4C8.23 5.79 8.19 6.26 8.33 6.68C8.46 7.1 8.76 7.44 9.16 7.62" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            color: "#186cc7"
        },
        {
            label: "Another Phone",
            value: contact['another-phone'],
            type: "phone",
            href: `tel:${contact['another-phone']}`,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            color: "#10B981"
        },
        {
            label: "Email",
            value: contact.email,
            type: "email",
            href: `mailto:${contact.email}`,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            color: "#4F46E5"
        },
        {
            label: "Address",
            value: contact.address,
            type: "address",
            href: `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            color: "#F59E0B"
        }
    ], [contact]);

    return (
        <div className="contact-grid">
            {contactItems.map((item, index) => (
                <a
                    key={item.label}
                    href={item.href}
                    target={item.type === 'address' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`contact-card ${activeContact === index ? 'active' : ''}`}
                    onMouseEnter={() => setActiveContact(index)}
                    onMouseLeave={() => setActiveContact(null)}
                    onClick={(e) => {
                        if (item.type === 'address') {
                            e.preventDefault();
                            window.open(item.href, '_blank');
                        }
                    }}
                    style={{ '--card-color': item.color, animationDelay: `${index * 0.1}s` }}
                >
                    <div className="contact-card-inner">
                        <div className="contact-icon">
                            {item.icon}
                        </div>
                        <div className="contact-content">
                            <div className="contact-label">{item.label}</div>
                            <div className="contact-value">{item.value}</div>
                        </div>
                        <div className="contact-wave"></div>
                        <div className="contact-sparkles">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="sparkle" style={{ animationDelay: `${i * 0.1}s` }}></div>
                            ))}
                        </div>
                    </div>
                    <div className="contact-ripple"></div>
                </a>
            ))}
        </div>
    );
};

const InteractiveMap = () => {
    const [mapLoaded, setMapLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [mapRef, isMapVisible] = useIntersectionObserver({
        threshold: 0.1
    });

    const handleMapLoad = useCallback(() => {
        setMapLoaded(true);
    }, []);

    return (
        <div 
            ref={mapRef}
            className={`map-container ${mapLoaded ? 'loaded' : 'loading'} ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="map-header">
                <div className="map-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" 
                              stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" 
                              stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <h3>Our Location in Alexandria</h3>
                </div>
                <div className="map-indicator">
                    <span className="pulse-dot"></span>
                    <span>Active Location</span>
                </div>
            </div>
            
            <div className="map-wrapper">
                {!mapLoaded && (
                    <div className="map-placeholder">
                        <LoadingSpinner />
                        <div className="placeholder-wave"></div>
                        <p>Loading interactive map...</p>
                    </div>
                )}
                
                <div className="map-frame">
                    <div className="map-corner corner-tl"></div>
                    <div className="map-corner corner-tr"></div>
                    <div className="map-corner corner-bl"></div>
                    <div className="map-corner corner-br"></div>
                    
                    {isMapVisible && (
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109180.09413296978!2d29.954885900000004!3d31.224110850000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1749895311731!5m2!1sen!2seg"
                            width="100%"
                            height="400"
                            style={{ opacity: mapLoaded ? 1 : 0 }}
                            allowFullScreen=""
                            aria-label="Interactive map of Alexandria, Egypt"
                            onLoad={handleMapLoad}
                            loading="lazy"
                            className={`map-iframe ${mapLoaded ? 'visible' : ''}`}
                        />
                    )}
                </div>
                
                <div className="map-overlay"></div>
                <div className="map-highlights">
                    <div className="highlight-point" style={{ left: '45%', top: '35%' }}>
                        <div className="highlight-pulse"></div>
                        <div className="highlight-label">Our Office</div>
                    </div>
                </div>
            </div>
            
            <div className="map-footer">
                <div className="map-coordinates">
                    <span>📍 31.2241° N, 29.9549° E</span>
                </div>
            </div>
        </div>
    );
};

const CompanyStats = () => {
    const stats = [
        { value: "10+", label: "Successful Projects", description: "Delivered with excellence" },
        { value: "98%", label: "Client Satisfaction", description: "Happy customers nationwide" },
        { value: "24/7", label: "Support Available", description: "Always here to help" },
        { value: "50+", label: "Expert Partners", description: "Skilled professionals" }
    ];

    return (
        <div className="stats-grid">
            {stats.map((stat, index) => (
                <div 
                    key={stat.label} 
                    className="stat-card"
                    style={{ animationDelay: `${index * 0.2}s` }}
                >
                    <div className="stat-background"></div>
                    <div className="stat-content">
                        <div className="stat-value-wrapper">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-sparkle"></div>
                        </div>
                        <div className="stat-label">{stat.label}</div>
                        <div className="stat-description">{stat.description}</div>
                        <div className="stat-progress">
                            <div 
                                className="progress-bar" 
                                style={{ width: `${index === 0 ? 100 : index === 1 ? 98 : index === 2 ? 100 : 95}%` }}
                            ></div>
                        </div>
                    </div>
                    <div className="stat-ornament"></div>
                </div>
            ))}
        </div>
    );
};

const AboutUs = () => {
    const { company } = data;
    const [sectionRef, isSectionVisible, hasAnimated] = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '-50px'
    });
    
    const memoizedCompany = useMemo(() => company, [company]);
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <section 
            ref={sectionRef}
            className={`container-fluid about-container ${isSectionVisible ? 'visible' : ''}`}
            aria-labelledby="about-heading"
        >
            <div className="about-background">
                <div className="bg-orb orb-1"></div>
                <div className="bg-orb orb-2"></div>
                <div className="bg-grid"></div>
                <div className="bg-particles">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className="bg-particle" style={{ '--i': i }}></div>
                    ))}
                </div>
            </div>
            <div className="about-wrapper">
                <header className="about-header">
                    <div className="header-badge">
                        <span className="badge-text">Pioneering Excellence</span>
                        <div className="badge-sparkle"></div>
                    </div>
                    
                    <h1 id="about-heading" className='about-title'>
                        <span className="title-gradient">About</span>
                        <span className="title-accent">X</span>
                        <span className="title-main">Operations</span>
                    </h1>
                    
                    <p className="about-subtitle">
                        Leading the digital revolution in Egypt with innovative software solutions
                    </p>
                    
                    <div className="title-underline">
                        <div className="underline-progress"></div>
                    </div>
                </header>
                <div className="about-tabs">
                    {['overview', 'mission', 'vision', 'contact'].map((tab) => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            <span className="tab-text">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                            <span className="tab-indicator"></span>
                        </button>
                    ))}
                </div>
                <div className="about-content">
                    <div className="row gy-5 align-items-stretch">
                        <div className="col-12 col-lg-6">
                            <LazyImage
                                src={XOperationsCover}
                                alt="XOperations Company - Digital Transformation Leaders"
                                className="company-image"
                                parallax={true}
                            />
                            <div className="image-caption">
                                <div className="caption-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <p>XOperations headquarters - Where innovation meets excellence</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="content-wrapper">
                                <div className={`tab-content ${activeTab === 'overview' ? 'active' : ''}`}>
                                    <h2 className="company-name gradient-text">
                                        <span className="name-glow">{memoizedCompany.name}</span>
                                    </h2>
                                    
                                    <div className="company-description">
                                        <p className="lead-text">{memoizedCompany.description}</p>
                                        
                                        <div className="highlight-points">
                                            <div className="highlight-item">
                                                <div className="highlight-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                                <span>Customized software solutions</span>
                                            </div>
                                            <div className="highlight-item">
                                                <div className="highlight-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                                <span>Digital transformation expertise</span>
                                            </div>
                                            <div className="highlight-item">
                                                <div className="highlight-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                                <span>24/7 dedicated support</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={`tab-content ${activeTab === 'mission' ? 'active' : ''}`}>
                                    <h3 className="tab-title">Our Mission</h3>
                                    <p className="tab-description">
                                        To empower Egyptian businesses with cutting-edge digital solutions 
                                        that drive growth, efficiency, and competitive advantage in the 
                                        global market.
                                    </p>
                                </div>
                                
                                <div className={`tab-content ${activeTab === 'vision' ? 'active' : ''}`}>
                                    <h3 className="tab-title">Our Vision</h3>
                                    <p className="tab-description">
                                        To be Egypt's foremost digital transformation partner, recognized 
                                        for innovation, reliability, and transformative impact on businesses.
                                    </p>
                                </div>
                                
                                <div className={`tab-content ${activeTab === 'contact' ? 'active' : ''}`}>
                                    <h3 className="tab-title">Get in Touch</h3>
                                    <ContactInfo contact={memoizedCompany.contact} />
                                </div>
                                <div className="company-stats-section">
                                    <CompanyStats />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <InteractiveMap />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="decorative-elements">
                <div className="decoration decoration-1"></div>
                <div className="decoration decoration-2"></div>
                <div className="decoration decoration-3"></div>
                <div className="decoration decoration-4"></div>
            </div>
        </section>
    );
};

export default AboutUs;