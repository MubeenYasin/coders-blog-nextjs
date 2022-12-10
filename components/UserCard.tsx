import Link from "next/link"
import Image from "next/image"
import { IUser } from "../types/Types"

interface IPropType {
    users: IUser
}


const UserCard = ({ users }: IPropType) => {
    return (
        <div>
            <Link href={'#'}>
                <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-darkcyan ">
                
                </h1>
            </Link>

        </div>
    )
}

export default UserCard