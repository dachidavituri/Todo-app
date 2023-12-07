import field from "./Images/87c71038638480240b581fd1875afe7e.jpg";
function Clock(props) {
  return (
    <div>
      <img src={field} alt="field" className="field" />
      <div className="overlay">
        <div className="day-week">
          <p>{props.dayName}</p>

          <p>{props.day} </p>
        </div>
        <div className="clock-display">
          <h2>
            {props.hour}:{props.minutes}
          </h2>
          <h2>{props.ampm}</h2>
        </div>
      </div>
    </div>
  );
}
export default Clock;
