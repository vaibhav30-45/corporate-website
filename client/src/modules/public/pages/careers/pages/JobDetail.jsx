import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import HeroSection from "../../../components/HeroSection";
import ApplyForm from "../components/ApplyForm";
import WhatWeOffer from "../components/WhatWeOffer";

import careerImg from "../../../../../assets/Careers-image.png";

import { MapPin, Briefcase, Clock } from "lucide-react";

const API = "http://localhost:5000/api/career";

const JobDetail = () => {
  const { slug } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  // ✅ FETCH JOB
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`${API}/${slug}`);
        setJob(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [slug]);

  if (loading) return <h2 className="p-10">Loading...</h2>;
  if (!job) return <h2 className="p-10">Job not found</h2>;

  const handleApplyClick = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      {/* HERO */}
      <div className="relative">
        <HeroSection title={job.title} image={careerImg} />

        <div className="absolute z-20 bottom-10 md:bottom-20 left-0 w-full flex justify-center md:justify-start px-4 sm:px-8 md:px-12 lg:px-20 gap-4">
          <button
            onClick={handleApplyClick}
            className="bg-orange-500 px-6 py-3 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition"
          >
            Apply Now
          </button>

          <Link
            to="/careers"
            className="bg-white/10 backdrop-blur-md border border-white/30 px-6 py-3 text-white rounded-lg"
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

            {/* 🔥 FULL DESCRIPTION */}
            <div className="bg-white border p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Job Description</h3>

              <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* APPLY FORM */}
            {showForm && (
              <div ref={formRef} className="bg-white border p-6 rounded-lg">
                <ApplyForm jobId={job._id} />
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

                {job.department && (
                  <p>Department: {job.department}</p>
                )}
              </div>
            </div>

            <button
              onClick={handleApplyClick}
              className="w-full bg-orange-500 px-5 py-2 text-white hover:bg-orange-600"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <WhatWeOffer />
    </div>
  );
};

export default JobDetail;