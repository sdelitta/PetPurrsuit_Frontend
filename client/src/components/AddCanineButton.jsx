import { useNavigate, useParams } from "react-router-dom"
import { AddCanine } from "../services/PostServices"
import { useState, useEffect } from "react"
// import LoginContext from "../LoginContext"

const AddCanineButton = (props) => {
    let navigate = useNavigate()
    const loadUser = props.user
    const loadCanine = props.caninesDetails


    const handleSubmit = async (e) => {
            e.preventDefault();
            // props.user.canines.push(props.canineDetails)
            // console.log("latest", props.user)
            // let banana = {
            //     canines: props.user.canines,
            //     email: props.user.email,
            //     felines: props.user.felines,
            //     first_name: props.user.first_name,
            //     last_name: props.user.last_name,
            //     id: props.user.id,
            //     username: props.user.username,
            //     password: props.user.password
            // }
            props.setUser(({...props.user,"password":props.user.password, "canines":props.caninesDetails}))
            console.log("latest", props.user.canines)
            await AddCanine(props.user.id, props.user)

            // navigate("/myprofile")
            // window.location.reload()
        }
        if (props.user && props.caninesDetails){
        return (
            <div>
                <button className='update-button' onClick={(e)=>props.handleSubmit(e)} >Add Adoptee</button>
            </div>
        )
}}

export default AddCanineButton