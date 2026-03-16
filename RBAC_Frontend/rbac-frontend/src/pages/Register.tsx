// import { useForm } from "react-hook-form";
// import API from "../api/api";
// import { useNavigate, Link } from "react-router-dom";

// function Register() {

//   const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = async (data: any) => {

//     try {

//       await API.post("/users/register", data);

//       alert("Registration Successful");

//       navigate("/");

//     } catch (err) {

//       alert("Registration failed. Please try again.");

//     }
//   };

//   return (

//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">

//       <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

//         {/* Avatar */}

//         <div className="flex justify-center mb-4">

//           <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
//             👤
//           </div>

//         </div>

//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//           Create Your Account
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

//           {/* Name */}

//           <div>
//             <label className="text-sm text-gray-600">Full Name</label>

//             <input
//               {...register("name")}
//               placeholder="Enter your name"
//               className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* Email */}

//           <div>
//             <label className="text-sm text-gray-600">Email</label>

//             <input
//               {...register("email")}
//               type="email"
//               placeholder="Enter your email"
//               className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* Password */}

//           <div>
//             <label className="text-sm text-gray-600">Password</label>

//             <input
//               {...register("password")}
//               type="password"
//               placeholder="Enter your password"
//               className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* Role */}

//           <div>
//             <label className="text-sm text-gray-600">Select Role</label>

//             <select
//               {...register("role")}
//               className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               <option value="USER">USER</option>
//               <option value="ADMIN">ADMIN</option>
//             </select>
//           </div>

//           {/* Button */}

//           <button
//             type="submit"
//             className="bg-indigo-600 text-white w-full p-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
//           >
//             Register
//           </button>

//         </form>

//         {/* Login Link */}

//         <p className="text-center mt-4 text-sm text-gray-600">

//           Already have an account?

//           <Link
//             to="/"
//             className="text-indigo-600 font-semibold ml-1 hover:underline"
//           >
//             Login
//           </Link>

//         </p>

//       </div>

//     </div>
//   );
// }

// export default Register;

import { useForm } from "react-hook-form";
import API from "../api/api";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {

    try {

      await API.post("/users/register", data);

      alert("Registration Successful");

      // Save email for auto-fill in login page
      localStorage.setItem("registeredEmail", data.email);

      navigate("/");

    } catch (err) {

      alert("Registration failed. Please try again.");

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
            👤
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              {...register("name")}
              placeholder="Enter your name"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Select Role</label>
            <select
              {...register("role")}
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white w-full p-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-4 text-sm text-gray-600">

          Already have an account?

          <Link
            to="/"
            className="text-indigo-600 font-semibold ml-1 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;