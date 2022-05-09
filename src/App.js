import React, { useState } from 'react'
import Modal from './components/Modal';
import Device from './components/Device';
import data from './data';
function App() {

  const [devices, setDevices] = useState([]);
  // console.log(devices)
  const [modal, setModal] = useState(false);

  function addToDevices(name, id) {
    const device = data.findIndex((obj) => obj.id == id)

    if (device != -1) {



      let pd = { ...data[device] }
      console.log(pd)
      pd.name = name
      setDevices((old) => {


        const newArr = [...old];
        newArr.push(pd)
        console.log(newArr)
        console.log(old)
        return newArr
      })
    }
    else {
      alert("id not found");
    }
  }
  const elements = devices.map((device) => {
    return <Device name={device.name} type={device.type} quality={device.quality} fill={device.fill} usage={device.usage} />
  })
  console.log(elements)
  return (
    <div className='bg-[#1a1a1a] min-h-[100vh] text-white px-2 space-y-5'>
      {modal && <Modal eventHandler={() => setModal(false)} submitHandler={addToDevices} />}
      <h1 className='text-5xl font-bold text-center'>Welcome User Name</h1>
      <div className='flex flex-col items-center space-y-10'>
        <div className='border-b border-white w-fit text-xl px-5 py-1 font-bold'>Your Devices</div>
        <div className='flex flex-col items-center space-y-7'>


          {devices.length ? elements : <p className='text-[#4f4f4f] font-bold text-4xl text-center'>Sorry you don't have any devices connected yet</p>}

          <button className='bg-[#073057] font-bold px-3 py-1 rounded-2xl' onClick={() => setModal(true)}>
            Click here to add new devices
          </button>

        </div>
      </div>
      {/* <Device name="Water-tank" quality="700ppm" usage="54 L" type="tank" /> */}
    </div>
  )
}

export default App