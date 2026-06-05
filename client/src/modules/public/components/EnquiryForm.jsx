

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitEnquiry } from "../../../redux/slices/enquirySlice";
import { toast } from "react-toastify";

const EnquiryForm = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.enquiry);

 const [form, setForm] = useState({
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const validate = () => {
  if (!form.name) return "Name is required";
  if (!form.email) return "Email is required";
  if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email";
  if (!form.subject) return "Subject is required";
  if (!form.message) return "Message is required";
  return null;
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (err) return toast.error(err);

    try {
      await dispatch(submitEnquiry(form)).unwrap(); // 🔥 important

      toast.success("Enquiry submitted!");

      // ✅ reset ONLY after success
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      if (onSuccess) onSuccess();

    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* FULL NAME */}
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-1 block">
            Full Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B96937]/20 focus:border-[#B96937] transition-all bg-gray-50/50"
          />
        </div>

        {/* MOBILE */}
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-1 block">
            Mobile Number
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter mobile number"
            className="w-full border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B96937]/20 focus:border-[#B96937] transition-all bg-gray-50/50"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  {/* COMPANY */}
  <div>
    <label className="text-sm font-semibold text-gray-700 mb-1 block">
      Company
    </label>
    <input
      name="company"
      value={form.company}
      onChange={handleChange}
      placeholder="Enter company name"
      className="w-full border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B96937]/20 focus:border-[#B96937] transition-all bg-gray-50/50"
    />
  </div>

  {/* SUBJECT */}
  <div>
    <label className="text-sm font-semibold text-gray-700 mb-1 block">
      Subject
    </label>
    <input
      name="subject"
      value={form.subject}
      onChange={handleChange}
      placeholder="Enter subject"
      className="w-full border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B96937]/20 focus:border-[#B96937] transition-all bg-gray-50/50"
    />
  </div>
</div>

      {/* EMAIL */}
      <div>
        <label className="text-sm font-semibold text-gray-700 mb-1 block">
          Email Address
        </label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="w-full border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B96937]/20 focus:border-[#B96937] transition-all bg-gray-50/50"
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label className="text-sm font-semibold text-gray-700 mb-1 block">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          rows="4"
          className="w-full border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B96937]/20 focus:border-[#B96937] transition-all bg-gray-50/50 resize-none"
        />
      </div>

      {/* BUTTON */}
      <button
        disabled={loading}
        className="w-full btn-gradient disabled:opacity-60 text-white py-4 rounded-xl font-bold shadow-lg active:scale-[0.98]"
      >
        {loading ? "Submitting..." : "Send Message"}
      </button>
    </form>
  );
};

export default EnquiryForm;
