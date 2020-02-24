//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react"; 
import "./App.css";
import BottomRow from "./BottomRow";
import Quarter from "./Quarter";



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, homeSetScore] = useState(0);
  const [awayScore, awaySetScore] = useState(0);
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
    setTimer(timer => timer - 1);
  }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}
              <button onClick={() => homeSetScore(homeScore + 7)}>Touchdown!</button>
              <button onClick={() => homeSetScore(homeScore + 3)}>Field Goal!</button>
            </div>
          </div>
          <div className="timer" >{timer}<br></br>
            <button className="clock-reset" onClick={() => setTimer(60)}>Reset Clock</button>
          </div>
          <div className="away" >
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}
              <button onClick={() => awaySetScore(awayScore + 7)}>Touchdown!</button>
              <button onClick={() => awaySetScore(awayScore + 3)}>Field Goal!</button>
            </div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => homeSetScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => homeSetScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => awaySetScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => awaySetScore(awayScore + 3)}>Away Field Goal</button>
        </div>
        <button className="game-reset" onClick={() => homeSetScore(0)}>Reset Home Score</button>
        <button className="game-reset" onClick={() => awaySetScore(0)}>Reset Away Score</button>
      </section>
    </div>
  );
}


export default App;

