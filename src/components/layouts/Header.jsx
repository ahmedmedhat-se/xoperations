import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const routes = [
        { path: "/plans", name: "Plans" },
        { path: "/projects-showcase", name: "Projects" },
        { path: "/achievements-gallery", name: "Achievements" },
        { path: "/team-gallery", name: "Team" },
    ];

    return (
        <nav className={`navbar navbar-expand-lg p-3 shadow-sm fixed-top header-nav ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <strong><span style={{ color: "#186cc7" }}>X</span>Operations</strong>
                </Link>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                    style={{ backgroundColor: "#c9d5e2ff", color: "#fff" }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            <strong><span style={{ color: "#186cc7" }}>X</span>Operations</strong>
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-dark"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            {routes.map((route, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link text-uppercase fw-bold text-dark" to={route.path}>
                                        {route.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <a href="https://www.facebook.com/share/1AynM4FeVR/"
                                target="_blank" className="text-dark fs-5">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.instagram.com/xoperations.ig?igsh=MXM1cjhyZnhiZ2VlZg=="
                                target="_blank" className="text-dark fs-5">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://youtube.com/@xoperations?si=Cl1zf9w4K1LJtytQ"
                                target="_blank" className="text-dark fs-5">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="https://www.linkedin.com/company/xoperations-official/" 
                                target='_blank' className="text-dark fs-5">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="mailto:xoperations.contact@gmail.com"
                                target="_blank" className="text-dark fs-5">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;