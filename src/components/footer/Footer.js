import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/joy/Grid";
import "./footer.scss";

const Footer = () => {
  return (
    <Grid container className="footer" spacing={2}>
      <Grid md={3}>
        <div className="log-img">
          <img
            src="https://www.achieversit.com/assets/images/AIT-white.jpg"
            alt="AcheiversIT"
          />
          <p className="logo-data">
            AchieversIT - provides a wide group of opportunities for freshers
            and Experienced candidate who can develop their skills and build
            their career opportunities across multiple Companies.
          </p>
        </div>{" "}
      </Grid>
      <Grid md={3}>
        <div className=" list-1">
          <h5 className="logo-data">COMPANY</h5>
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
      </Grid>{" "}
      <Grid md={3}>
        <h5 className="logo-data">TRENDING COURSES</h5>
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
      </Grid>
      <Grid md={3}>
        <h5 className="logo-data">CONTACT INFO</h5>
        <ul className="logo-data text-white">
          <li className="contact p-1 d-flex">
            <span className="p-2">
              <i className="fas fa-map-marked-alt "></i>
            </span>
            <span className="pad-5 font-12">
              #272, 6th Main, Next to Preksha Montessori , 1st Floor, BTM 2nd
              Stage, Bangalore, India - 560076
            </span>
          </li>
          <li className="contact p-1 d-flex">
            <span className="p-2">
              <i className="fas fa-phone-volume"></i>{" "}
            </span>
            <span className="pb-10 font-12">India : +91 8431-040-457</span>
          </li>
          <li className="contact p-1 d-flex">
            <span className="p-2">
              <i className="fas fa-envelope-open-text"></i>{" "}
            </span>
            <span className="pb-10 font-12">info@achieversit.com</span>
          </li>
        </ul>
      </Grid>
      <Grid md={12}>
        <div className="social-icons m-0">
          <ul className="list-unstyled social-icons-list m-0">
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
      </Grid>
      <Grid md={12}>
        <div className="footer-copyright social-icons-list">
          <div className=" logo-data copy-rights pb-10">
            Copyright © 2020 AchieversIT. All Rights Reserved
          </div>
          <div className="footer-copyright-polacy">
            <ul className="list-unstyled  footer-copyright-polacy">
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
      </Grid>
      <Grid md={12}>
        <div className="fixed-footer">
          <div className="social-icons-list">
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
      </Grid>
    </Grid>
  );
};

export default Footer;
