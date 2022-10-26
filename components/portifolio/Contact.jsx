import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contact() {
    return (
        <div className="flex flex-col sm:grid sm:grid-cols-6 border-x-4 border-black">
            <div className='hidden sm:flex md:col-span-2 border-r-4 border-black'>
                {/*Empty - For Layout */}
            </div>
            <div className='sm:col-span-4 md:col-span-3'>
                <div className="flex justify-center py-5 border-b-4 border-black font-righteous text-4xl bg-teal-600">
                    Contact
                </div>
                <div className='flex flex-col items-center my-6 font-josefin text-base lg:text-xl'>
                    <div>
                        Email: renantoledo.dev@gmail.com
                    </div>
                    <div>
                        Phone Number: +55 (11) 96566-2864
                    </div>
                    <div className="flex mt-4">
                        <FaGithub className="h-7 w-7 mr-4" />
                        <FaLinkedin className="h-7 w-7 mr-4" />
                        <FaInstagram className="h-7 w-7 mr-4" />
                    </div>
                </div>
            </div>
            <div className='hidden sm:flex border-l-4 border-black'>
                {/*Empty - For Layout */}
            </div>
        </div>
    )
}