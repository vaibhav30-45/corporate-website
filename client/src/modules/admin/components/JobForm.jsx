import { useEffect, useState } from "react";

const initialState = {
  title: "",
  slug: "",
  location: "",
  type: "",
  experience: "",
  status: "open",
  titleContent: "",
  responsibilities: "",
  requirements: "",
};

const JobForm = ({ onSubmit, selectedJob, clearEdit }) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const generateSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");

  useEffect(() => {
    if (selectedJob) {
      const desc = selectedJob.description || "";

      const getSection = (key) => {
        const regex = new RegExp(
          `${key}\\n([\\s\\S]*?)(\\n[A-Z ]+\\n|$)`,
          "i"
        );
        const match = desc.match(regex);
        return match ? match[1].trim() : "";
      };

      setForm({
        title: selectedJob.title || "",
        slug: selectedJob.slug || "",
        location: selectedJob.location || "",
        type: selectedJob.type || "",
        experience: selectedJob.experience || "",
        status: selectedJob.status || "open",
        titleContent: getSection("TITLE"),
        responsibilities: getSection("RESPONSIBILITIES"),
        requirements: getSection("REQUIREMENTS"),
      });
    } else {
      setForm(initialState);
    }
  }, [selectedJob]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updated = {
      ...form,
      [name]: value,
    };

    if (name === "title") {
      updated.slug = generateSlug(value);
    }

    setForm(updated);
  };

  const validate = () => {
    let err = {};
    if (!form.title) err.title = "Title required";
    if (!form.slug) err.slug = "Slug required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const description = `
TITLE
${form.titleContent || ""}

RESPONSIBILITIES
${form.responsibilities || ""}

REQUIREMENTS
${form.requirements || ""}
    `.trim();

    onSubmit({
      title: form.title,
      slug: form.slug,
      location: form.location,
      type: form.type,
      experience: form.experience,
      status: form.status,
      description,
    });

    setForm(initialState);
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {/* TITLE */}
      <div>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-orange-400 outline-none"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      {/* SLUG */}
      <div>
        <input
          name="slug"
          value={form.slug}
          onChange={handleChange}
          placeholder="Slug"
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-orange-400 outline-none"
        />
        {errors.slug && (
          <p className="text-red-500 text-sm mt-1">{errors.slug}</p>
        )}
      </div>

      {/* LOCATION */}
      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location"
        className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
      />

      {/* TYPE DROPDOWN */}
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
      >
        <option value="">Select Job Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>

      {/* EXPERIENCE DROPDOWN */}
      <select
        name="experience"
        value={form.experience}
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
      >
        <option value="">Select Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="0-1 years">0-1 Years</option>
        <option value="1-3 years">1-3 Years</option>
        <option value="3-5 years">3-5 Years</option>
        <option value="5+ years">5+ Years</option>
      </select>

      {/* STATUS */}
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
      >
        <option value="open">Open</option>
        <option value="closed">Closed</option>
      </select>

      {/* DESCRIPTION FIELDS */}
      <textarea
        name="titleContent"
        value={form.titleContent}
        onChange={handleChange}
        placeholder="About Job"
        className="border p-3 rounded-lg w-full h-20 md:col-span-2 focus:ring-2 focus:ring-orange-400 outline-none"
      />

      <textarea
        name="responsibilities"
        value={form.responsibilities}
        onChange={handleChange}
        placeholder="Responsibilities"
        className="border p-3 rounded-lg w-full h-28 md:col-span-2 focus:ring-2 focus:ring-orange-400 outline-none"
      />

      <textarea
        name="requirements"
        value={form.requirements}
        onChange={handleChange}
        placeholder="Requirements"
        className="border p-3 rounded-lg w-full h-28 md:col-span-2 focus:ring-2 focus:ring-orange-400 outline-none"
      />

      {/* BUTTONS */}
      <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 justify-center mt-2">

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition w-full sm:w-auto"
        >
          {selectedJob ? "Update Job" : "Create Job"}
        </button>

        {selectedJob && (
          <button
            type="button"
            onClick={clearEdit}
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg transition w-full sm:w-auto"
          >
            Cancel
          </button>
        )}

      </div>
    </form>
  );
};

export default JobForm;