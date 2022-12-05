import { GetStaticProps } from 'next'
import React from 'react'

// export const getStaticProps: GetStaticProps = async () => {

//     type dataType = {
//         userId: number,
//         id: number,
//         title: string,
//         completed: Boolean,

//     }
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts') // get data from the link
//     const data = res.json() // convert data into jason

//     // must be return a object type
//     return {
//         props: {
//             data,
//         }
//     }
// }


const Blog = () => {
    return (
        <div>Blog Page</div>
        )
    }
    
    export default Blog


// const Blog = ({ data }:dataType) => {
//     return (
//         <div>
//             <h1>Blog Page</h1>
//             {
//                 data.map((curElem) => {
//                     return <div key={curElem.id}>
//                         <h2>{curElem.id}</h2>
//                         <h2>{curElem.title}</h2>
//                     </div>
//                 })
//             }
//         </div>
//     )
// }
