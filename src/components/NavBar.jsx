import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
        <img  src={"/src/public/movie-app.png"} alt="Movie App Logo" className="app-logo" />
            <Link to="/" style={{ color: '#e50914' }}>Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>;
}

export default NavBar

