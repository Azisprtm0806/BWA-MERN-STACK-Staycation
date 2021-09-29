import React from "react";
import Fade from "react-reveal/Fade";
import TestimonyAccent from "assets/images/testimonial-landingpages-frame.jpg";
import Button from "elements/Button";
import Star from "elements/Star";
import landingPage from "json/landingPage";

export default function Testimony() {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 60 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={landingPage.testimonial.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={TestimonyAccent}
                alt="Testimonial frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px` }}
              />
            </div>
          </div>
          <div className="col">
            <h4 style={{ marginBottom: 40 }}>{landingPage.testimonial.name}</h4>
            <Star
              value={landingPage.testimonial.rate}
              width={35}
              height={35}
              spacing={4}
            />
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {landingPage.testimonial.content}
            </h5>
            <span className="text-gray-500">
              {landingPage.testimonial.familyName},{" "}
              {landingPage.testimonial.familyOccupation}
            </span>

            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${landingPage.testimonial._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
