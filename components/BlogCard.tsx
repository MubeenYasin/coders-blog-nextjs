import Link from "next/link"
import Image from "next/image"
import { IArticle, IUser } from "../types/Types"
import { formatDate } from "../utils/Utils"

interface IPropType {
  article: IArticle,
}


const BlogCard = ({ article }: IPropType) => {
  return (
    <div>
      <Link href={'#'}>
        <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-darkcyan ">
          {article.attributes.Slug}
        </h1>
      </Link>

      <div className="flex items-center gap-3 mt-2">
        <div className="rounded-5 overflow-hidden">
          <Image src={`http://localhost:1337${article.attributes.auther.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
            width={60}
            height={40}
            alt='avatar' />
        </div>
        <div className="tex-sm text-bold text-gray-600">
          {article.attributes.auther.data.attributes.username}
        </div>
        <div className="text-gray-400">
          {formatDate(article.attributes.createdAt)}
        </div>
      </div>

      <div className="text-gray-500 mt-2">
      {article.attributes.shortDescription.slice(0,200)}{article.attributes.shortDescription.length > 200 ? '...' : ''  }
      </div>

    </div>
  )
}

export default BlogCard