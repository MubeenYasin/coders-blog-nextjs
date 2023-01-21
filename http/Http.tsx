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

// To fetch single article of the articles
// export const fetchArticleBySlug = async (queryString: string) =>
//     api.get(`/api/atricles?${queryString}`)


export const fetchArticleBySlug = async (queryString: string) =>
    api.get(`/api/articles?${queryString}`);

//To fetch user
export const fetchUsers = async () => {
    return (
        // api.get(`/api/users?${queryString}`)
        api.get('/api/users')
    )
}