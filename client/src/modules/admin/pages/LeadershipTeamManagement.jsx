import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X } from "lucide-react";
import axios from "axios";
import {
  createLeadershipMember,
  getAdminLeadershipMembers,
  deleteLeadershipMember,
  updateLeadershipMember,
} from "../../../services/leadershipService";
const API_URL = import.meta.env.VITE_API_URL;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const LeadershipTeamManagement = () => {
  const token = localStorage.getItem("token");
  const [members, setMembers] = useState([]);
  const [editingMember, setEditingMember] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    position: "",

    bio: "",
    linkedin: "",
    image: "",
    order: 1,
    status: "active",
  });

  const fetchMembers = async () => {
    try {
      const response = await getAdminLeadershipMembers();

      console.log("Members Data:", response.data);

      response.data.forEach((member) => {
  console.log("Name:", member.name);
  console.log("Image:", member.image);
});

      setMembers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const data = new FormData();
    data.append("image", file);

    try {
      const res = await axios.post(
         `${API_BASE_URL}/leadership/upload-image`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("UPLOAD RESPONSE =>", res.data);
      setFormData((prev) => ({
        ...prev,
        // image: `${API_URL}${res.data.imageUrl}`,
        image : res.data.imageUrl,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
      console.log("Submitting:", formData);
      
    try {
      if (editingMember) {
        await updateLeadershipMember(editingMember._id, formData);
      } else {
        await createLeadershipMember(formData);
      }

      await fetchMembers();

      setFormData({
        name: "",
        position: "",
        bio: "",
        linkedin: "",
        image: "",
        order: 1,
        status: "active",
      });

      setEditingMember(null);

      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteLeadershipMember(id);

      await fetchMembers();

      alert("Member deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Leadership Team Management</h1>
          <p className="text-gray-500">
            Manage board members and leadership profiles.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          Add New Member
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Photo</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Position</th>

              <th className="p-4 text-left">Order</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {members.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center p-10">
                  No members found
                </td>
              </tr>
            ) : (
              members.map((member) => (
                
                <tr key={member._id} className="border-t">
                  <td className="p-4">
                    {/* <img
                      src={member.image}
                      alt=""
                      className="w-14 h-14 rounded-lg object-cover"
                    /> */}
                    {/* <img
  src={
    member.image?.startsWith("http")
      ? member.image.replace(
          "http://localhost:5000",
          import.meta.env.VITE_API_URL
        )
      : `${import.meta.env.VITE_API_URL}${member.image}`
  }
  alt=""
/> */}
<img
  src={
    member.image?.startsWith("http")
      ? member.image.replace(
          "http://localhost:5000",
          import.meta.env.VITE_API_URL
        )
      : `${import.meta.env.VITE_API_URL}${member.image}`
  }
  alt=""
  className="w-20 h-20 object-cover"
  onError={(e) => {
    console.log("FAILED URL =>", e.target.src);
  }}
/>
                  </td>

                  <td className="p-4 font-medium">{member.name}</td>

                  <td className="p-4">{member.position}</td>

                  <td className="p-4">{member.order}</td>

                  <td className="p-4">{member.status}</td>

                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => {
                          setEditingMember(member);

                          setFormData({
                            name: member.name || "",
                            position: member.position || "",
                            bio: member.bio || "",
                            linkedin: member.linkedin || "",
                            image: member.image || "",
                            order: member.order || 1,
                            status: member.status || "active",
                          });

                          setIsModalOpen(true);
                        }}
                      >
                        <Edit2 size={18} />
                      </button>

                      <button onClick={() => handleDelete(member._id)}>
                        <Trash2 size={18} className="text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-3xl rounded-2xl">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold">
                {editingMember
                  ? "Edit Leadership Member"
                  : "Add Leadership Member"}
              </h2>

              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingMember(null);
                }}
              >
                <X />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Full Name"
                  className="border p-3 rounded-xl"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  placeholder="Position"
                  className="border p-3 rounded-xl"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      position: e.target.value,
                    })
                  }
                />

                {/* <input
                  placeholder="Company"
                  className="border p-3 rounded-xl"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      company: e.target.value,
                    })
                  }
                /> */}

                <input
                  placeholder="LinkedIn URL"
                  className="border p-3 rounded-xl"
                  value={formData.linkedin}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      linkedin: e.target.value,
                    })
                  }
                />

                <input
                  type="number"
                  placeholder="Display Order"
                  className="border p-3 rounded-xl"
                  value={formData.order}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      order: e.target.value,
                    })
                  }
                />

                <select
                  className="border p-3 rounded-xl"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value,
                    })
                  }
                >
                  <option value="active">Active</option>

                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <input
                type="file"
                accept="image/*"
                className="border p-3 rounded-xl w-full"
                onChange={handleImageUpload}
              />

              {formData.image && (
                <img src={formData.image} alt="" className="w-40 rounded-xl" />
              )}

              <textarea
                rows="5"
                placeholder="Biography"
                className="border p-3 rounded-xl w-full"
                value={formData.bio}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bio: e.target.value,
                  })
                }
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-xl"
                >
                  {editingMember ? "Update Member" : "Save Member"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadershipTeamManagement;
