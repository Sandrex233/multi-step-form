import React, { useState } from 'react'
import Info from './components/Info'
import Plan from './components/Plan'
import Addons from './components/Addons'
import Summary from './components/Summary'
import Sidebar from './components/Sidebar'




const App = () => {
  const [index, setIndex] = useState(0)

  return (
    <div className='flex items-center h-screen bg-[#F0F6FF] justify-center'>
      <div className='p-4 rounded-xl shadow-2xl bg-white items-center flex flex-row  w-[1200px]'>
        <Sidebar
          index={index}
          setIndex={setIndex}
        />
        {index === 0 && <Info setIndex={setIndex} />}
        {index === 1 && <Plan index={index} setIndex={setIndex} />}
        {index === 2 && <Addons index={index} setIndex={setIndex} />}
        {index === 3 && <Summary />}
      </div>
    </div>
  )
}

export default App