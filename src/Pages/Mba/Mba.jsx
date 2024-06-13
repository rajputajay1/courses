import React from 'react'
import Commen from '../../Component/Commen/Commen'
import { motion } from "framer-motion"


const Mba = () => {

    const items = [
        {
            title: 'Brain Stimulation Techniques',
            description: 'These activities often include various brain training exercises designed to activate and enhance the functions of the midbrain. This can include puzzles, memory games, and tasks that require concentration and focus.'
        },
        {
            title: 'Sensory Training',
            description: 'Activities that engage the senses (sight, sound, touch, etc.) to stimulate the midbrain. Examples include identifying objects by touch or listening to and distinguishing between different sounds.'
        },
        {
            title: 'Meditation and Mindfulness',
            description: 'Practices like meditation and mindfulness can help in regulating arousal and improving focus and attention, thereby stimulating midbrain activity.'
        },
        {
            title: 'Physical Exercises',
            description: 'Certain physical activities and exercises that require coordination and motor skills can activate the midbrain. This includes activities like dancing, playing musical instruments, or sports that require hand-eye coordination.'
        },
        {
            title: 'Learning and Cognitive Tasks',
            description: 'Engaging in learning new skills, languages, or subjects can stimulate the midbrain. Cognitive tasks that involve problem-solving, critical thinking, and creativity are also beneficial.'
        },
        {
            title: 'Visual and Auditory Exercises',
            description: 'Tasks that require the use of vision and hearing, such as reading, watching educational videos, and listening to music or podcasts, can help stimulate the midbrain.'
        },
        {
            title: 'Balanced Lifestyle',
            description: 'Ensuring adequate sleep, nutrition, and stress management contributes to overall brain health, including the midbrain. Proper sleep, in particular, is crucial for the regulation of many midbrain functions.'
        },
        {
            title: 'Interactive and Social Activities',
            description: 'Participating in social interactions and group activities can also stimulate the midbrain, as these activities often require communication, empathy, and emotional regulation.'
        }
    ];
    return (
        <>
            <div className='my-10 lg:px-10 max-lg:px-5'>

                {/* <p className='text-6xl font-extrabold text-gray-800 text-center max-lg:text-3xl max-md:text-2xl'>
                    MID BRAIN ACTIVITIES  (MBA)</p> */}
                
                <img src="./brain.png" alt=""  className='w-full h-screen' />
                <p className='font-normal text-gray-700 dark:text-gray-400 text-[18px] pt-5'>Mid Brain Activities typically refer to techniques aimed at stimulating and enhancing the functions of the midbrain, which is responsible for various essential functions, including vision, hearing, motor control, sleep/wake regulation, arousal, and temperature regulation. Here are some key points often associated with Mid Brain Activities:

                </p>
                <div
                    className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'
                   
                >
                    {items.map((item, i) => (
                      <motion.div key={i} className="block max-w-md p-3 mt-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        initial={{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50 }}
                        animate={{ opacity: 1, translateX: 0, translateY: 0 }}

                        transition={{ duration: 1, delay: i * 0.3 }}
                        >
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-lg:text-2xl">{item.title}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
                <p className='font-bold text-gray-700 dark:text-gray-400 text-[18px] mt-10 text-center'>These activities aim to enhance brain function, improve cognitive abilities, and support overall mental and physical well-being.</p>
            </div>

        </>
    )
}

export default Mba