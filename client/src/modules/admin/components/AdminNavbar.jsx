import { Bell, ChevronDown, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import logo from "../../../assets/logo.png";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const [openProfile, setOpenProfile] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);

  const [profile, setProfile] = useState({});

  // ✅ load profile image
  useEffect(() => {
    const saved = localStorage.getItem("adminProfile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const enquiries =
    useSelector((state) => state.adminEnquiry?.enquiries) || [];

  const applications =
    useSelector((state) => state.adminJob?.applications) || [];

  const unreadEnquiries = enquiries.filter((e) => e.status === "unread");
  const newApplications = applications.filter((a) => a.status === "new");

  const unreadCount = unreadEnquiries.length + newApplications.length;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  return (
    <header className="w-full bg-white border-b h-16 flex items-center justify-between px-6 fixed top-0 left-0 z-50">

      <img src={logo} alt="logo" className="h-10 object-contain" />

      <div className="flex items-center gap-6">

        {/* 🔔 Notifications */}
        <div className="relative">
          <div
            onClick={() => setOpenNotif(!openNotif)}
            className="cursor-pointer relative"
          >
            <Bell size={20} />

            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
        </div>

        {/* 👤 PROFILE */}
        <div className="relative">
          <div
            onClick={() => setOpenProfile(!openProfile)}
            className="flex items-center gap-2 cursor-pointer"
          >
            {/* ✅ PROFILE IMAGE */}
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              {profile.image ? (
                <img
                  src={profile.image}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <User size={16} />
                </div>
              )}
            </div>

            <ChevronDown size={16} />
          </div>

          {openProfile && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md border">
              <button
                onClick={() => navigate("/admin/profile")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Profile
              </button>

              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}