import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigation,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useEffect, useMemo } from 'react';

// Importing Layouts
import Header from "./app/layout/Header.jsx";
import Homepage from "./app/layout/Homepage.jsx";
import NotFound from "./app/layout/NotFound.jsx";
import FloatingToggler from "./app/layout/FloatingToggler.jsx";
import GoToTop from "./app/layout/GoToTop.jsx";
import Footer from "./app/layout/Footer.jsx";

// Importing components app
const Services = lazy(() => import("./app/components/HeroSection.jsx"));
const Plans = lazy(() => import("./app/components/Plans.jsx"));
const Projects = lazy(() => import("./app/components/Projects.jsx"));
const AchievementsGallery = lazy(() => import("./app/components/AchievementsGallery.jsx"));
const AboutUs = lazy(() => import("./app/components/AboutUs.jsx"));
const TechCourses = lazy(() => import("./app/components/TechCourses.jsx"));
const TeamGallery = lazy(() => import("./app/components/TeamGallery.jsx"));

const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner">
      <div className="spinner-ring"></div>
      <div className="spinner-ring"></div>
      <div className="spinner-ring"></div>
      <div className="spinner-center"></div>
    </div>
    <p className="loading-text">Loading amazing content...</p>
  </div>
);

const ErrorBoundary = ({ children }) => {
  return children;
};

const RouteLoader = ({ children }) => {
  const navigation = useNavigation();
  const location = useLocation();
  useEffect(() => {
    if (navigation.state === 'idle') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, navigation.state]);

  if (navigation.state === 'loading') {
    return <LoadingSpinner />;
  }

  return children;
};

const RootLayout = () => {
  const location = useLocation();
  const Layout = useMemo(() => (
    <div className="app-layout" data-path={location.pathname}>
      <ErrorBoundary>
        <Header />
        <main className="main-content" role="main">
          <RouteLoader>
            <Suspense fallback={<LoadingSpinner />}>
              <Outlet />
            </Suspense>
          </RouteLoader>
        </main>
        <FloatingToggler />
        <GoToTop />
        <Footer />
      </ErrorBoundary>
    </div>
  ), [location.pathname]);

  return Layout;
};

const createRouteConfig = () => [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Homepage />,
        handle: {
          title: "XOperations - Home",
          description: "Innovative software solutions and development services"
        }
      },
      {
        path: "services",
        element: <Services />,
        handle: {
          title: "Our Services - XOperations",
          description: "Explore our comprehensive software development services"
        }
      },
      {
        path: "plans",
        element: <Plans />,
        handle: {
          title: "Plans & Pricing - XOperations",
          description: "Choose the perfect plan for your software development needs"
        }
      },
      {
        path: "projects-showcase",
        element: <Projects />,
        handle: {
          title: "Projects Showcase - XOperations",
          description: "Discover our portfolio of successful software projects"
        }
      },
      {
        path: "achievements-gallery",
        element: <AchievementsGallery />,
        handle: {
          title: "Achievements - XOperations",
          description: "Celebrating our milestones and accomplishments"
        }
      },
      {
        path: "about-us",
        element: <AboutUs />,
        handle: {
          title: "Achievements - XOperations",
          description: "Celebrating our milestones and accomplishments"
        }
      },
      {
        path: "courses",
        element: <TechCourses />,
        handle: {
          title: "Tech Courses - XOperations",
          description: "New Uploaded Courses for Students"
        }
      },
      {
        path: "team-gallery",
        element: <TeamGallery />,
        handle: {
          title: "Our Team - XOperations",
          description: "Meet the talented professionals behind XOperations"
        }
      },
    ],
  },
];

const createAppRouter = () => {
  const routeConfig = createRouteConfig();

  return createBrowserRouter(routeConfig, {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  });
};

const usePerformanceMonitor = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🚀 XOperations App mounted - Performance monitoring active');
    }
  }, []);
};

function App() {
  usePerformanceMonitor();
  const router = useMemo(() => createAppRouter(), []);

  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;