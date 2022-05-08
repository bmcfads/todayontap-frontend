export default function Nav({ children }) {
  return (
    <nav>
      <ul className="flex flex-wrap justify-end m-2 gap-3">{children}</ul>
    </nav>
  );
}
