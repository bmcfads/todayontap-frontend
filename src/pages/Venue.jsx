import { useParams } from "react-router-dom";
import Fetching from "../components/Fetching";
import Map from "../components/Map";
import VenueOverview from "../components/VenueOverview";
import CardGrid from "../components/cards/CardGrid";
import Message from "../components/messages/Message";
import { getUrlsForSlug, useFetch } from "../helpers/ApiUtils";
import { filterEventsByCurrent } from "../helpers/FilterUtils";

export default function Venue() {
  const { venueSlug } = useParams();

  const [venueUrl, eventsUrl] = getUrlsForSlug(venueSlug);
  const { loading: lv, error: ev, data: venue } = useFetch(venueUrl);
  const { loading: le, error: ee, data: events } = useFetch(eventsUrl);

  const currentEvents = filterEventsByCurrent(events);

  return (
    <div className="m-4">
      <h1 className="font-extrabold text-3xl text-center text-slate-800">
        Venue
      </h1>
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <div className="justify-self-center m-4">
          <Fetching loading={lv} error={ev} />
          {venue && <VenueOverview venue={venue} />}
        </div>
        <div className="justify-self-center w-80 h-80 m-4 md:justify-self-auto md:w-auto md:h-auto lg:col-span-2 2xl:col-span-3">
          <Map name={venue?.name} url={venue?.google_maps_embed_url} />
        </div>
      </div>
      <div className="m-4 mt-7">
        <h2 className="mb-5 font-extrabold text-2xl text-center text-slate-800">
          Events
        </h2>
        <Fetching loading={le} error={ee} />
        {currentEvents != null && !currentEvents.length && (
          <Message variant="no-events" />
        )}
        {currentEvents != null && !!currentEvents.length && (
          <CardGrid items={currentEvents} cardVariant="small" />
        )}
      </div>
    </div>
  );
}
