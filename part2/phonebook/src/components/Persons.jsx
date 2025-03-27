import React from 'react'

export const Persons = ({filteredContacts, persons, onRemove}) => {
  return (
    <>
    {filteredContacts.length > 0 ? (
        filteredContacts.map((filter) =>
            <div key={filter.id}>
                <p>{filter.name} <span>{filter.number}</span></p>
                <button onClick={onRemove(filter.id)}>delete</button>
            </div>
        )) : (
        persons.map((person) =>
            <div key={person.id}>
                <p>{person.name} <span>{person.number}</span></p>
                <button onClick={() => onRemove(person.id)}>delete</button>

            </div>
            )
        )}
    </>
  )
}
