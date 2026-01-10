import React from "react";
import { FaDownload } from "react-icons/fa";

const documents = [
  {
    title: "WELCOME",
    file: "/pdfs/welcome_guide.pdf",
    image: "/img/profilepicture.png",
    description:
      "Start here - A message from Justin and an overview of your program.",
    bgPosition: "top",
    bgSize: "cover",
  },
  {
    title: "MILITARY PREP GUIDE",
    file: "/pdfs/military_prep_guide.pdf",
    image: "/img/barret.jpg",
    description:
      "Must-read coaching guide with key structure and philosophy behind the program.",
    bgPosition: "center",
    bgSize: "cover",
  },
  {
    title: "01 BASIC REQUIREMENTS",
    file: "/pdfs/military_basic_requirements.pdf",
    image: "/img/Bootgroup_carry.jpg",
    description:
      "Covers physical entry standards and how to prepare for military selection.",
    bgPosition: "80% 20%",
    bgSize: "cover",
  },
  {
    title: "02 FOUNDATIONAL STRENGTH",
    file: "/pdfs/military_foundational_strength.pdf",
    image: "/img/marsof.jpg",
    description:
      "Helps build total-body strength and capacity before bootcamp begins.",
    bgPosition: "top",
    bgSize: "cover",
  },
  {
    title: "03 SWIMMING PRACTICE",
    file: "/pdfs/swimming_practice.pdf",
    image: "/img/spelioladder.jpg",
    description:
      "Develop your water confidence and swimming technique for military prep.",
    bgPosition: "top",
    bgSize: "cover",
  },
  {
    title: "SUPPORT 01 - EXERCISE LIBRARY",
    file: "/pdfs/support_exercise_library.pdf",
    image: "/img/friscatnight.jpg",
    description:
      "Every movement and drill explained - your complete visual reference.",
    bgPosition: "center",
    bgSize: "cover",
  },
  {
    title: "SUPPORT 02 - MOBILITY GUIDE",
    file: "/pdfs/support_mobility_guide.pdf",
    image: "/img/hlo.jpg",
    description:
      "Mobility, decompression, and mindfulness strategies to stay sharp.",
    bgPosition: "center",
    bgSize: "cover",
  },
  {
    title: "6-WEEK PROGRAM OVERVIEW",
    file: "/pdfs/six_week_program.pdf",
    image: "/img/takethestep.jpg",
    description:
      "Full breakdown of the 6-week cycle: sessions, days, and structure.",
    bgPosition: "center",
    bgSize: "cover",
  },
];

const TrainingProgram = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 sm:px-6 py-12 max-w-5xl mx-auto font-primary">
      {/* Hero Banner */}
      <div className="mb-10">
        <img
          src="/img/royalmarines.jpg"
          alt="Military Prep"
          className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
        />
        <h1 className="h1 mb-2">The Military Preparation Program</h1>
        <p className="text-gray-400 sm:text-base max-w-3xl tracking-wider text-base md:text-lg">
          This program is your step-by-step path to becoming mentally and
          physically ready for military life. It’s divided into key
          sub-programs, each focused on a specific phase of your preparation -
          from meeting entry requirements to building strength, water
          confidence, and mobility.
        </p>
      </div>

      {/* Program Structure */}
      <div className="mb-12">
        <h2 className="h2-teko mb-2">Program Structure</h2>
        <ul className="list-disc list-outside pl-5 text-sm text-gray-400 tracking-wide space-y-1">
          <li>
            <span className="text-white font-medium">Welcome Guide:</span> Get
            started with a personal message and full orientation.
          </li>
          <li>
            <span className="text-white font-medium">Military Prep Guide:</span>{" "}
            Learn the system and training philosophy.
          </li>
          <li>
            <span className="text-white font-medium">Basic Requirements:</span>{" "}
            Prepare for military selection benchmarks.
          </li>
          <li>
            <span className="text-white font-medium">
              Foundational Strength:
            </span>{" "}
            Build resilience for bootcamp.
          </li>
          <li>
            <span className="text-white font-medium">Swimming Practice:</span>{" "}
            Boost confidence in aquatic environments.
          </li>
          <li>
            <span className="text-white font-medium">
              Support - Exercise & Mobility:
            </span>{" "}
            Learn the movements and restore your body.
          </li>
          <li>
            <span className="text-white font-medium">6-Week Schedule:</span>{" "}
            Your weekly plan, laid out for daily execution.
          </li>
        </ul>
      </div>

      {/* Download Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="group bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg shadow hover:shadow-yellow/10 transition duration-300 overflow-hidden flex flex-col"
          >
            <div
              className="h-32 relative group-hover:scale-[1.01] transition-transform duration-300"
              style={{
                backgroundImage: `url('${doc.image}')`,
                backgroundPosition: doc.bgPosition || "center",
                backgroundSize: doc.bgSize || "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-60 transition duration-300">
                <h3 className="text-brown text-lg font-bold text-center px-2 tracking-wider">
                  {doc.title}
                </h3>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <p className="text-gray-300 mb-3 text-base md:text-lg">{doc.description}</p>
              <a
                href={doc.file}
                download
                className="mt-auto inline-flex items-center gap-2 text-yellow hover:underline tracking-wide text-sm"
              >
                <FaDownload /> Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingProgram;
