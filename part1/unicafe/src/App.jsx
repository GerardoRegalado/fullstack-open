import { useState } from 'react'

const Statistics = ({allVotes, average, positives}) => {

  return (
    <>
      <p>All: {allVotes}</p>
      <p>Average: {average.toFixed(2)}%</p>
      <p>Positive: {positives.toFixed(2)}%</p>
    </>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [allVotes, setAllVotes] = useState(0)

  const handleGoodVote = () => {
    console.log('good button clicked')

    setGood(prev => prev + 1)
    setAllVotes(prev => prev + 1)
  }

  const handleNeutralVote = () => {
    console.log('neutral button clicked')

    setNeutral(prev => prev + 1)
    setAllVotes(prev => prev + 1)
  }

  const handleBadVote = () => {
    console.log('bad button clicked')

    setBad(prev => prev + 1)
    setAllVotes(prev => prev + 1)
  }

  const average = allVotes === 0 ? 0 : (((good * 1) + (bad * (-1)))/allVotes) * 100
  const positives = allVotes === 0 ? 0 : ((good * 100)/allVotes)
  console.log('average', average)
  console.log('positives', positives)


  return (
    <div>
      <h1>Give feedback</h1>


        <button onClick={handleGoodVote}>good</button>
        <button onClick={handleNeutralVote}>neutral</button>
        <button onClick={handleBadVote}>bad</button>

        <h2>Statistics</h2>

          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>

          <hr />

          <h2> Statistics</h2>

        { allVotes === 0 ? (
          <p>No feedback given</p>
        ): (
          <Statistics 
            allVotes={allVotes}
            average={average}
            positives={positives}
          />
        )}

    </div>
  )
}

export default App