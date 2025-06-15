import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import data from '../data/XOperations.json';
import { Link, useLocation } from 'react-router-dom';


function Footer() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <footer className="text-center text-lg-start bg-body-tertiary">
            <section>
                <div className="container text-center text-md-start p-5">
                    <div className="row">
                        <div className="col-md-4 mx-auto mb-4">
                            <Link to="/xoperations">
                                <img
                                    src={`${import.meta.env.BASE_URL}main-logo.jpg`}
                                    alt="Logo"
                                    className="img-fluid-center mb-3"
                                    style={{ maxWidth: '100px' }}
                                />
                            </Link>
                            <p>{data.company.description}</p>
                        </div>
                        <div className="col-md-4 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 fs-5">Features</h6>
                            <p>
                                <Link to="/xoperations/services" className='fs-5'>Services</Link>
                            </p>
                            <p>
                                <Link to="/xoperations/installations" className='fs-5'>Installations</Link>
                            </p>
                            <p>
                                <Link to="/xoperations/projects-showcase" className='fs-5'>Projects</Link>
                            </p>
                            <p>
                                <Link to="/xoperations/achievements-gallery" className='fs-5'>Achievments</Link>
                            </p>
                            <p>
                                <Link to="/xoperations/about" className='fs-5'>About Us</Link>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 fw-bold">
                            <h6 className="text-uppercase fw-bold fs-5 mb-5">Contact</h6>
                            <p><FontAwesomeIcon icon={faHome} className="me-3" />{data.company.contact.address}</p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                                <a href="mailto:xoperations.contact@gmail.com" target='_blank'
                                    className="link-primary">xoperations.contact@gmail.com</a>
                            </p>
                            <p><FontAwesomeIcon icon={faPhone} className="me-3" />{data.company.contact['phone']}</p>
                        </div>

                    </div>
                    <div className="row">
                        <section className="d-flex justify-content-center justify-content-lg-between border-bottom">
                            <div className="d-none d-lg-block">
                                <span className='fw-bold'>Get connected with us on social networks:</span>
                            </div>

                            <div>
                                <a href="https://www.facebook.com/share/1AynM4FeVR/" target='_blank' className="me-4 text-reset">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="https://www.instagram.com/xoperations.ig?igsh=MXM1cjhyZnhiZ2VlZg==" target='_blank' className="me-4 text-reset">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://youtube.com/@xoperations?si=Cl1zf9w4K1LJtytQ" target='_blank' className="me-4 text-reset">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>

                            </div>
                            <p className='fw-bold'>© {new Date().getFullYear()} Copyright: xoperations.com</p>
                        </section>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;