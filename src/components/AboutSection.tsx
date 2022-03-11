import React from 'react';
import home1 from '../img/home1.png';

export default function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
          <p>
            In ZVTICS we provide the best solution for your IT needs with the
            help of anetwork of the best professionals
          </p>
          <button>Contact Us</button>
        </div>
        <div className="image">
          <img src={home1} alt="picture of a guy" />
        </div>
      </div>
    </div>
  );
}
