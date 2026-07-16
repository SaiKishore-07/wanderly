import { Link, useParams } from "react-router-dom";
import destinations from "../data/destinations";

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find((item) => item.id === Number(id));

  if (!destination) {
    return (
      <section className="min-h-[60vh] bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Destination not found
          </h1>

          <p className="mt-4 text-slate-600">
            The destination you are looking for does not exist.
          </p>

          <Link
            to="/destinations"
            className="mt-6 inline-block text-xl rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Back to Destinations
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-slate-50">
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 lg:pb-30">
          <Link
            to="/destinations"
            className="inline-flex text-2xl items-center font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            ← Back to Destinations
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* Image */}
            <div className="overflow-hidden rounded-3xl">
              <img
                src={destination.image}
                alt={`${destination.name}, ${destination.country}`}
                className="h-72 w-full object-cover sm:h-96 lg:h-115"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                {destination.country}
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {destination.name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
                  ★ {destination.rating}
                </span>

                <span className="text-md text-slate-500 mb-0.5 font-semibold">
                  Traveler favorite
                </span>
              </div>

              <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
                {destination.description}
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-md text-slate-500 font-semibold">
                  Starting from
                </p>

                <p className="mt-1 text-3xl font-bold text-slate-900">
                  ${destination.price}
                  <span className="ml-2 text-sm font-normal text-slate-500">
                    per person
                  </span>
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="rounded-full bg-emerald-600 px-7 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
                >
                  Plan This Trip
                </Link>

                <Link
                  to="/destinations"
                  className="rounded-full border border-slate-400 bg-white px-7 py-3 text-center font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DestinationDetails;
