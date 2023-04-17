import Link from "next/link";
import Image from "next/image";
import Button from "../ui/button";
import classes from "./event-item.module.css";

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

    <li className="bg-white rounded-lg shadow-lg flex items-center mb-8 max-w-2/3" >
      <div className="flex-shrink-0">
        <Image src={image} alt={title} width={250} height={160} className="rounded-l-lg" />
      </div>
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="mb-4">
          <time className="text-gray-600">{formattedDate}</time>
        </div> 
        <div className="mb-4">
          <address className="text-gray-600">{formattedAddress}</address>
        </div>
        <div className="flex justify-end">
          <Link href={`/events/${id}`} className="text-blue-500 hover:text-blue-700">Explore Event</Link>
        </div>
        <div className="">
          <Button>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
