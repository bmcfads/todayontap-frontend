import { NavLink } from "react-router-dom";

export default function NavItem({ href, children }) {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          "block p-3 rounded-full font-extrabold " +
          (isActive
            ? "rounded-full bg-slate-800 text-white "
            : "text-slate-800 hover:rounded-full hover:bg-slate-800 hover:text-white")
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
