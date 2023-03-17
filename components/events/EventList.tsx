import EventItem from './EventItem';

function EventList(props: { Events: any; }) {
    const { Events } = props;

    return (
        <ul>
            {Events.map((Event: any) => <EventItem />)}
        </ul>
    );
}

export default EventList;