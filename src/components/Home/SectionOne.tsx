"use client";
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";

interface SectionOneProps {
  name: string;
  img?: string;
  description?: string;
}

const SectionOne: React.FC<SectionOneProps> = ({ name, img, description }) => {
  const [displayedName, setDisplayedName] = useState("");
  const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    if (nameIndex < name.length) {
      const timer = setTimeout(() => {
        setDisplayedName(name.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 100); // تحديد معدل السرعة بالميلي ثانية
      return () => clearTimeout(timer);
    }
  }, [name, nameIndex]);

  return (
    <div className="header ">
      <Container
        className="inner-header flex"
        style={{
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        <div>
          <h1 className="font">{displayedName}</h1>
        </div>

        {description ? (
          <h3
            className="image-with-animation"
            style={{ width: "400px", direction: "rtl", color: "white" }}
          >
            {description}
          </h3>
        ) : null}
        {img ? (
          <img
            className="image-with-animation"
            style={{ width: "400px" }}
            src={img}
            alt="Section Image"
          />
        ) : null}
      </Container>

      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SectionOne;
