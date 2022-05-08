import { NavLink } from "react-router-dom";

export default function NavItem({ href, children }) {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          "p-2 rounded-full font-extrabold " +
          (isActive
            ? "bg-slate-800 text-white "
            : "text-slate-800 hover:bg-slate-800 hover:text-white")
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
