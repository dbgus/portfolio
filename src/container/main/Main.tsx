import React from "react";
import Cat from "../../image/cat.png";
import "./_main.scss";
export default function Main() {
  return (
    <div className="main">
      <div className="main-box">
        <div className="overlay" />
        <div className="main-box-content-zone">
          <p className="main-box-content-title">Hi, I'm eddy</p>
          <p className="main-box-content-content">web full stack developer</p>
        </div>
      </div>
    </div>
  );
}
