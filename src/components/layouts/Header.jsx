import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const [user, setUser] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const updateUser = () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (error) {
                console.error("Error parsing user data:", error);
                setUser(null);
            }
        } else {
            setUser(null);
        }
    };

    useEffect(() => {
        updateUser();
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        window.location.href = '/';
    };

    const routes = [
        { path: "/xoperations/services", name: "Services" },
        { path: "/xoperations/installations", name: "Installations" },
        { path: "/xoperations/about", name: "About" },
        { path: "/xoperations/projects-showcase", name: "Projects" },
        { path: "/xoperations/achievements-gallery", name: "Achievements" },
    ];

    return (
        <nav className={`navbar navbar-expand-lg p-4 shadow-sm fixed-top header-nav ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <Link className="navbar-brand" to="/xoperations">
                    <strong><span style={{ color: "#186cc7" }}>X</span>Operations</strong>
                </Link>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                    style={{ backgroundColor: "#186cc7" }}
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
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;