import React from 'react'

export const Part = ({part}) => {
  return (
    <div>
        <p>{part.name}: {part.exercises}</p>
    </div>
  )
}
