import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavigationBar from './Component/NavigationBar'
import Home from './Pages/Home'
import Acommodation from './Pages/Acommodation'
import Booking from './Pages/Booking'
import Contact from './Pages/Contact'
import Events from './Pages/Events'
import Facilites from './Pages/Facilites'
import Activities from './Page1/Activities'
import Advantage from './Page1/Advantage'
import Spa from './Page1/Spa'
import View from './Page1/View'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Acommodation" element={<Acommodation />} />
          <Route path="/Facilities/Activities" element={<Activities />} />
          <Route path="/Facilities/Advantage" element={<Advantage />} />
          <Route path="/Facilities/Spa" element={<Spa />} />
          <Route path="/Facilities/View" element={<View />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
