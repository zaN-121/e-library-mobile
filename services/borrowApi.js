import Api from "../api/api"
import { getToken } from "../utils/token"


export const BorrowBook = async data => {
    try {
        const token = await getToken()
        const result = await Api('/borrow',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: token
            },
            data: data
        })
        return result
    } catch (error) {
        return error.response.data
    }
}

export const DeleteBorrowBook = async (id) => {
    try {
        const token = await getToken()
        Api(`/borrow/${id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: token
            },
        })
    } catch (error) {
        console.err(error)
    }
}