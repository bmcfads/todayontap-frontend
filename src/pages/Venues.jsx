import Fetching from "../components/Fetching";
import CardGrid from "../components/cards/CardGrid";
import Message from "../components/messages/Message";
import { getUrlForEndpoint, useFetch } from "../helpers/ApiUtils";

export default function Venues({ endpoint }) {
  const url = getUrlForEndpoint(endpoint);
  const { loading: lv, error: ev, data: venues } = useFetch(url);

  return (
    <div className="m-4">
      <Fetching loading={lv} error={ev} />
      {venues !== null && !venues.length && <Message variant="no-venues" />}
      {venues !== null && !!venues.length && (
        <CardGrid items={venues} cardVariant="large" />
      )}
    </div>
  );
}
