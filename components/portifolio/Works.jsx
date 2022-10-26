import { TfiMusicAlt } from 'react-icons/tfi'
import { IoGameControllerOutline } from 'react-icons/io5'
import { FiShoppingCart } from 'react-icons/fi'
import { IoDocumentTextOutline } from 'react-icons/io5'
import Ecommerce from './works/Ecommerce'
import HashGame from './works/HashGame'
import MySpaceToday from './works/MySpaceToday'
import LandingPage from './works/LandingPage'

export default function Works() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-5 border-x-4 border-black">
            <div className="flex justify-center py-8 md:col-span-1 md:items-center border-b-4 md:border-r-4 border-black bg-slate-300 font-righteous text-2xl">
                    &lt; Works /&gt;
            </div>
            <div className="flex flex-col items-center md:col-span-4 border-b-4 border-black font-josefin">
                    <div className='mt-6 text-2xl font-bold'>
                        Click To See My Portifolio
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 mb-4 text-xl">
                        <div className='flex flex-col items-center m-4'>
                            <FiShoppingCart className='h-8 w-8 mx-4 mb-2' />
                            <Ecommerce />
                        </div>
                        <div className='flex flex-col items-center m-4'>
                            <IoGameControllerOutline className="h-8 w-8 mx-4 mb-2" />
                            <HashGame />
                        </div>
                        <div className='flex flex-col items-center m-4'>
                            <TfiMusicAlt className='h-8 w-8 mx-4 mb-2' />
                            <MySpaceToday />
                        </div>
                        <div className='flex flex-col items-center m-4'>
                            <IoDocumentTextOutline className='block h-8 w-8 mx-4 mb-2' />
                            <LandingPage />
                        </div>
                    </div>
            </div>
        </div>
    )
}