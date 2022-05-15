import { useNavigate } from "react-router"
import React, { useState } from "react"
import AxiosInstance from "../AxiosInstance"

function AddFeline( {id} ) {
    const [catName, setCatName] = useState("")
    const [breed, setBreed] = useState("")
    const [age, setAge] = useState("")
    const [photo_url, setPhotoUrl] = useState("")
    console.log(id)

    const handleSubmit = async (e) => {
        e.preventDefault()
        let form = new FormData()

        form.append("catName", catName)
        form.append("breed", breed)
        form.append("age", age)
        form.append("photo_url", photo_url)
        form.append("shelter_id", id)
        await AxiosInstance.post(`/felines/${id}`, form)
        window.location.reload()

    }

    return (
      <div className="addfeline-container">
        <div className="addfeline-bottom">
          <form onSubmit={handleSubmit} className="addfeline-form">
            <div className="addfeline-formfield">
                <h3>Add feline Here</h3>
              <label>
                Name of the Feline<span>*</span>
              </label>
              <input
                onChange={(e) => setCatName(e.target.value)}
                name="catName"
                value={catName}
                required
              ></input>
            </div>
            <div className="addfeline-formfield">
              <label>
                Breed<span>*</span>
              </label>
              <input
                onChange={(e) => setBreed(e.target.value)}
                name="breed"
                value={breed}
                required
              ></input>
            </div>
            <div className="addfeline-formfield">
              <label>
                Age<span>*</span>
              </label>
              <input
                onChange={(e) => setAge(e.target.value)}
                name="age"
                value={age}
                required
              ></input>
            </div>
            <div className="addfeline-formfield">
              <label>
                Photo Link Address<span>*</span>
              </label>
              <input
                onChange={(e) => setPhotoUrl(e.target.value)}
                name="photo_url"
                value={photo_url}
                required
              ></input>
            </div>
            <div className="addfeline-formfield">
              <button onClick={(e) => handleSubmit(e)} className="postButton">
                Add a Feline
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default AddFeline;