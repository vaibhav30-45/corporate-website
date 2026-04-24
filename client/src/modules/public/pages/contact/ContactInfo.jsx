import HeroSection from "../../components/HeroSection";
import EnquiryForm from "../../components/EnquiryForm";

import contactHero from "../../../../assets/contact image.png";
import locationImg from "../../../../assets/location image.png";

const ContactPage = () => {
  return (
    <div className="bg-[#f5f7f9]">

      {/* 🔷 HERO */}
      <HeroSection
  title="Contact Us"
  description={
    <>
      We’d love to hear from you. <br />
      Reach out to us for any queries or collaborations.
    </>
  }
  image={contactHero}
/>

      {/* 🔷 MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 grid lg:grid-cols-2 gap-8 items-stretch">

        {/* 🏢 LEFT CARD */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm flex flex-col h-full">

          {/* Heading */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Our Offices
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              We have multiple locations to serve you better.
            </p>
          </div>

          {/* Office Cards */}
          <div className="space-y-5 flex-1">

            {/* Head Office */}
            <div className="border rounded-xl p-5">
              <h4 className="text-orange-500 font-semibold mb-2 flex items-center gap-2">
                🏢 Head Office
              </h4>

              <p className="text-sm text-gray-700">
                Green Valley Industries Pvt. Ltd.
              </p>
              <p className="text-sm text-gray-500">
                123 Green Street, Eco Park
              </p>
              <p className="text-sm text-gray-500 mb-3">
                Mumbai - 400001, India
              </p>

              <hr className="my-3" />

              <div className="text-sm text-gray-600 space-y-1">
                <p>📞 +91 9XXXXXXXXX</p>
                <p>📧 info@corporate.com</p>
                <p>🕒 Mon - Fri: 9:00 AM 6:00 PM</p>
              </div>
            </div>

            {/* Branch Office */}
            <div className="border rounded-xl p-5">
              <h4 className="text-orange-500 font-semibold mb-2 flex items-center gap-2">
                🏢 Branch Office
              </h4>

              <p className="text-sm text-gray-700">
                Green Valley Industries Pvt. Ltd.
              </p>
              <p className="text-sm text-gray-500">
                123 Green Street, Eco Park
              </p>
              <p className="text-sm text-gray-500 mb-3">
                Mumbai - 400001, India
              </p>

              <hr className="my-3" />

              <div className="text-sm text-gray-600 space-y-1">
                <p>📞 +91 9XXXXXXXXX</p>
                <p>📧 info@corporate.com</p>
                <p>🕒 Mon - Fri: 9:00 AM 6:00 PM</p>
              </div>
            </div>

          </div>
        </div>

        {/* 📩 RIGHT CARD */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm flex flex-col h-full">

          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Send Us an Enquiry
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Fill out the form below and we will get back to you.
            </p>
          </div>

          {/* FORM */}
          <div className="flex-1 flex flex-col justify-between">
            <EnquiryForm />
          </div>

        </div>

      </div>

      {/* 📍 LOCATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-14">
        <div className="bg-white border rounded-xl p-5 shadow-sm">

          <h3 className="text-lg font-semibold text-gray-700">
            Our Locations
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Find us on the map below. We have offices in multiple locations.
          </p>

          <img
            src={locationImg}
            alt="location"
            className="w-full h-[250px] sm:h-[320px] object-cover rounded-lg"
          />

        </div>
      </div>

    </div>
  );
};

export default ContactPage;