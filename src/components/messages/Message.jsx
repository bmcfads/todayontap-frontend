import Error from "./Error";
import Loading from "./Loading";
import NoEvents from "./NoEvents";
import NoVenues from "./NoVenues";

export default function Message({ variant }) {
  return (
    <div className="m-8">
      {variant === "error" && <Error />}
      {variant === "loading" && <Loading />}
      {variant === "no-events" && <NoEvents />}
      {variant === "no-venues" && <NoVenues />}
    </div>
  );
}
