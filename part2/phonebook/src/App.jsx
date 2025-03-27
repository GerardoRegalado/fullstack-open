import { useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { useEffect } from 'react'
import contactServices from './services/contact'

const App = () => {
  const [persons, setPersons] = useState([

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
    }
    const alreadyExist = persons.some(contact => contact.name === newContact.name)

    if(!alreadyExist) {
      contactServices
      .create(newContact)
      .then(returnedPersons => {
        setPersons(persons.concat(returnedPersons))
        setNewName('')
        setNewNumber('')
  
      })
      .catch(error => {
        console.log(error)
        alert('error saving contact')
      })
    } else {

      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)) {
        const personForUpdate = persons.find(person => person.name === newContact.name)

        contactServices
        .update(personForUpdate.id, {...personForUpdate, number: newNumber})
        .then(updatedPerson => {
          console.log(updatedPerson)
          setPersons(persons.map(person => person.id !== updatedPerson.id ? person: updatedPerson))
          setNewName('')
          setNewNumber('')
          setFilteredContacts([])
        })

      }
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

  const handleRemove = id => {
    if (window.confirm("Do you really want to remove contact?")) {
      contactServices.remove(id).then(response => { console.log(response)})
      setPersons(persons.filter(person => person.id !== id))
      setFilteredContacts(filteredContacts.filter(person => person.id !== id))
    }
  }


  useEffect(() => {
    console.log('initializing first useEffect')
    contactServices
    .getAll()
    .then(initialContacts => {
      console.log('response fulfilled')
      console.log('response: ', initialContacts)
      setData(initialContacts)
      setPersons(initialContacts)
      console.log('data from first useEffect not available:', data)
    })
  }, [])




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
          onRemove={handleRemove}
        />
      </div>
      
    </div>
  )
}

export default App