import React from "react";

export default function Timer({ time }) {
  return (
    <div className="timer">
      <span className="hours">
        {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
      </span>
      <span className="min">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="sec">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
      </span>
      <span className="mili-sec">{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
}
