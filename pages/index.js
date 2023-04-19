import { getAllEvents } from '../dummy-data'
import EventList from '@/components/events/EventList';
import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react';

function HomePage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} /> 
    </Fragment>
  );
}

export default HomePage;