import { AxiosResponse } from "axios"
import { GetServerSideProps } from "next"
import Head from "next/head"
import qs from "qs"
import ArticlesList from "../../components/ArticlesList"
import Tabs from "../../components/Tabs"
import { fetchArticles, fetchCategories } from "../../http/Http"
import { IArticle, ICategory, ICollectionResponse, IPropType } from "../../types/Types"
import { splitHyphen } from "../../utils/Utils"

// ********************** Functions ********************** //
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log('query => ', query.category)

  const options = {
    populate: ['auther.avatar'],
    sort: ['id:desc'],
    filters: {
      category: {
        slug: query.category
      }
    }
  }
  const queryString = qs.stringify(options)

  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString)

  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories()

  return {
    props: {
      categories: {
        items: categories.data,
        pagination: categories.meta.pagination
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination
      },
      slug: query.category
    }
  }
}
// ********************** Functions ended ********************** //

// Category Dynamic Rout Page
const Category = ({ categories, articles, slug }: IPropType) => {
  const formatedCategory = () => {
    return  splitHyphen(slug)
  }
  return (
    <div>
      <Head>
        <title>{formatedCategory()}</title>
        <link rel="icon" href="/m.png" />
      </Head>

      <Tabs categories={categories.items} />
      <ArticlesList articles={articles.items} />
    </div>
  )
}
export default Category