import React from "react"
import SheltersDetailsNEW from "../components/SheltersDetailsNEW"
import AddFeline from '../components/AddFeline'
import AddCanine from '../components/AddCanine'

const shelterDetails = () => {
  return (
    <div>
      <SheltersDetailsNEW />
      <div className="animal-forms">
        <AddCanine />
        <AddFeline />
      </div>
    </div>
  )
}
export default shelterDetails