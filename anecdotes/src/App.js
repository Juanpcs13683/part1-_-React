import { useState } from "react";

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Votes = (props) => <p>has {props.value} votes</p>

const Anecdote = ({anecdote}) => <p>{anecdote}</p>

const Tittles = ({text}) => <h1>{text}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  //const points = new Uint8Array(anecdotes.length) //it makes an array with the distance of all elements inside
  //anecdotes, and initialize is as zeros
  const copy = [...points]
 
 
  const [graterValue, setGreaterValue] = useState({gVotes:0, gAnecdote:0})
  console.log(graterValue)
  const random = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length)) 
    setVote(0)}
    

  const SetToVote = () => {
    setVote(vote+1)
    copy[selected] =vote+1
    setPoints(copy)
    console.log('copy', points)
    if(vote+1>graterValue.gVotes){
      setGreaterValue({...graterValue, gVotes: vote+1, gAnecdote: selected} )
    }
  }

  console.log('puntos', points)

  return (
    <div>
      <Tittles text="Anecdote of the day" />
     <Anecdote anecdote={anecdotes[selected]} />
     <Votes value={vote} />
     <Button onClick={SetToVote} text="vote" />
      <Button onClick={random} text="next anecdote" />
      <Tittles text="Anecdote with most votes" />
      <Anecdote anecdote={anecdotes[graterValue.gAnecdote]} />
      <Votes value={graterValue.gVotes}/>
    </div>
  )
}
  


export default App;
