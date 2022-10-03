import React from "react";
import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const Question = ({ id, title, info }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  return (
    // <div className="mb-4 border-1">
    <div className="question">
      <div className="d-flex justify-content-between">
        <h2 className="text-secondary">{title}</h2>
        <button
          className="accordion-btn"
          onClick={() => {
            setIsInfoOpen(!isInfoOpen);
          }}
        >
          {!isInfoOpen ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
        </button>
      </div>
      {isInfoOpen && <p className="mt-2">{info}</p>}
    </div>
  );
};

export default Question;
