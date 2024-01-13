import about from '../assets/undraw_posting_photo.svg';
import {motion} from "framer-motion"
import {fadeIn} from "../varitants"

const About = () => {
    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id='about'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <motion.div 
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once:false, amount: 0.7 }}
                className='md:w-1/2'>
                    <img src={about} alt="" />
                </motion.div>
                <motion.div 
                variants={fadeIn("down",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once:false, amount: 0.7 }}
                className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-secondary'>for many years.</span></h2>
                    <p className='text-tartiary text-lg mg-7'>A good example of a paragraph contains a topic setence, deails and a conclusion. There are many different kinds 
                        of animals that live in China.</p   >
                    <button className='btnPrimary'>Get Started</button>
                </motion.div>
            </div>

            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8 pt-5 space-y-4'>
                <motion.div 
                variants={fadeIn("left",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once:false, amount: 0.7 }}
                className='md:w-1/2'>
                    <img src={about} alt="" />
                    {/* <video class="w-full aspect-video " src="https://www.youtube.com/watch?v=kdQLozd_1RA&list=RDkdQLozd_1RA&start_radio=1"></video> */}
                </motion.div>
                <motion.div 
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once:false, amount: 0.7 }}
                className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-secondary'>for many years.</span></h2>
                    <p className='text-tartiary text-lg mg-7'>A good example of a paragraph contains a topic setence, deails and a conclusion. There are many different kinds 
                        of animals that live in China.</p>
                    <button className='btnPrimary'>Get Started</button>
                </motion.div>
            </div>
        </div>
    );
};

export default About;