import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import "./Carousel.scss";
import { AiOutlineRight } from "react-icons/ai";

export const Item = ({ children }) => <div className="item">{children}</div>;

export const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [translateWidth, setTranslateWidth] = useState(0);

  const elements = Array.from({ length: children.length }, (_, index) => (
    <div
      onClick={() => setCurrentIndex(index)}
      className={currentIndex === index ? "dot active" : "dot"}
      key={index}
    ></div>
  ));

  const itemRef = useRef(null);

  console.log(currentIndex, children.length);

  const prevHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex((pre) => pre - 1);
    }
  };

  const nextHandler = () => {
    if (currentIndex < children.length - 1) {
      setCurrentIndex((pre) => pre + 1);
    }
  };

  useLayoutEffect(() => {
    setItemWidth(() => itemRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    setTranslateWidth(() => currentIndex * itemWidth);
  }, [currentIndex, itemWidth]);
  return (
    <div className="carousel">
      <div
        ref={itemRef}
        style={{ transform: `translateX(-${translateWidth}px)` }}
        className="items"
      >
        {children}
      </div>
      <button
        disabled={currentIndex < 1 ? true : false}
        onClick={prevHandler}
        className="back"
      >
        <AiOutlineRight />
      </button>
      <button
        disabled={currentIndex >= children.length - 1 ? true : false}
        onClick={nextHandler}
        className="next"
      >
        <AiOutlineRight />
      </button>

      <div className="dots">{elements}</div>
    </div>
  );
};
