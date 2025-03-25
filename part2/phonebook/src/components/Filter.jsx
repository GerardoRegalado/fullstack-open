import React from 'react'

export const Filter = ({search, onHandleSearch }) => {
  return (
    <>
        Filter shown with <input value={search} onChange={onHandleSearch} />
    </>
  )
}
