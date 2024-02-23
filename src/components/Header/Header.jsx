import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div>Stjepan</div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </header>
  );
};
