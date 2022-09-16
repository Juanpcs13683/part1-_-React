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
      <Part part={props.part1} number={props.exercises1} />
      <Part part={props.part2} number={props.exercises2} />
      <Part part={props.part3} number={props.exercises3} />
    </div>
  )
}

const Part = (props) =>{
  console.log(props)
  return(
      <p>
       {props.part} {props.number}
     </p>
  )
}

const Total = (props) => {
  return(
    <p>
      Number of exercises {props.total}
    </p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercices: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercices: 10
  }
  const part3 = {
    name: 'State of a component',
    exercices: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1 ={part1.name} part2={part2.name} part3 ={part3.name}
       exercises1={part1.exercices} exercises2={part2.exercices} exercises3={part3.exercices} />
      
      <Total total= {part1.exercices + part2.exercices + part3.exercices} />
    </div>
   
    
  )
}

export default App;
