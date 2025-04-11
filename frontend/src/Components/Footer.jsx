import React from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#d8eefe] to-[#e1f3fd] text-gray-800">
      {/* Top Footer Info */}
      <div className="max-padd-container py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-gray-300">
        {/* Help Section */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Need Help?</h4>
          <p className="text-sm text-gray-700">Discover your unique style with our latest fashion collections.</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <FaLocationDot size={20} />
            <div>
              <h5 className="font-medium">Our Location</h5>
              <p className="text-sm text-gray-700">123 Fashion Street, Style City, 456789</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhone size={20} />
            <div>
              <h5 className="font-medium">Phone</h5>
              <p className="text-sm text-gray-700">+91 9876543210</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMailBulk size={20} />
            <div>
              <h5 className="font-medium">Email Support</h5>
              <p className="text-sm text-gray-700">support@vsafashion.com</p>
            </div>
          </div>
        </div>

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">VSA</h2>
          <p className="mt-2 text-sm text-gray-700">
            VSA is your virtual style assistant, delivering trendsetting fashion for everyone.
          </p>
        </div>
      </div>

      {/* Bottom Footer Sections */}
      <div className="max-padd-container py-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Customer Service</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Help Center</li>
            <li>Payment Methods</li>
            <li>Contact</li>
            <li>Shipping Status</li>
            <li>Complaints</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Privacy Policy</li>
            <li>Cookie Settings</li>
            <li>Terms & Conditions</li>
            <li>Cancellation</li>
            <li>Imprint</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Others</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Our Teams</li>
            <li>Sustainability</li>
            <li>Press</li>
            <li>Jobs</li>
            <li>Newsletter</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-padd-container border-t border-gray-300 py-4 text-sm flex justify-between items-center text-gray-600">
        <span>© 2025 VSA</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
