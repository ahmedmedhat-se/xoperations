import Services from "../components/HeroSection.jsx";
import Plans from "../components/Plans.jsx";
import Projects from "../components/Projects.jsx";
import AchievementsGallery from "../components/AchievementsGallery.jsx";
import TechCourses from "../components/TechCourses.jsx";

function Homepage() {
    return (
        <>
            <div className="homepage container-fluid p-0 m-0">
                <Services />
                <Plans />
                <AchievementsGallery />
                <Projects />
                <TechCourses />
            </div>
        </>
    );
}

export default Homepage;