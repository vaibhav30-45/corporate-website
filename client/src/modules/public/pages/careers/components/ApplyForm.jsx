import { useState } from "react";
import { useDispatch } from "react-redux";
import { applyJob } from "../../../../../redux/slices/careerSlice";
import { toast } from "react-toastify";

const ApplyForm = ({ jobId }) => {
  const dispatch = useDispatch();

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  const [form, setForm] = useState({
    jobId: jobId || "",
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setErrors((prev) => ({
          ...prev,
          resume: "File size should not exceed 5MB",
        }));

        e.target.value = null;
        setForm({ ...form, resume: null });
      } else {
        setErrors((prev) => ({
          ...prev,
          resume: "",
        }));

        setForm({ ...form, resume: file });
      }
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.jobId) newErrors.jobId = "Job ID missing";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const formData = new FormData();
    formData.append("jobId", form.jobId);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("message", form.message);

    if (form.resume) {
      formData.append("resume", form.resume);
    }

    try {
      await dispatch(applyJob(formData)).unwrap();

      toast.success("Application submitted successfully 🎉");

      setForm({
        jobId: jobId || "",
        name: "",
        email: "",
        phone: "",
        message: "",
        resume: null,
      });

      setErrors({});
    } catch (err) {
      toast.error(err || "Submission failed ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">
        Apply for this Job
      </h2>

      <div>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border w-full p-2 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border w-full p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <input
        type="text"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="border w-full p-2 rounded"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        className="border w-full p-2 rounded"
      />

      <div>
        <input type="file" onChange={handleFileChange} />

        {/* ✅ Instruction */}
        <p className="text-gray-400 text-xs mt-1">
          Upload resume (Max size: 5MB)
        </p>

        {/* ❌ Error */}
        {errors.resume && (
          <p className="text-red-500 text-sm">{errors.resume}</p>
        )}

        {/* ✅ Selected file */}
        {form.resume && (
          <p className="text-sm text-gray-600 mt-1">
            Selected: {form.resume.name}
          </p>
        )}
      </div>

      <button className="w-full bg-primary text-white py-2 rounded hover:bg-orange-600">
        Submit Application
      </button>
    </form>
  );
};

export default ApplyForm;
