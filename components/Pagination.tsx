import { useRouter } from "next/router"
import qs from "qs"
import { IPropType, TDirection } from "../types/Types"

const Pagination = ({ page, pageCount, redirectUrl = '/' }: IPropType) => {
    const router = useRouter()

    const isNextDisabled = (): boolean => {
        return page >= pageCount
    }
    const isPrevDisabled = (): boolean => {
        return page <= 1
    }

    const handlePagination = (direction: TDirection) => {
        if (direction === 1 && isNextDisabled()) {
            return
        }
        if (direction === -1 && isPrevDisabled()) {
            return
        }

        const queryString = qs.stringify({ ...router.query, page: page + direction })
        router.push(`${redirectUrl}?${queryString}`)
    }

    return (
        <div className="flex justify-center gap-3 mt-12">
            <button onClick={() => handlePagination(-1)}
                className={`${'bg-darkcyan py-2 px-4 text-white w-24 rounded-md'} ${isPrevDisabled() ? 'disabled' : ''}`}>
                Prevois
            </button>
            <button onClick={() => handlePagination(1)}
                className={`${'bg-darkcyan py-2 px-4 text-white w-24 rounded-md'} ${isNextDisabled() ? 'disabled' : ''}`}>
                Next
            </button>
        </div>
    )
}


export default Pagination

