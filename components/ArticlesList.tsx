import { IArticle } from "../types"

interface IPropType {
    articles: IArticle[]
}

const ArticlesList = ({ articles }: IPropType) => {
    return (
        <div>
            <span>{articles.map(x => {
                return <span>{x.attributes.Title} <br/></span>
            })}
            </span>
        </div>
    )
}

export default ArticlesList