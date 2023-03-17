function EventList(props: { Events: any; }) {
    const { Events } = props;

    return (
        <ul>
            {Events.map((Event: any) => <h1></h1>)}
        </ul>
    );
}

export default EventList;