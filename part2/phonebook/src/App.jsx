import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [filteredContacts, setFilteredContacts] = useState([])


  const addContact = (event) => {
    event.preventDefault()

    const newContact = {
      name: newName,
      number: newNumber,
      id: persons.length + 1  //in order to do not use index included in map method (line 65)
    }
    const alreadyExist = persons.some(contact => contact.name === newContact.name)

    if(!alreadyExist) {
      setPersons(persons.concat(newContact))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} already exist`)
    }
    
  }

  const handleAddContact = (event) => {
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)

    if (event.target.value === '') {
      setFilteredContacts([])
      return
    }

    const filtered = persons.filter(person => person.name.includes(event.target.value))

      console.log(filtered)
      setFilteredContacts(filtered)
  }


  return (
    <div>
      <h1>Phonebook</h1>

      <div>Filter shown with: <input value={search} onChange={handleSearch} /> </div> 

      <h2>Add a new</h2>

      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleAddContact}/>
        </div>

        <div>
          number: <input value={newNumber} onChange={handleAddNumber} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>



      <h2>Numbers</h2>
      <div>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((filter) =>
            <div key={filter.id}>
              <p>{filter.name} <span>{filter.number}</span></p>
            </div>
          )
        ): (
          persons.map((person) =>
            <div key={person.id}>
              <p>{person.name} <span>{person.number}</span></p>
            </div>
            )
    
        )}
      </div>
    </div>
  )
}

export default App