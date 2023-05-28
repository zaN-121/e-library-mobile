import Api from "../api/api";


export const userLogin = async data => {
    try {
        const result = await Api('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept":'application/json',
            },
            data: data
        })
        return result
    } catch (error) {
        return error.response.data
    }
}

export const userRegistration = async data => {
    try {
        const response = await Api('/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        })
        return response
    } catch (error) {
        return error.response.data
    }
}