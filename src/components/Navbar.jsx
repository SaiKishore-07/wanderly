import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  function getNavLinkClass({ isActive }) {
    return isActive
      ? "font-semibold text-emerald-600"
      : "text-slate-600 transition hover:text-emerald-600";
  }

  function handleLogout() {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  }
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          end
          className="text-3xl font-bold tracking-tight text-slate-900"
          onClick={() => setIsOpen(false)}
        >
          Wander<span className="text-emerald-600">ly.</span>
        </NavLink>

        <nav className="hidden items-center text-lg gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={getNavLinkClass}
            >
              {link.name}
            </NavLink>
          ))}

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="rounded-full bg-red-600 px-6 py-2 font-semibold text-white transition hover:bg-red-700 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="rounded-full bg-emerald-600 px-6 py-2 font-semibold text-white transition hover:bg-emerald-700 cursor-pointer"
            >
              Login
            </button>
          )}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-2xl text-slate-700 md:hidden cursor-pointer hover:scale-105 duration-300"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl text-xl  flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={getNavLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            {isAuthenticated ? (
              <NavLink
                to="/"
                onClick={handleLogout}
                className="rounded-full bg-red-600 px-4 py-3 font-semibold text-white text-center transition hover:bg-red-700 cursor-pointer"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="rounded-lg bg-emerald-600 px-4 py-3 text-center font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
