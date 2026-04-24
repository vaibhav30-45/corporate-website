import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";

import HeroSection from "../../../components/HeroSection";
import ApplyForm from "../components/ApplyForm";
import WhatWeOffer from "../components/WhatWeOffer";

import careerImg from "../../../../../assets/Careers-image.png";

import { MapPin, Briefcase, Clock } from "lucide-react";

const JobDetail = () => {
  const { slug } = useParams();
  const jobs = useSelector((state) => state.career.jobs);

  const job = jobs.find((j) => j.slug === slug);

  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  if (!job) return <h2 className="p-10">Job not found</h2>;

  // ✅ APPLY CLICK → SHOW + SCROLL
  const handleApplyClick = () => {
    setShowForm(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>

      {/* ✅ HERO (REUSABLE) */}
      <div className="mt-[80px] relative">

        <HeroSection
          title={job.title}
         
          image={careerImg}
        />

        {/* 🔥 BUTTON OVERLAY */}
        <div className="absolute z-20 top-[65%] left-[2%] md:left-[7%] flex gap-4">

          <button
            onClick={handleApplyClick}
            className="bg-orange-500 px-6 py-2 text-white font-medium 
                       hover:bg-orange-600 transition"
          >
            Apply Now
          </button>

          <Link
            to="/careers"
            className="border border-white px-6 py-2 text-white 
                       hover:bg-white hover:text-black transition"
          >
            Back to All Jobs
          </Link>

        </div>

      </div>

      {/* MAIN */}
      <div className="px-6 md:px-16 py-12 bg-gray-50">

        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          Job Detail
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-6">

            <div className="bg-white border p-6 rounded-lg">
              <h3 className="font-semibold mb-3">About the Role</h3>
              <p className="text-gray-600 text-sm">{job.description}</p>
            </div>

            <div className="bg-white border p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Key Responsibilities</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Design user-centered interfaces</li>
                <li>Collaborate with developers</li>
                <li>Maintain UI consistency</li>
              </ul>
            </div>

            <div className="bg-white border p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Requirements</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>{job.experience} experience</li>
                <li>HTML, CSS, JS knowledge</li>
                <li>Strong problem-solving</li>
              </ul>
            </div>

            {/* ✅ APPLY FORM */}
            {showForm && (
              <div ref={formRef} className="bg-white border p-6 rounded-lg">
                <ApplyForm jobId={job.id} />
              </div>
            )}

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            <div className="bg-white border p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Job Summary</h3>

              <div className="space-y-3 text-sm text-gray-600">

                <p className="flex gap-2 items-center">
                  <Briefcase size={16} /> {job.title}
                </p>

                <p className="flex gap-2 items-center">
                  <MapPin size={16} /> {job.location}
                </p>

                <p className="flex gap-2 items-center">
                  <Briefcase size={16} /> {job.type}
                </p>

                <p className="flex gap-2 items-center">
                  <Clock size={16} /> {job.experience}
                </p>

                <p>Department: {job.department}</p>
              </div>
            </div>

            <div className="bg-white border p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Share this Job</h3>
              <div className="flex gap-3 text-gray-500">
                <span>🌐</span>
                <span>🔗</span>
                <span>📘</span>
              </div>
            </div>

            {/* 🔥 APPLY BUTTON (SIDEBAR) */}
            <button
              onClick={handleApplyClick}
              className="w-full bg-orange-500 px-5 py-2 text-white 
                         hover:bg-orange-600 transition"
            >
              Apply Now
            </button>

          </div>

        </div>

      </div>

      {/* WHAT WE OFFER */}
      <WhatWeOffer />

    </div>
  );
};

export default JobDetail;