import React from "react";
import "./styles.css";
import practitionerBadge from "../assets/practitioner.png";
import developerBadge from "../assets/developerBadge.png";

const Certification: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-8">
      {/* First Certificate: Cloud Practitioner */}
      <div className="card-container bg-[#1A1A1A] border border-gray-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 w-full max-w-sm flex flex-col text-center">
        <img
          src={practitionerBadge}
          alt="AWS Cloud Practitioner - Foundational Badge"
          className="badge-image w-40 h-40 mx-auto mb-6 object-contain"
        />
        <h1 className="card-title text-xl font-bold text-white mb-2">
          AWS Cloud Practitioner – Foundational
        </h1>
        <p className="card-issuer text-sm text-gray-400 mb-8">
          Issuer: Amazon Web Services Training and Certification
        </p>
        <div className="provider-box bg-white cursor-pointer mt-auto rounded py-2 px-4 hover:bg-gray-200 transition-colors">
          <a
            href="https://www.credly.com/badges/4cbc14dc-112d-49d8-8558-f9fb91124aa4/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-black no-underline"
          >
            <span className="text-xs">PROVIDED BY </span>
            <strong>Credly</strong>
          </a>
        </div>
      </div>

      {/* Second Certificate: Developer Associate */}
      <div className="card-container bg-[#1A1A1A] border border-gray-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 w-full max-w-sm flex flex-col text-center">
        <img
          src={developerBadge}
          alt="AWS Certified Developer - Associate Badge"
          className="badge-image w-40 h-40 mx-auto mb-6 object-contain"
        />
        <h1 className="card-title text-xl font-bold text-white mb-2">
          AWS Certified Developer – Associate
        </h1>
        <p className="card-issuer text-sm text-gray-400 mb-8">
          Issuer: Amazon Web Services Training and Certification
        </p>
        <div className="provider-box bg-white cursor-pointer mt-auto rounded py-2 px-4 hover:bg-gray-200 transition-colors">
          <a
            href="https://www.credly.com/badges/63abdc4e-47de-4759-ad62-3a9dbb936a4e/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-black no-underline"
          >
            <span className="text-xs">PROVIDED BY </span>
            <strong>Credly</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certification;
