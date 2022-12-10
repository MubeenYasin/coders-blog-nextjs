import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    }

})

//To fetch Categories
export const fetchCategories = async () => {
    return (
        api.get('/api/categories')
    )
}

//To fetch Articales
export const fetchArticles = async (queryString: string) => {
    return (
        api.get(`/api/articles?${queryString}`)
    )
}


export const fetchUsers = async () => {
    return (
        // api.get(`/api/users?${queryString}`)
        api.get('/api/users')
    )
}