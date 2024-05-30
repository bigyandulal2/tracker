import { useState } from "react";
import "./App.css";
import User from "./components/User";
import UserRoutine from "./components/UserRoutine";
import data from "./Data/data.json";
export default function App() {
  const [userRoutine, setUserRoutine] = useState(data);
  const [clicked, setClicked] = useState("daily");
  // console.log(userRoutine);
  return (
    <div className="container">
      <User clicked={clicked} setClicked={setClicked} />
      <UserRoutine
        userRoutine={userRoutine}
        setUserRoutine={setUserRoutine}
        clicked={clicked}
      />
    </div>
  );
}
