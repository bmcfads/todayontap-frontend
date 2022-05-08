import { useState } from "react";
import NavItemMobile from "./NavItemMobile";

export default function NavMobile() {
  const [displayed, setDisplayed] = useState(false);

  return (
    <div className="relative sm:hidden">
      <button
        onClick={() => setDisplayed(!displayed)}
        className="relative z-10 px-3 py-1 font-extrabold"
      >
        {displayed ? "x" : "menu"}
      </button>
      <button
        onClick={() => setDisplayed(false)}
        tabIndex="-1"
        className={`fixed inset-0 h-full w-full cursor-default ${
          displayed ? "block" : "hidden"
        }`}
      ></button>
      <nav
        className={`absolute right-0 mt-1 p-2 border rounded-lg shadow bg-white ${
          displayed ? "block" : "hidden"
        }`}
      >
        <ul>
          <button onClick={() => setDisplayed(false)}>
            <NavItemMobile href="/events/today">today</NavItemMobile>
          </button>
          <button onClick={() => setDisplayed(false)}>
            <NavItemMobile href="/events/upcoming">upcoming</NavItemMobile>
          </button>
          <button onClick={() => setDisplayed(false)}>
            <NavItemMobile href="/events/featured">featured</NavItemMobile>
          </button>
          <button onClick={() => setDisplayed(false)}>
            <NavItemMobile href="/venues/breweries">breweries</NavItemMobile>
          </button>
        </ul>
      </nav>
    </div>
  );
}
