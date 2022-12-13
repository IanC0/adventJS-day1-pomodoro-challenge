import { useState, useRef, useEffect } from "react";
import "./App.css";
import Ring from "./components/Ring";
import Timer from "./components/Timer";

function App() {
  const [timerOn, setTimerOn] = useState(false);
  const [timeMinutes, setTimeMinutes] = useState(15);
  const [timeSeconds, setTimeSeconds] = useState(3);
  const [timerFinished, setTimerFinished] = useState(null);

  let interval = useRef();

  useEffect(() => {
    if((timeMinutes === 0) && (timeSeconds === 0)){
      setTimerFinished(true);
    } else {
    setTimerFinished(false);      
    }
  },[timeMinutes, timeSeconds])


  useEffect(() => {
    if (timerOn) {
    let seconds =  ((timeMinutes * 60)) + timeSeconds;
      interval.current = setInterval(() => {
      if (seconds === 0) {
        clearInterval(interval.current);
        setTimerOn(false)
      }
      else {
      seconds--;
      setTimeMinutes(Math.floor(seconds / 60));
      setTimeSeconds(parseInt(seconds % 60));
      }
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
  },[timerOn]);



  return (
    <div className="wrapper">
      <Ring timerFinished={timerFinished}/>
      <Timer
        // startStopTimer={startStopTimer}
        setTimerOn={setTimerOn}
        timerOn={timerOn}
        timeMins={timeMinutes}
        setTimerMins={setTimeMinutes}
        timeSeconds={timeSeconds}
        setTimeSeconds={setTimeSeconds}
      />
    </div>
  );
}

export default App;
