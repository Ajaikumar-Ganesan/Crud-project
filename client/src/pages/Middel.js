import Accordion from "react-bootstrap/Accordion";

import React from 'react'

const middel = () => {
  return (
   
    <section className="py-5 bg-light">
     <div className="container"> 
        <div className="row g-4 align-items-stretch">


      {/* FAQ Section */}
      <div className="col-lg-4">
        <div className="bg-white p-4 rounded shadow-sm h-100">
          <h4 className="fw-bold mb-4">
            Frequently Asked Questions
          </h4>

          <Accordion flush>

            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How do I enroll in a course?
              </Accordion.Header>
              <Accordion.Body>
                Simply select your course and complete
                the registration process.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Do you offer certificates?
              </Accordion.Header>
              <Accordion.Body>
                Yes, certificates are provided after
                successful course completion.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Can I learn on my mobile device?
              </Accordion.Header>
              <Accordion.Body>
                Absolutely. All courses are mobile
                friendly.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Is there a refund policy?
              </Accordion.Header>
              <Accordion.Body>
                Yes. Refunds are available according
                to our refund policy.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </div>
      </div>

      {/* CTA Section */}
      <div className="col-lg-4">
        <div className="cta-box h-100 d-flex flex-column justify-content-center text-white p-4 rounded">

          <h3 className="fw-bold">
            Ready to Start Your Learning Journey?
          </h3>

          <p className="my-3">
            Join thousands of learners today and
            build your better tomorrow.
          </p>

          <button className="btn btn-light text-primary fw-bold mt-2">
            Explore Courses
          </button>

        </div>
      </div>

      {/* Newsletter */}
      <div className="col-lg-4">
        <div className="bg-white p-4 rounded shadow-sm h-100">

          <h3 className="fw-bold">
            Stay Updated
          </h3>

          <p className="text-muted">
            Subscribe to our newsletter and get the
            latest updates and offers.
          </p>

          <div className="input-group mt-4">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />

            <button className="btn btn-primary">
              Subscribe
            </button>
          </div>

          <div className="text-center mt-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              alt="newsletter"
              className="img-fluid"
              style={{ maxWidth: "120px" }}
            />
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

  )
}

export default middel

