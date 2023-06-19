import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";
const Footer = () => {
  return (
    <div>
      <div className="footer pb-30">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <div className="log-img">
                <img
                  src="https://www.achieversit.com/assets/images/AIT-white.jpg"
                  alt="AcheiversIT"
                />
                <p className="logo-data text-gray">
                  AchieversIT - provides a wide group of opportunities for
                  freshers and Experienced candidate who can develop their
                  skills and build their career opportunities across multiple
                  Companies.
                </p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row pb-30">
                <div className="col-md-4 list-1">
                  <h5 className="text-gray">COMPANY</h5>
                  <ul className="list-unstyled">
                    <li className="p-1">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="p-1">
                      <Link to="/">Placements</Link>
                    </li>
                    <li className="p-1">
                      <Link to="/">Corporate Training</Link>
                    </li>
                    <li className="contact p-1">
                      <Link to="/">CONTACT US</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 list-2">
                  <h5 className="text-gray">TRENDING COURSES</h5>
                  <ul className="list-unstyled">
                    <li className="contact p-1">
                      <Link to="/">UI Development Course</Link>
                    </li>
                    <li className="contact p-1">
                      <Link to="/">Angular JS Course</Link>
                    </li>
                    <li className="contact p-1">
                      <Link to="/">React JS Course</Link>
                    </li>
                    <li className="contact p-1">
                      <Link to="/">Digital Marketing Course </Link>
                    </li>
                    <li className="contact p-1">
                      <Link to="/">Python Course </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-12">
                  <h5 className="text-gray">CONTACT INFO</h5>
                  <ul className="list-unstyled text-white">
                    <li className="contact p-1 d-flex">
                      <span className="p-2">
                        <i className="fas fa-map-marked-alt "></i>
                      </span>
                      <span className="pad-5 font-12">
                        #272, 6th Main, Next to Preksha Montessori , 1st Floor,
                        BTM 2nd Stage, Bangalore, India - 560076
                      </span>
                    </li>
                    <li className="contact p-1 d-flex">
                      <span className="p-2">
                        <i className="fas fa-phone-volume"></i>{" "}
                      </span>
                      <span className="pb-10 font-12">
                        India : +91 8431-040-457
                      </span>
                    </li>
                    <li className="contact p-1 d-flex">
                      <span className="p-2">
                        <i className="fas fa-envelope-open-text"></i>{" "}
                      </span>
                      <span className="pb-10 font-12">
                        info@achieversit.com
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 social-icons m-0">
            <ul className="list-unstyled text-white d-flex justify-content-center m-0">
              <li>
                <Link to="/" className=" facebook">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="/" className=" linkedin">
                  <i className="fab fa-linkedin-in"></i>{" "}
                </Link>
              </li>
              <li>
                <Link to="/" className=" twitter">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="/" className=" pinterest">
                  <i className="fab fa-pinterest"></i>
                </Link>
              </li>
              <li>
                <Link to="/" className=" youtube">
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-12 footer-copyright d-flex justify-content-center">
          <div className="text-gray copy-rights pb-10">
            Copyright © 2020 AchieversIT. All Rights Reserved
          </div>
          <div className="justify-content-center text-center">
            <ul className="list-unstyled  d-none d-md-flex">
              <li className="pb-10">
                <Link to="/" className="p-4 ">
                  Privacy Policy
                </Link>
              </li>
              <li className="pb-10">
                <Link to="/" className="p-4 ">
                  Terms of use
                </Link>
              </li>
              <li className="pb-10">
                <Link to="/" className="p-4 ">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed-footer pb-10">
        <div className=" list-unstyled d-flex justify-content-center text-center">
          <div className="d-flex-0">
            <Link to="/" className="mx-auto ">
              <i className="fab fa-whatsapp text-success fa-3x" />
            </Link>
          </div>
          <div className="d-flex-0">
            <Link to="/" className="mx-auto ">
              <i className="fas fa-phone-volume fa-3x text-primary" />
              <span className="span-text"> Call us on:+918431-040-457</span>
            </Link>
          </div>
          <div className="d-flex-0">
            <Link to="/" className="mx-auto ">
              <i className="far fa-envelope text-orange fa-3x" />
              <span className="span-text"> Request A Call Back</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
