const Header = ({course}) => {

  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = ({partNumber, exercises}) => {

  return (
    <>
      <p>{partNumber} {exercises}</p>
    </>
  )
}

const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {

  return (
    <>  
      <Part partNumber={part1} exercises={exercises1}/>
      <Part partNumber={part2} exercises={exercises2}/>
      <Part partNumber={part3} exercises={exercises3}/>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total 
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

export default App