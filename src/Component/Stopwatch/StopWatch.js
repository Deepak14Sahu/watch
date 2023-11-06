import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";

function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [reverse, setReverse] = useState(10);
  const [timerValue, setTimerValue] = useState(0);

  useEffect(() => {
    document.title = "Stop-Watch";
    let interval = null;
    if (isActive && time < 0) {
      handleReset();
    }
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + reverse);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused, reverse, time]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setReverse(10);
    setTimerValue(0);
  };

  const handleTimer = () => {
    if (timerValue <= 0) {
      alert("Enter Valid Time In Minutes");
      setTimerValue(0);
    } else {
      setTime(timerValue * 60000);
      setReverse(-10);
    }
  };

  const handleTimerChange = (e) => {
    if (e.target.value >= 0) {
      setTimerValue(e.target.value);
    } else {
      setTimerValue(0);
    }
  };

  return (
    <div className="stop-watch">
      <div className="timeZone">Stop-Watch</div>

      <Timer time={time} />

      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
        handleTimer={handleTimer}
        timerValue={timerValue}
        setTimerValue={setTimerValue}
        handleTimerChange={handleTimerChange}
      />
    </div>
  );
}

export default StopWatch;
