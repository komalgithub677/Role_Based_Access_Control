import { useForm } from "react-hook-form";
import API from "../api/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {

    try {

      const res = await API.post("/users/login", data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("email", res.data.email);

      navigate("/dashboard");

    } catch (err) {

      alert("Login failed. Please check your credentials.");

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

        {/* Avatar */}

        <div className="flex justify-center mb-4">

          <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
            🔐
          </div>

        </div>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Email */}

          <div>

            <label className="text-sm text-gray-600">Email</label>

            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Password */}

          <div>

            <label className="text-sm text-gray-600">Password</label>

            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            className="bg-blue-600 text-white w-full p-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        {/* Register Link */}

        <p className="text-center mt-4 text-sm text-gray-600">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 font-semibold ml-1 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );
}

export default Login;