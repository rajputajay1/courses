import React from 'react'
import { FaGlobe, FaHome, FaPhone, FaMobile, FaEnvelope } from 'react-icons/fa'
import Commen from '../../Component/Commen/Commen'

import {motion}  from "framer-motion"
const Contect = () => {
    return (
        <>


            <div className='lg:px-10 max-lg:px-5 my-10'>
                {/* <img src="./contect.jpg" alt="" className='w-full h-screen mt-10' */}
                   <motion.img src="./contect.jpg" alt="" className='w-full lg:h-[600px] '
                   initial={{ x: -1000 }}
                   animate={{ x: [1000, 0] }}
                   transition={{
                       duration: 3,
   
                   }}
                />

                {/* <p className='text-6xl font-extrabold text-gray-800 text-center max-lg:text-3xl max-md:text-2xl mt-4 '>Contact Us</p> */}
                <div className=' pt-7'>
                    <p className='text-3xl font-bold  text-center max-lg:text-[22px] '>Get In Touch</p>
                    <p className=' font-semibold text-[20px] max-lg:text-[18px] text-center pt-2'>We’d love to hear from you! Whether you have questions about our services, need more information, or want to schedule an appointment, please reach out to us.</p>
                </div>
                <div className='flex mt-5 max-lg:flex-col  gap-10'>


                    <div className='lg:w-[30%]   mt-5'>
                        <p className='text-4xl font-extrabold max-lg:text-3xl  max-lg:text-center  pb-3'>Corporate Office</p>
                        <div className='bg-[#108aca] h-1 w-10 max-lg:w-28 max-lg:mx-auto'></div>
                        <div className=' flex gap-5   max-lg:flex-col max-lg:justify-center  max-lg:items-center mt-5  max-lg:text-center'>
                            <div >

                                <FaHome className='size-9  text-gray-800 align-top' />
                            </div>

                            <p className='text-gray-800 font-semibold text-[18px]'>E260, B(A), Industrial Area, Phase 8B, Mohali, 160055</p>
                        </div>
                        <div className='flex gap-5 mt-6 max-lg:text-center  max-lg:flex-col max-lg:justify-center items-center'>
                            <FaPhone className='size-8 text-gray-800' />

                            <p className='text-gray-800 font-semibold text-[18px]'>+91-9056664249, +91-8360672130,</p>
                        </div>
                        <div className='flex gap-5 mt-6 max-lg:text-center  max-lg:flex-col max-lg:justify-center items-center'>
                            <FaEnvelope className='size-8 text-gray-800' />

                            <p className='text-gray-800 font-semibold text-[18px]'>intelliflex360@gmail.com</p>
                        </div>
                        <div className='mt-5  rounded-md '>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13721.268642727642!2d76.67996839842777!3d30.709482992261943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee566ec12caf%3A0xe82bcee83eb20ba5!2sPhase%208B%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1718292683002!5m2!1sen!2sin" width="100%"



                                height={"300px"}
                                style={{ border: 0, borderRadius: 10 }}
                                allowFullScreen=""

                                loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' rounded-xl  '></iframe>
                        </div>
                    </div>

                    <div class="bg-white border-4 rounded-lg shadow relative  lg:w-[70%] ">
                        <div className='text-center pt-8'>

                            <div className='bg-[#108aca] h-[2px] mt-5 max-lg:mt-3 w-52 mx-auto max-lg:w-40'></div>
                        </div>
                        <div class="p-6 space-y-6 mt-5">
                            <form action="#">
                                <div class="grid grid-cols-6 gap-10">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2">FIRST NAME *</label>
                                        <input type="text" name="product-name" id="product-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="category" class="text-sm font-medium text-gray-900 block mb-2">Last NAME *</label>
                                        <input type="text" name="category" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="brand" class="text-sm font-medium text-gray-900 block mb-2">EMAIL ADDRESS *</label>
                                        <input type="text" name="brand" id="brand" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="price" class="text-sm font-medium text-gray-900 block mb-2">

                                            PHONE NUMBER *

                                        </label>
                                        <input type="number" name="price" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                                    </div>
                                    <div class="col-span-full">
                                        <label for="product-details" class="text-sm font-medium text-gray-900 block mb-2">HOW CAN WE HELP?</label>
                                        <textarea id="product-details" rows="6" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="p-6 border-t border-gray-200 rounded-b">
                            <button class=" bg-[#108aca]  text-nowrap cursor-pointer text-white hover:bg-[#333333]  rounded-lg text-sm px-5 py-2.5 text-center font-bold" type="submit">SUBMIT YOUR QUERY</button>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Contect