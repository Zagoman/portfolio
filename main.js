"use strict";
// import "./style.css";
// import "./layout.css";
import APP from "./modules/APP";
import Projects from "./modules/Projects";
import UIAnim from "./modules/UIAnimations";

let _APP = null;
let _UIAnimations = null;
let _Projects = null;
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("resize", resizeHeader);
  function resizeHeader() {
    if (window.innerWidth < 1000) {
      document.body.style.height = window.innerHeight + "px";
      document.querySelectorAll("section").forEach((section) => {
        section.style.minHeight = `${window.innerHeight}px`;
      });
      document.querySelector("header").style.height = window.innerHeight + "px";
    }
  }
  _APP = new APP();
  _UIAnimations = new UIAnim();
  _Projects = new Projects();
});
