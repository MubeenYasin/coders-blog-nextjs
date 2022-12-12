import Link from "next/link"
import Image from "next/image"
import { IArticle } from "../types/Types"

interface IPropType{
    article: IArticle
}

const BlogCardImg = ({article}: IPropType) => {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-5 flex items-center justify-around h-56">
            <Link href={'#'}>
                <span className="text-2xl w-2/3 text-white font-bold">
                    {article.attributes.Title}
                </span>
            </Link>
            <Image src='/m.png' width={130} height={130} alt='m'/>
        </div>
    )
}

export default BlogCardImg