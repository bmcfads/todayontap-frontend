import { NavLink } from "react-router-dom";

export default function NavItemMobile({ href, children }) {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          "block px-2 py-1 font-extrabold text-slate-800 " +
          (isActive ? "underline" : "hover:underline")
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
