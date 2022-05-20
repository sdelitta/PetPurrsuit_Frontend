import React, { useState } from "react";
import axios from "axios";
import AxiosInstance from "../AxiosInstance";

function AddShelter( {id} ) {
  const [shelterName, setShelterName] = useState("");
  const [website, setWebsite] = useState("");
//   const [stateName, setStateName] = useState("");
//   const [state_id, setStateId] = useState("");
    console.log(id)

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = new FormData();

    form.append("shelterName", shelterName);
    form.append("website", website);
    form.append("state_id", id)
    await AxiosInstance.post(`/shelters/`, form);
    window.location.reload()
  }

  return (
    <div className="addshelter-container">
      <div className="addshelter-bottom">
        <form onSubmit={handleSubmit} className="addshelter-form">
          <div className="addshelter-formfield">
            <h3>Add Shelter Here</h3>
            <label>
              Shelter Name<span>*</span>
            </label>
            <input
              onChange={(e) => setShelterName(e.target.value)}
              name="shelterName"
              value={shelterName}
              required
            ></input>
          </div>
          <div className="addshelter-formfield">
            <label>
              Website<span>*</span>
            </label>
            <input
              onChange={(e) => setWebsite(e.target.value)}
              name="website"
              value={website}
              required
            ></input>
          </div>
          {/* <div className="addshelter-formfield">
            <label>
              State<span>*</span>
            </label>
            <input
              onChange={(e) => setStateName(e.target.value)}
              name="stateName"
              value={stateName}
              required
            ></input>
          </div> */}

          {/* <div className="addshelter-formfield">
            <label>
              ID<span>*</span>
            </label>
            <input
              onChange={(e) => setStateId(e.target.value)}
              name="state_id"
              value={state_id}
              required
            ></input>
          </div> */}
          
          <div className="addshelter-formfield">
            <button onClick={(e) => handleSubmit(e)} className="postButton">
              Add a Shelter
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddShelter;