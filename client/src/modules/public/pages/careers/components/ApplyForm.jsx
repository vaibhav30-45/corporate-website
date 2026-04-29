// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { applyJob } from "../../../../../redux/slices/careerSlice";

// const ApplyForm = ({ jobId }) => {
//   const [form, setForm] = useState({
//     jobId: jobId || "",
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     resume: null,
//   });

//   const dispatch = useDispatch();

//   const [errors, setErrors] = useState({});

//   // HANDLE CHANGE
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   // FILE CHANGE
//   const handleFileChange = (e) => {
//     setForm({
//       ...form,
//       resume: e.target.files[0],
//     });
//   };

//   // VALIDATION
//   const validate = () => {
//     let newErrors = {};

//     if (!form.name) newErrors.name = "Name is required";
//     if (!form.email) newErrors.email = "Email is required";
//     if (!form.jobId) newErrors.jobId = "Job ID missing";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // SUBMIT
//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!validate()) return;

//   const formData = new FormData();

//   formData.append("jobId", form.jobId);
//   formData.append("name", form.name);
//   formData.append("email", form.email);
//   formData.append("phone", form.phone);
//   formData.append("message", form.message);

//   if (form.resume) {
//     formData.append("resume", form.resume);
//   }

//   try {
//     await dispatch(applyJob(formData)).unwrap();

//     alert("Application submitted successfully!");

//     setForm({
//       jobId: jobId || "",
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//       resume: null,
//     });
//   } catch (err) {
//     alert("Error submitting application");
//   }
// };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-4"
//     >
//       <h2 className="text-xl font-bold text-gray-800 mb-2">
//         Apply for this Job
//       </h2>

//       {/* NAME */}
//       <div>
//         <label className="text-sm font-medium text-gray-700">Full Name *</label>
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//           className="border w-full p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
//         />
//         {errors.name && (
//           <p className="text-red-500 text-sm">{errors.name}</p>
//         )}
//       </div>

//       {/* EMAIL */}
//       <div>
//         <label className="text-sm font-medium text-gray-700">Email *</label>
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//           className="border w-full p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
//         />
//         {errors.email && (
//           <p className="text-red-500 text-sm">{errors.email}</p>
//         )}
//       </div>

//       {/* PHONE */}
//       <div>
//         <label className="text-sm font-medium text-gray-700">Phone</label>
//         <input
//           type="text"
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           placeholder="Enter your phone number"
//           className="border w-full p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
//         />
//       </div>

//       {/* MESSAGE */}
//       <div>
//         <label className="text-sm font-medium text-gray-700">Message</label>
//         <textarea
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           placeholder="Write something..."
//           rows="3"
//           className="border w-full p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
//         />
//       </div>

//       {/* RESUME */}
//       <div>
//         <label className="text-sm font-medium text-gray-700">Upload Resume</label>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="border w-full p-2 rounded mt-1"
//         />
//       </div>

//       {/* SUBMIT */}
//       <button
//         type="submit"
//         className="w-full bg-orange-500 text-white py-2 rounded 
//                    hover:bg-orange-600 transition duration-200"
//       >
//         Submit Application
//       </button>
//     </form>
//   );
// };

// export default ApplyForm;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { applyJob } from "../../../../../redux/slices/careerSlice";
import { toast } from "react-toastify";

const ApplyForm = ({ jobId }) => {
  const dispatch = useDispatch();

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
    setForm({ ...form, resume: e.target.files[0] });
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

      // ✅ RESET FORM
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
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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

      <input type="file" onChange={handleFileChange} />

      <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
        Submit Application
      </button>
    </form>
  );
};

export default ApplyForm;