import React from 'react'
import Commen from '../../Component/Commen/Commen'
import { motion } from "framer-motion"
const CarrerCounselling = () => {
    const careerCounselingImportance = [
        {
            id: 1,
            title: 'Self-Discovery',
            points: [
                'Understanding Strengths and Weaknesses: Career counseling helps individuals identify their strengths, weaknesses, interests, and values, providing a clearer sense of self.',
                'Personality Assessment: Tools like personality tests can reveal insights into how personal traits align with various career options.'
            ]
        },
        {
            id: 2,
            title: 'Informed Decision Making',
            points: [
                'Awareness of Options: Counselors provide information on a wide range of career options and the realities of different job markets.',
                'Guided Exploration: Individuals can explore various career paths in a structured manner, reducing the risk of making uninformed choices.'
            ]
        },
        {
            id: 3,
            title: 'Skill and Interest Alignment',
            points: [
                'Matching Skills to Careers: Counselors help match an individual\'s skills and interests with suitable career options, leading to more fulfilling job experiences.',
                'Identifying Gaps: Counseling can highlight areas where additional skills or education are needed and provide a roadmap for acquiring them.'
            ]
        },
        {
            id: 4,
            title: 'Educational Guidance',
            points: [
                'Choosing the Right Courses: Counselors assist students in selecting courses or educational programs that align with their career goals.',
                'Understanding Prerequisites: They provide information about necessary qualifications and certifications required for specific careers.'
            ]
        },
        {
            id: 5,
            title: 'Goal Setting',
            points: [
                'Short and Long-Term Planning: Career counseling helps individuals set realistic career goals and develop a step-by-step plan to achieve them.',
                'Milestone Identification: It involves identifying key milestones and tracking progress over time.'
            ]
        },
        {
            id: 6,
            title: 'Market Trends and Opportunities',
            points: [
                'Labor Market Information: Counselors provide up-to-date information on labor market trends, helping individuals understand which industries are growing and which are declining.',
                'Future-Proofing Careers: They help clients anticipate future job market changes and prepare for emerging opportunities.'
            ]
        },
        {
            id: 7,
            title: 'Personal and Professional Growth',
            points: [
                'Confidence Building: Counseling can boost self-esteem and confidence by helping individuals understand their worth and potential.',
                'Career Satisfaction: By aligning career choices with personal values and interests, counseling can lead to greater job satisfaction and overall well-being.'
            ]
        },
        {
            id: 8,
            title: 'Navigating Career Transitions',
            points: [
                'Mid-Career Changes: For those considering a career change, counseling provides support and guidance on transitioning smoothly.',
                'Career Advancement: Counselors can offer strategies for advancing within a current career, including further education or skill development.'
            ]
        },
        {
            id: 9,
            title: 'Stress and Anxiety Reduction',
            points: [
                'Decision Support: Making career decisions can be stressful, and having a counselor provides emotional support and reduces anxiety.',
                'Conflict Resolution: Counseling can help resolve conflicts between career aspirations and external pressures from family or society.'
            ]
        },
        {
            id: 10,
            title: 'Networking and Resources',
            points: [
                'Building Connections: Counselors often have networks of professionals and can facilitate connections that can lead to job opportunities.',
                'Resource Access: They provide access to various resources such as job boards, internships, and workshops.'
            ]
        },
        {
            id: 11,
            title: 'Customized Advice',
            points: [
                'Personalized Plans: Counseling offers tailored advice and plans based on individual circumstances, rather than a one-size-fits-all approach.',
                'Continuous Support: Many counselors provide ongoing support and adjustments to career plans as needed.'
            ]
        },
        {
            id: 12,
            title: 'Enhanced Employability',
            points: [
                'Resume and Interview Preparation: Counselors help with practical aspects such as resume building, cover letter writing, and interview preparation.',
                'Professional Development: They encourage continuous learning and development, enhancing long-term employability.'
            ]
        }
    ];

    const careerList = [
        {
            title: "Comprehensive Analysis",
            subtittle: "Our career counseling services involve a thorough analysis of DMIT reports to understand your strengths and potential."

        },
        {
            title: "One-on-One Counseling",
            subtittle: "Personalized counseling sessions with our experts help you make informed decisions about your education and career."

        },
        {
            title: "Comprehensive ",
            subtittle: " We provide guidance on education and career choices that align with your unique strengths and interests, ensuring a fulfilling career path."

        },
    ]


    const careerCounselingTools = [
        {
            Heading: 'Assessment Tools',
            points: [
                {
                    title: 'Personality Tests',
                    subtittle: "Instruments like the Myers-Briggs Type Indicator (MBTI) or the Big Five Personality Traits help understand an individual’s personality."
                },
                {
                    title: "Aptitude Tests",
                    subtittle: "Tests such as the Differential Aptitude Tests (DAT) measure specific abilities and skills."
                },
                {
                    title: "Interest Inventories",
                    subtittle: "Tools like the Strong Interest Inventory or the Holland Code (RIASEC) help identify career interests and preferences."
                },
                {
                    title: "Values Assessments",
                    subtittle: "Instruments that assess work values and motivations, such as the Work Values Inventory."
                }
            ]
        },
        {
            Heading: 'Career Information Systems',
            points: [
                {
                    title: 'Online Databases',
                    subtittle: "Platforms like O*NET, the Occupational Outlook Handbook, and CareerOneStop provide detailed information about various occupations, including job descriptions, required skills, salary data, and employment projections."
                },
                {
                    title: 'Career Exploration Software',
                    subtittle: "Programs like Kuder Navigator and Career Cruising offer interactive career exploration tools and resources."
                }
            ]
        },
        {
            Heading: 'Educational Planning Tools',
            points: [
                {
                    title: 'College and University Databases',
                    subtittle: "Resources that provide information on educational institutions, programs, and admission requirements."
                },
                {
                    title: 'Scholarship Search Engines',
                    subtittle: "Tools for finding scholarships, grants, and financial aid opportunities."
                }
            ]
        },
        {
            Heading: 'Goal Setting and Planning Tools',
            points: [
                {
                    title: 'Career Planning Worksheets',
                    subtittle: "Templates for setting career goals, action plans, and timelines."
                },
                {
                    title: 'SMART Goals Framework',
                    subtittle: "Tools to help clients set Specific, Measurable, Achievable, Relevant, and Time-bound goals."
                }
            ]
        },
        {
            Heading: 'Job Search Resources',
            points: [
                {
                    title: 'Resume Builders',
                    subtittle: "Software and templates for creating professional resumes and cover letters."
                },
                {
                    title: 'Interview Preparation Guides',
                    subtittle: "Resources for preparing for job interviews, including common questions and effective responses."
                },
                {
                    title: 'Networking Tools',
                    subtittle: "Platforms like LinkedIn for building professional networks and finding job opportunities."
                }
            ]
        },
        {
            Heading: 'Career Counseling Techniques',
            points: [
                {
                    title: 'One-on-One Counseling',
                    subtittle: "Personalized sessions to discuss career goals, challenges, and strategies."
                },
                {
                    title: 'Group Workshops',
                    subtittle: "Sessions focused on topics such as resume writing, job search strategies, and interview skills."
                },
                {
                    title: 'Mentorship Programs',
                    subtittle: "Connecting clients with mentors in their desired field for guidance and support."
                }
            ]
        },
        {
            Heading: 'Psychological and Behavioral Tools',
            points: [
                {
                    title: 'Counseling Techniques',
                    subtittle: "Approaches like Cognitive Behavioral Therapy (CBT) to address career-related anxiety and decision-making."
                },
                {
                    title: 'Motivational Interviewing',
                    subtittle: "Techniques to help clients overcome ambivalence and set clear career goals."
                }
            ]
        },
        {
            Heading: 'Digital and Online Tools',
            points: [
                {
                    title: 'Career Counseling Apps',
                    subtittle: "Mobile applications that provide career advice, job search tools, and networking opportunities."
                },
                {
                    title: 'Virtual Counseling Platforms',
                    subtittle: "Tools like Zoom or Skype for conducting remote counseling sessions."
                }
            ]
        },
        {
            Heading: 'Resource Libraries',
            points: [
                {
                    title: 'Books and Publications',
                    subtittle: "Access to career counseling books, industry reports, and research publications."
                },
                {
                    title: 'Webinars and Online Courses',
                    subtittle: "Educational resources to stay updated on career counseling trends and techniques."
                }
            ]
        },
        {
            Heading: 'Tracking and Monitoring Tools',
            points: [
                {
                    title: 'Progress Tracking Systems',
                    subtittle: "Software for tracking client progress, follow-ups, and outcomes."
                }
            ]
        }
    ];





    return (
        <>
            <div className='my-10 lg:px-10 max-lg:px-5'>
            <motion.img src="./ca.png" alt="" className='w-full h-screen'
                           initial={{ x: -1000, }}
                           animate={{ x: 0 }}
                           transition={{
                               duration: 3,
       
                           }}
                />
                <motion.p className='text-4xl underline   font-extrabold text-black  text-center max-lg:text-3xl max-md:text-2xl'

                    initial={{ x: -1000 }}
                    animate={{ x: [1000, 0] }}
                    transition={{
                        duration: 3,

                    }}
                >
                    CAREER COUNSELLING</motion.p>
                <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 '>

                    {careerList.map((career, i) => (
                        <motion.div className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                            initial={{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50 }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}

                            transition={{ duration: 1, delay: i * 0.3 }}
                        >

                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl">	{career.title} </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-300 text-[18px]">{career.subtittle}</p>
                        </motion.div>

                    ))}

                </div>

                <motion.p className='text-4xl underline   font-extrabold text-black  text-center max-lg:text-3xl max-md:text-2xl mt-10'
                    initial={{ x: -1000, }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 3,

                    }}
                >
                    IMPORTANCE OF  CAREER COUNSELLING</motion.p>

                <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1  mt-5'>
                    {careerCounselingImportance.map((career, i) => (
                        <motion.div className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                            initial={{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50 }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}

                            transition={{ duration: 1, delay: i * 0.3 }}
                        >

                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl">	{career.title} </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-300 text-[18px]">{career.points}</p>
                        </motion.div>
                    ))}
                </div>

                <p className='text-4xl underline   font-extrabold text-black  text-center max-lg:text-3xl max-md:text-2xl mt-10'>
                    TOOLS REQUIRED FOR CAREER COUNSELLING</p>


                <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1  mt-5'>
                    {careerCounselingTools.map((career, i) => (
                        <motion.div
                            key={i}
                            className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                            initial={{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50 }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 1, delay: i * 0.3 }}
                        >
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl">
                                {career.Heading}
                            </h5>
                            <div className="font-normal text-gray-700 dark:text-gray-300 text-[18px]">
                                {career.points.map((points, index) => (
                                    <div key={index} className="mb-4">
                                        <h6 className="font-bold text-2xl text-gray-900 dark:text-white mt-4 max-lg:text-[20px]">{points.title}</h6>
                                        <p className='text-[18px] font-normal mt-2'>{points.subtittle}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>


        </>
    )
}

export default CarrerCounselling