import { useNavigate, useParams } from "react-router"
import React, { useState } from "react"
import AxiosInstance from "../AxiosInstance"

function AddCanine( {id} ) {

  const [dogName, setDogName] = useState("")
  const [breed, setBreed] = useState("")
  const [age, setAge] = useState("")
  const [photo_url, setPhotoUrl] = useState("")

    console.log(id)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let form = new FormData()

    form.append("dogName", dogName)
    form.append("breed", breed)
    form.append("age", age)
    form.append("photo_url", photo_url)
    form.append("shelter_id", id)
    await AxiosInstance.post(`/canines/${id}`, form)
    window.location.reload()
    // loadcanines();
    // swal("Woooo!", "You Just Add a New canine", "success");
    // navigate(`/explore`);
  }

  return (
    <>
      <div className="addcanine-container">

        <div className="addcanine-bottom">
          <form onSubmit={handleSubmit} className="addcanine-form">
            <div className="addcanine-formfield">
                <h3>Add Canine Here</h3>
              <label>
                Name of the Canine<span>*</span>
              </label>
              <input
                onChange={(e) => setDogName(e.target.value)}
                name="dogName"
                value={dogName}
                required
              ></input>
            </div>
            <div className="addcanine-formfield">
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
            <div className="addcanine-formfield">
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
            <div className="addcanine-formfield">
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
            <div className="addcanine-formfield">
              <button onClick={(e) => handleSubmit(e)} className="postButton">
                Add a Canine
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCanine;