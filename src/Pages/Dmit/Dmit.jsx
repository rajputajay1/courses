import React from 'react'

import Commen from '../../Component/Commen/Commen'

import {motion} from "framer-motion"
const Dmit = () => {

    const fetureDmit = [
        {
            title: 'Fingerprint Analysis',
            points: [
                {
                    title: 'Pattern Identification',
                    subtittle: "DMIT involves detailed analysis of fingerprint patterns such as loops, whorls, and arches."
                },
                {
                    title: 'Quantitative Data',
                    subtittle: "The number, type, and distribution of ridges are quantified and analyzed."
                }
            ]
        },
        {
            title: ' Fingerprints to Brain Function',
            points: [
                {
                    title: 'Neural Connections',
                    subtittle: "The test is based on the premise that fingerprints and brain development are interconnected, suggesting that the patterns can provide insights into cognitive functions."
                },
                {
                    title: 'Lateralization',
                    subtittle: "Analysis includes understanding which areas of the brain are more developed, based on which hand’s fingerprints are more complex or prominent."
                }
            ]
        },
        {
            title: 'Multiple Intelligences Profiling',
            points: [
                {
                    title: 'Assessment',
                    subtittle: "DMIT aims to profile an individual’s strengths across Howard Gardner’s eight types of intelligences: Linguistic, Logical-Mathematical, Spatial, Bodily-Kinesthetic, Musical, Interpersonal, Intrapersonal, Naturalistic."
                },
                {
                    title: 'Customized Reports',
                    subtittle: "The analysis generates a report that provides insights into which intelligences are more dominant."
                }
            ]
        },
        {
            title: 'Personality Traits',
            points: [
                {
                    title: 'Behavioral Insights',
                    subtittle: "The test includes an analysis of potential personality traits, such as leadership abilities, emotional stability, and social behavior."
                },
                {
                    title: 'Learning Styles',
                    subtittle: "DMIT identifies preferred learning styles (visual, auditory, kinesthetic) based on fingerprint patterns."
                }
            ]
        },
        {
            title: 'Developmental Potential',
            points: [
                {
                    title: 'Career Guidance',
                    subtittle: "The results are often used to suggest suitable career paths or educational tracks for individuals, particularly students."
                },
                {
                    title: 'Skill Development',
                    subtittle: "Recommendations for developing certain skills or intelligences based on identified strengths and weaknesses."
                }
            ]
        },
        {
            title: 'Parental and Educational ',
            points: [
                {
                    title: 'Parenting Tips',
                    subtittle: "For children, the reports often include advice for parents on how to nurture their child’s talents and manage areas of improvement."
                },
                {
                    title: 'Educational Strategies',
                    subtittle: "Educators may use DMIT reports to tailor teaching methods to individual students’ cognitive and learning styles."
                }
            ]
        },
        {
            title: 'Holistic Approach',
            points: [
                {
                    title: 'Comprehensive Analysis',
                    subtittle: "DMIT aims to provide a holistic view of an individual’s potential, including cognitive abilities, personality traits, and preferred learning styles."
                },
                {
                    title: 'Personalized Recommendations',
                    subtittle: "The test provides personalized development plans to help individuals maximize their potential."
                }
            ]
        },
        {
            title: 'User-Friendly Process',
            points: [
                {
                    title: 'Non-Invasive',
                    subtittle: "The fingerprint collection process is simple, non-invasive, and quick."
                },
                {
                    title: 'Accessibility',
                    subtittle: "Suitable for all age groups, from young children to adults."
                }
            ]
        },
        {
            title: 'Technological Integration',
            points: [
                {
                    title: 'Advanced Software',
                    subtittle: "Utilizes sophisticated software for fingerprint analysis and data interpretation."
                },
                {
                    title: 'Detailed Reports',
                    subtittle: "Generates detailed and visually appealing reports that are easy to understand."
                }
            ]
        },
        {
            title: 'Commercial Services',
            points: [
                {
                    title: 'Consultation',
                    subtittle: "Often provided by certified consultants or companies specializing in DMIT."
                },
                {
                    title: 'Workshops and Training',
                    subtittle: "Some services include workshops and training sessions based on DMIT results."
                }
            ]
        }
    ];
    

    return (
        <>

            <div className='my-10 lg:px-10 max-lg:px-5'>

                <motion.img src="./d.png" alt="" className='w-full h-screen'
                  initial={{ x: -1000 }}
                  animate={{ x: [1000, 0] }}
                  transition={{
                      duration: 3,
  
                  }}
                />
                <div className=''>
                    {/* <motion.p className='text-4xl font-extrabold text-black underline text-center max-lg:text-3xl max-md:text-2xl mt-10
                
                '
                initial={{ x: -1000 }}
                animate={{ x: [1000, 0] }}
                transition={{
                    duration: 3,

                }}
                    
                    >
              DMIT</motion.p> */}
                <p className='font-normal text-gray-700 dark:text-gray-400 text-[18px] pt-5'>The Dermatoglyphic Multiple Intelligence Test (DMIT) is a psychological assessment tool that claims to evaluate an individual's innate intelligences and potential based on the analysis of fingerprints and dermatoglyphic patterns. Dermatoglyphics refers to the study of the intricate patterns of ridges present on the fingertips, palms, toes, and soles, which are believed to be unique to each individual and form during fetal development.
                </p>

                </div>
               
             
                <motion.p className='text-4xl font-extrabold text-black underline text-center max-lg:text-3xl max-md:text-2xl mt-10'
                     initial={{ x: -1000, }}
                     animate={{ x: 0 }}
                     transition={{
                       duration: 3,
             
                     }}
                >
                HOW  DMIT WORK</motion.p>
                <div className='  flex justify-between flex-wrap'>

                    <div className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl"> Fingerprint Collection</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]">The process starts with the collection of fingerprints from all ten fingers. Each finger is believed to correspond to different aspects of cognitive and psychological traits.

                        </p>
                    </div>
                    <div className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl">  Pattern Analysis </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]"> The collected fingerprints are analyzed to identify the various patterns and ridge counts. This analysis is purportedly linked to the development of different regions of the brain.

                        </p>
                    </div>
                    <div className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl"> Report Generation </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]">  Based on the patterns and their associations with different types of intelligence, a detailed report is generated. This report aims to provide insights into an individual's natural strengths and weaknesses, learning styles, and potential career paths.


                        </p>
                    </div>

                </div>

              
                <motion.p className='text-4xl font-extrabold text-black underline text-center max-lg:text-3xl max-md:text-2xl mt-10'
                     initial={{ x: -1000 }}
                     animate={{ x: [1000, 0] }}
                     transition={{
                         duration: 3,
     
                     }}
                >
                WHY CHOOSE OF DMIT</motion.p>
                <div className='  flex justify-between flex-wrap'>

                    <div className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl">Scientific Precision
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]">DMIT is based on the analysis of unique dermatoglyphic patterns formed during fetal development, providing a reliable and scientific insight into your brain's functionality.



                        </p>
                    </div>
                    <div className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl">  Personalized Insights  </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]"> Discover your dominant intelligences, such as linguistic, logical-mathematical, musical, spatial, bodily-kinesthetic, interpersonal, intrapersonal, and naturalistic intelligences, tailored specifically to your fingerprint patterns.
                        </p>
                    </div>
                    <div className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl">  Holistic Development
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]">  Whether you are a student, a professional, or simply someone seeking personal growth, DMIT helps you leverage your strengths and address areas for improvement, paving the way for a well-rounded development.



                        </p>
                    </div>

                </div>

                {/* benifits */}
                <motion.p className='text-4xl font-extrabold text-black underline text-center max-lg:text-3xl max-md:text-2xl mt-10'
                     initial={{ x: -1000, }}
                     animate={{ x: 0 }}
                     transition={{
                       duration: 3,
             
                     }}
                >
                BENIFITS OF DMIT</motion.p>
                <div className='  flex justify-between flex-wrap'>

                    <div className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl"> Professionals
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]">Gain insights into your career preferences and potential, helping you make informed decisions and excel in your chosen field.




                        </p>
                    </div>
                    <div className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl">   Students  </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]">Optimize your learning strategies and educational plans by understanding your natural strengths and preferred learning styles.

                        </p>
                    </div>
                    <div className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl">   Parents
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]">  Support your child's development by recognizing their innate abilities and nurturing their growth in the most effective way.
                        </p>
                    </div>
                    <div className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl">   Individuals
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]">  Enhance your self-awareness and personal development by uncovering your true capabilities and areas for growth.

                        </p>
                    </div>

                </div>
                <motion.p className='text-4xl font-extrabold text-black underline text-center max-lg:text-3xl max-md:text-2xl mt-10'
                  initial={{ x: -1000 }}
                  animate={{ x: [1000, 0] }}
                  transition={{
                      duration: 3,
  
                  }}
                >
                FEATURES OF DMIT</motion.p>

                <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1  mt-5'>
                    {fetureDmit.map((feature, i) => (
                        <motion.div
                            key={i}
                            className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                            initial={{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50 }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 1, delay: i * 0.3 }}
                        >
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl">
                                {feature.title}
                            </h5>
                            <div className="font-normal text-gray-700 dark:text-gray-400 text-[18px]">
                                {feature.points.map((points, index) => (
                                    <div key={index} className="mb-4">
                                        <h6 className="font-bold text-2xl text-gray-700 mt-4 max-lg:text-[20px]">{points.title}</h6>
                                        <p className='text-[18px] font-normal mt-2'>{points.subtittle}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
              

                <motion.p className='text-4xl font-extrabold text-black underline text-center max-lg:text-3xl max-md:text-2xl mt-10'
                    initial={{ x: -1000 }}
                animate={{ x: [1000, 0] }}
                transition={{
                    duration: 3,

                }}
                >START YOUR JOURNEY TODAY!
                </motion.p>
                <p className='font-normal text-gray-700 dark:text-gray-400 text-[18px] pt-5' >Embark on a transformative journey of self-discovery with DMIT. Unlock your true potential and achieve greater success in every aspect of your life. Contact us today to schedule your DMIT assessment and take the first step towards a brighter, more fulfilling future.</p>


            </div>
        </>
    )
}

export default Dmit