import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-img.png";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

const Home = () => {
  const featuredDestinations = destinations.slice(0, 3);
  return (
    <>
      <section className="relative min-h-180 overflow-hidden">
        <img
          src={heroImage}
          alt="Beautiful mountain travel destination"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/30" />

        <div className="relative mx-auto flex min-h-155 w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Explore beyond boundaries
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Discover your next
              <span className="block text-emerald-300">
                unforgettable adventure.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              Explore breathtaking destinations, discover hidden gems, and
              create memories that last a lifetime.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/destinations"
                className="rounded-full bg-emerald-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
              >
                Explore Destinations
              </Link>

              <Link
                to="/about"
                className="rounded-full border border-white/70 text-center bg-white/10 px-6 py-3 text-white backbrop-blur-sm transition hover:bg-white hover:text-slate-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                Handpicked for you
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Featured Destinations
              </h2>
              <p className="mt-2 leading-7 text-slate-600">
                Explore some of our most loved destinations and find inspiration
                for your next journey.
              </p>
            </div>

            <Link
              to="/destinations"
              className="font-semibold text-xl text-emerald-600 transition hover:text-emerald-700"
            >
              View all destinations →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredDestinations.map((destination) => (
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

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Your journey starts here
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to explore the world?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Discover incredible destinations and start planning an
              unforgettable experience today.
            </p>
            <Link
              to="/destinations"
              className="mt-8 inline-block rounded-full bg-emerald-600 px-7 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
