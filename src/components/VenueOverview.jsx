import Card from "./cards/Card";

export default function VenueOverview({ venue }) {
  return (
    <>
      <Card item={venue} variant={"profile"} />
      <a
        href={venue.website_url}
        rel="noreferrer"
        target="_blank"
        className="block mt-4 p-3 rounded-lg bg-slate-800 font-extrabold text-center text-white hover:bg-slate-700"
      >
        website
      </a>
    </>
  );
}
