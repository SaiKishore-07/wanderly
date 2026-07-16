import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Wander<span className="text-emerald-500">ly.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Discover beautiful destinations, plan unforgettable journeys, and
              create memories that last forever.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Explore</h3>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link to="/" className="transition hover:text-emerald-400">
                Home
              </Link>

              <Link
                to="/destinations"
                className="transition hover:text-emerald-400"
              >
                Destinations
              </Link>

              <Link to="/about" className="transition hover:text-emerald-400">
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Support</h3>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link to="/contact" className="transition hover:text-emerald-400">
                Contact
              </Link>

              <Link to="/login" className="transition hover:text-emerald-400">
                Login
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Get in Touch</h3>

            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>hello@wanderly.com</p>
              <p>+91 98765 43210</p>
              <p>Coimbatore, India</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6">
          <p className="text-center text-sm text-slate-500 sm:text-left">
            © {currentYear} Wanderly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
