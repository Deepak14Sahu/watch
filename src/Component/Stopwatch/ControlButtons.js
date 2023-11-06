import React from "react";
import { Button } from "react-bootstrap";

export default function ControlButtons({
  active,
  isPaused,
  handleStart,
  handleReset,
  handlePauseResume,
  timerValue,
  handleTimerChange,
  handleTimer,
}) {
  const style = {
    fontSize: "20px",
    padding: "10px 30px 10px 30px",
    fontWeight: "bolder",
  };

  const StartButton = (
    <Button variant="outline-success" style={style} onClick={handleStart}>
      Start
    </Button>
  );
  const ActiveButtons = (
    <>
      <Button
        className="mx-2"
        style={style}
        variant="outline-danger"
        onClick={handleReset}
      >
        Reset
      </Button>
      <Button
        variant="outline-warning"
        style={style}
        onClick={handlePauseResume}
      >
        {isPaused ? "Resume" : "Pause"}
      </Button>
    </>
  );

  return (
    <div className="Control-Buttons">
      <div style={{ marginBottom: "10px" }}>
        {active ? ActiveButtons : StartButton}
      </div>
      {active ? (
        ""
      ) : (
        <div className="timer-button">
          <input
            className="timer-value"
            type="number"
            min={0}
            name="time"
            value={timerValue}
            onChange={handleTimerChange}
          />
          <Button variant="outline-info" onClick={handleTimer}>
            Add Timer
          </Button>
        </div>
      )}
    </div>
  );
}
