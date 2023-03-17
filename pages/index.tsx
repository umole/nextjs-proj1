import { getFeaturedEvents } from '../../nextjs-proj1/dymmy-data'

function HomePage() {
  const featuredEvents = getFeaturedEvents();


  return (
    <div>
      <h1>Homepage</h1>
   </div>
  );
}

export default HomePage;