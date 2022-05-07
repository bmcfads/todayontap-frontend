import { useParams } from "react-router-dom";
import EventOverview from "../components/EventOverview";
import Fetching from "../components/Fetching";
import Card from "../components/cards/Card";
import Message from "../components/messages/Message";
import {
  getUrlsForSlug,
  getUrlForSlugAndID,
  useFetch,
} from "../helpers/ApiUtils";

export default function Event() {
  const { venueSlug, id } = useParams();

  const eventUrl = getUrlForSlugAndID(venueSlug, id);
  const [venueUrl] = getUrlsForSlug(venueSlug);
  const { loading: le, error: ee, data: event } = useFetch(eventUrl);
  const { loading: lv, error: ev, data: venue } = useFetch(venueUrl);

  return (
    <div className="m-4">
      <div className="grid grid-cols-1">
        <div className="justify-self-center m-4">
          <Fetching loading={le} error={ee} />
          {event && <EventOverview event={event} />}
        </div>
        <div className="justify-self-center m-4 mt-7">
          <h2 className="mb-5 font-extrabold text-2xl text-center text-slate-800">
            Venue
          </h2>
          <Fetching loading={lv} error={ev} />
          {venue ? (
            <Card item={venue} variant="large" />
          ) : (
            <Message variant="no-venues" />
          )}
        </div>
      </div>
    </div>
  );
}
