import React from 'react'
import AxiosInstance from '../AxiosInstance'

function DeleteShelter( {id} ) {
  console.log(id)
  
  const handleDelete = async (e) => {
      e.preventDefault()
      await AxiosInstance.delete(`shelters/${id}`)
      window.location.reload()
  }
    return (
    <div>
        <button onClick={handleDelete}>DELETE</button></div>
  )
}

export default DeleteShelter