import Fetching from "../components/Fetching";
import CardGrid from "../components/cards/CardGrid";
import Message from "../components/messages/Message";
import { getUrlForEndpoint, useFetch } from "../helpers/ApiUtils";

export default function Events({ endpoint }) {
  const url = getUrlForEndpoint(endpoint);
  const { loading: le, error: ee, data: events } = useFetch(url);

  return (
    <div className="m-4">
      <h1 className="mb-4 font-extrabold text-3xl text-center text-slate-800">
        {endpoint.charAt(0).toUpperCase() + endpoint.slice(1)}
      </h1>
      <Fetching loading={le} error={ee} />
      {events !== null && !events.length && <Message variant="no-events" />}
      {events !== null && !!events.length && (
        <CardGrid items={events} cardVariant="large" />
      )}
    </div>
  );
}
