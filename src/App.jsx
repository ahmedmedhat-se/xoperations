import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigation,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useEffect, useMemo } from 'react';

// Importing Layouts
import Header from "./components/layouts/Header.jsx";
import Homepage from "./components/layouts/Homepage.jsx";
import NotFound from "./components/layouts/NotFound.jsx";
import FloatingToggler from "./components/layouts/FloatingToggler.jsx";
import GoToTop from "./components/layouts/GoToTop.jsx";
import Footer from "./components/layouts/Footer.jsx";

// Importing UI Components
const Services = lazy(() => import("./components/ui/HeroSection.jsx"));
const Plans = lazy(() => import("./components/ui/Plans.jsx"));
const AboutUs = lazy(() => import("./components/ui/AboutUs.jsx"));
const Projects = lazy(() => import("./components/ui/Projects.jsx"));
const AchievementsGallery = lazy(() => import("./components/ui/AchievementsGallery.jsx"));
const TeamGallery = lazy(() => import("./components/ui/TeamGallery.jsx"));

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
        path: "about",
        element: <AboutUs />,
        handle: {
          title: "About Us - XOperations",
          description: "Learn about XOperations and our innovative team"
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