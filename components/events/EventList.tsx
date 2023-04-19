import EventItem from './EventItem';

function EventList(props: { events: any; }) {
    const { events } = props;

    if (!events) {
        return <p>No events found.</p>;
    }

    return (
        <ul className="divide-y divide-gray">
            {events.map((event: any) => (
                <EventItem 
                    key={event.id}
                    id={event.id} 
                    title={event.title} 
                    location={event.location} 
                    date={event.date} 
                    image={event.image}
                />
            ))}
        </ul>
    );
}

export default EventList;
