import {URL_BACK_USERS} from '../constants/constants'

export const getUser = async (id) => {
    var user;
    await fetch(URL_BACK_USERS+"/"+id)
    .then(data => data.json())
    .then(data => user=data)
    return user;
} 