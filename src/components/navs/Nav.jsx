import NavItem from "./NavItem";

export default function Nav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex flex-wrap justify-end gap-2">
        <NavItem href="/events/today">today</NavItem>
        <NavItem href="/events/upcoming">upcoming</NavItem>
        <NavItem href="/events/featured">featured</NavItem>
        <NavItem href="/venues/breweries">breweries</NavItem>
      </ul>
    </nav>
  );
}
