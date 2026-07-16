import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@gmail.com",
    phone: "+91 9994445555",
    country: "India",
    bio: "Travel enthusiast who loves exploring beautiful destinations.",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated Successfully");
  };
  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-100">
      <section className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-12">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="h-36 w-36 rounded-full border-4 border-emerald-500 object-cover shadow-lg"
            />

            <h1 className="mt-4 text-4xl font-bold text-slate-900">
              {user.name}
            </h1>

            <p className="mt-3 rounded-full bg-emerald-100 px-5 py-2 font-medium text-emerald-700">
              Premium Traveler
            </p>
            <p className="mt-3 text-slate-600">
              Update your personal information and keep your Wanderly profile up
              to date.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-6 text-center shadow-sm">
              <h2 className="text-4xl font-bold text-emerald-600">15</h2>

              <p className="mt-2 text-slate-500">Trips Completed</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 text-center shadow-sm">
              <h2 className="text-4xl font-bold text-blue-600">8</h2>

              <p className="mt-2 text-slate-500">Countries Visited</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 text-center shadow-sm">
              <h2 className="text-4xl font-bold text-orange-500">3</h2>

              <p className="mt-2 text-slate-500">Upcoming Trips</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label className="mb-2 text-lg block font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full rounded-xl border mt-1 border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="mb-2 text-lg block font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full rounded-xl border mt-1 border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="mb-2 text-lg block font-medium text-slate-700">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full rounded-xl border mt-1 border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="mb-2 text-lg block font-medium text-slate-700">
                Country
              </label>

              <input
                type="text"
                name="country"
                value={user.country}
                onChange={handleChange}
                className="w-full rounded-xl border mt-1 border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="mb-2 text-lg block font-medium text-slate-700">
                Bio
              </label>

              <textarea
                rows="4"
                name="bio"
                value={user.bio}
                onChange={handleChange}
                className="w-full rounded-xl border mt-1 border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700 cursor-pointer"
            >
              Save Changes
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Profile;
