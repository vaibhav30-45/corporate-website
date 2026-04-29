
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  X,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ChevronRight,
  FileText,
  Tag,
  Clock,
  CheckCircle
} from "lucide-react";

import {
  getAdminNews,
  createNews,
  updateNews,
  deleteNews
} from "../../../services/newsService";

import NewsEditor from "../components/NewsEditor";

const ManageNews = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    type: "press-release",
    image: "",
    status: "draft",
    summary: "",
    content: "",
    publishedAt: new Date().toISOString().split("T")[0]
  });

  // ---------------- FETCH DATA ----------------
  const loadData = async () => {
    try {
      setLoading(true);
      const data = await getAdminNews();
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Failed to load news");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ---------------- STATS ----------------
  const stats = useMemo(() => {
    return {
      total: items.length,
      published: items.filter(
        (item) => item.status === "published"
      ).length,
      drafts: items.filter(
        (item) => item.status === "draft"
      ).length,
      categories: new Set(
        items.map((item) => item.category).filter(Boolean)
      ).size
    };
  }, [items]);

  // ---------------- AUTO SLUG ----------------
  useEffect(() => {
    if (!currentItem && formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      setFormData((prev) => ({
        ...prev,
        slug
      }));
    }
  }, [formData.title, currentItem]);

  // ---------------- CATEGORY LIST ----------------
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      items.map((item) => item.category).filter(Boolean)
    );

    return ["All", ...Array.from(uniqueCategories)];
  }, [items]);

  // ---------------- FILTERED ITEMS ----------------
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.title
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.category
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        filterCategory === "All" ||
        item.category === filterCategory;

      const matchesStatus =
        filterStatus === "All" ||
        item.status === filterStatus;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [items, searchTerm, filterCategory, filterStatus]);

  // ---------------- MODAL ----------------
  const handleOpenModal = (item = null) => {
    if (item) {
      setCurrentItem(item);
      setFormData({
        ...item
      });
    } else {
      setCurrentItem(null);
      setFormData({
        title: "",
        slug: "",
        category: "",
        type: "press-release",
        image: "",
        status: "draft",
        summary: "",
        content: "",
        publishedAt:
          new Date().toISOString().split("T")[0]
      });
    }

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError(null);
    setSuccessMessage("");
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      if (currentItem) {
        await updateNews(currentItem._id, formData);
        setSuccessMessage("News updated successfully");
      } else {
        await createNews(formData);
        setSuccessMessage("News created successfully");
      }

      await loadData();

      setTimeout(() => {
        handleCloseModal();
      }, 1000);
    } catch (err) {
      setError("Failed to save news");
    } finally {
      setSubmitting(false);
    }
  };

  // ---------------- DELETE ----------------
  const handleDelete = async () => {
    try {
      setSubmitting(true);

      await deleteNews(currentItem._id);

      await loadData();
      setIsDeleteModalOpen(false);
    } catch (err) {
      setError("Failed to delete news");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-corporate-navy tracking-tight">
            Manage News
          </h1>
          <p className="text-gray-500">
            Manage all your news content
          </p>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="bg-orange-500 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          Add News
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Total News",
            value: stats.total,
            icon: FileText
          },
          {
            label: "Published",
            value: stats.published,
            icon: CheckCircle
          },
          {
            label: "Drafts",
            value: stats.drafts,
            icon: Clock
          },
          {
            label: "Categories",
            value: stats.categories,
            icon: Tag
          }
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow"
          >
            <stat.icon size={22} />
            <p className="text-gray-500 mt-2">
              {stat.label}
            </p>
            <h2 className="text-2xl font-bold">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* SEARCH + FILTER */}
      <div className="bg-white p-4 rounded-xl shadow">
        <div className="flex flex-col md:flex-row gap-4">

          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full pl-10 py-3 border rounded-xl"
            />
          </div>

          {/* CATEGORY FILTER */}
          <select
            value={filterCategory}
            onChange={(e) =>
              setFilterCategory(e.target.value)
            }
            className="px-4 py-3 border rounded-xl"
          >
            <option value="All">
              All Categories
            </option>

            {categories
              .filter((cat) => cat !== "All")
              .map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
          </select>

          {/* STATUS FILTER */}
          <select
            value={filterStatus}
            onChange={(e) =>
              setFilterStatus(e.target.value)
            }
            className="px-4 py-3 border rounded-xl"
          >
            <option value="All">
              All Status
            </option>
            <option value="published">
              Published
            </option>
            <option value="draft">
              Draft
            </option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">
                News Details
              </th>
              <th className="p-4 text-left">
                Category
              </th>
              <th className="p-4 text-left">
                Status
              </th>
              <th className="p-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.map((item) => (
              <tr
                key={item._id}
                className="border-t"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-lg"
                    />

                    <div>
                      <p className="font-semibold">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(
                          item.publishedAt
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="p-4">
                  {item.category}
                </td>

                {/* TYPE COLUMN REMOVED */}

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "published"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4 text-right">
                  <button
                    onClick={() =>
                      handleOpenModal(item)
                    }
                    className="mr-3"
                  >
                    <Edit2 size={18} />
                  </button>

                  <button
                    onClick={() => {
                      setCurrentItem(item);
                      setIsDeleteModalOpen(true);
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Existing Modal code remains same */}
      {/* Existing Delete Modal remains same */}
    </div>
  );
};

export default ManageNews;
