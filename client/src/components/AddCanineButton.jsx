import { useNavigate, useParams } from "react-router-dom"
import { GetUsersDetails } from "../services/PostServices"
import { useState, useEffect } from "react"
// import LoginContext from "../LoginContext"

const AddCanineButton = (props) => {
    let navigate = useNavigate()
    const [canine, setCanine] = useState('')







    const handleSubmit = async (e) => {
            e.preventDefault();
            // console.log(props.caninesDetails)
            await GetUsersDetails(props.user.id, props.caninesDetails)
            navigate("/myprofile")
            window.location.reload()
        }

        return (
            <div>
                <button className='update-button' onClick={handleSubmit}>Add Adoptee</button>
            </div>
        )
}

export default AddCanineButton