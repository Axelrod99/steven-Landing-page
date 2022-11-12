import React from 'react';
import './App.css';
import Header from './component/Header/index'
import Group_70 from './assets/images/Group_70.png'
import Line3 from './assets/icons/Line3.png'
import Android1 from './assets/images/Android1.png'
import Android2 from './assets/images/Android2.png'
import Rectangle1 from './assets/images/Rectangle1.png'
import Rectangle2 from './assets/images/Rectangle2.png'
import thctangle from './assets/images/thctangle.png'
import thctangle2 from './assets/images/thctangle2.png'
import Footer from './component/Footer/index'
import heroo from './assets/images/heroo.png'
import Arrow from './assets/icons/Arrow.png'
import Create from './Create'


function App() {
  return (
    <div>
      <Header/>

      <div className='flex w-full mt-10'>
        <div className='w-full flex flex-col px-10 justify-center'>
          <p className='font-bold md:text-5xl sm:text-3xl'>Hello!</p>
          <p className='font-semibold sm:text-md md:text-xl'>I’m Steven, a <span className='text-sky-500'> UI/UX Designer</span>. I  create user-centric products and solve design problems.</p>
        </div>


        <div className='w-full flex justify-center'>
          <img className='xl:h-96 lg:h-80 sm:h-72 xs:h-40 ' src={heroo}/>
        </div>
      </div>

      
      <h1 className='text-9xl font-black text-[#027ffd5a] opacity-25 flex justify-center relative top-14'>PROJECTS</h1>


      <div className='relative mb-40 py-16'>

        <div className='flex w-full items-center absolute top-28 px-20'>
          <div className='w-full py-2'>
            <p className='text-2xl font-bold py-2'>An E-commerce Mobile App</p>
            <img className='py-2' src={Line3}/>
            <p className='py-2 pb-5 font-semibold'>An app that offers a curated collection of the best products.</p>
            <button className='bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex whitespace-nowrap'>View Case Study</button>
          </div>

          <div className=''>
            <img className='' src={Group_70}/>
          </div>
        </div>
      </div>

      <h1 className='relative top-20 text-9xl font-black text-white-100 opacity-25 flex justify-center text-[#027ffd2b]'>PROJECTS</h1>

      <div className='mb-20 mt-20 px-1 mr-10 flex items-center'>
     
        <div className='flex w-full px-20 items-center'>
          <div className='w-full py-2'>
            <p className='text-2xl font-bold py-2'>An E-commerce Mobile App</p>
            <img className='py-2' src={Line3}/>
            <p className='py-2 pb-5 font-semibold'>An app that offers a curated collection of the best products.</p>
            <button className='bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex whitespace-nowrap'>View Case Study</button>
          </div>

          <div className='flex gap-5 mr-8'>
            <img className='xl:h-80 lg:h-72 md:h-64 h-52' src={Android1}/>
            <img className='xl:h-80 lg:h-72 md:h-64 h-52' src={Android2}/>
          </div>
        </div>
      </div>


      <div className='mb-10 px-10'>
        <div className='flex w-full px-5 items-center'>
          <div className='w-full py-2 flex gap-5 '> 
            <img className='xl:h-80 lg:h-72 md:h-64 h-52' src={Rectangle1}/>
            <img className='xl:h-80 lg:h-72 md:h-64 h-52' src={Rectangle2}/>   
          </div>

          <div className=' '>
            <p className='text-2xl font-bold py-2 '>Dating App for Everyone</p>
            <img className='py-2' src={Line3}/>
            <p className='py-2 pb-5 font-semibold'>A mobile dating app that connect users of similar interests and beliefs</p>
            <button className='bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex whitespace-nowrap'>View Case Study</button>
          </div>
        </div>
      </div>

      <h1 className='text-[#027ffd2b] text-9xl font-black text-white-100 opacity-25 flex justify-center relative bottom-10'>PROJECTS</h1>

      <div className='mb-36 w-full px-10 flex'>
        <div className='flex w-full gap-20 px-20 -ml-8 items-center'>
          <div className='w-full py-2'>
            <p className='text-2xl font-bold py-2'>A medical Emergency app</p>
            <img className='py-2' src={Line3}/>
            <p className='py-2 pb-5 font-semibold'>An innovative medical emergency app designed to provide instant access to first aid instructions, and helpful information.</p>
            <button className='bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex whitespace-nowrap'>View Case Study</button>
          </div>

          <div className='flex gap-5 w-full -mr-20 justify-end'>
            <img className='xl:h-80 lg:h-72 md:h-64 h-52' src={thctangle}/>
            <img className='xl:h-80 lg:h-72 md:h-64 h-52' src={thctangle2}/>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
