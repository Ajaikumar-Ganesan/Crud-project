import React from "react";
import landing from "../crud-img/girls-landing.png";
import { IoBookOutline } from "react-icons/io5";
import { MdSupervisorAccount } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import Courses from "./Courser";
// import { useNavigate } from "react-router-dom";
import Statistics from "./Statistics";
import Footer from "./Footer";
import Middel from "./Middel";
 
function Home() {
       
  return (


    <>
     
      <section className="position-relative" id="Home">

        <img
          src={landing}
          alt="Landing"
          className="img-fluid w-100 landing-img"
        />

        <div className="content container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-12">
              <h1 className="fw-bold display-4">
                Learn Today <br />
                Build A <span className="text-primary">Better Tomorrow</span>
              </h1>

              <p className="mt-3 text-secondary">
                Discover High-Quality Courses taught by expert instructors.
                Learn at your own pace and achieve your goals.
              </p>

              <div className="mt-4">
                <button className="btn btn-primary me-3 px-4 py-2">
                  Explore
                </button>

                <button className="btn btn-outline-dark px-4 py-2">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>

    
      <section className="container main-review">
        <div className="row shadow bg-white rounded review1 ">

          <div className="col-lg-4 col-md-4 col-6 p-3">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <div className="home-icon">
                <IoBookOutline className="fs-2 text-primary" />
              </div>

              <div className="ms-3">
                <h5 className="fw-bold mb-0">10,000+</h5>
                <p className="mb-0">Online Courses</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-6 p-3">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <div className="home-icon">
                <MdSupervisorAccount className="fs-1 text-success" />
              </div>

              <div className="ms-3">
                <h5 className="fw-bold mb-0">500K+</h5>
                <p className="mb-0">Happy Students</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-6 p-3">
            <div className="d-flex align-items-center  justify-content-center justify-content-md-start">
              <div className="home-icon">
                <GiTrophyCup className="fs-2 text-warning" />
              </div>

              <div className="ms-3">
                <h5 className="fw-bold mb-0">96%</h5>
                <p className="mb-0">Success Rate</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div style={{marginTop:"70px", zIndex:"10", position:"relative"}} id="Courses">
      <Courses />
      </div>
      <div  id="Statistics" >

       <Statistics/>
        
      </div>

     
      
      <div id="Middel">
       <Middel/>
      </div>

      <div id="About">
         <Footer/>
      </div>
    </>
  );
}

export default Home;