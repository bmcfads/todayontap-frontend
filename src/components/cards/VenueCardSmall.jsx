import { Link } from "react-router-dom";

export default function VenueCardSmall({ venue }) {
  return (
    <article className="shrink-0 w-80 rounded-lg shadow border border-slate-200 bg-white hover:shadow-md hover:scale-105">
      <Link to={"/venues/" + venue.slug}>
        <div className="flex">
          <img
            className="h-32 w-32 rounded-l-lg object-cover"
            src={venue.thumbnail_url}
            alt={venue.name + " thumbnail"}
          />
          <div className="m-4 grow">
            <h1 className="mb-0.5 font-bold text-lg leading-6 text-slate-800">
              {venue.name}
            </h1>
            <address className="font-light text-sm not-italic text-slate-600">
              {venue.address.street} <br />
              {venue.address.city + ", " + venue.address.province}
            </address>
          </div>
        </div>
      </Link>
    </article>
  );
}
