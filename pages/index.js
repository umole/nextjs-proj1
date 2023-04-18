import { getAllEvents } from '../dummy-data'
import EventList from '@/components/events/EventList';

function HomePage() {
  const events = getAllEvents();

  return (
    <div  className="border-b-4 border-gray-700">
      <EventList items={events} />
   </div>
  );
}

export default HomePage;