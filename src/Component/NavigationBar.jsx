import { Link } from 'react-router-dom';
import '../Styles/NavigationBar.css';

function Navigation() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Hotel Paradise Jaisalmer"
          />
        </Link>
      </div>

      {/* NAVIGATION LINKS */}
      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/accommodation">Accommodation</Link>

        {/* FACILITIES DROPDOWN */}
        <div className="dropdown">
          <span className="dropbtn">
            Facilities <span>▾</span>
          </span>

          <div className="dropdown-content">
            <Link to="/facilities/activities">Activities</Link>
            <Link to="/facilities/spa">Spa</Link>
            <Link to="/facilities/view">Desert View</Link>
            <Link to="/facilities/advantage">Our Advantages</Link>
          </div>
        </div>

        <Link to="/events">Events</Link>

        <Link to="/contact">Contact</Link>

        {/* BOOK NOW BUTTON */}
        <Link to="/booking" className="book-btn">
          Book Now
        </Link>

      </div>
    </nav>
  );
}

export default Navigation;