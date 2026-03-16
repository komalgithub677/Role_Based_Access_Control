function AdminCard(){

  const email = localStorage.getItem("email") || "admin@gmail.com";

  return(

    <div className="bg-white rounded-xl shadow-lg p-6 w-96 border-l-4 border-red-500">

      <div className="flex items-center gap-4 mb-4">

        <div className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center text-xl font-bold">
          A
        </div>

        <div>
          <h2 className="text-lg font-bold">Admin Profile</h2>

          <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
            ADMIN
          </span>

        </div>

      </div>

      <div className="text-gray-700 space-y-2">

        <p><strong>Email:</strong> {email}</p>

        <p className="text-sm text-gray-500">
          You have full administrative control over the system.
        </p>

      </div>

      {/* Admin Features */}

      <div className="mt-6">

        <h3 className="font-semibold text-gray-700 mb-2">
          Admin Controls
        </h3>

        <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">

          <li>View All Registered Users</li>
          <li>Delete User Accounts</li>
          <li>Manage System Settings</li>
          <li>Access Admin Dashboard</li>
          <li>Monitor System Activity</li>

        </ul>

      </div>

    </div>

  );
}

export default AdminCard;
