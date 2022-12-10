import { IArticle, IUser } from "../types/Types"
import BlogCard from "./BlogCard"

interface IPropType {
    articles: IArticle[],
    users: IUser[]
}

const ArticlesList = ({ articles, users}: IPropType) => {
    return (
        <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
            {articles.map(article => {
                // eslint-disable-next-line react/jsx-key
                return <span><BlogCard article={article} key={article.id}/></span>
            })}

            
            {/* {users.map(user => {
                // eslint-disable-next-line react/jsx-key
                return <span>{user.username}</span>
            })} */}

        </div>
    )
}

export default ArticlesList