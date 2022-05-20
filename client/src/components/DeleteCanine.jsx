import React from 'react'
import AxiosInstance from '../AxiosInstance'

function DeleteCanine( {id} ) {
  console.log(id)
  
  const handleDelete = async (e) => {
      e.preventDefault()
      await AxiosInstance.delete(`canines/${id}`)
      window.location.reload()
  }
    return (
    <div>
        <button onClick={handleDelete}>REMOVE DOG</button></div>
  )
}

export default DeleteCanine