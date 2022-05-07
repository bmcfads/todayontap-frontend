import EventCardSmall from "./EventCardSmall";
import EventCardLarge from "./EventCardLarge";
import EventCardProfile from "./EventCardProfile";
import VenueCardSmall from "./VenueCardSmall";
import VenueCardLarge from "./VenueCardLarge";
import VenueCardProfile from "./VenueCardProfile";

export default function Card({ item, variant }) {
  return (
    <>
      {item.type === "Event" && variant === "small" && (
        <EventCardSmall event={item} />
      )}
      {item.type === "Event" && variant === "large" && (
        <EventCardLarge event={item} />
      )}
      {item.type === "Event" && variant === "profile" && (
        <EventCardProfile event={item} />
      )}
      {item.type === "Venue" && variant === "small" && (
        <VenueCardSmall venue={item} />
      )}
      {item.type === "Venue" && variant === "large" && (
        <VenueCardLarge venue={item} />
      )}
      {item.type === "Venue" && variant === "profile" && (
        <VenueCardProfile venue={item} />
      )}
    </>
  );
}
