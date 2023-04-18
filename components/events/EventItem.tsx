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
  const exploreLink = `/events/${id}`;

  return (

    <li className="bg-white rounded-lg shadow-lg flex items-center mb-8 max-w-2/3" >
      <div className="flex-shrink-0">
        <Image src={image} alt={title} width={250} height={160} className="rounded-l-lg" />
      </div>
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <time className="text-gray-600">{formattedDate}</time>
        </div> 
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <address className="text-gray-600">{formattedAddress}</address>
        </div>
        <div className="flex justify-end">
          <Link href={`/events/${id}`} className="text-blue-500 hover:text-blue-700">Explore Event</Link>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink} events={undefined}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
