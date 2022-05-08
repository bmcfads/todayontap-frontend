import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-slate-300">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            "p-3 rounded-full font-extrabold text-2xl " +
            (isActive
              ? "bg-slate-800 text-white "
              : "text-slate-800 hover:bg-slate-800 hover:text-white")
          }
        >
          todayontap.
        </NavLink>
      </div>
      <div>
        <Nav>
          <NavItem href="/events/today">today</NavItem>
          <NavItem href="/events/upcoming">upcoming</NavItem>
          <NavItem href="/events/featured">featured</NavItem>
          <NavItem href="/venues/breweries">breweries</NavItem>
        </Nav>
      </div>
    </div>
  );
}
