// src/components/Header.jsx
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-5 flex justify-between items-center z-50 bg-[#081b29]">
      <NavLink to="/" className="text-white text-[2rem] font-bold">Asmit.</NavLink>
      <nav>
        <ul className="flex gap-6 text-white font-medium text-lg">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-cyan-400" : "hover:text-cyan-300"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-cyan-400" : "hover:text-cyan-300"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-cyan-400" : "hover:text-cyan-300"}>
              Portfolio
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
