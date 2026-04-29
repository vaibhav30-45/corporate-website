const EnquiryDrawer = ({ enquiry, onClose }) => {
  if (!enquiry) return null;

  return (
    <div className="fixed inset-0 z-[9999]">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-[420px] bg-white shadow-2xl p-6 flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b pb-3">
          <h2 className="text-lg font-semibold">Enquiry Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-lg"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-4 text-sm">

          <div>
            <p className="text-gray-500">Name</p>
            <p className="font-medium">{enquiry.name}</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-medium">{enquiry.email}</p>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-medium">{enquiry.phone || "-"}</p>
          </div>

          <div>
            <p className="text-gray-500 mb-1">Message</p>
            <div className="bg-gray-100 p-3 rounded-lg text-gray-700 whitespace-pre-wrap">
              {enquiry.message}
            </div>
          </div>

        </div>

        {/* Footer */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-black text-white py-2 rounded"
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default EnquiryDrawer;