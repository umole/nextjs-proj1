import { getFeaturedEvents } from '../../nextjs-proj1/dymmy-data'
import EventList from '@/components/events/EventList';

function HomePage() {
  const featuredEvents = getFeaturedEvents();


  return (
    <div  className="border-b-4 border-gray-700">
      <EventList events={featuredEvents} />
   </div>
  );
}

export default HomePage;