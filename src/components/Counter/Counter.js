"use client";
import React from "react";
import CountUp from "react-countup";
const Counter = ({ end, duration }) => {
  return (
    <div>
      <CountUp start={1} end={end} duration={duration} />
    </div>
  );
};

export default Counter;
