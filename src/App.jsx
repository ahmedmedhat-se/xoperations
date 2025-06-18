import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// Importing Layouts
import Header from "./components/layouts/Header.jsx";
import Homepage from "./components/layouts/Homepage.jsx";
import NotFound from "./components/layouts/NotFound.jsx";
import FloatingToggler from "./components/layouts/FloatingToggler.jsx";
import GoToTop from "./components/layouts/GoToTop.jsx";
import Footer from "./components/layouts/Footer.jsx";

// Importing Main Components
import Services from "./components/main/HeroSection.jsx";
import Plans from "./components/main/Plans.jsx";
import AboutUs from "./components/main/AboutUs.jsx";
import Projects from "./components/main/Projects.jsx";
import AchievementsGallery from "./components/main/AchievementsGallery.jsx";

// Root Layout with shared components
const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    <FloatingToggler />
    <GoToTop />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/xoperations/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "*", element: <NotFound /> },

      { path: "services", element: <Services /> },
      { path: "plans", element: <Plans /> },
      { path: "about", element: <AboutUs /> },
      { path: "projects-showcase", element: <Projects /> },
      { path: "achievements-gallery", element: <AchievementsGallery /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />   
  );
}

export default App;