import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

function EventsPage() {
    const allEvents = getAllEvents();

    return (
        <div>
            <EventList events={allEvents} />
        </div>
    );
}

export default EventsPage;