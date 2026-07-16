import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-100 px-4">
      <div className="max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">
        <h1 className="text-8xl font-extrabold text-emerald-600">404</h1>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-4 text-lg leading-7 text-slate-600">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
