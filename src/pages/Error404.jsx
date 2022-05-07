import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="m-4">
      <h1 className="font-extrabold text-4xl text-center text-slate-800">
        Whoops! Looks like you took a wrong turn.
      </h1>
      <p className="m-4 font-light text-center text-slate-800">
        The page you're looking for doesn't exit. Not to worry, how about{" "}
        <Link to="/" className="underline hover:font-bold">
          going back to the homepage
        </Link>{" "}
        and starting from there?
      </p>
    </div>
  );
}
