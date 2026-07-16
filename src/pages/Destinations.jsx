import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

const Destinations = () => {
  return (
    <section className="bg-slate-50 py-12 ">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Explore the world
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Popular Destinations
          </h1>

          <p className="mt-2 leading-7 text-md text-slate-600">
            Discover unforgettable places and find the perfect destination for
            your next adventure.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              name={destination.name}
              country={destination.country}
              image={destination.image}
              description={destination.description}
              price={destination.price}
              rating={destination.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
