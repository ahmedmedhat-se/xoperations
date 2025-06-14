import "./styles/Project.css";

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
    },
    {
        title: "Emovate",
        year: "2023 - Present",
        genres: ["AI", "Education", "Mobile App"],
        description: "Emovate is an AI-powered productivity app for students, offering smart scheduling, parental oversight, gamified rewards, and engagement tools like Streaks Pet to enhance learning focus.",
        imageUrl: "https://kalpratech.com/wp-content/uploads/2024/08/AI-in-Education_bg.webp",
        projectUrl: "https://emovate.netlify.app"
    },
    {
        title: "Aqua Flow",
        year: "2023",
        genres: ["IoT", "Hardware", "Mobile App"],
        description: "A smart faucet-mounted device that measures water flow and temperature, with mobile app control and real-time monitoring via an electronic control unit.",
        imageUrl: "https://nsmart.io/wp-content/uploads/2021/02/Water-1.png",
        projectUrl: "https://drive.google.com/drive/folders/1_gpCDC_-lxU3wDuglqqaZLxJKLK66Xy2?usp=drive_link "
    },
];

const Projects = () => {
    return (
        <div className="project-container container-fluid p-5">
            <h2 className="fw-bold text-center"><span style={{ color: "#186cc7" }}>X</span>Operations Projects!</h2>
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