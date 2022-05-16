import React from 'react'
import CanineList from '../components/CanineList'
import FelineList from '../components/FelineList'
import AddFeline from '../components/AddFeline'
import AddCanine from '../components/AddCanine'
import '../styles/AnimalList.css'

function AnimalList() {
  return (
    <div>
      <div className="animal-list">
        <CanineList />
        <FelineList />
      </div>
      <div className="animal-forms">
        <AddCanine />
        <AddFeline />
      </div>
    </div>
  )
}

export default AnimalList