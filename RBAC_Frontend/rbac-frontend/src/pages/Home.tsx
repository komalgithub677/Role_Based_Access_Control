import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-600 text-white">

      <div className="text-center">

        <h1 className="text-4xl font-bold mb-4">
          Role Based Access Control System
        </h1>

        <p className="text-lg mb-8">
          Secure authentication system using Spring Boot + React
        </p>

        <div className="space-x-4">

          <Link
            to="/login"
            className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-indigo-700 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-800"
          >
            Register
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Home;