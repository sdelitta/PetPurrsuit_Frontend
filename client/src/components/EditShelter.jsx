import React, { useState, useEffect } from 'react'
import AxiosInstance from '../AxiosInstance'

function EditShelter( {id} ) {
    console.log(id)
    // const { id } = useParams()
    const [shelterName, setShelterName] = useState("");
    const [website, setWebsite] = useState("");
//   const [stateName, setStateName] = useState("");
    const [state_id, setStateId] = useState("");
    console.log(id)

    const loadShelters = async (e) => {
        const res = await AxiosInstance.get(`shelters/${id}`);
        console.log(res.data);
        setShelterName(res.data.shelterName)
        setWebsite(res.data.website)
        setStateId(res.data.state_id)
}

    useEffect(() => {
        loadShelters();
    }, [id])
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        let form = new FormData();

        form.append("shelterName", shelterName);
        form.append("website", website);
        form.append("state_id", state_id)
        await AxiosInstance.put(`/shelters/${id}`, form)
        window.location.reload()
        // loadshelters();
        // swal("Woooo!", "You Just Add a New Shelter", "success");
        // navigate(`/explore`);
  };

  return (
      <div className="editshelter-container">

        <div className="editshelter-bottom">
          <form onSubmit={handleSubmit} className="editshelter-form">
            <div className="editshelter-formfield">
                <h3>Edit Shelter Here</h3>
              <label>
                Name of the shelter<span>*</span>
              </label>
              <input
                onChange={(e) => setShelterName(e.target.value)}
                name="shelterName"
                value={shelterName}
                required
              ></input>
            </div>
            <div className="editshelter-formfield">
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
            <div className="editshelter-formfield">
              <button onClick={(e) => handleSubmit(e)} className="postButton">
                Update Shelter
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}
export default EditShelter