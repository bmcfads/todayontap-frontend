import { Link } from "react-router-dom";
import Fetching from "../components/Fetching";
import CardSlider from "../components/cards/CardSlider";
import Message from "../components/messages/Message";
import { getUrlForEndpoint, useFetch } from "../helpers/ApiUtils";

export default function Home() {
  const featuredUrl = getUrlForEndpoint("featured");
  const todayUrl = getUrlForEndpoint("today");
  const upcomingUrl = getUrlForEndpoint("upcoming");
  const breweriesUrl = getUrlForEndpoint("breweries");

  const { loading: lf, error: ef, data: featured } = useFetch(featuredUrl);
  const { loading: lt, error: et, data: today } = useFetch(todayUrl);
  const { loading: lu, error: eu, data: upcoming } = useFetch(upcomingUrl);
  const { loading: lb, error: eb, data: breweries } = useFetch(breweriesUrl);

  return (
    <>
      <section className="h-96 m-4 ">
        <div className="flex justify-between items-end">
          <h1 className="font-extrabold text-3xl text-slate-800">Featured</h1>
          {!!featured?.length && (
            <Link
              to="/events/featured"
              className="font-bold text-slate-800 hover:text-amber-500"
            >
              {"See all " + featured?.length}
            </Link>
          )}
        </div>
        <Fetching loading={lf} error={ef} />
        {featured != null && !featured.length && (
          <Message variant="no-events" />
        )}
        {featured != null && !!featured.length && (
          <CardSlider items={featured} cardVariant="large" />
        )}
      </section>
      <section className="h-52 m-4">
        <div className="flex justify-between items-end">
          <h2 className="font-extrabold text-2xl text-slate-800">Today</h2>
          {!!today?.length && (
            <Link
              to="/events/today"
              className="font-bold text-slate-800 hover:text-amber-500"
            >
              {"See all " + today?.length}
            </Link>
          )}
        </div>
        <Fetching loading={lt} error={et} />
        {today != null && !today.length && <Message variant="no-events" />}
        {today != null && !!today.length && (
          <CardSlider items={today} cardVariant="small" />
        )}
      </section>
      <section className="h-52 m-4">
        <div className="flex justify-between items-end">
          <h2 className="font-extrabold text-2xl text-slate-800">Upcoming</h2>
          {!!upcoming?.length && (
            <Link
              to="/events/upcoming"
              className="font-bold text-slate-800 hover:text-amber-500"
            >
              {"See all " + upcoming?.length}
            </Link>
          )}
        </div>
        <Fetching loading={lu} error={eu} />
        {upcoming != null && !upcoming.length && (
          <Message variant="no-events" />
        )}
        {upcoming != null && !!upcoming.length && (
          <CardSlider items={upcoming} cardVariant="small" />
        )}
      </section>
      <section className="h-52 m-4">
        <div className="flex justify-between items-end">
          <h2 className="font-extrabold text-2xl text-slate-800">Breweries</h2>
          {!!breweries?.length && (
            <Link
              to="/venues/breweries"
              className="font-bold text-slate-800 hover:text-amber-500"
            >
              {"See all " + breweries?.length}
            </Link>
          )}
        </div>
        <Fetching loading={lb} error={eb} />
        {breweries != null && !breweries.length && (
          <Message variant="no-venues" />
        )}
        {breweries != null && !!breweries.length && (
          <CardSlider items={breweries} cardVariant="small" />
        )}
      </section>
    </>
  );
}
