const BoardCard = ({ name, role, image }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

      {/* IMAGE */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h3 className="font-semibold text-gray-800 text-base">
          {name}
        </h3>

        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
          {role}
        </p>

        {/* SMALL ICON */}
        <div className="mt-4 text-blue-500 opacity-70 group-hover:opacity-100 transition">
          ●
        </div>

      </div>

    </div>
  );
};

export default BoardCard;

// import { useNavigate } from "react-router-dom";
// import { Linkedin } from "lucide-react";

// const BoardCard = ({ id, name, role, image }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() => navigate(`/governance/board/${id}`)}
//       className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer"
//     >

//       {/* IMAGE */}
//       <div className="relative h-44 w-full overflow-hidden">

//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//         />

//         {/* 🔥 HOVER OVERLAY */}
//         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//           <div className="bg-white p-2 rounded-full">
//             <Linkedin size={18} />
//           </div>
//         </div>

//       </div>

//       {/* CONTENT */}
//       <div className="p-5">
//         <h3 className="font-semibold text-gray-800">{name}</h3>
//         <p className="text-sm text-gray-500 mt-1">{role}</p>
//       </div>

//     </div>
//   );
// };

// export default BoardCard;