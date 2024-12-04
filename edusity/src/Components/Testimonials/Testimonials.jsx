import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={slideForward} alt="" />
      <img
        src={back_icon}
        className="back-btn"
        onClick={slideBackward}
        alt=""
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sophia Johnson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "Educity College has been a transformative experience for me.
                The faculty is not only knowledgeable but also incredibly
                supportive. The hands-on learning approach and industry-relevant
                curriculum have prepared me well for my career. I am proud to be
                an alumnus!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "Choosing Edusity was the best decision I made for my career.
                The faculty is incredibly supportive, and the hands-on learning
                approach prepared me for the real world. The diverse campus life
                and extracurricular activities helped me grow both academically
                and personally."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Mia Patel</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "Edusity’s state-of-the-art facilities and innovative teaching
                methods helped me land my dream job. The network I built during
                my time here continues to support me in my professional journey.
                I am proud to be an Edusity alumnus!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Ethan Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "As a parent, I wanted my child to receive not just a degree but
                a holistic education. Edusity delivered beyond our expectations.
                The mentorship, career guidance, and focus on practical skills
                have set my daughter up for success"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
