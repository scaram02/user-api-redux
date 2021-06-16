import React, {useState, useEffect} from 'react'
import {bindActionCreators} from 'redux'
import {actionCreators} from '../state/index'
import {useSelector, useDispatch} from 'react-redux'


const AllPeople = () => {

    const dispatch = useDispatch()
    const {addToFaves, removeFromFaves} = bindActionCreators(actionCreators, dispatch)

    const faves = useSelector((state) => state.people)
    console.log(faves)

// non redux 
const [people, setPeople] = useState([])

const getAllPeople = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then((res) => {
        return res.json()
    })
    .then((thePeople) => setPeople(thePeople.results))
}

useEffect(() => {
    getAllPeople()
}, [])


console.log(people)


    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Cell</th>
                    <th>Photo</th>
                    <th>Add</th>
                    <th>Remove</th> 
                </tr>
            {people && people.map((person) => {
               const id = `${person.name.first.toLowerCase()}-${person.name.last.toLowerCase()}`
               return (
                //    <div >
              <tr key={id}>            
                <td>{person.name.first} {person.name.last}</td>
                <td>{person.location.city}</td>
                <td>{person.cell}</td>
                <img src={person.picture.large} alt="" />
                <td onClick={() => addToFaves(person)}>add to faves</td>
                <td onClick={() => removeFromFaves(person)}>remove from faves</td> 
              </tr>  
                )

            })}
            </table>
            <h1>Heyo it's your favorite people</h1>
            {faves.people.map((fave, index) => <p style={{color: "red"}} key={index}>{fave.name.first} {fave.name.last}</p>)}
        </div>
    )
}

export default AllPeople