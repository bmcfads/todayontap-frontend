import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <div className=" p-2 pt-4 pb-4 border-b border-slate-300">
      <div className="flex justify-center m-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "p-5 rounded-full bg-slate-800 font-extrabold text-4xl text-white " +
            (isActive ? "" : "hover:bg-slate-700")
          }
        >
          todayontap.
        </NavLink>
      </div>
      <Nav>
        <NavItem href="/events/featured">featured</NavItem>
        <NavItem href="/events/today">today</NavItem>
        <NavItem href="/events/upcoming">upcoming</NavItem>
        <NavItem href="/venues/breweries">breweries</NavItem>
      </Nav>
    </div>
  );
}
