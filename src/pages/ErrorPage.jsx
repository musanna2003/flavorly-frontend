import { Link } from "react-router";
import { FaUtensils } from "react-icons/fa";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-200 flex flex-col items-center justify-center text-center px-4">
      <FaUtensils className="text-6xl text-red-500 mb-4 animate-bounce" />
      <h1 className="text-6xl font-bold text-orange-800">404</h1>
      <p className="text-xl mt-2 text-orange-700">Oops! This recipe went missing...</p>
      <p className="text-md text-orange-600 mb-6">The page you're looking for doesn't exist or has been eaten.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition duration-300 ease-in-out shadow-lg"
      >
        Go Back Home
      </Link>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
        alt="Missing food illustration"
        className="w-40 mt-8 opacity-90"
      />
    </div>
  );
}

