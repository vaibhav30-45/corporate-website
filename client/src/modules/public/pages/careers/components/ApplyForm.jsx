import { useState } from "react";

const ApplyForm = ({ jobId }) => {
  const [form, setForm] = useState({
    jobId: jobId || "",
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // FILE CHANGE
  const handleFileChange = (e) => {
    setForm({
      ...form,
      resume: e.target.files[0],
    });
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.jobId) newErrors.jobId = "Job ID missing";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // 👉 Backend integration later
    console.log("Form Data:", form);

    // RESET FORM
    setForm({
      jobId: jobId || "",
      name: "",
      email: "",
      phone: "",
      message: "",
      resume: null,
    });

    alert("Application submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Apply for this Job
      </h2>

      {/* NAME */}
      <div>
        <label className="text-sm font-medium text-gray-700">Full Name *</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="border w-full p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name}</p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <label className="text-sm font-medium text-gray-700">Email *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="border w-full p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      {/* PHONE */}
      <div>
        <label className="text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="border w-full p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label className="text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write something..."
          rows="3"
          className="border w-full p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* RESUME */}
      <div>
        <label className="text-sm font-medium text-gray-700">Upload Resume</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="border w-full p-2 rounded mt-1"
        />
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 rounded 
                   hover:bg-orange-600 transition duration-200"
      >
        Submit Application
      </button>
    </form>
  );
};

export default ApplyForm;