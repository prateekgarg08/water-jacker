import React from 'react'

function Modal(props) {
    let device = {
        name: "",
        id: "",

    }
    function handleChange(event) {
        const { name, value } = event.target
        device[name] = value;


    }
    function sub() {

        props.submitHandler(device.name, device.id)
        props.eventHandler()
    }
    return (
        <div id="myModal" className="fixed top-0 left-0 w-full h-full overflow-auto bg-[#1a1a1a] flex items-center flex-col justify-center z-30">
            <div className='bg-[#1e90ff] absolute top-3 left-3 px-3 py-2 rounded-xl font-bold' onClick={props.eventHandler}>
                &times;
            </div>

            <div className=" flex flex-col w-full max-w-[400px] space-y-10 ">
                <div className='flex justify-center'>
                    <h1 className='text-5xl text-center font-bold px-10'>Connect New Device</h1>

                </div>

                <form className='flex flex-col items-center px-8 space-y-5' >

                    <input onChange={handleChange} className='w-full  bg-[#333] rounded-xl px-2 py-2' type="text" name="id" placeholder='Device UID' />
                    <input className='w-full  bg-[#333] rounded-xl px-2 py-2' type="password" name="pass" placeholder='Device Password' />
                    <input onChange={handleChange} className='w-full  bg-[#333] rounded-xl px-2 py-2' type="text" name="name" placeholder='Name your device' />

                    <button
                        type='button' onClick={sub} className="bg-[#1e90ff]  text-white rounded-2xl px-5 py-1 font-bold"
                    >Done</button>
                </form>

            </div>

        </div >
    )
}

export default Modal