import { Link } from "react-router-dom";
import {
  getFullDateFromDatetime,
  getTimeFromDatetime,
} from "../../helpers/CardUtils";

export default function EventCardLarge({ event }) {
  const fullDate = getFullDateFromDatetime(event.datetime);
  const time = getTimeFromDatetime(event.datetime);

  return (
    <article className="relative shrink-0 w-80 overflow-hidden rounded-lg shadow border border-slate-200 bg-white hover:shadow-md hover:scale-105">
      <Link to={"/venues/" + event.venue.slug + "/events/" + event.id}>
        <img
          className="w-full h-44 rounded-t-lg object-cover"
          src={event.banner_url}
          alt={event.name + " banner"}
        />
        <div className="h-24 m-4">
          <h1 className="mb-0.5 font-bold text-lg leading-6 text-slate-800">
            {event.name}
          </h1>
          <dl className="mb-4">
            <div>
              <dt className="sr-only">Date</dt>
              <dd className="font-light text-sm text-slate-800">
                {fullDate} &bull; {time}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Location</dt>
              <dd className="font-light text-sm text-slate-800">
                {event.venue.name}
              </dd>
            </div>
          </dl>
        </div>
      </Link>
    </article>
  );
}
