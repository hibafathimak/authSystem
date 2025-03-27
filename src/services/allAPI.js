import commonAPI from "./commonAPI"
import serverUrl from "./serverUrl"


export const registerAPI = async (reqBody) => {
    return await commonAPI('POST',`${serverUrl}/auth/register`,reqBody)
}

export const loginAPI = async (reqBody) => {
    return await commonAPI('POST',`${serverUrl}/auth/login`,reqBody)
}

export const getUserProfile = async (id) => {
    return await commonAPI('GET',`${serverUrl}/auth/users/profile/${id}`)
}