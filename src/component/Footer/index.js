import React from 'react'
import linkedin from '../../assets/icons/linkedin.png'
import mail from '../../assets/icons/mail.png'



export default function index() {
  return (
    <div className=''>
        <div className='flex mb-24 justify-center'>
            <div className='bg-[#0280FD08] flex w-full flex-col items-center mx-28 rounded-lg'>
                <div className='flex flex-col w-full mb-14 px-10 py-3'>
                    <p className='text-xl font-semibold'>Want to get in touch ?</p>
                    <p className='text-xl font-semibold'>Drop me a line!</p>
                </div>

                <div className='w-full flex flex-col'>
                    <div className='flex sm:flex-row flex-col gap-10 px-7 mx-14'>
                        <div className='flex flex-col w-full'>
                            <p className='font-semibold'>Name</p>
                            <input className='p-1' placeholder='Enter your name'></input>
                        </div>

                        <div className='flex flex-col w-full'>
                            <p className='font-semibold'>Email</p>
                            <input className='p-1' placeholder='Enter your email'></input>
                        </div>

                    </div>

                    <div className='flex flex-col my-6 px-7 mx-14'>
                        <p className='flex justify-start font-semibold'>Message</p>
                        <textarea className='p-1'></textarea>
                    </div>

                    <div className='py-5 mx-20'><button className='bg-blue-500 rounded-md text-white p-1 px-8'>Submit</button></div>
                </div>
            </div>
        </div>

        <div className='flex justify-between mx-14 mb-20'>
            <p className='text-sm font-bold'>STEVEN.</p>
            <div className='flex gap-3'>
                <img className='h-5 relative bottom-1' src={linkedin}/>
                <img className='h-5' src={mail}/>
            </div>
        </div>
    </div>
  )
}
