import { useEffect } from "react";
import Fetching from "../components/Fetching";
import CardGrid from "../components/cards/CardGrid";
import Message from "../components/messages/Message";
import { getUrlForEndpoint, useFetch } from "../helpers/ApiUtils";

export default function Venues({ endpoint }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const url = getUrlForEndpoint(endpoint);
  const { loading: lv, error: ev, data: venues } = useFetch(url);

  return (
    <div className="m-4">
      <h1 className="mb-4 font-extrabold text-3xl text-center text-slate-800">
        {endpoint.charAt(0).toUpperCase() + endpoint.slice(1)}
      </h1>
      <Fetching loading={lv} error={ev} />
      {venues !== null && !venues.length && <Message variant="no-venues" />}
      {venues !== null && !!venues.length && (
        <CardGrid items={venues} cardVariant="large" />
      )}
    </div>
  );
}
