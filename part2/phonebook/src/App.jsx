import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const addContact = (event) => {
    event.preventDefault()

    const newContact = {
      name: newName
    }
    const alreadyExist = persons.some(contact => contact.name === newContact.name)

    if(!alreadyExist) {
      setPersons(persons.concat(newContact))
      setNewName('')
    } else {
      alert(`${newName} already exist`)
    }
    
  }

  const handleAddContact = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleAddContact}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...

      <div>
        {persons.map((person, i) =>
          <p key={i}>{person.name}</p>
        )}
      </div>
    </div>
  )
}

export default App