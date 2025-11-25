import { useState, useMemo, useCallback, useEffect } from 'react';
import data from "../data/XOperations.json";
import XOperationsCover from "../assets/Xoperations Cover.png";

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

const LazyImage = ({ src, alt, className, onLoad }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageRef, isVisible] = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '50px'
    });

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
        onLoad?.();
    }, [onLoad]);

    return (
        <div ref={imageRef} className={`image-container ${className}`}>
            {isVisible && (
                <>
                    {!isLoaded && <LoadingSpinner />}
                    <img
                        src={src}
                        alt={alt}
                        onLoad={handleLoad}
                        className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
                        loading="lazy"
                    />
                </>
            )}
        </div>
    );
};

const ContactInfo = ({ contact }) => {
    const contactItems = useMemo(() => [
        {
            label: "Phone",
            value: contact.phone,
            type: "phone",
            href: `tel:${contact.phone}`
        },
        {
            label: "Another Phone",
            value: contact['another-phone'],
            type: "phone",
            href: `tel:${contact['another-phone']}`
        },
        {
            label: "Email",
            value: contact.email,
            type: "email",
            href: `mailto:${contact.email}`
        },
        {
            label: "Address",
            value: contact.address,
            type: "address",
            href: `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`
        }
    ], [contact]);

    return (
        <div className="contact-info">
            {contactItems.map((item, index) => (
                <div key={item.label} className="contact-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <strong>{item.label}:</strong>
                    {item.type === 'email' || item.type === 'phone' ? (
                        <a 
                            href={item.href} 
                            className="contact-link"
                            aria-label={`${item.label}: ${item.value}`}
                        >
                            {item.value}
                        </a>
                    ) : (
                        <a 
                            href={item.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contact-link"
                            aria-label={`View ${item.label} on map`}
                        >
                            {item.value}
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

const InteractiveMap = () => {
    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapRef, isMapVisible] = useIntersectionObserver({
        threshold: 0.1
    });

    const handleMapLoad = useCallback(() => {
        setMapLoaded(true);
    }, []);

    return (
        <div 
            ref={mapRef}
            className={`map-wrapper ${mapLoaded ? 'loaded' : 'loading'}`}
        >
            {!mapLoaded && (
                <div className="map-placeholder">
                    <LoadingSpinner />
                    <p>Loading map...</p>
                </div>
            )}
            {isMapVisible && (
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109180.09413296978!2d29.954885900000004!3d31.224110850000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1749895311731!5m2!1sen!2seg"
                    width="100%"
                    height="400"
                    style={{ border: 0, opacity: mapLoaded ? 1 : 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="Alexandria, Egypt"
                    onLoad={handleMapLoad}
                    loading="lazy"
                />
            )}
        </div>
    );
};

const AboutUs = () => {
    const { company } = data;
    const [sectionRef, isSectionVisible] = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '-50px'
    });
    const memoizedCompany = useMemo(() => company, [company]);

    return (
        <section 
            ref={sectionRef}
            className={`container-fluid about-container ${isSectionVisible ? 'visible' : ''}`}
            aria-labelledby="about-heading"
        >
            <h2 id="about-heading" className='text-center fw-bold fs-2 mb-5'>
                About <span style={{ color: "#186cc7" }}>X</span>Operations
            </h2>
            
            <section className="about-section" role="article">
                <div className="row align-items-stretch gy-5">
                    <div className="col-12 col-lg-6">
                        <LazyImage
                            src={XOperationsCover}
                            alt="XOperations Company Overview"
                            className="company-image rounded-3 shadow-lg"
                        />
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column">
                        <div className="company-info flex-grow-1">
                            <h2 className="text-center fw-bold mb-4 gradient-text">
                                {memoizedCompany.name}
                            </h2>
                            <div className="about-description fs-5 mb-4">
                                <p className="lead">{memoizedCompany.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gy-5 mt-4">
                    <div className="col-12 col-lg-12">
                        <InteractiveMap />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AboutUs;