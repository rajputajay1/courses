import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='lg:px-10 max-lg:px-5'>


                <div className='flex justify-center'>
                <img src="./l2.png" alt="Logo" className="h-40 w-auto mr-4" />


                </div>
               


                <div className='grid grid-cols-4   max-lg:grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1  mx-auto justify-center '>


                    <div className=' '>
                        <p className='text-2xl font-bold text-gray-800  '>Internal Links</p>
                        <div className='bg-black h-[2px] w-14  '></div>
                        <div className='mt-4'>
                            <ul className=' text-[18px] ' >
                                <li>
                                    What Is DMIT
                                </li>
                                <li>
                                    About Us
                                </li>
                                <li>
                                    Contact Us
                                </li>
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
                        <p className='text-2xl font-bold text-gray-800 '>Internal Links</p>
                        <div className='bg-black h-[2px] w-14 '></div>
                        <div className='mt-4'>
                            <ul className=' text-[18px]  ' >

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


                        <p className='font-bold text-2xl  text-gray-800 '>
                            Social links
                        </p>
                        <div className='bg-black h-[2px] w-14  '></div>
                        <ul className=' text-[18px] mt-6 flex gap-5 ' >
                            <li>
                                <img src="./facebook.svg" alt="" />
                            </li>
                            <li>
                                <img src="./in.png" alt="" className='h-7  ' />
                            </li>
                            <li>
                                <img src="./what.svg" alt="" />
                            </li>
                        </ul>

                    </div>
                    <div>
                        <p className='font-bold text-2xl text-gray-800 '>Address</p>
                        <div className='bg-black h-[2px] w-14  '></div>
                        <div className='text-[18px] mt-4   '>
                            <div>



                                <p className=' text-[18px]'>

                                    E260, B(A), Industrial Area, Phase 8B, Mohali, 160055
                                    <br />
                                    +91-9056664249, +91-8360672130,
                                    <br />
                                    intelliflex360@gmail.com
                                </p>

                            </div>

                        </div>


                    </div>






                </div>
            </div>

        </>
    )
}

export default Footer