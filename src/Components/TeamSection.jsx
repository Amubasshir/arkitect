'use client';
import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

const teamData = [
  {
    id: 1,
    name: 'Cameron Williamson',
    title: 'CEO',
    // নিশ্চিত করুন যে এই URL গুলি অ্যাক্সেসযোগ্য
    videoUrl:
      'https://cdn.prod.website-files.com/634e3ae6f7e032d01b5e7fa7/635ebde396e6ef1be56a70e0_about-team-01-transcode.mp4',
    videoType: 'video/mp4',
    fallbackImage:
      'https://images.unsplash.com/photo-1570295999919-56ceb8e25514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
      'https://images.unsplash.com/photo-1549419137-a12866e4a2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
  {
    id: 3,
    name: 'Bessie Cooper',
    title: 'INTERIOR DESIGNER',
    // এই পাথগুলি আপনার পাবলিক ডিরেক্টরির সাথে মেলানো নিশ্চিত করুন
    videoUrl:
      'https://cdn.prod.website-files.com/634e3ae6f7e032d01b5e7fa7/635ebea91407d8dae6ca2584_about-team-04-transcode.mp4',
    videoType: 'video/mp4',
    fallbackImage:
      'https://images.unsplash.com/photo-1522294721184-b0a68d87b3e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
      'https://images.unsplash.com/photo-1555776269-e72e11894d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    socials: { twitter: '#', instagram: '#', facebook: '#' },
  },
];

// Reusable component for a single Team Member Row with Video Profile
const TeamMemberRow = ({ member }) => {
  // ফলব্যাক ম্যানেজ করার জন্য স্টেট
  const [videoError, setVideoError] = useState(false);

  // ভিডিও লোড হতে ব্যর্থ হলে সেটVideoError(true) কল করা হবে
  const handleVideoError = () => {
    console.error(`Error loading video for ${member.name}: ${member.videoUrl}`);
    setVideoError(true);
  };

  return (
    <div className="flex justify-between items-center py-8 border-b border-gray-100 last:border-b-0">
      {/* Left Side: Video/Image Profile and Name */}
      <div className="flex items-center space-x-6 md:space-x-10">
        <div className="w-20 h-20 md:w-40 md:h-40 flex-shrink-0 rounded-4xl overflow-hidden shadow-md bg-gray-200">
          {/* কন্ডিশনাল রেন্ডারিং: যদি ভিডিওতে এরর না থাকে তবে ভিডিও দেখাও */}
          {!videoError && member.videoUrl ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onError={handleVideoError} // এরর হ্যান্ডলার যোগ করা হয়েছে
            >
              <source src={member.videoUrl} type={member.videoType} />
              {/* যদি <source> ট্যাগও কাজ না করে */}
              <img
                src={
                  member.fallbackImage ||
                  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20/%3E"
                }
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </video>
          ) : (
            // যদি ভিডিও এরর থাকে বা videoUrl না থাকে তবে ফলব্যাক ইমেজ দেখাও
            <img
              src={
                member.fallbackImage ||
                "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20/%3E"
              } // ডামি SVG যদি ইমেজও না থাকে
              alt={member.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <h3 className="text-xl md:text-3xl font-extralight text-gray-900 font-serif">
          {member.name}
        </h3>
      </div>

      {/* Right Side: Title and Socials (Previous code remains the same) */}
      <div className="flex items-center space-x-6 md:space-x-10">
        <p className="hidden sm:block text-sm md:text-base uppercase tracking-widest text-black font-medium whitespace-nowrap">
          {member.title}
        </p>
        <div className="flex space-x-3 text-gray-500">
          <a
            href={member.socials.twitter}
            aria-label="Twitter"
            className="hover:bg-gray-300 transition duration-150 h-10 w-10 rounded-full bg-gray-200 text-black flex items-center justify-center"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href={member.socials.instagram}
            aria-label="Instagram"
            className="hover:bg-gray-300 transition duration-150 h-10 w-10 rounded-full bg-gray-200 text-black flex items-center justify-center"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href={member.socials.facebook}
            aria-label="Facebook"
            className="hover:bg-gray-300 transition duration-150 h-10 w-10 rounded-full bg-gray-200 text-black flex items-center justify-center"
          >
            <FaFacebookF size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function TeamSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-gray-600">
            OUR TEAM
          </h2>
        </div>

        {/* Team Members List */}
        <div className="space-y-4">
          {teamData.map(member => (
            <TeamMemberRow key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
