import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => setIsActive(true);
  const handlePauseResume = () => setIsActive(!isActive);
  const handleReset = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <div className="timer">
      <h2>Timer: {time}s</h2>
      <button onClick={handleStart} disabled={isActive}>
        Start
      </button>
      <button onClick={handlePauseResume}>
        {isActive ? "Pause" : "Resume"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
