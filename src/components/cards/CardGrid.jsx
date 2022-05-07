import Card from "./Card";

export default function CardGrid({ items, cardVariant }) {
  return (
    <ul className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {items.map((item) => (
        <Card key={item.id} item={item} variant={cardVariant} />
      ))}
    </ul>
  );
}
