import { useState, useEffect } from "react";

// API endpoints
const API_ROOT = "https://todayontap.herokuapp.com";
const API_VERSION = "/v1";

// const EVENTS_URL = API_ROOT + API_VERSION + "events";
const EVENTS_FEATURED_URL = API_ROOT + API_VERSION + "/events/featured";
const EVENTS_TODAY_URL = API_ROOT + API_VERSION + "/events/today";
const EVENTS_UPCOMING_URL = API_ROOT + API_VERSION + "/events/upcoming";

const VENUES_URL = API_ROOT + API_VERSION + "/venues";
const VENUES_BREWERIES_URL = API_ROOT + API_VERSION + "/venues/breweries";

export function getUrlForEndpoint(endpoint) {
  let url;

  switch (endpoint) {
    case "featured":
      url = EVENTS_FEATURED_URL;
      break;
    case "today":
      url = EVENTS_TODAY_URL;
      break;
    case "upcoming":
      url = EVENTS_UPCOMING_URL;
      break;
    case "breweries":
      url = VENUES_BREWERIES_URL;
      break;
    default:
      url = "";
  }

  return url;
}

export function getUrlsForSlug(slug) {
  const venue = VENUES_URL + "/" + slug;
  const events = VENUES_URL + "/" + slug + "/events";
  return [venue, events];
}

export function getUrlForSlugAndID(slug, id) {
  const event = VENUES_URL + "/" + slug + "/events/" + id;
  return event;
}

export function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { loading, error, data };
}
