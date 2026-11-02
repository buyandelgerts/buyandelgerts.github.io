import React from "react";
import "./styles.css";
import practitionerBadge from "../assets/practitioner.png";
import developerBadge from "../assets/developerBadge.png";
import terraform from "../assets/terraform.png";

const certifications = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner – Foundational",
    issuer: "Amazon Web Services Training and Certification",
    image: practitionerBadge,
    url: "https://www.credly.com/badges/4cbc14dc-112d-49d8-8558-f9fb91124aa4/public_url",
  },
  {
    id: "aws-developer-associate",
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services Training and Certification",
    image: developerBadge,
    url: "https://www.credly.com/badges/63abdc4e-47de-4759-ad62-3a9dbb936a4e/public_url",
  },
  {
    id: "terraform-associate",
    title: "Terraform Associate (004)",
    issuer: "HashiCorp",
    image: terraform,
    url: "https://www.credly.com/badges/e827e9f5-e235-460b-93d9-a8fb39813717/public_url",
  },
];

const Certification: React.FC = () => {
  return (
    <div className="w-full md:flex-1 max-w-[640px] grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
      {certifications.map((cert, index) => (
        <div
          key={cert.id}
          className={
            index === 2
              ? "sm:col-span-2 flex justify-center"
              : "flex justify-center"
          }
        >
          <div className="bg-[#151515] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 flex flex-col text-center w-full max-w-[300px] shadow-lg shadow-black/20">
            <img
              src={cert.image}
              alt={`${cert.title} Badge`}
              className="w-32 h-32 mx-auto mb-6 object-contain drop-shadow-md"
            />

            <div className="flex-grow flex flex-col justify-center">
              <h2 className="text-[15px] font-semibold text-white mb-2 leading-snug">
                {cert.title}
              </h2>
              <p className="text-xs text-gray-500 italic mb-8">
                Issuer: {cert.issuer}
              </p>
            </div>

            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-white hover:bg-gray-100 text-black py-2.5 px-4 rounded w-full transition-colors flex items-center justify-center gap-1.5 no-underline"
            >
              <span className="text-[10px] uppercase tracking-wide text-gray-600 font-medium">
                Provided by
              </span>
              <strong className="text-xs font-bold tracking-wide">
                CREDLY
              </strong>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certification;
