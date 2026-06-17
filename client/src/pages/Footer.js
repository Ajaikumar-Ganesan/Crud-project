import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





function Footer() {
  return (
    <footer className="footer-section">
  <div className="container">

<div className="row gy-4">

  {/* Logo & About */}
  <div className="col-lg-4 col-md-6">
    <h2 className="footer-logo">
      EduLearn
    </h2>

    <p className="footer-text">
      Learn today, build a better tomorrow.
      Empowering students with quality education,
      expert instructors and career-focused courses.
    </p>

    <div className="social-icons">
      <a ><FaFacebookF /></a>
      <a ><FaTwitter /></a>
      <a ><FaInstagram /></a>
      <a ><FaLinkedinIn /></a>
      <a ><FaYoutube /></a>
    </div>
  </div>

  {/* Quick Links */}
  <div className="col-lg-2 col-md-6">
    <h5 className="footer-title">
      Quick Links
    </h5>

    <ul className="footer-links">
      <li><a >Home</a></li>
      <li><a >Courses</a></li>
      <li><a >About Us</a></li>
      <li><a >Features</a></li>
      <li><a >Testimonials</a></li>
    </ul>
  </div>

  {/* Categories */}
  <div className="col-lg-3 col-md-6">
    <h5 className="footer-title">
      Categories
    </h5>

    <ul className="footer-links">
      <li><a >Web Development</a></li>
      <li><a >UI/UX Design</a></li>
      <li><a >Data Science</a></li>
      <li><a >Digital Marketing</a></li>
      <li><a >Business Management</a></li>
    </ul>
  </div>

  {/* Contact */}
  <div className="col-lg-3 col-md-6">
    <h5 className="footer-title">
      Contact Us
    </h5>

    <p>📧 info@edulearn.com</p>
    <p>📞 +91 98765 43210</p>
    <p>
      📍 123 Education Street,
      Chennai, Tamil Nadu, India
    </p>
  </div>

</div>

<hr className="footer-divider" />

<div className="row align-items-center text-center text-md-start">

  <div className="col-md-6">
    <p className="copyright">
      © 2026 EduLearn. All Rights Reserved.
    </p>
  </div>

  <div className="col-md-6 text-md-end">
    <a  className="footer-bottom-link">
      Privacy Policy
    </a>

    <a  className="footer-bottom-link ms-3">
      Terms of Service
    </a>
  </div>

</div>


  </div>
</footer>

  );
}

export default Footer;