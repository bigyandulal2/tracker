import Jeremy from "../images/image-jeremy.png";

export default function User({ clicked, setClicked }) {
  return (
    <div className="user">
      <div className="user_profile">
        <img src={Jeremy} alt="jeremy" />
        <div className="user_profile_detail">
          <span>Report for</span>
          <h3>Jeremy Robson</h3>
        </div>
      </div>
      <ul className="user_duration">
        <li
          onClick={() => setClicked("daily")}
          style={
            clicked === "daily"
              ? { color: "white" }
              : { color: "hsl(235, 45%, 61%)" }
          }
        >
          Daily
        </li>
        <li
          onClick={() => setClicked("weekly")}
          style={
            clicked === "weekly"
              ? { color: "white" }
              : { color: "hsl(235, 45%, 61%)" }
          }
        >
          Weekly
        </li>
        <li
          onClick={() => setClicked("monthly")}
          style={
            clicked === "monthly"
              ? { color: "white" }
              : { color: "hsl(235, 45%, 61%)" }
          }
        >
          Monthly
        </li>
      </ul>
    </div>
  );
}
