import Services from "../ui/HeroSection.jsx";
import Plans from "../ui/Plans.jsx";
import AboutUs from "../ui/AboutUs.jsx";
import Projects from "../ui/Projects.jsx";
import AchievementsGallery from "../ui/AchievementsGallery.jsx";

function Homepage() {
    return (
        <>
            <div className="homepage container-fluid">
                <Services />
                <Plans />
                <AboutUs />
                <Projects />
                <AchievementsGallery />
            </div>
        </>
    );
}

export default Homepage;