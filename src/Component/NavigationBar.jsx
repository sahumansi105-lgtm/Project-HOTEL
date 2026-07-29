import { Link } from 'react-router-dom'
import '../Styles/NavigationBar.css'

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logo.jpg" width="150" height="90" alt="Hotel logo" />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Acommodation">Acommodation</Link>
        <div className="dropdown">
          <span className="dropbtn">Facilities ▾</span>
          <div className="dropdown-content">
            <Link to="/Facilities/Activities">Activities</Link>
            <Link to="/Facilities/Advantage">Advantage</Link>
            <Link to="/Facilities/Spa">Spa</Link>
            <Link to="/Facilities/View">View</Link>
          </div>
        </div>
        <Link to="/Events">Events</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/booking"><button>Book Now</button></Link>
      </div>
    </nav>
  )
}

export default Navigation