import { default as gearImage } from "../images/gear.svg";
import SettingsButton from "./SettingsButton";

const Timer = (props) => {
  const handleClick = function() {
    props.setTimerOn(prevState => !prevState);
  }



  return (
    <div className="timer">
      <div className="time">
        <div className="minutes">
          <input type="text" value={Math.floor(props.timeMins)} onChange={(e) => props.setTimerMins(e.target.value)} />
        </div>
        <div className="colon">:</div>
        <div className="seconds">
          <input type="text" value={Math.floor(props.timeSeconds)}  onChange={(e) => props.setTimeSeconds(parseInt(e.target.value))} />
        </div>
      </div>
      <button className="start" text={props.timerOn === false? "start" : "stop"} onClick={handleClick}>
      {props.timerOn === false ? "start" : "stop"}
            </button>
      {/* <SettingsButton text="settings" image={gearImage} alt="Settings" /> */}
    </div>
  );
};

export default Timer;
