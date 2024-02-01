
import React, { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { RiArrowUpSFill } from "react-icons/ri";

function LocalFood() {

  const [displayLocal, setdisplayLocal] = useState(false)

  const displayFood = () => {
    setdisplayLocal (!displayLocal);
  }

  return (
    <div>
      <div className='border-b border-black font-bold flex justify-between'>
        <div >
            <h1>GHANA DISHES</h1>
        </div>
        <div className=' ' onClick={displayFood}>
          {!displayLocal ? < RiArrowUpSFill size={30} /> : < TiArrowSortedDown size={30} />}   
        </div>
       </div>
        <div  className={displayLocal ? ' px-[5%] mt-5' : 'hidden'} onClick={displayFood} >
         <div className='grid lg:grid-cols-4 grid-cols-2 gap-10 mb-10'>
              <div className=' text-center  items-center justify-center shadow-lg'>
                <img className=' h-32  rounded-full md:ml-10 ml-1' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706795719/1_wxsPQhI9h-7h6AOf3Hb1Gw_h8wtxi.jpg" alt="banku" />
                <p>Banku with Okro and Meat</p>
                <p className='text-red-700'>Ghc 30.00</p>
              </div>

              <div className=' text-center  items-center justify-center shadow-lg'>
                <img className='h-32  rounded-full md:ml-10 ' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706795714/260px-Ghanaian_Delicacy-_Etor_zlkmcx.jpg" alt="banku" />
                <p>Eto3 with Eggs and Groundnut</p>
                <p className='text-red-700'>Ghc 20.00</p>
              </div>

              <div className=' text-center  items-center justify-center shadow-lg'>
                <img className=' h-32  rounded-full md:ml-10 ml-1' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706795713/Fufu-is-a-popular-dish-from-Ghana_27s-Ashanti-region_qlchyx.jpg" alt="banku" />
                <p>Fufu with light soup and meat</p>
                <p className='text-red-700'>Ghc 40.00</p>
              </div>

              <div className=' text-center  items-center justify-center shadow-lg'>
                <img className='h-32  rounded-full md:ml-10 ml-1' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706795713/Jollof_me3gnj.jpg" alt="banku" />
                <p>Jollof Rice with Chicken and Eggs</p>
                <p className='text-red-700'>Ghc 70.00</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default LocalFood