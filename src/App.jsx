import { useState } from "react";
import Button from "../components/Button";
import SelectOption from "../components/SelectOption";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ErrorPage from "../components/ErrorPage";
import Contact from "../components/Contacts";


function App() {

  // for filter jokes
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  // for display jokes
  const [jokeSetup, setJokeSetup] = useState("");
  const [jokePunchline, setJokePunchline] = useState("");
  const [jokeSingle, setJokeSingle] = useState("");


  function fetchData() {
    fetch(`https://v2.jokeapi.dev/joke/${category}?type=${type}`)
        .then(res => res.json())
        .then((data)=>{
          // console.log(category);
          // console.log(type);

          // console.log(data);
          
            setJokeSingle(data.joke);
            setJokeSetup(data.setup); 
            setJokePunchline(data.delivery); 
        })
  }

  // select options functionality
    function categoryFunc(e){
      setCategory(e.target.value);
    }
    function typeFunc(e){
      setType(e.target.value);
    }
  
  
  return (
    <>
      <div className="wrapper">
        <Navbar></Navbar>
        <div className="mian-contect">
          <div className="joke-container">
            <h1>Jokes Generator</h1>

            <SelectOption
              jokeCategoryFunc={categoryFunc}
              jokeTypeFunc={typeFunc}
            />

            <div className="joke">
              <p id="setup">{jokeSetup}</p>
              <p id="single-jokes">{jokeSingle}</p>
            </div>
            <div className="punchline" id="punchline">
              {jokePunchline}
            </div>
            <Button clickFunction={fetchData} />
          </div>
        </div>

        <Footer></Footer>
      </div>

    </>
  );
}

export default App