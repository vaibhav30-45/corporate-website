const BoardCard = ({ name, position, image }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
      
      {/* IMAGE */}
      <div className="aspect-[4/3] w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain object-center transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-800 text-base">
          {name}
        </h3>

        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
          {position}
        </p>
      </div>
    </div>
  );
};

export default BoardCard;