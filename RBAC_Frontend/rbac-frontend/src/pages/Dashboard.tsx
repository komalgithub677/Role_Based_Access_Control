import AdminCard from "../components/AdminCard";
import UserCard from "../components/UserCard";

function Dashboard(){

  const role = localStorage.getItem("role");

  return(

    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <div className="bg-white shadow flex justify-between items-center px-10 py-4">

        <h1 className="text-2xl font-bold text-gray-700">
          RBAC Dashboard
        </h1>

        <button
        onClick={()=>{
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          window.location.href="/";
        }}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">

          Logout

        </button>

      </div>


      {/* Dashboard Content */}

      <div className="flex justify-center items-center p-10">

        {role === "ADMIN" && <AdminCard/>}

        {role === "USER" && <UserCard/>}

      </div>

    </div>

  );
}

export default Dashboard;