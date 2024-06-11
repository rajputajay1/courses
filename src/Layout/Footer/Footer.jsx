import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='flex justify-center items-center lg:px-10'>


                {/* <div className='bg-[#aaaaaa] h-1 w-full px-5'></div> */}
                <img src="./l2.png" alt="Logo" class="h-48 w-auto lg:px-10 max-lg:px-3" />
                {/* <div className='bg-[#aaaaaa] h-1 w-full px-5'></div> */}
            </div>

            <div className='grid grid-cols-4 px-14 py-10 max-lg:grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1  mx-auto justify-center '>


                <div className=''>
                    <p className='text-[20px] font-semibold text-gray-800'>Internal Links</p>
                    <div className='bg-black h-[2px] w-14 '></div>
                    <div className='mt-4'>
                        <ul className=' text-[18px]' >
                            <li>
                                What Is DMIT
                            </li>
                            <li>
                                About Us
                            </li>
                            <li>
                                Contact Us
                            </li>
                            <li>Why Brainwonders</li>
                            <li>
                                Blogs
                            </li>
                            <li>Dmit & Parents
                            </li>
                            <li>Types of Finger Print
                            </li>
                            <li>Intelligence Type
                            </li>

                        </ul>
                    </div>
                </div>
                <div className=''>
                    <p className='text-[20px] font-semibold text-gray-800'>Internal Links</p>
                    <div className='bg-black h-[2px] w-14'></div>
                    <div className='mt-4'>
                        <ul className=' text-[18px]' >

                            <li>
                                About Dmit
                            </li>
                            <li>
                                Dmit Test
                            </li>
                            <li>
                                Dmit Benefits
                            </li>

                            <li>
                                Analysis Report
                            </li>

                            <li>
                                Finger History
                            </li>


                        </ul>
                    </div>
                </div>
                <div>


                    <p className='font-bold text-[20px]  text-gray-800'>
                        Social links
                    </p>
                    <div className='bg-black h-[2px] w-14'></div>
                    <ul className=' text-[18px] mt-4 flex gap-7' >
                        <li>
                            <img src="./facebook.svg" alt="" />
                        </li>
                        <li>
                            <img src="./insta.svg" alt="" />
                        </li>
                    </ul>

                </div>
                <div>
                    <p className='font-bold text-[20px]  text-gray-800'>Address</p>
                    <div className='bg-black h-[2px] w-14'></div>
                    <p className='mt-4 text-[18px]'>

                        E260, B(A), Industrial Area, Phase 8B, Mohali, 160055
                    </p>
                    <p className=' text-[18px]'>

                        +91-9056664249, +91-8360672130,
                    </p>
                    <p className=' text-[18px]'>

                        intelliflex360@gmail.com
                    </p>


                </div>






            </div>

        </>
    )
}

export default Footer