import { useState } from "react";

const Title1 = (props) => (
  <h1>{props.text}</h1>
)

const Title2 = (props) => (
  <h2>{props.text}</h2>
)


const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = (props) => (
  <p>{props.text} {props.value}</p>
 )



const Statistics = (props) => (
  <div>
    <p>{props.text} {props.value}</p>
  </div>
)

function App() {

   // save clicks of each button to its own state
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)
   const [allFeedback, setAllFeedback] = useState(0)
   const [average, setAverage] = useState(0)
   const [positive, setPositive] = useState(0)

  const setToGood = () =>{
    setGood(good+1)
  }

  const SetToNeutral = () => {
    setNeutral(neutral+1)
  }

  const setToBad = () => {
    setBad(bad+1)
  }

  setTimeout(() => {
    setAllFeedback(good+neutral+bad)
    
  }, 100);

  setTimeout(() => {
    let g=good
    let b=bad
    while(g>0 && b>0){
      g=g-1
      b=b-1

    }
    if(g>0){
      setAverage(g/allFeedback)
    }
  }, 100);

  setTimeout(() => {
    let h = (good/allFeedback)*100
    console.log('positive', h)
    if(h>=0){
      setPositive((good/allFeedback)*100)
    }
    
  }, 100);

  return (
    <div>
      <Title1 text={'give feedback'} />
      <Button handleClick={setToGood} text={'Good'} />
      <Button handleClick={SetToNeutral} text={'Neutral'} />
      <Button handleClick={setToBad} text={'Bad'} />
      <Title2 text={'statistics'} />
      <Statistics text='good' value={good} />
      <Statistics text='neutral' value={neutral} />
      <Statistics text='bad' value={bad} />
      <Statistics text='all' value={allFeedback} />
      <Statistics text='average' value={average} />
      <Statistics text='positive' value={positive} />
    </div>

  );
}

export default App;
