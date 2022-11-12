import React from 'react'
import A_Header from './A_Header/index'
import nnamdi from '../assets/images/nnamdi.png'
import Footer from './Footer/index'

const About = () => {
  return (
    <div>
        <A_Header/>

        <div className='flex w-full my-20 items-center'>
            <div className='w-full p-5 px-10'>
                <p className='text-sm text-[#515151]'>Hey there ✌</p>
                <p className='font-semibold'>My name is Steven Olisakwe and I’m a UI/UX Designer based in Lagos, Nigeria. The thrill of conducting research from scratch and finding solutions to problems is what drives me as a designer. I’m a big anime fan.</p>
            </div>

            <div className='w-full flex justify-center'>
                <img className='xl:h-80 xl:w-64 lg:h-72 md:h-56 h-48' src={nnamdi}/>
            </div>
        </div>

        <div className='bg-blue-200 mx-10'>
            <p className='p-5 font-semibold text-3xl'>How it started....</p>
            <p className='p-5 font-semibold'>I first learned about UI/UX design in 2018, and I haven't turned back since. In my opinion, UI/UX design combines the arts, engineering, and business while also fostering the development of fresh ideas and the creation of strategies for promoting them through designs. I completed my studies in Agricultural and Biosystems Engineering at the University of Ilorin. I was once a programmer with intermediate proficiency in React.js, HTML, and CSS, but I had to switch to product design since I liked being at the forefront of problem-solving. I have grown as a person and have improved my thinking to be more problem-solving-focused thanks to developing solutions to human problems.</p>
        </div>


        <section className='flex flex-row justify-around my-14'>
            <div className=''>
                <p className='my-3 font-bold'>Tools</p>

                <ul className='font-semibold'>
                    <li className='my-1'>Webflow</li>    
                    <li className='my-1'>Figma</li>    
                    <li className='my-1'>Sketch</li>    
                    <li className='my-1'>Invision</li>    
                    <li className='my-1'>Adobe</li>    
                </ul> 
            </div>

            <div className=''>
                <p className='my-3 font-bold'>Skills</p>

                <ul className='font-semibold'>
                    <li className='my-1'>UI Design</li>    
                    <li className='my-1'>UX Design</li>    
                    <li className='my-1'>HTML/CSS</li>    
                    <li className='my-1'>Prototyping</li>    
                    <li className='my-1'>Wireframing</li>    
                </ul> 
            </div>

            <div className='font-bold'>
                <p className='my-3'>Interests</p>

                <ul className='font-semibold'>
                    <li className='my-1'></li>    
                    <li className='my-1'></li>    
                    <li className='my-1'></li>    
                    <li className='my-1'></li>    
                    <li className='my-1'></li>    
                </ul> 
            </div>

        </section>

        <Footer/>
    </div>
  )
}

export default About
