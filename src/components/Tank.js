import React from 'react'

function Tank(props) {
    const style = {
        height: props.fill,
    }
    return (
        <div className='relative'>
            <div className='w-[150px] h-[150px] border-x-8 border-b-8 border-gray-400 relative flex items-center justify-center'>
                <div className='w-full bg-[#1e90ff] absolute bottom-0' style={style}>

                </div>
                <span className='text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl'>{props.fill}</span>
            </div>
        </div>
    )
}

export default Tank