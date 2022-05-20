import React from 'react'
import AxiosInstance from '../AxiosInstance'

function DeleteFeline( {id} ) {
  console.log(id)
  
  const handleDelete = async (e) => {
      e.preventDefault()
      await AxiosInstance.delete(`felines/${id}`)
      window.location.reload()
  }
    return (
    <div>
        <button onClick={handleDelete}>REMOVE KITTY</button></div>
  )
}

export default DeleteFeline