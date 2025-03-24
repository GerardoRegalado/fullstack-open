import React from 'react'
import { Header } from './Header'
import { Content } from './Content'
import { Total } from './Total'

export const Course = ({courses}) => {


    // const total = courses.parts.map(el => el.exercises).reduce((acc,curr) => acc += curr)


  return (
    <div>
        <h1>Web Development curriculum</h1>
        {courses.map(course => (
            <div key={course.id}>
                <Header header={course.name}/>
                <Content parts={course.parts}/>
            </div>
        ))}
    </div>
  )
}
