import Image from "next/image"
const Footer = () => {
    return (
        <footer className="fixed bottom-0 my-10 text-gray-600">
            <div className='flex items-center cursor-pointer gap-2'>
                <Image src='/m.png' alt='logo' width='40' height='40' />
                <span className='font-bold text-md'>Mubi's Blog</span>
            </div>
        </footer>
    )
}

export default Footer 