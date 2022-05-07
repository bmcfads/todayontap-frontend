export default function VenueCardProfile({ venue }) {
  return (
    <article className="shrink-0 w-80 rounded-lg shadow border border-slate-200 overflow-hidden bg-white">
      <img
        className="w-full h-44 rounded-t-lg object-cover"
        src={venue.banner_url}
        alt={venue.name + " banner"}
      />
      <div className="relative flex justify-center">
        <h1 className="relative -top-5 p-4 rounded-lg shadow border border-slate-200 bg-white font-extrabold text-lg leading-6 text-slate-800">
          {venue.name}
        </h1>
      </div>
      <div className="h-24 mb-4 mr-4 ml-4">
        <blockquote className="font-light text-sm text-slate-800">
          {'"' + venue.description + '"'}
        </blockquote>
      </div>
    </article>
  );
}
