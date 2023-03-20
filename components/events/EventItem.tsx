import Link from "next/link";
import Image from "next/image";

interface EventItemProps {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
}

function EventItem({ id, title, location, date, image }: EventItemProps) {
  const options = {
    weekday: "long" as const,
    year: "numeric" as const,
    month: "long" as const, 
    day: "numeric" as const,
  };
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);
  const formattedAddress = location.replace(', ', '\n');

  return (
    <li>
      <div >
        <Image src={image} alt={title} width={250} height={160} />
        <div>
          <h2>{title}</h2>
          <div>
            <time>{formattedDate}</time>
          </div> 
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
    );
}

export default EventItem;