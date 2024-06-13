import React from 'react'
import Commen from '../../Component/Commen/Commen'
import { motion } from "framer-motion"
function Main() {
    return (
        <>
            {/* <Commen /> */}

            <div className='lg:px-10 max-lg:px-5 my-10'>
                <div className=' '>
                    <div className='flex lg:mt-5 max-lg:mt-3  gap-10   max-lg:flex-col  max-lg:px-5'>
                        <motion.div className=' lg:mt-3   lg:w-[70%] '
                            initial={{ x: -1500, }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 3,

                            }}
                            whileHover={{ scale: 0.9, opacity: 1 }}
                        >
                            <p className='text-[18px] font-normal mt-2 '>
                                Unlock Your True Potential with the Dermatoglyphic Multiple Intelligence Test (DMIT)
                                Welcome to our website, where we help you uncover your unique strengths and talents through the innovative Dermatoglyphic Multiple Intelligence Test (DMIT).
                                <br />
                                <br />
                                At the intersection of modern science and ancient wisdom, DMIT provides a window into your innate abilities and potential, empowering you to achieve greater personal and professional fulfillment.

                            </p>
                        </motion.div>
                        <motion.img src="./dmit.png" alt="" className='lg:w-[30%] max-lg:w-full h-72 mt-5'
                            initial={{ x: -1000 }}
                            animate={{ x: [1000, 0] }}
                            transition={{
                                duration: 3,

                            }}
                            whileHover={{ scale: 0.9, opacity: 1 }}
                        />

                    </div>
                </div>
                <div className='bg-green-500  flex justify-center items-center mt-7 py-5'>
                    <div className='flex justify-center flex-col items-center'>
                        <p className='text-2xl font-bold max-lg:text-[18px] text-center max-lg:px-5 text-white'>Get ready to scientifically map yourself !!</p>

                        <p className='text-[18px] max-lg:text-[18px] max-lg:px-5 font-semibold text-black inline-block lg:px-28 py-2 mt-2 rounded-sm bg-white hover:bg-blue-500 hover:text-white cursor-pointer'>TAKE YOUR DMIT TEST NOW</p>

                    </div>

                </div>

                <div className='mt-5'>
                    <p className='text-4xl underline font-extrabold text-black text-center max-lg:text-3xl max-md:text-2xl'>
                        DERMATOGLYPHICS (DMIT)</p>
                    <div className='flex lg:mt-5 max-lg:mt-3  gap-10   max-lg:flex-col '>
                        <motion.div className='lg:w-[60%] lg:mt-5 max-lg:px-5 '


                            initial={{ x: -1500, }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 3,

                            }}
                            whileHover={{ scale: 0.9, opacity: 1 }}
                        >


                            <p className='text-2xl font-bold text-gray-800 max-lg:text-[18px] max-md:text-center'>
                                Welcome to Intelliflex 360 Degree
                            </p>
                            <div className='text-[18px] font-normal mt-2 max-sm:text-[18px] flex  flex-col gap-3'>


                                <p className=''>
                                    <span className='font-bold text-[20px]'>1.{" "}</span> At Intelliflex 360 Degree, we are committed to transforming lives through the power of DMIT (Dermatoglyphics Multiple Intelligence Test) software and Midbrain Activation.
                                </p>
                                <p>
                                    <span className='font-bold text-[20px]'>2.{" "}</span>

                                    We serve a diverse clientele including students, kids, teenagers, college students, working professionals, and adults.
                                </p>
                                <p>
                                    <span className='font-bold text-[20px]'>3.{" "}</span>
                                    Our mission is to help you uncover your innate strengths and choose the right career path that aligns with your natural abilities.
                                </p>
                                <p>
                                    <span className='font-bold text-[20px]'>4.{" "}</span>
                                    Discover the benefits of DMIT and career counseling with Intelliflex 360 Degree.
                                </p>
                                <p>
                                    <span className='font-bold text-[20px]'>5.{" "}</span>
                                    Our expert team provides personalized guidance to help you make informed decisions about your future.
                                </p>
                                <p>
                                    <span className='font-bold text-[20px]'>6.{" "}</span>
                                    Our Midbrain Activation Training Program is designed to enhance learning abilities and improve visual and auditory perceptions, giving your child a competitive edge.
                                </p>


                            </div>
                        </motion.div>


                        <motion.img src="./dmitimg.png" alt="" className='lg:w-[40%] max-lg:w-full h-96 mt-5 max-lg:px-5'

                            initial={{ x: -1000 }}
                            animate={{ x: [1000, 0] }}
                            transition={{
                                duration: 3,

                            }}
                            whileHover={{ scale: 0.9, opacity: 1 }}
                        />



                    </div>
                </div >

                <div className='mt-8 px-5'>
                    <p className='text-4xl underline font-extrabold text-black text-center max-lg:text-3xl max-md:text-2xl'>
                        CAREER COUNSELLING</p>
                    <div className='flex lg:mt-5 max-lg:mt-3  gap-10   max-lg:flex-col'>
                        <motion.img src="./carrer.png" alt=""
                            className=' lg:h-[420px] lg:w-[45%]'
                            initial={{ x: -1200, }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 3,
                            }}
                            whileHover={{ scale: 0.9, opacity: 1 }}
                        />
                        <motion.div className='lg:w-[60%] lg:mt-4'
                            initial={{ x: -1000 }}
                            animate={{ x: [1000, 0] }}
                            transition={{
                                duration: 3,
                            }}
                            whileHover={{ scale: 0.9, opacity: 1 }}
                        >
                            <p className='text-2xl font-bold text-gray-800 max-lg:text-[18px]'>
                                Comprehensive Analysis
                            </p>
                            <p className='text-[18px] font-normal mt-1 max-sm:text-[18px]'>
                                Our career counseling services involve a thorough analysis of DMIT reports to understand your strengths and potential.
                            </p>
                            <p className='text-2xl font-bold text-gray-800 mt-2 max-lg:text-[18px]'>
                                One-on-One Counseling
                            </p>
                            <p className='text-[18px] font-normal mt-1 max-sm:text-[18px]'>
                                Personalized counseling sessions with our experts help you make informed decisions about your education and career.
                            </p>
                            <p className='text-2xl font-bold text-gray-800 mt-2 max-lg:text-[18px] '>
                                Tailored Guidance
                            </p>
                            <p className='text-[18px] font-normal mt-1 max-sm:text-[18px]'>
                                We provide guidance on education and career choices that align with your unique strengths and interests, ensuring a fulfilling career path.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className='mt-8 px-5'>
                    <p className='text-4xl underline font-extrabold text-black text-center max-lg:text-3xl max-md:text-2xl'>
                        Personality Test</p>
                    <div className='flex lg:mt-5 max-lg:mt-3  gap-10   max-lg:flex-col'>

                        <motion.div className='lg:w-[55%] lg:mt-4 flex flex-col gap-4'
                            initial={{ x: -1000 }}
                            animate={{ x: [1000, 0] }}
                            transition={{
                                duration: 3,
                            }}
                            whileHover={{ scale: 0.9, opacity: 1 }}
                         >
                            <p className='text-2xl font-bold text-gray-800 max-lg:text-[18px]'>

                                Thoughts, behaviour, relationships, emotional regulation and more- decoded and defined
                            </p>
                            <p className='text-[18px] font-normal mt-1 max-sm:text-[18px]'>
                            <span className='font-bold text-[20px]'>1.{" "}</span>

                                Know the qualities, traits, and actions that will help and build long-term relationships
                            </p>

                            <p className='text-[18px] font-normal mt-1 max-sm:text-[18px]'>
                            <span className='font-bold text-[20px]'>2.{" "}</span>

                                Identify a good candidate for a particular work setting or even a social environment                            </p>

                            <p className='text-[18px] font-normal mt-1 max-sm:text-[18px]'>
                            <span className='font-bold text-[20px]'>3.{" "}</span>

                                Make the most of personal characteristics by understanding self-motivation, discipline, leadership and other soft skills
                            </p>
                        </motion.div>

                        <motion.img src="./per.png" alt=""
                            className='lg:h-96 lg:w-[45%]'
                            initial={{ x: -1200, }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 3,
                            }}
                            whileHover={{ scale: 0.9, opacity: 1 }}
                        />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Main