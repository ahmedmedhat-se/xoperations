import Services from "../ui/HeroSection.jsx";
import Plans from "../ui/Plans.jsx";
import Projects from "../ui/Projects.jsx";
import AchievementsGallery from "../ui/AchievementsGallery.jsx";

function Homepage() {
    return (
        <>
            <div className="homepage container-fluid p-0 m-0">
                <Services />
                <Plans />
                <Projects />
                <AchievementsGallery />
            </div>
        </>
    );
}

export default Homepage;