import { Link } from "react-router-dom";

function DestinationCard({
  id,
  name,
  country,
  image,
  description,
  price,
  rating,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={`${name}, ${country}`}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{name}</h3>
            <p className="text-sm text-slate-500">{country}</p>
          </div>

          <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
            ★ {rating}
          </span>
        </div>

        <p className="mt-4 text-md leading-6 text-slate-600">{description}</p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500">From</span>
            <p className="text-lg font-bold text-slate-900">${price}</p>
          </div>

          <Link
            to={`/destinations/${id}`}
            className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
