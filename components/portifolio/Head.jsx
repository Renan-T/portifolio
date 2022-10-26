import { WindowIcon, Bars3Icon } from '@heroicons/react/24/outline'

export default function Head(){
    return (
        <div className="sticky top-0">
            <div className="bg-slate-300 border-4 border-black flex items-center font-josefin font-bold">
                <div className='my-4'>
                    <Bars3Icon className='sm:hidden h-6 w-6 mx-4'/>
                </div>
                <div className="hidden sm:flex ml-4">
                    <div className="p-2 my-8 mx-2 bg-black w-0.5 h-0.5 rounded-full"></div>
                    <div className="p-2 my-8 mx-2 bg-black w-0.5 h-0.5 rounded-full"></div>
                    <div className="p-2 my-8 mx-2 bg-black w-0.5 h-0.5 rounded-full"></div>
                </div>
                <div className="hidden sm:flex items-center flex-auto justify-end">
                    <div className="mt-1 mx-4">Skills</div>
                    <div className="mt-1 mx-4">Works</div>
                    <div className="mt-1 mx-4">Resume</div>
                    <div className="mt-1 mx-4">Contact</div>
                    <WindowIcon className='h-6 w-6 mx-4'/>
                </div>
            </div>
        </div>
    )
}