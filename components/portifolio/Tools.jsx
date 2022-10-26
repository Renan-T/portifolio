import { CodeBracketSquareIcon } from '@heroicons/react/24/outline'
import { CommandLineIcon } from '@heroicons/react/24/outline'
import { ShareIcon } from '@heroicons/react/24/outline'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import perfil from '../../assets/imgs/perfil.png'

export default function Tools() {
    return (
        <div className="sm:grid sm:grid-rows-3 sm:grid-flow-col border-x-4 border-black">
            <div className="flex flex-col sm:row-span-2 lg:row-span-3 items-center lg:border-r-4 border-black">
                <div className='aspect-square w-40 mt-4 '>
                    <Image
                        src={perfil}
                        alt="Picture of the author"
                        width="200px"
                        height="200px"
                    />
                </div>
                <p className='my-4 font-josefin text-xl font-semibold'>&lt; Renan Toledo /&gt;</p>
            </div>
            <div className="w-full flex lg:col-span-2 justify-center mb-4 mt-1 lg:mt-8 font-righteous text-2xl lg:text-4xl">
                &lt; FullStack Developer &gt;
            </div>
            <div className='w-full flex flex-col sm:row-span-3 lg:row-span-2 lg:col-span-2 items-center bg-teal-600 
            font-josefin border-y-4 sm:border-y-0 sm:border-l-4 lg:border-l-0 lg:border-t-4 border-black'>
                <div className='mt-6 text-2xl font-bold'>
                    Tools
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 text-base">
                    <div className='m-8 flex flex-col items-center'>
                        <CodeBracketSquareIcon className='h-8 w-8 mx-4 mb-2' />
                        <div>HTML / CSS</div>
                    </div>
                    <div className='m-8 flex flex-col items-center'>
                        <CommandLineIcon className='h-8 w-8 mx-4 mb-2' />
                        <div>JS / Node</div>
                    </div>
                    <div className='m-8 flex flex-col items-center'>
                        <ShareIcon className='h-8 w-8 mx-4 mb-2' />
                        <div>Git / GitHub</div>
                    </div>
                    <div className='m-8 flex flex-col items-center'>
                        <Cog6ToothIcon className='h-8 w-8 mx-4 mb-2' />
                        <div>React / Vue</div>
                    </div>
                </div>
            </div>
        </div>
    )
}