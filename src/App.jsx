import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import NavigationBar from './Component/NavigationBar';

import Home from './Pages/Home';
import Acommodation from './Pages/Acommodation';
import Booking from './Pages/Booking';
import Contact from './Pages/Contact';
import Events from './Pages/Events';

import Activities from './Page1/Activities';
import Advantage from './Page1/Advantage';
import Spa from './Page1/Spa';
import View from './Page1/View';
import ScrollToTop from './Component/ScrollToTop';
import Footer from './Component/Footer';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <NavigationBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation" element={<Acommodation />} />

          <Route path="/facilities/activities" element={<Activities />} />
          <Route path="/facilities/advantage" element={<Advantage />} />
          <Route path="/facilities/spa" element={<Spa />} />
          <Route path="/facilities/view" element={<View />} />

          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;