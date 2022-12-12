import { IArticle } from "../types/Types"
import BlogCard from "./BlogCard"
import BlogCardImg from "./BlogCardImg"

interface IPropType {
    articles: IArticle[],
}

const ArticlesList = ({ articles }: IPropType) => {
    return (
        <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
            {articles.map((article, idx) => {
                // eslint-disable-next-line react/jsx-key
                return (
                    <div key={article.id}>
                    { idx === 1 ? <BlogCardImg article={article} /> : <BlogCard article={article} />}
                    </div>)
            })}
        </div>
    )
}

export default ArticlesList