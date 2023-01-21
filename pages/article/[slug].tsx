import { AxiosResponse } from "axios"
import qs from "qs"
import Image from "next/image"
import { formatDate } from "../../utils/Utils"
import { fetchArticleBySlug } from "../../http/Http"
import { IArticle, ICollectionResponse } from "../../types/Types"
import { GetServerSideProps } from "next"
// import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';


interface IPropType {
    article: IArticle,
    notFound?: boolean
}

const slug = ({ article, notFound = false }: IPropType) => {
    return <>
        <div className="my-12 grid lg:grid-cols-3 gap-12 single-article">
            {/* Heading */}
            <div className="col-span-2">
                <h1 className="text-3xl font-bold py-2">
                    {article.attributes.Title}
                </h1>
                {/* Auther */}
                <div className="flex items-center gap-3 mt-2">
                    <div className="rounded-5 overflow-hidden">
                        <Image src={`http://localhost:1337${article.attributes.auther.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                            width='60'
                            height='40'
                            alt='avatar' />
                    </div>
                    <div className="tex-sm text-bold text-gray-600">
                        {article.attributes.auther.data.attributes.username}
                    </div>
                    <div className="text-gray-400">
                        {formatDate(article.attributes.createdAt)}
                    </div>
                </div>
                <div className="text-lg text-gray-600 leading-8">
                    <Image
                        className="w-full my-12 mb-6"
                        src={`http://localhost:1337${article.attributes.Image.data.attributes.formats.thumbnail.url}`}
                        width= '200'
                        height = '200' 
                        // alt={article.attributes.Title}
                        alt='img'
                    />
                </div>
            </div>


            <div className="flex items-center my-4">Right
                <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
                </div>
                <span className="text-sm font-bold text-gray-600">
                </span>
                <span>
                </span>
            </div>
        </div>
    </>
}
//*********************************************************************** */
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const queryString = qs.stringify({
        populate: ['Image', 'auther.avatar'],
        filters: {
            Slug: {
                $eq: query.slug,
            },
        },
    });

    const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
        await fetchArticleBySlug(queryString);
    if (articles.data.length === 0) {
        return {
            notFound: true,
        }; 
    }
    return {
        props: {
            article: articles.data[0]
        }
    }
}
//*********************************************************************** */


export default slug