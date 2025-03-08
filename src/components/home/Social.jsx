import React from "react";

const Social = () => {
  return (
    <div>
      <div className="home__social__grid">
        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/anna-hansg%C3%A5rd-8a3296253/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          <a
            href="mailto:anna_hansgaard@hotmail.com"
            className="home__social-icon"
            target="blank"
          >
            <i class="uil uil-envelope-alt"></i>
          </a>

          <a
            href="https://www.facebook.com/anna.hansgard"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
