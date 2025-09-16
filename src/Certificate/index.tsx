import React from 'react';
import './styles.css';
import practitionerBadge from '../assets/practitioner.png';

const Certification: React.FC = () => {
  return ( 
    <div className="card-container bg-[#1A1A1A] border border-gray-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500">
      <img
        src={practitionerBadge}
        alt="AWS Cloud Practitioner - Foundation Badge"
        className="badge-image"
      />
      <h1 className="card-title">AWS Cloud Practitioner – Foundational</h1>
      <p className="card-issuer">
        Issuer: Amazon Web Services Training and Certification
      </p>
      <div className="provider-box bg-white cursor-pointer">
        <a href='https://www.credly.com/badges/4cbc14dc-112d-49d8-8558-f9fb91124aa4/public_url' target='_blank' rel="noopener noreferrer">
            <span>PROVIDED BY </span>
            <strong>Credly</strong>
        </a>
      </div>
    </div>
  );
};

export default Certification;