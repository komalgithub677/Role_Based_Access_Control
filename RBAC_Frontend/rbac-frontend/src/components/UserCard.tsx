function UserCard(){

  const email = localStorage.getItem("email") || "user@gmail.com";

  return(

    <div className="bg-white rounded-xl shadow-lg p-6 w-96 border-l-4 border-blue-500">

      <div className="flex items-center gap-4 mb-4">

        <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
          U
        </div>

        <div>
          <h2 className="text-lg font-bold">User Profile</h2>

          <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
            USER
          </span>
        </div>

      </div>

      <div className="text-gray-700 space-y-2">

        <p><strong>Email:</strong> {email}</p>

        <p className="text-sm text-gray-500">
          You have access to user-level dashboard content.
        </p>

      </div>

      {/* User Features */}

      <div className="mt-6">

        <h3 className="font-semibold text-gray-700 mb-2">
          User Access
        </h3>

        <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">

          <li>View Personal Profile</li>
          <li>Access Learning Resources</li>
          <li>Update Profile Information</li>
          <li>View Personal Dashboard</li>

        </ul>

      </div>

    </div>

  );
}

export default UserCard;