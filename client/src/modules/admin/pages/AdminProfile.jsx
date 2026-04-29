import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  Edit,
  Save,
  MapPin,
  Calendar,
  Globe,
} from "lucide-react";

const AdminProfile = () => {
  const [editMode, setEditMode] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    role: "Admin",
    website: "",
    location: "",
    about: "",
    memberSince: new Date().toISOString().split("T")[0],
    image: "",
  });

  // ✅ Load profile
  useEffect(() => {
    const saved = localStorage.getItem("adminProfile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updated = { ...profile, image: reader.result };
        setProfile(updated);
        localStorage.setItem("adminProfile", JSON.stringify(updated));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("adminProfile", JSON.stringify(profile));
    setEditMode(false);
    alert("Profile Updated ✅");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-corporate-navy tracking-tight">My Profile</h1>

        <button
          onClick={() => (editMode ? handleSave() : setEditMode(true))}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          {editMode ? <Save size={16} /> : <Edit size={16} />}
          {editMode ? "Save" : "Edit Profile"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT CARD */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-3xl font-bold overflow-hidden">
            {profile.image ? (
              <img src={profile.image} className="w-full h-full object-cover" />
            ) : (
              profile.name?.charAt(0)?.toUpperCase() || "A"
            )}
          </div>

          {editMode && (
            <input
              type="file"
              onChange={handleImage}
              className="mt-3 text-sm"
            />
          )}

          <h2 className="mt-4 font-semibold text-lg">
            {profile.name || "Admin"}
          </h2>

          <p className="text-gray-500 text-sm">{profile.role}</p>

          <div className="mt-4 text-sm text-gray-500 space-y-2 text-left">
            <p>📧 {profile.email || "admin@email.com"}</p>
            <p>📞 {profile.phone || "+91 XXXXXXXX"}</p>
            <p>📍 {profile.location || "India"}</p>
            <p>📅 Joined: {profile.memberSince}</p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">

          <h2 className="text-lg font-semibold mb-4">Profile Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <InputField icon={<User size={16} />} label="Full Name" name="name" value={profile.name} onChange={handleChange} editMode={editMode} />

            {/* Username */}
            <InputField icon={<User size={16} />} label="Username" name="username" value={profile.username} onChange={handleChange} editMode={editMode} />

            {/* Email */}
            <InputField icon={<Mail size={16} />} label="Email" name="email" value={profile.email} onChange={handleChange} editMode={editMode} />

            {/* Role */}
            <InputField icon={<User size={16} />} label="Role" name="role" value={profile.role} onChange={handleChange} editMode={editMode} />

            {/* Phone */}
            <InputField icon={<Phone size={16} />} label="Phone" name="phone" value={profile.phone} onChange={handleChange} editMode={editMode} />

            {/* Website */}
            <InputField icon={<Globe size={16} />} label="Website" name="website" value={profile.website} onChange={handleChange} editMode={editMode} />

            {/* Location */}
            <InputField icon={<MapPin size={16} />} label="Location" name="location" value={profile.location} onChange={handleChange} editMode={editMode} />

            {/* Member Since */}
            <InputField icon={<Calendar size={16} />} label="Member Since" name="memberSince" value={profile.memberSince} onChange={handleChange} editMode={editMode} type="date" />

          </div>

          {/* About */}
          <div className="mt-6">
            <label className="text-sm text-gray-500">About Me</label>
            <textarea
              name="about"
              value={profile.about}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full border rounded-lg p-3 mt-1"
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔥 reusable input
const InputField = ({ icon, label, name, value, onChange, editMode, type = "text" }) => (
  <div>
    <label className="text-sm text-gray-500">{label}</label>
    <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
      <span className="mr-2 text-gray-400">{icon}</span>
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        disabled={!editMode}
        className="w-full outline-none bg-transparent"
      />
    </div>
  </div>
);

export default AdminProfile;