// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { submitEnquiry, resetState } from "../../../../../redux/slices/enquirySlice";
// import { toast } from "react-toastify";

// const EnquiryModal = ({ isOpen, onClose }) => {
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
//       onClose();
//       dispatch(resetState());
//     }

//     if (error) {
//       toast.error(error);
//       dispatch(resetState());
//     }
//   }, [success, error]);

//   // ✅ CONDITION AFTER HOOKS
//   if (!isOpen) return null;

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
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
//       <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative shadow-2xl">

//         <button onClick={onClose} className="absolute top-4 right-4">✕</button>

//         <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

//         <form onSubmit={handleSubmit} className="space-y-5">

//           <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border p-3 rounded" />
//           <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border p-3 rounded" />
//           <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full border p-3 rounded" />
//           <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full border p-3 rounded" />

//           <button className="w-full bg-orange-500 text-white py-3 rounded">
//             {loading ? "Submitting..." : "Submit"}
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default EnquiryModal;

import EnquiryForm from "../../../components/EnquiryForm";

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative shadow-2xl">

        <button onClick={onClose} className="absolute top-4 right-4">✕</button>

        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

        <EnquiryForm onSuccess={onClose} />

      </div>
    </div>
  );
};

export default EnquiryModal;