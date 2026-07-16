const Bookings = () => {
  const bookings = [
    {
      id: 1,
      destination: "Bali Adventure",
      date: "25 Aug 2026",
      travelers: 2,
      status: "Confirmed",
    },
    {
      id: 2,
      destination: "Swiss Alps Tour",
      date: "10 Sep 2026",
      travelers: 1,
      status: "Pending",
    },
    {
      id: 3,
      destination: "Maldives Escape",
      date: "18 Oct 2026",
      travelers: 4,
      status: "Completed",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-100">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-emerald-600">
            My Bookings
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Your Travel Bookings
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-600">
            View, manage and track all your upcoming adventures in one place.
          </p>
        </div>

        {/* Booking Cards */}
        <div className="mt-12 space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                {/* Left */}
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-slate-900">
                    {booking.destination}
                  </h2>

                  <div className="flex flex-wrap gap-6 text-slate-600">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{booking.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span>👥</span>
                      <span>{booking.travelers} Travelers</span>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col items-start gap-4 lg:items-end">
                  <span
                    className={`rounded-full px-5 py-2 text-sm font-semibold ${
                      booking.status === "Confirmed"
                        ? "bg-emerald-100 text-emerald-700"
                        : booking.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {booking.status}
                  </span>

                  <div className="flex gap-3">
                    <button className="rounded-full border border-slate-300 px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-100 cursor-pointer">
                      View Details
                    </button>

                    <button className="rounded-full bg-emerald-600 px-5 py-2 font-semibold text-white transition hover:bg-emerald-700 cursor-pointer">
                      Download Ticket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Bookings;
