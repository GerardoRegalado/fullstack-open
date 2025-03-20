import { useState } from 'react'

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
  console.log('positives', positives)

  console.log(average)

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

          <p>All: {allVotes}</p>
          <p>Average: {average.toFixed(2)}%</p>
          <p>Positive: {positives.toFixed(2)}%</p>
    </div>
  )
}

export default App