import { NavLink } from "react-router-dom";
import Nav from "./navs/Nav";
import NavMobile from "./navs/NavMobile";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-slate-300">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "px-4 py-2 rounded-full font-extrabold text-2xl " +
          (isActive
            ? "bg-slate-800 text-white "
            : "text-slate-800 hover:bg-slate-800 hover:text-white")
        }
      >
        todayontap.
      </NavLink>
      <NavMobile />
      <Nav />
    </div>
  );
}
