const Header  = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.parts[0]['name']} number={props.parts[0]['exercises']} />
      <Part part={props.parts[1]['name']} number={props.parts[1]['exercises']} />
      <Part part={props.parts[2]['name']} number={props.parts[2]['exercises']} />
    </div>
  )
}

const Part = (props) =>{
  return(
      <p>
       {props.part} {props.number}
     </p>
  )
}

const Total = (props) => {
  return(
    <p>
      Number of exercises {props.parts[1]['exercises']}
    </p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
   {
    name: 'Fundamentals of React',
    exercises: 10
  },
   {
    name: 'Using props to pass data',
    exercises: 10
  },
   {
    name: 'State of a component',
    exercises: 14
  }
]
console.log(parts)
console.log(parts[0]['exercices'])

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts= {parts} />
    </div>
   
    
  )
}

export default App;
