// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { submitEnquiry, resetState } from "../../../redux/slices/enquirySlice";
// import { toast } from "react-toastify";

// const EnquiryForm = ({ onSuccess }) => {
//   const dispatch = useDispatch();
//   const { loading, success, error } = useSelector((state) => state.enquiry);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   useEffect(() => {
//     if (success) {
//       toast.success("Enquiry submitted!");
//       setForm({ name: "", email: "", phone: "", message: "" });

//       if (onSuccess) onSuccess(); // modal close ya kuch aur

//       dispatch(resetState());
//     }

//     if (error) {
//       toast.error(error);
//       dispatch(resetState());
//     }
//   }, [success, error]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     if (!form.name) return "Name is required";
//     if (!form.email) return "Email is required";
//     if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email";
//     if (!form.message) return "Message is required";
//     return null;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const err = validate();
//     if (err) return toast.error(err);

//     dispatch(submitEnquiry(form));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border p-3 rounded" />
//       <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border p-3 rounded" />
//       <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full border p-3 rounded" />
//       <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full border p-3 rounded" />

//       <button className="w-full bg-orange-500 text-white py-3 rounded">
//         {loading ? "Submitting..." : "Submit"}
//       </button>
//     </form>
//   );
// };

// export default EnquiryForm;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitEnquiry } from "../../../redux/slices/enquirySlice";
import { toast } from "react-toastify";

const EnquiryForm = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.enquiry);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name) return "Name is required";
    if (!form.email) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email";
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
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* FULL NAME */}
      <div>
        <label className="text-sm font-medium text-gray-600">
          Full Name
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter full name"
          className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* MOBILE */}
      <div>
        <label className="text-sm font-medium text-gray-600">
          Mobile Number
        </label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter mobile number"
          className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="text-sm font-medium text-gray-600">
          Email Address
        </label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email address"
          className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label className="text-sm font-medium text-gray-600">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Type your message here..."
          rows="4"
          className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
        />
      </div>

      {/* BUTTON */}
      <button
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 transition-all duration-300 text-white py-3 rounded-lg font-medium"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

    </form>
  );
};

export default EnquiryForm;