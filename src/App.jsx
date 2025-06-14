import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// Importing Layouts
import Header from "./components/layouts/Header.jsx";
import Homepage from "./components/layouts/Homepage.jsx";
import NotFound from "./components/layouts/NotFound.jsx";
import GoToTop from "./components/layouts/GoToTop.jsx";
import Footer from "./components/layouts/Footer.jsx";

// Importing Components
import Services from "./components/Services.jsx";
import Installations from "./components/Installations.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Projects from "./components/Projects.jsx";
import AchievementsGallery from "./components/AchievementsGallery.jsx";

// Root Layout with shared components
const RootLayout = () => (
  <>
    <Header />
    <Outlet />
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
      { path: "installations", element: <Installations /> },
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