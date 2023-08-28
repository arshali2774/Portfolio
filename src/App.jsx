import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader/index';
import Landing from './pages/Landing/index';
import HomeLayout from './pages/HomeLayout/index';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/ContactPage/index';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  const route = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: '/work',
          element: <Work />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {/* <Header />
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact /> */}
      <RouterProvider router={route} />
    </main>
  );
}

export default App;
