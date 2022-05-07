import CardList from "./CardList";

export default function CardSlider({ items, cardVariant }) {
  return (
    <div className="overflow-x-auto -ml-4 -mr-4 p-2">
      <CardList items={items} cardVariant={cardVariant} />
    </div>
  );
}
