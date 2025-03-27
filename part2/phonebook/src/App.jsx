import { useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { useEffect } from 'react'
import axios from 'axios'

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

  const [data, setData] = useState()


  const addContact = (event) => {
    event.preventDefault()

    const newContact = {
      name: newName,
      number: newNumber,
      id: persons.length + 1 
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

  useEffect(() => {
    console.log('initializing first useEffect')
    axios
      .get('http://localhost:3001/persons')
      .then(
        response => {
          console.log('response fulfilled')
          console.log('response: ', response.data)
          setData(response.data)
          console.log('data from first useEffect not available:', data)
        }
      )
  }, [])

  useEffect(()=> {
    console.log('initializing second useEffect')
    console.log('data from second useEffect should be available:', data)
  }, [data])


  return (
    <div>

      <h1>Phonebook</h1>
      <div>
        <Filter search={search} onHandleSearch={handleSearch}/>
      </div>

      <h2>Add a new</h2>
      <div>
        <PersonForm 
          onAddContact={addContact} 
          newName={newName}
          onHandleAddContact={handleAddContact}
          newNumber={newNumber}
          onHandleAddNumber={handleAddNumber}
        />
      </div>

      <h2>Numbers</h2>
      <div>
        <Persons 
          filteredContacts={filteredContacts}
          persons={persons}
        />
      </div>
      
    </div>
  )
}

export default App