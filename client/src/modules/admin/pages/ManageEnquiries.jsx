import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEnquiries,
  markAsRead,
  removeEnquiry
} from "../../../redux/slices/enquiryAdminSlice";

import { Eye, Trash2, CheckCheck, MessageSquare, CheckCircle2 } from "lucide-react";
import EnquiryDrawer from "../../admin/components/EnquiryDrawer";

const ITEMS_PER_PAGE = 5;

const AdminEnquiryPage = () => {
  const dispatch = useDispatch();
  const { enquiries, loading } = useSelector((state) => state.adminEnquiry);

  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchEnquiries());
  }, [dispatch]);

  const handleView = (enquiry) => {
    setSelectedEnquiry(enquiry);

    if (enquiry.status === "unread") {
      dispatch(markAsRead(enquiry._id));
    }
  };

  // FILTER
  const filteredData =
    filter === "all"
      ? enquiries
      : enquiries.filter((e) => e.status === filter);

  // PAGINATION
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // STATS
  const total = enquiries.length;
  const unread = enquiries.filter(e => e.status === "unread").length;
  const read = enquiries.filter(e => e.status === "read").length;

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto py-6 space-y-8 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-corporate-navy tracking-tight">Enquiries</h1>
        <p className="text-gray-500 text-sm mt-2 max-w-2xl">
          Manage all customer enquiries with a polished admin experience matching the blog and news pages.
        </p>
      </div>

      {/* ✅ STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div className="bg-blue-50 p-3 rounded-2xl">
              <MessageSquare size={18} className="text-blue-600" />
            </div>
            <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Total Enquiries</p>
          </div>
          <h2 className="text-3xl font-bold text-corporate-navy mt-5">{total}</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div className="bg-red-50 p-3 rounded-2xl">
              <CheckCircle2 size={18} className="text-red-600" />
            </div>
            <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Unread</p>
          </div>
          <h2 className="text-3xl font-bold text-corporate-navy mt-5">{unread}</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div className="bg-green-50 p-3 rounded-2xl">
              <CheckCircle2 size={18} className="text-green-600" />
            </div>
            <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Read</p>
          </div>
          <h2 className="text-3xl font-bold text-corporate-navy mt-5">{read}</h2>
        </div>
      </div>

      {/* ✅ FILTER TABS */}
      <div className="flex gap-3 mb-4">
        {["all", "read", "unread"].map((f) => (
          <button
            key={f}
            onClick={() => {
              setFilter(f);
              setCurrentPage(1);
            }}
            className={`px-4 py-1 rounded-full text-sm capitalize transition ${
              filter === f
                ? "bg-blue-600 text-white"
                : "bg-white border hover:bg-gray-100"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">View</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500">
                  No enquiries found
                </td>
              </tr>
            ) : (
              paginatedData.map((e) => (
                <tr key={e._id} className="border-t hover:bg-gray-50">

                  <td className="p-4 font-medium text-gray-800">{e.name}</td>
                  <td className="p-4 text-gray-600">{e.email}</td>
                  <td className="p-4 text-gray-600">{e.phone || "-"}</td>

                  {/* VIEW */}
                  <td className="p-4 text-center">
                    <Eye
                      size={18}
                      className="text-blue-600 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleView(e)}
                    />
                  </td>

                  {/* STATUS */}
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {e.status === "unread" && (
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      )}
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        e.status === "read"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}>
                        {e.status}
                      </span>
                    </div>
                  </td>

                  {/* ACTIONS */}
                  <td className="p-4 flex justify-center gap-3">

                    {e.status === "unread" && (
                      <CheckCheck
                        size={18}
                        className="text-green-600 cursor-pointer hover:scale-110"
                        onClick={() => dispatch(markAsRead(e._id))}
                      />
                    )}

                    <Trash2
                      size={18}
                      className="text-red-500 cursor-pointer hover:scale-110"
                      onClick={() => dispatch(removeEnquiry(e._id))}
                    />

                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-5">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white border hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* DRAWER */}
      <EnquiryDrawer
        enquiry={selectedEnquiry}
        onClose={() => setSelectedEnquiry(null)}
      />

    </div>
  );
};

export default AdminEnquiryPage;



// ✅ BETTER CARD COMPONENT
const StatCard = ({ title, value, color = "text-gray-800", bg = "" }) => (
  <div className={`p-5 rounded-xl border shadow-sm bg-white ${bg}`}>
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className={`text-2xl font-bold mt-1 ${color}`}>
      {value}
    </h2>
  </div>
);