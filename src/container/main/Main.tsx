import React from "react";
import Cat from "../../image/cat.png";
import "./_main.scss";
export default function Main() {
  return (
    <div className="main">
      <div className="main-box">
        <div className="main-box-content-zone">
          <p className="main-box-content-title">Hi, I'm eddy</p>
        </div>
        <div className="main-box-image">
          <img src={Cat} alt="cat" />
        </div>
      </div>
    </div>
  );
}
