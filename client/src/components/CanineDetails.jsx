import React, { useState, useEffect } from 'react'
import { GetCaninesDetails, AddCanine } from '../services/PostServices'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import AddCanineButton from './FORMERAddCanineButton'

const CanineDetails = (props) => {
    const [caninesDetails, setCaninesDetails] = useState([])
    const [update, setUpdate] = useState(false)
    const {id} = useParams()

    // useEffect(() => {
    //     props.setUser(({...props.user, "canines":caninesDetails}))
    // }, [update])

    useEffect(() => {
        props.setUser(({...props.user, "canines":caninesDetails}))
    }, [update])

    useEffect(() => {
        AddCanine(props.user.id, props.user)
    }, [props.user])

    useEffect(() => {
        const handleCanine = async () => {
            const data = await GetCaninesDetails(id)
            setCaninesDetails(data)
            // console.log(data)
        }
        handleCanine()
        // console.log(caninesDetails)
    }, [id])


    useEffect(() => {
        // console.log(caninesDetails)
    }, [caninesDetails])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdate(true)
        // props.user.canines.push(props.canineDetails)
        // console.log("latest", props.user)
        // console.log(caninesDetails)
        // props.setUser(({...props.user, "canines":caninesDetails}))
        // console.log("latest", props.user.canines)
        // await AddCanine(props.user.id, props.user)

        // navigate("/myprofile")
        // window.location.reload()
    }

    return (
        <div className='canine-page'>
            <div className='canine-title'>
                <h2>Age: {caninesDetails.age}</h2>
                <div className="animal-photo">
                    <img src={caninesDetails.photo_url} alt=""></img>
                    <AddCanineButton handleSubmit={handleSubmit} user={props.user} caninesDetails={caninesDetails} setUser={props.setUser}/>
                </div>
            </div>
        </div>
)}

export default CanineDetails