import React from 'react'
import { Part } from './Part'
import { Total } from './Total'

export const Content = ({parts}) => {

     const total = parts.map(course => course.exercises).reduce((sum, part) => sum + part, 0)

  return (
    <div>
        {parts.map(part => 
            <Part key={part.id} part={part}/>
        )}
        
        <Total total={total} />
    </div>
  )
}
