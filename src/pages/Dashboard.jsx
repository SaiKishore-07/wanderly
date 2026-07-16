import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-100">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Dashboard
          </p>

          <h1 className="mt-1 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Welcome to Wanderly!
          </h1>

          <p className="mt-2 max-w-2xl text-lg leading-7 text-slate-600">
            Explore your saved destinations, manage your bookings, and plan your
            next adventure with Wanderly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            onClick={() => navigate("/destinations")}
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Saved Destinations
            </h2>

            <p className="mt-2 text-slate-400">
              View all the destinations you've saved for your future adventures.
            </p>
          </div>

          <div
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            onClick={() => navigate("/dashboard/bookings")}
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              My Bookings
            </h2>

            <p className="mt-2 text-slate-400">
              Track your bookings and upcoming travel plans.
            </p>
          </div>
        </div>
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-emerald-600">
            User Profile
          </p>
          <h2 className="mt-1 text-3xl font-bold text-slate-900">
            Welcome Back, Traveler!
          </h2>

          <p className="mt-2 max-w-2xl leading-7 text-slate-600">
            Manage your personal information, review your travel activity, and
            keep your profile updated for a better travel experience.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-slate-500">Name</p>

              <p className="mt-1 text-lg font-semibold text-slate-900">User</p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">Email</p>

              <p className="mt-1 text-lg font-semibold text-slate-900">
                user@wanderly.com
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">Member Since</p>

              <p className="mt-1 text-lg font-semibold text-slate-900">
                July 2026
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/dashboard/profile")}
            className="mt-8 cursor-pointer rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Edit Profile
          </button>
        </div>
        <div className="mt-12">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Statistics
          </p>

          <h2 className="mt-1 text-3xl font-bold text-slate-900">
            Travel Overview
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-medium text-slate-500">
                Saved Destinations
              </p>

              <h3 className="mt-3 text-5xl font-bold text-emerald-600">12</h3>

              <p className="mt-2 text-slate-500">
                Places saved for future adventures.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-medium text-slate-500">
                Upcoming Trips
              </p>

              <h3 className="mt-3 text-5xl font-bold text-blue-600">3</h3>

              <p className="mt-2 text-slate-500">Planned journeys this year.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-medium text-slate-500">
                Countries Explored
              </p>

              <h3 className="mt-3 text-5xl font-bold text-orange-500">5</h3>

              <p className="mt-2 text-slate-500">
                Amazing destinations visited.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
