import Services from "../Services.jsx";
import Installations from "../Installations.jsx";
import AboutUs from "../AboutUs.jsx";
import Projects from "../Projects.jsx";
import AchievementsGallery from "../AchievementsGallery.jsx";

function Homepage() {
    return (
        <>
            <div className="homepage container-fluid">
                <Services />
                <Installations />
                <AboutUs />
                <Projects />
                <AchievementsGallery />
            </div>
        </>
    );
}

export default Homepage;