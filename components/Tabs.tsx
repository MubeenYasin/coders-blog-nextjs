import Link from "next/link"
import { useRouter } from "next/router"
import { ICategory } from "../types/Types"

interface IPropType {
    categories: ICategory[]
}


const Tabs = ({ categories }: IPropType) => {

    const router = useRouter()

    const isActiveLink = (category: ICategory) => {
        return (
            category.attributes.Slug === router.query.category
        )
    }

    const handleOnSearch = (query: string) => {
        console.log('Search')
    }

    return (
        <div className="flex justify-between  border-b border-gray-100  my-8">
            <ul className="flex items-center gap-8  font-bold ">
                <li className={'pb-2 ' + `${router.pathname === '/'
                    ? 'border-b-3 border-darkcyan text-darkcyan'
                    : 'border-b-3 border-white text-gray-500'
                    }`}>
                    <Link href={'/'}>Recent</Link>
                </li>

                {
                    categories.map((category) => {
                        return (
                            <li key={category.id}
                                className={'pb-2 ' + `${isActiveLink(category)
                                    ? 'border-b-3 border-darkcyan text-darkcyan'
                                    : 'border-b-3 border-white text-gray-500'
                                    }`}>
                                <Link href={`/category/${category.attributes.Slug}`}>{category.attributes.Title}</Link>
                            </li>

                        )
                    })
                }
            </ul>

            <ul>
                <li>
                    <input onChange={(e) => handleOnSearch(e.target.value)}
                        type="text"
                        placeholder="Search"
                        className="outline-non border rounded-5  px-2 py-1 ml-1" />
                </li>
            </ul>
        </div>
    )
}

export default Tabs