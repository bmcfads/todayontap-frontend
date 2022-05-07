export default function Map({ name, url }) {
  return (
    <iframe
      className="w-full h-full rounded-lg shadow border border-slate-300"
      title={"Map for " + name}
      src={url}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
