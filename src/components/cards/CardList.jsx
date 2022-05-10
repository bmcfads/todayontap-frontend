import Card from "./Card";

export default function CardList({ items, cardVariant }) {
  return (
    <ul className="flex m-4 mt-2 gap-x-6">
      {items.map((item) => (
        <Card key={item.id} item={item} variant={cardVariant} />
      ))}
    </ul>
  );
}
