'use client';
import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

const teamData = [
  {
    id: 1,
    name: 'Cameron Williamson',
    title: 'CEO',
    videoUrl:
      'https://cdn.prod.website-files.com/634e3ae6f7e032d01b5e7fa7/635ebde396e6ef1be56a70e0_about-team-01-transcode.mp4',
    videoType: 'video/mp4',
    fallbackImage:
      'https://images.unsplash.com/photo-1570295999919-56ceb8e25514?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
  {
    id: 2,
    name: 'Albert Flores',
    title: 'ARCHITECT',
    videoUrl:
      'https://cdn.prod.website-files.com/634e3ae6f7e032d01b5e7fa7/635ebe9fb165560737f0ab4f_about-team-02-transcode.mp4',
    videoType: 'video/mp4',
    fallbackImage:
      'https://images.unsplash.com/photo-1549419137-a12866e4a2e5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
  {
    id: 3,
    name: 'Bessie Cooper',
    title: 'INTERIOR DESIGNER',
    videoUrl:
      'https://cdn.prod.website-files.com/634e3ae6f7e032d01b5e7fa7/635ebea91407d8dae6ca2584_about-team-04-transcode.mp4',
    videoType: 'video/mp4',
    fallbackImage:
      'https://images.unsplash.com/photo-1522294721184-b0a68d87b3e0?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
  {
    id: 4,
    name: 'Annette Black',
    title: 'EXTERIOR DESIGNER',
    videoUrl:
      'https://cdn.prod.website-files.com/634e3ae6f7e032d01b5e7fa7/635ebea41407d86568ca257a_about-team-03-transcode.mp4',
    videoType: 'video/mp4',
    fallbackImage:
      'https://images.unsplash.com/photo-1555776269-e72e11894d8b?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
];

const TeamMemberRow = ({ member }) => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    console.error(`Error loading video for ${member.name}`);
    setVideoError(true);
  };

  return (
    <div
      className="flex flex-col sm:flex-row justify-between items-center sm:items-center py-8 border-b border-gray-100 last:border-b-0
                 sm:space-x-6 lg:space-x-10"
    >
      {/* Left Section (Image/Video + Name) */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-6 lg:space-x-10 w-full sm:w-auto">
        {/* Video / Image */}
        <div className="w-full sm:w-40 sm:h-40 h-72 rounded-2xl overflow-hidden border-b bg-gray-200">
          {!videoError && member.videoUrl ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onError={handleVideoError}
            >
              <source src={member.videoUrl} type={member.videoType} />
            </video>
          ) : (
            <img
              src={member.fallbackImage}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Name (for mobile, below video) */}
        <h3 className="text-xl md:text-[32px] font-medium text-gray-900 font-[Satoshi] mt-4 sm:mt-0 text-center sm:text-left">
          {member.name}
        </h3>
      </div>

      {/* Right Section (Title + Socials) */}
      <div className="flex flex-col md:flex-row lg:gap-20 items-center sm:items-end mt-4 sm:mt-0 space-y-3">
        <div>
          <p className="text-lg md:text-base uppercase tracking-widest text-black font-medium whitespace-nowrap text-center sm:text-right">
            {member.title}
          </p>
        </div>

        <div className="flex space-x-3">
          <a
            href={member.socials.twitter}
            className="hover:bg-gray-300 transition duration-150 h-10 w-10 rounded-full bg-gray-200 text-black flex items-center justify-center"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href={member.socials.instagram}
            className="hover:bg-gray-300 transition duration-150 h-10 w-10 rounded-full bg-gray-200 text-black flex items-center justify-center"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href={member.socials.facebook}
            className="hover:bg-gray-300 transition duration-150 h-10 w-10 rounded-full bg-gray-200 text-black flex items-center justify-center"
          >
            <FaFacebookF size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function TeamSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-16 w-[96vw] sm:w-[93vw] md:w-[97vw] mx-auto">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-gray-600">
            OUR TEAM
          </h2>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:flex sm:flex-col gap-8">
          {teamData.map(member => (
            <div
              key={member.id}
              className=" sm:bg-transparent  sm:rounded-none p-6 sm:p-0 border-b border-gray-200 "
            >
              <TeamMemberRow member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
