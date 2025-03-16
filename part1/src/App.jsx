const Header = ({course}) => {

  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = ({partName, exercises}) => {

  return (
    <>
      <p>{partName}: {exercises}</p>
    </>
  )
}

const Content = ({ part1, part2, part3 }) => {

  return (
    <>  
      <Part partName={part1.name} exercises={part1.exercises}/>
      <Part partName={part2.name} exercises={part2.exercises}/>
      <Part partName={part3.name} exercises={part3.exercises}/>
    </>
  )
}

const Total = ({exercises1, exercises2, exercises3}) => {

  const total = exercises1 + exercises2 + exercises3

  return (
    <p>Number of exercises: {total}</p>

  )
}


const App = () => {

  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      
      <Content 
        part1={part1}
        part2={part2}
        part3={part3}

      />
      <Total 
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  )
}

export default App