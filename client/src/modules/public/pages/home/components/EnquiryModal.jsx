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