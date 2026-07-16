import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const demoEmail = "user@wanderly.com";
    const demoPassword = "12345";

    if (formData.email === demoEmail && formData.password === demoPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
      return;
    }

    setError("Invalid email or password.");
  }
  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50">
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="text-center">
            <p className="text-lg font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Welcome Back
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Login to Wanderly
            </h1>
            <p className="mt-3 text-slate-600">
              Continue exploring your favorite destinations and adventures.
            </p>
          </div>

          <form className="mt-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-lg ml-0.5 font-semibold text-slate-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500
                focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="password"
                className="text-lg ml-0.5 font-semibold text-slate-700"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            {error && (
              <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 w-full cursor-pointer rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
