import React from 'react'
import Commen from '../../Component/Commen/Commen'
import { motion } from "framer-motion"
const About = () => {
  const aboutList = [
    {
      id: 1,
      image: "./vission.jpg",

      title: 'Our Vision',
      subtittle: "   To be the premier provider of DMIT and Midbrain Activation services, empowering individuals to achieve their fullest potential and make informed career choices.career path, ensuring success and satisfaction."
    },
    {
      id: 1,
      image: "./mission.jpg",
      title: 'Our Mission',
      subtittle: "To deliver accurate and insightful DMIT analysis and effective Midbrain Activation training, equipping our clients with the knowledge and tools needed to excel in their personal and professional lives."
    },
    {
      id: 1,
      image: "./ourteam.jpg",

      title: 'Our Team',
      subtittle: "Our team consists of highly trained professionals with extensive experience in DMIT and Midbrain Activation. We are passionate about helping individuals discover their strengths and achieve their goals."
    }

  ]
  const whyUs = [

    {
      title: "Personalized Approach",
      discription: "We recognize that each individual is unique. Our personalized assessments and counseling sessions are tailored to meet your specific needs."

    },
    {
      title: "Comprehensive Services",
      discription: "From DMIT tests to career counseling and Midbrain Activation, we provide a wide range of services to help you or your child succeed."

    },
    {
      title: "Proven Results",
      discription: "Our scientifically-backed methods have demonstrated significant improvements in learning abilities, career satisfaction, and personal growth."

    },
    {
      title: "Focus on Pan India",
      discription: "We are committed to providing top-notch services in North India, helping individuals in this region achieve their full potential."

    },
  ]





  return (
    <>



      <div className='lg:px-10 max-lg:px-5  my-10'>

        <motion.img src="./about.jpg" alt="" className='w-full lg:h-[600px] '
        
        initial={{ x: -1000, }}
        animate={{ x: 0 }}
        transition={{
          duration: 3,

        }}
        />

        {/* <motion.p
          
          className='text-5xl font-semibold text-black text-center max-lg:text-3xl max-md:text-2xl mt-3 underline'

      
        >ABOUT US</motion.p> */}
        <div className='text-[18px] font-normal    pt-5'>
          Intelliflex 360 Degree is a leading provider of DMIT software and Midbrain Activation training in North India. Our goal is to unlock the hidden potential in every individual through scientifically proven techniques and personalized guidance. By understanding one’s inherent strengths, we help align them with the right career path, ensuring success and satisfaction.
        </div>
        <div className='grid grid-cols-3 gap-10  max-lg:grid-cols-2 max-md:grid-cols-1 mt-5 '>


          {aboutList.map((about) => (

            <div className="relative flex justify-center items-center dark:bg-gray-800 w-full  rounded-lg   ">
              <div className="relative cursor-pointer dark:text-white">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                <div className="relative bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                  <img src={about.image} alt="" className='w-full rounded-lg h-80' />

                  <div className="flex items-center flex-col">
                    <p className='text-3xl font-semibold pt-3 max-lg:text-2xl'>{about.title}</p>
                    <p className='text-[18px] px-5 py-3'>
                      {about.subtittle}
                    </p>
                  </div>



                </div>
              </div>
            </div>

          ))}
        </div>

        <p className='text-5xl font-semibold text-black text-center max-lg:text-3xl max-md:text-2xl mt-6 underline'>Why Us</p>
        {/* <div className='grid grid-cols-3 gap-10  max-lg:grid-cols-2 max-md:grid-cols-1 mt-7 '>


          {whyUs.map((why) => (
            <div className="relative flex justify-center items-center dark:bg-gray-800 w-full   ">
              <div className="relative cursor-pointer dark:text-white">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                <div className="relative bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">

                  <div className="flex  flex-col">
                    <p className='text-3xl font-semibold pt-3 max-lg:text-2xl px-5'>{why.title}</p>
                    <p className='text-[18px] px-5 py-3 '>
                      {why.discription}
                    </p>
                  </div>



                </div>
              </div>
            </div>
          ))}
        </div> */}

        <img src="./why.jpg" alt=""  className='w-full mt-10'/>
      </div>
    </>
  )
}

export default About