import Image from "next/image"
const Footer = () => {
    return (
        <footer className="text-darkcyan mt-12 fixed bottom-0 bg-gray-200 w-10/12   mx-auto">
            <div className='flex items-center mx-4 cursor-pointer gap-2 h-24'>
                <Image src='/m.png' alt='logo' width='40' height='40' />
                <span className='font-bold text-md'>Mubi's Blog</span>
            </div>
        </footer>
    )
}

export default Footer 