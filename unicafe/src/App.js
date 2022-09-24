import { useState } from "react";

const H1 = (props) => (
  <h1>{props.text}</h1>
)

const H2 = (props) => (
  <h2>{props.text}</h2>
)


const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = (props) => (
  <p>{props.text} {props.value}</p>
)


function App() {

   // save clicks of each button to its own state
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

  const setToGood = () => {
    console.log('value now', good)
    setGood(good + 1)
  }

  const setToNeutral = () => {
    console.log('value now', neutral)
    setNeutral(neutral + 1)
  }

  const setToBad = () => {
    console.log('value now', bad)
    setBad(bad +1)
  }

  return (
    <div>
      <H1 text={'give feedback'} />
      <br />
      <Button handleClick={() => setToGood()} text={'Good'} />
      <Button handleClick={() => setToNeutral()} text={'Neutral'} />
      <Button handleClick={() =>setToBad()} text={'Bad'} />
      <br />
      <H2 text={'statistics'} />
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />      
    </div>

  );
}

export default App;
