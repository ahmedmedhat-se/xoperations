import Services from "../ui/HeroSection.jsx";
import Plans from "../ui/Plans.jsx";
import Projects from "../ui/Projects.jsx";
import AchievementsGallery from "../ui/AchievementsGallery.jsx";
import "../styles/homepage.css";

function Homepage() {
    return (
        <>
            <div className="homepage container-fluid">
                <Services />
                <Plans />
                <Projects />
                <AchievementsGallery />
            </div>
        </>
    );
}

export default Homepage;