import { DocumentArrowDownIcon } from "@heroicons/react/24/outline"




export default function About(){
    return (
        <div className="flex flex-col items-center pt-6 pb-4 border-x-4 sm:border-t-4 border-b-4 border-black">
            {/* Title */}
            <div className="flex flex-col items-center border-black">
                <div className="font-righteous text-3xl pb-4"> 
                    About()
                </div>
                <p className='font-josefin'>
                    I'm a creative web full stack developer
                </p>
                <p className=' font-josefin font-bold'>
                    from Salvador/BA - Brazil
                </p>              
            </div>
            {/* Button - Resume */}
            <div className="my-4 border-black">
                <button className="border-2 border-black rounded-lg p-2 flex bg-slate-300">
                    RESUME
                    <DocumentArrowDownIcon className='h-6 w-6 ml-1'/>
                </button>
            </div>
        </div>
    )
}