import aboutImage from "../assets/images/about-travel.jpg";

function About() {
  const features = [
    {
      id: 1,
      title: "Handpicked Destinations",
      description:
        "We carefully select inspiring places that offer unforgettable travel experiences.",
    },
    {
      id: 2,
      title: "Travel with Confidence",
      description:
        "Clear information and thoughtful planning help make every journey feel simple.",
    },
    {
      id: 3,
      title: "Memories That Last",
      description:
        "We believe the best journeys create stories you will remember for years.",
    },
  ];

  const stats = [
    {
      id: 1,
      value: "50+",
      label: "Destinations",
    },
    {
      id: 2,
      value: "10K+",
      label: "Happy Travelers",
    },
    {
      id: 3,
      value: "4.9",
      label: "Average Rating",
    },
    {
      id: 4,
      value: "24/7",
      label: "Travel Support",
    },
  ];

  return (
    <main>
      {/* About Hero */}
      <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm md:text-lg font-semibold uppercase tracking-[0.2em] text-emerald-400">
            About Wanderly
          </p>

          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            We make exploring the world feel possible.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300  md:text-lg">
            Wanderly helps travelers discover remarkable destinations, find
            inspiration, and turn travel dreams into meaningful experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="overflow-hidden rounded-3xl">
              <img
                src={aboutImage}
                alt="Travelers exploring a beautiful destination"
                className="h-80 w-full object-cover sm:h-90 lg:h-100"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-lg font-semibold uppercase tracking-wider text-emerald-600">
                Our Story
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Travel is more than visiting a place.
              </h2>

              <p className="mt-6 leading-7 text-slate-600">
                We created Wanderly with a simple idea: discovering your next
                journey should feel exciting, clear, and inspiring. The world is
                filled with extraordinary places, but finding the right
                experience can often feel overwhelming.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Our goal is to bring beautiful destinations and useful travel
                inspiration together in one place, helping every traveler move
                from curiosity to adventure.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Whether you are planning a peaceful escape, an unforgettable
                adventure, or simply searching for fresh inspiration, Wanderly
                is here to help you discover places worth remembering and turn
                every journey into a meaningful story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg font-semibold uppercase tracking-wider text-emerald-600">
              Why Wanderly
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for curious travelers.
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Everything we create is designed to make discovering and planning
              your next journey easier.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex">
                  <div className="flex  h-11 w-11 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                    {feature.id}
                  </div>

                  <h3 className="mt-2 ml-3 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-emerald-600 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-md font-semibold text-emerald-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
