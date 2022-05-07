import { Link } from "react-router-dom";
import {
  getMonthFromDatetime,
  getDayFromDatetime,
  getTimeFromDatetime,
} from "../../helpers/CardUtils";

export default function EventCardSmall({ event }) {
  const month = getMonthFromDatetime(event.datetime);
  const day = getDayFromDatetime(event.datetime);
  const time = getTimeFromDatetime(event.datetime);

  return (
    <article className="relative shrink-0 w-80 rounded-lg shadow border border-slate-200 bg-white hover:shadow-md hover:scale-105">
      <Link to={"/venues/" + event.venue.slug + "/events/" + event.id}>
        <div className="absolute -left-2 -top-2 flex justify-center w-14 h-14 shadow border rounded-lg bg-white text-center">
          <dl>
            <div>
              <dt className="sr-only">Date</dt>
              <dd className="mt-1 font-extrabold text-lg text-slate-800">
                {day}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Month</dt>
              <dd className="font-light text-xs text-slate-800">
                {month.slice(0, 3).toUpperCase()}
              </dd>
            </div>
          </dl>
        </div>
        <div className="flex">
          <img
            className="h-32 w-32 rounded-l-lg object-cover "
            src={event.thumbnail_url}
            alt={event.name + " thumbnail"}
          />
          <div className="grow m-4">
            <h1 className="mb-0.5 font-bold text-lg leading-6 text-slate-800">
              {event.name}
            </h1>
            <dl>
              <div>
                <dt className="sr-only">Location</dt>
                <dd className="font-light text-sm text-slate-600">
                  {event.venue.name}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Time</dt>
                <dd className="font-light text-sm text-slate-600">{time}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Link>
    </article>
  );
}
