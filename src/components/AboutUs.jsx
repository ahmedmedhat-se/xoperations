import data from "./data/XOperations.json";

const AboutUs = () => {
    const { company, services } = data;

    return (
        <div className="container-fluid about-container p-5">
            <h2 className='text-center fw-bold fs-3 mb-3'>About <span style={{ color: "#186cc7" }}>X</span>Operations</h2>
            <section className="about-section">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src="https://t4.ftcdn.net/jpg/02/70/00/57/360_F_270005769_k9nENNRBjtDZJV1LOClnlh1NVy3mdQfD.jpg"
                            alt="XOperations"
                            className="img-fluid rounded mb-4"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center fw-bold mb-4">{company.name}</h2>
                        <div className="about-description fs-5 mb-4">
                            <p>{company.description}</p>
                        </div>

                        <div className="services-section mb-4">
                            <h4 className="mb-3 fw-bold text-center">Our Services:</h4>
                            <ul>
                                <li className='fs-5'><strong>{services['software-service'].name}</strong></li>
                                <li className='fs-5'><strong>{services['repair-service'].name}</strong></li>
                                <li className='fs-5'><strong>{services['onsite-service'].name}</strong></li>
                                <li className='fs-5'><strong>{services['data-service'].name}</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-center fw-bold mb-4">Contacts</h2>
                        <div className="about-description mb-4">
                            <p className='fs-5'>{company.contact.description}</p>
                        </div>

                        <div className="contact-section">
                            <h4 className="text-center fw-bold mb-3">Find Us:</h4>
                            <p className='fs-5'><strong>Phone:</strong> {company.contact.phone}</p>
                            <p className='fs-5'><strong>Another Phone:</strong> {company.contact['another-phone']}</p>
                            <p className='fs-5'><strong>Email:</strong> <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a></p>
                            <p className='fs-5'><strong>Address:</strong> {company.contact.address}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="map-wrapper shadow-lg rounded-4 overflow-hidden position-relative" style={{
                            border: '2px solid rgba(7, 11, 255, 0.3)',
                            boxShadow: '0 8px 20px rgba(7, 102, 255, 0.2)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109180.09413296978!2d29.954885900000004!3d31.224110850000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1749895311731!5m2!1sen!2seg"
                                width="100%"
                                height="400"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="Alexandria, Egypt"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AboutUs;