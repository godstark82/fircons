'use client'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#181818] text-gray-200 pt-12 pb-0">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap gap-8 justify-center md:justify-between">
        {/* Logo & About */}
        <div className="w-full md:w-1/4 min-w-[250px] bg-[#222] rounded-md p-8 flex flex-col items-start mb-8 md:mb-0">
          <div className="mb-4">
            <div className="bg-[#e53935] px-6 py-2 rounded text-white text-2xl font-bold tracking-widest mb-1">SERF</div>
            <div className="text-white text-sm font-medium tracking-wide">Conferences</div>
          </div>
          <p className="text-gray-300 text-sm mb-6">
            About Conference The objective of SERF Conferences are to present the latest research and results of scientists (preferred students, post graduate Students, Research Scholars and post-doc scientists) related to interdisciplinary research.
          </p>
          <div>
            <div className="text-white text-lg font-semibold mb-2">Follow us</div>
            <div className="flex gap-4">
              <a href="#" className="bg-[#333] hover:bg-[#e53935] transition-colors rounded-full p-3 text-xl"><FaTwitter /></a>
              <a href="#" className="bg-[#333] hover:bg-[#e53935] transition-colors rounded-full p-3 text-xl"><FaFacebookF /></a>
              <a href="#" className="bg-[#333] hover:bg-[#e53935] transition-colors rounded-full p-3 text-xl"><FaInstagram /></a>
              <a href="#" className="bg-[#333] hover:bg-[#e53935] transition-colors rounded-full p-3 text-xl"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        {/* Helpful Links */}
        <div className="flex-1 min-w-[180px] mb-8 md:mb-0">
          <div className="text-white text-xl font-bold mb-1">Helpful Links</div>
          <div className="w-24 h-1 bg-[#e53935] mb-4"></div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#e53935] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#e53935] transition">Conference Registration</a></li>
            <li><a href="#" className="hover:text-[#e53935] transition">Registration Guidelines</a></li>
            <li><a href="#" className="hover:text-[#e53935] transition">Speakers</a></li>
            <li><a href="#" className="hover:text-[#e53935] transition">Committee</a></li>
            <li><a href="#" className="hover:text-[#e53935] transition">Contact Us</a></li>
          </ul>
        </div>
        {/* Other Links */}
        <div className="flex-1 min-w-[180px] mb-8 md:mb-0">
          <div className="text-white text-xl font-bold mb-1">Other Links</div>
          <div className="w-24 h-1 bg-[#e53935] mb-4"></div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#e53935] transition">About SERF Conferences</a></li>
            <li><a href="#" className="hover:text-[#e53935] transition">About University</a></li>
            <li><a href="#" className="hover:text-[#e53935] transition">About SERF Conferences</a></li>
            <li><a href="#" className="hover:text-[#e53935] transition">Keynote Speakers</a></li>
            <li><a href="#" className="hover:text-[#e53935] transition">Scope & Benefit</a></li>
          </ul>
        </div>
        {/* Contact Us */}
        <div className="flex-1 min-w-[220px]">
          <div className="text-white text-xl font-bold mb-1">Contact Us</div>
          <div className="w-24 h-1 bg-[#e53935] mb-4"></div>
          <div className="space-y-2 text-sm">
            <div><span className="font-bold text-white">Name:</span> Prof. (Dr.) Narendra Kumar</div>
            <div><span className="font-bold text-white">Phone:</span> +91-8854005488</div>
            <div><span className="font-bold text-white">Phone:</span> +91-8854005488</div>
            <div><span className="font-bold text-white">Email:</span> firconsindia@gmail.com</div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-[#333] mt-10 py-4 text-center text-gray-400 text-sm">
        Copyright © 2021, All Right Reserved ICAIR. Website Designed & Developed By : <span className="font-bold text-white">ReDevs</span>
      </div>
    </div>
  </footer>
);

export default Footer;