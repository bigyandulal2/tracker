import { useEffect } from "react";
import dots from "../images/icon-ellipsis.svg";
import work from "../images/icon-work.svg";
import play from "../images/icon-play.svg";
import exercise from "../images/icon-exercise.svg";
import self_care from "../images/icon-self-care.svg";
import social from "../images/icon-social.svg";
import study from "../images/icon-study.svg";
const iconList = [work, play, study, exercise, social, self_care];
export default function UserRoutine({ userRoutine, setUserRoutine, clicked }) {
  // this is used to check the timeframes key with click  value
  const keys = Object.keys(userRoutine[0].timeframes)
    .map((key) => {
      return key;
    })
    .filter((x) => x === clicked)[0];

  return (
    <section className="user_routine">
      {userRoutine.map((item, index) => {
        return (
          <div
            className="routine"
            key={index}
            style={{ background: item.background }}
          >
            <div className="routine_imgbox">
              {" "}
              <img src={iconList[index]} alt="icon-work" />
            </div>
            <div className="routine_box">
              <div className="routine_name">
                <h2>{item.title}</h2>
                <img src={dots} alt="icon-ellipsis" />
              </div>
              <div className="routine_hrs">
                <h3>{item.timeframes[keys].current}hrs</h3>
                <span>last week -{item.timeframes[keys].previous}hrs</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
