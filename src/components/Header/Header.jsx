import { Link, NavLink } from "react-router";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__title">
          <h2 className="header__text">Track Your Learning</h2>
        </Link>
        <div className="header__nav">
          <NavLink to="/learn" className="header__nav-link">
            Learn
          </NavLink>
          <NavLink to="/profile" className="header__nav-link">
            Profile
          </NavLink>
        </div>
      </div>
    </header>
  );
}
