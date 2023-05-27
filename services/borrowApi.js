import axios from "axios"
import Api from "../api/api"


export const BorrowBook = async data => {
    try {
        const result = await Api('/borrow',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        })
        return result
    } catch (error) {
        return error.response.data
    }
}

export const DeleteBorrowBook = (id) => {
    try {
        Api(`/borrow/${id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
        })
    } catch (error) {
        console.err(error)
    }
}