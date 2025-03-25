import React from 'react'

export const Persons = ({filteredContacts, persons}) => {
  return (
    <>
    {filteredContacts.length > 0 ? (
        filteredContacts.map((filter) =>
            <div key={filter.id}>
                <p>{filter.name} <span>{filter.number}</span></p>
            </div>
        )) : (
        persons.map((person) =>
            <div key={person.id}>
                <p>{person.name} <span>{person.number}</span></p>
            </div>
            )
        )}
    </>
  )
}
