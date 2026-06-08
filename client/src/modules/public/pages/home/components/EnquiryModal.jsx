import EnquiryForm from "../../../components/EnquiryForm";

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-6 sm:p-10 w-full max-w-2xl relative shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-primary transition-colors p-2 hover:bg-orange-50 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
          <p className="text-gray-500">Please fill out the form below and we'll get back to you shortly.</p>
        </div>

        <EnquiryForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default EnquiryModal;
