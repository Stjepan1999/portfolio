import { NavLink } from 'react-router-dom';
import './Header.scss';
import { Sidebar } from '../Sidebar/Sidebar';

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        Stjepan
      </NavLink>
      <nav className="nav-bar">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/resume" className="nav-link">
          Resume
        </NavLink>
      </nav>
      <Sidebar />
    </header>
  );
};
