import { useState } from 'react'

const Button = ({onVote, text}) => {

  return (
    <>
      <button onClick={onVote}>{text}</button>
    </>
  )
}

const StatisticLine = ({text, value}) => {

  return (
    <div>
      <p><strong>{text}</strong>: <i>{value}</i></p>
    </div>
  )
}

const Statistics = ({allVotes, average, positives}) => {

  return (
      <table>
        <tbody>
          <tr>
            <td>All:</td>
            <td>{allVotes}</td>
          </tr>
          <tr>
            <td>Average:</td>
            <td>{average}%</td>
          </tr>
          <tr>
            <td>Positives:</td>
            <td>{positives}%</td>
          </tr>
        </tbody>

      </table>
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

        <Button onVote={handleGoodVote} text='Good'/>
        <Button onVote={handleNeutralVote} text='Neutral'/>
        <Button onVote={handleBadVote} text='Bad'/>


        <h2>Statistics</h2>

        <StatisticLine text='Good' value={good}/>
        <StatisticLine text='Neutral' value={neutral}/>
        <StatisticLine text='Bad' value={bad}/>

          <hr />

          <h2> Statistics</h2>

        { allVotes === 0 ? (
          <p>No feedback given</p>
        ): (
          <Statistics 
            allVotes={allVotes}
            average={average.toFixed(2)}
            positives={positives.toFixed(2)}
          />
        )}

    </div>
  )
}

export default App