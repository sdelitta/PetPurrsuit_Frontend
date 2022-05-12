// import Client from './api'
import AxiosInstance from '../AxiosInstance'

export const GetStates = async () => {
    try {
        const res = await AxiosInstance.get('/states')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetStatesDetails = async (id) => {
    try {
        const res = await AxiosInstance.get(`/states/${id}`)
        console.log(res, "res")
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetShelters = async () => {
    try {
        const res = await AxiosInstance.get('/shelters')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetSheltersDetails = async (id) => {
    try {
        const res = await AxiosInstance.get(`/shelters/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetCanines = async () => {
    try {
        const res = await AxiosInstance.get('/canines')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetCaninesDetails = async (id) => {
    try {
        const res = await AxiosInstance.get(`/canines/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetFelines = async () => {
    try {
        const res = await AxiosInstance.get('/felines')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetFelinesDetails = async (id) => {
    try {
        const res = await AxiosInstance.get(`/felines/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetUsersDetails = async (id) => {
    try {
        const res = await AxiosInstance.get(`/users/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}
