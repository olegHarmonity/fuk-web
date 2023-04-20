import React from "react";
import Startpageform from "../startpageform";
import "./startpage.css";

export default function Startpage() {
  return (
    <div>
      <div className="startpage">
        <h1 className="startpage-title">Osnovni podaci:</h1>
        <p className="startpage-description">
          Molimo vas da ne ulazite u proces registracije bez pomoći stručnog lica. Naš tim Vam stoji na raspolaganju.
        </p>
        <section className="startpage-main">
          <Startpageform />
          <div className="startpage-poster">
            <img className="startpage-poster-image" src="/images/test1.png" />
          </div>
        </section>
      </div>
    </div>
  );
}
