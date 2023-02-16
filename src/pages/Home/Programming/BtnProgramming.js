import React from "react";
import "./styles.css";
import leftArrow from "../../../assets/icons/left-arrow.svg";
import rightArrow from "../../../assets/icons/right-arrow.svg";

export default function BtnProgramming({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}