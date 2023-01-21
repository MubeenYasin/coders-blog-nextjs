import { AxiosResponse } from "axios"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import qs from "qs"
import ArticlesList from "../../components/ArticlesList"
import Pagination from "../../components/Pagination"
import Tabs from "../../components/Tabs"
import { fetchArticles, fetchCategories } from "../../http/Http"
import { IArticle, ICategory, ICollectionResponse, IPagination, IPropType, IQueryOtions } from "../../types/Types"
import { debounce, splitHyphen } from "../../utils/Utils"

// ********************** Functions ********************** //
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // console.log('query => ', query.category)

  const options:IQueryOtions = {
    populate: ['auther.avatar'],
    sort: ['id:desc'],
    filters: {
      category: {
        slug: query.category
      }
    },
    pagination: {
      page : query.page ? +query.page : 1,
      pageSize : 4
    }
  }

  if (query.search) {
    options.filters = {
      Title: {
        $containsi: query.search
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
      slug: query.category,
    },
  }
}
// ********************** Functions ended ********************** //


// Category Dynamic Rout Page
const Category = ({ categories, articles, slug}: IPropType) => {
  const {page, pageCount} = articles.pagination
  const router = useRouter()
  const {category: categorySlug} = router.query

  const handleSearch = (query: string) => {
    router.push(`/category/${categorySlug}?search=${query}`);
  };

  const formatedCategory = () => {
    return splitHyphen(slug)
  }
  return (
    <div>
      <Head>
        <title>{formatedCategory()}</title>
        <link rel="icon" href="/m.png" />
      </Head>

      <Tabs categories={categories.items} handleOnSearch={debounce(handleSearch, 500)}/>
      <ArticlesList articles={articles.items} />
      <Pagination page={page} pageCount={pageCount} redirectUrl={`/category/${categorySlug}`} />

    </div>
  )
}
export default Category