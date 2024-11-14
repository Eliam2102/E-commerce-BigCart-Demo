import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar/components/NavBar';
import routes from './components/Routes/AppRoutes';
import Footer from './components/Control/components/Footer';

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTop = 0; // Reiniciar el scroll dentro del main
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* El contenido principal (las rutas) se renderizan fuera del Navbar */}
      <main>
        <ScrollToTop /> {/* Este componente maneja el scroll */}
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
