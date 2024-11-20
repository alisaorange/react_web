import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

interface NavLink {
  label: string;
  href: string;
}

interface NavBarProps {
  links: NavLink[];
}

const NavLinkItem: React.FC<NavLink> = React.memo(({ label, href }) => (
  <Link to={href} className="nav-link">
    {label}
  </Link>
));

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <nav className="nav">
      <span className="nav-links">
        {links.map((link, index) => (
          <NavLinkItem key={index} label={link.label} href={link.href} />
        ))}
      </span>
    </nav>
  );
};

export default NavBar;

// const NavBar: React.FC = () => {
//     return (
//         <nav className="nav">
//             <Link to="/" className="nav-link">Главная</Link>
//             <Link to="/profile" className="nav-link">Профиль</Link>
//         </nav>
//     );
// };
//
// export default NavBar;
