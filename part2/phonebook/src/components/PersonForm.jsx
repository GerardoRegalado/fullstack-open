import React from 'react'

export const PersonForm = ({onAddContact, newName, onHandleAddContact, newNumber, onHandleAddNumber }) => {
  return (
    <>
        <form onSubmit={onAddContact}>
            <div>
                name: <input value={newName} onChange={onHandleAddContact}/>
            </div>

            <div>
            number: <input value={newNumber} onChange={onHandleAddNumber} />
            </div>

            <div>
            <button type="submit">add</button>
            </div>
        </form>
    </>
  )
}
