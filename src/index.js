import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import myImage from "./images/img.jpg";

function PrintSomething() {
  return (
    <>
      <div className="body">
        <div className="container">
          <h3>Learn Coding...</h3>
          <h1>Learn With Garry</h1>
        </div>
        <div className="sec_1_container">
          <div className="sec_1_content_container">
            <h3>Learn Flutter Free , With Us</h3>
            <h1>IT'S TIME TO LEARN FLUTTER FOR FREE WITH US</h1>
            <span className="divider"></span>
            <p>
              “Any fool can write code that a computer can understand. Good
              programmers write code that humans can understand.”
            </p>
            <div className="btn_content_sec">
              <a className="btn_1" href="#">
                LET'S GO
              </a>
              <a className="btn_2" href="#">
                ABOUT US
              </a>
            </div>
          </div>
          <div className="sec_1_image_container">
            <img class="sec_1_image" src={myImage} alt="My Image" />
          </div>
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<PrintSomething></PrintSomething>);
