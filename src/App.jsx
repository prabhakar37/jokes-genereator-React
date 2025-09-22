import { useState } from "react";
import Button from "../components/Button";


function App() {

  const [jokeSetup, setJokeSetup] = useState("");
  const [jokeDelivery, setJokeDelivery] = useState("");

  function fetchData() {
    fetch("https://v2.jokeapi.dev/joke/Dark?type=twopart")
      .then((res) => res.json())
      .then((data) => {

        setJokeSetup(data.setup);
        setJokeDelivery(data.delivery)
      });
  }
  // fetchData()

  console.log(jokeSetup);
  console.log("1");
  
  
  return (
    <div>
      <div className="joke-container">
          <h1>Two-Part Joke Generator</h1>


            {/* <label htmlFor="fruits">Choose a fruit:</label>
                <select id="fruits" name="fruits">
                    <option value="">-- Select --</option>
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                    <option value="grape">Grape</option>
                </select> */}



          <div className="joke">
            <p id="setup">{jokeSetup}</p>
          </div>    
          <div className="punchline" id="punchline">{jokeDelivery}</div>
          <Button clickFunction = {fetchData}/>
        </div>
    </div>
  )
}

export default App