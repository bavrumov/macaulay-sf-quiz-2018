import React, { Component } from 'react';
import Question from './Question.js';
import Result from './Result.js';
import './App.css';
import logo from './logo.svg';
import think from './i_think.png';
import cogito from './cogito.png';
import scream from './scream.png';

var questionBank = [
  {
    question:"What is the name for the robotic spacecraft from 1997 that Mark Watney travels 3 weeks to get to?",
    choices:["Southerner","MAV","Pathfinder","Mars 3"],
    answer:3
  },
  {
    question:"In, The Cold Equations, what was Marilyn Lee Cross’ original destination?",
    choices:["Earth","Mimir","Stardust","Mars"],
    answer:2
  },
  {
    question:"What body part did Kel’s sister cut off when the insect bit him?",
    choices:["foot","arm","ear","chest"],
    answer:2
  },
  {
    question:"Who died saving Zen, in Down and Out on ellfive Prime?",
    choices:["Almquist","The director","Andy Weir","Reina"],
    answer:2
  },
  {	
    question:"In both the story and the televison episode, Jerry was a minesweeper",
    choices:["True","False"],
    answer:2
  },
  {
    question: "Castor and Pollux were the names of the 2 dolphins Mal tried to communicate with",
    choices:["True","False"],
    answer:1
  },
  {
    question: "The technology seen by the underwater beings can be closely associated to that of “Bio-technology” by today’s standards",
    choices: ["True","False"],
    answer: 2
  },
  {
	  question:"Adikor cannot simply exonerate himself of the disappearance of Ponter because his wrist recording device is broken",
    choices:["True","False"],
    answer:2 
  },
 {
	  question:"The title of story stems from James Vandeleur’s anger and rise in blood pressure",
    choices:["True","False"],
    answer:2
  },
  {
    question:"Where does Bakst hide from the other humans?",
    choices:["Denver","Inside Multivac", "Los Angeles", "Underground"],
    answer:1
  },
  {
    question:"Who kills Iran’s Nubian Goat?",
    choices:["Roy Batty","James Tiptree", "Rick Deckard", "Rachel Rosen"],
    answer:4
  },
  {
    question:"AM has the ability to enter the mind of those it is torturing",
    choices:["True","False"],
    answer:1
  },
  {
    question:"Where does the Jesuit Priest work?",
    choices:["In the Multivac","The Lunar Conservatory", "A church in Brooklyn", "The Solar Conservatory"],
    answer:2
  },
  {
    question:"Hagan’s family was killed in a car crash",
    choices:["True","False"],
    answer:1
  },
  {
    question:"How has Eckels changed the path of the future?",
    choices:["By killing Rufus Weylin","By shooting a t-rex", "By stepping on a butterfly", "By touching pre-historic moss"],
    answer:3
  },
  {
    question:"What is used by Cyberdyne to reverse engineer the new terminators?",
    choices:["an old T-800 arm","Multivac", "A supercomputer", "It wasn't reverse engineered"],
    answer:1
  },
  {
    question:"What does Kevin become when he gets stuck in the past?",
    choices:["A pastor","A shephard", "An abolitionist", "A teacher"],
    answer:3
  },
  {
    question:"Why does the GGSI plan to create clones on slave eggs?",
    choices:["To add more slave states","So human laws do not apply to them", "TO FEED AM", "It was an underground operation by Bridge"],
    answer:2
  },
  {
    question:"Martin sacrifices his life to save Pugh",
    choices:["True","False"],
    answer:2
  },
  {
    question:"At the end, Don is annoyed with the women because they chose the aliens over him",
    choices:["True","False"],
    answer:1
  }
]


class App extends Component {

  generateQuestions = () => {
    questionBank.map((ques, i) => 
      <Question
        key={i}
        number={i+1}
        question={ques.question}
        choices={ques.choices}
        answer={ques.answer}
      >
      </Question>
    )
  }

  display = () => {
    if (window.location.search.length!==0)
      return {display:"none"}
    else
      return {display:"block"}
  }
  
  displayResult = () => {
    if (window.location.search.length!==0)
      return {display:"block"}
    else
      return {display:"none"}
  }
  
  welcomeText = "Hello Human--your beloved Professor Ugoretz is trapped in a never ending cycle of doom…..unless you can answer these questions to show you have read the modules to unlock his freedom!";
  
  render() {
    //console.log(window.location.search);
    return (
      <div className="App">
        <header className="App-header">
          <span><img src={logo} className="App-logo" alt="logo" /></span>

          
          <h2 className="welcome">{this.welcomeText}</h2>
          <h2 style={this.display()} className="welcome">If you score above a 65% on the final examination then Joe will be set free, if not…..he will turn into a motionless, faceless glob of goo!
          <br></br><h6>MUAHAHAHA</h6></h2>
          <img 
          src={scream}
          alt="help"/>
          <h1 style={this.display()} className="welcome">Begin!</h1>
          

          <img src={think} alt="i-think"/>
        
        <form style={this.display()}className="quiz-container" method="get" action="index.html" >
            {this.generateQuestions()}
            
            {questionBank.map((ques, i) => 
              <div className = "slide" key={i}>
                <Question
                  number={i+1}
                  question={ques.question}
                  choices={ques.choices}
                  answer={ques.answer}
                >
                </Question>
              </div>
            )}
            <div className="slide">21) Weyr Search:<br></br>
            WEYR SEARCH IS NOT SF! <br>
            </br>Just hit submit
            </div>
            <img src={cogito} alt="cogito"/><br></br>
          
            <button id="submit" type="submit">Submit answers</button>
        </form>
          <h2 style={this.displayResult()}>Here are your results:
          <Result qb={questionBank} queryString={window.location.search}></Result>
          </h2>
        </header>
      </div>
    );
  }
}

export default App;
