import React from 'react'


import HeroSection from "../components/HeroSection";


function HomePage() {
  return (
    <>
      <div>
        <div className="w-full relative">
          <div className="w-full ">
            <img
              src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706566570/Raw_Fresh_Meat_Striploin_Steak_And_Seasoning_Stock_Photo_-_Image_of_uncooked_pepper__46104324_ocwrnx.jpg"
              alt="food"
              className="w-full h-screen object-cover"
            />
          </div>
          <div className="absolute px-[3%] text-white top-0">
            <HeroSection />
          </div>
          <div>
         
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

 {/* <div className=' w-[100%] overflow-hidden object-fill relative uppercase text-center'>
 <img className=' w-full ' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706522371/pizza-4952508_640_oj1txp.jpg" alt="" />
              
 <div className='absolute top-[20%] left-[14%]   -translate-y-1/2 text-white lg:text-4xl text-lg font-bold'>
    <h3>welcome to </h3> 
 </div>
 <div className='absolute lg:top-[20%] left-[5%] top-[2%]  text-white text-4xl font-bold mt-12'>
 <h1 className=' lg:text-6xl md:text-5xl  '><ReactTyped strings = {['ELEZUZUO', 'RESTAURANT']} typeSpeed = {160} backSpeed = {140} loop /></h1>
 </div>
 <p className=' text-sm  text-white top-[40%] absolute left-[12%]'>where delicious is served</p>
  
</div> */}
