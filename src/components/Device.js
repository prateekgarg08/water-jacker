import React from 'react'
import Tank from './Tank'
function Device(props) {
    return (
        <div className='flex flex-col space-y-4 border border-[#333] w-fit h-fit p-2 rounded-xl items-center'>
            <div className=''>
                <div className='bg-[#1e90ff] rounded-2xl font-bold w-fit px-5 py-2'>
                    {props.name}
                </div>
            </div>
            {props.type === "tank" && <Tank fill={"80%"}></Tank>}
            <div className='flex space-x-3'>

                <div className='flex flex-col bg-[#333] w-fit px-3 py-1 rounded-xl items-center'>
                    <span className='mb-5'>Quality</span>
                    <span className='mb-5'>{props.quality}</span>
                </div>
                <div className='flex flex-col bg-[#333] w-fit px-3 py-1 rounded-xl items-center'>
                    <span className='mb-5'>Water usage</span>
                    <span className='mb-5'>{props.usage}</span>
                </div>

            </div>
        </div>
    )
}

export default Device