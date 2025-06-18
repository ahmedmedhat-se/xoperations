import Services from "../main/Services.jsx";
import Plans from "../main/Plans.jsx";
import AboutUs from "../main/AboutUs.jsx";
import Projects from "../main/Projects.jsx";
import AchievementsGallery from "../main/AchievementsGallery.jsx";

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