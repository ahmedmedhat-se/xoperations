import "../styles/projects.css";

const projects = [
    {
        title: "Anany AC",
        year: "2025",
        genres: ["Html5", "Css3", "JavaScript", "Bootstrap 5"],
        description: "An expert air conditioning repair company website across the UAE.",
        imageUrl: "https://anany-ac.com/assets/2cursel3.webp",
        projectUrl: "https://anany-ac.com/"
    },
    {
        title: "WattWizards",
        year: "2023 - Present",
        genres: ["Web App", "Electrical Services"],
        description: "WattWizards—Egypt’s first all-in-one circuit analysis platform—turns complex engineering into click-and-go simplicity.",
        imageUrl: "https://img.freepik.com/premium-photo/male-electrician-hard-hat-works-with-wires-art-electrician-s-day-labor-day-ai-generated_894218-1825.jpg",
        projectUrl: "https://ahmedmedhat-se.github.io/wattwizards-platform/"
    },
    {
        title: "Blood Bank",
        year: "2023 - 2024",
        genres: ["Mobile App", "Health & Care", "Hospitals", "Blood Donations"],
        description: "A mobile app with dark/light mode and real-time API support.",
        imageUrl: "https://www.sarasolutions.in/assets/images/products/b-bank-3.png",
        projectUrl: "https://www.dostor.org/4685613"
    }
];

const Projects = () => {
    return (
        <div className="project-container container-fluid p-5">
            <h2 className="fw-bold text-center text-light pt-5"><span style={{ color: "#186cc7" }}>X</span>Operations Projects!</h2>
            <div className="row gy-4">
                {projects.map((project, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="project-card">
                            <div className="project-img-container">
                                <div
                                    className="project-img"
                                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                                ></div>
                                <div className="movie-overlay"></div>
                            </div>
                            <div className="project-content">
                                <div className="title-row">
                                    <div className="project-title">{project.title}</div>
                                    <div className="year-badge">{project.year}</div>
                                </div>
                                <div className="genres">
                                    {project.genres.map((genre, i) => (
                                        <div className="genre-tag" key={i}>
                                            {genre}
                                        </div>
                                    ))}
                                </div>
                                <div className="description-section">
                                    <div className="section-title">Description</div>
                                    <div className="project-description">{project.description}</div>
                                </div>
                                <div className="action-row">
                                    <a className="project-btn" href={project.projectUrl}
                                        target="_blank">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Projects;