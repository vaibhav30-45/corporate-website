
import { Bell, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  return (
    <header className="bg-white border-b px-6 py-3 flex items-center justify-between">

      {/* Left - Page Title */}
      <h1 className="text-lg font-semibold text-gray-800">
     
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-1 rounded-md">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm"
          />
        </div>

        {/* Notification Icon */}
        <button className="relative text-gray-600 hover:text-gray-900">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            2
          </span>
        </button>

        {/* Admin Profile */}
        <div className="flex items-center gap-3">
          <img
            src="/admin-avatar.png"
            alt="Admin"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">
            Admin
          </span>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md text-sm"
        >
          Logout
        </button>

      </div>
    </header>
  );
}