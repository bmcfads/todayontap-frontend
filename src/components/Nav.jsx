export default function Nav({ children }) {
  return (
    <nav>
      <ul className="flex flex-wrap justify-between sm:justify-center m-2 gap-x-3">
        {children}
      </ul>
    </nav>
  );
}
