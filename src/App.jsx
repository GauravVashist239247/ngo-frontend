// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footers';
import Home from './pages/Home';
import About from './pages/About';

import Contact from './components/Contact';

import Banner from './pages/Banner';
import Gallery from './pages/Gallery';
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import FAQ from './pages/FAQ';
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {/* Sticky Navbar */}
      <Navbar />
    
      {/* Page content */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Donate" element={  <Donate/>} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Only show these sections on Home page */}
        {isHome && (
          <>
               
                <Volunteer/>
                <Banner />
                <FAQ />
                
          </>
        )}
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
