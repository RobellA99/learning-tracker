import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <header className="header">
      <Link to="/learn" className="header__logo">
        Learning Tracker
      </Link>
      <nav className="header__nav">
        <Link to="/learn" className="header__link">
          Learn
        </Link>
        <Link to="/profile" className="header__link">
          Profile
        </Link>
        <button className="header__logout" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
}
