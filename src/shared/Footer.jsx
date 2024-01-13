import logo from '../assets/logo.png';
import {motion} from "framer-motion"
import {fadeIn} from "../varitants"

const Footer = () => {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
            <motion.div 
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once:false, amount: 0.7 }}
            className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 space-y-8'>
                    <a href="#" className='text-2xl font-semibold flex item-center space-x-3 text-primary'><img src={logo} alt=""className='w-10 inline-block items-center'/><span>XYZ</span></a>
                    <p className='md:w-1/2'>A simple paragraph is comprised of three major companents. The first sentence, which is often a declarative sentence, is called the topic sentence,</p>
                    <div>
                        <input type="email" name='email' id='email'  placeholder='Your email' className='bg-[#9a8af159] py-2 px-4 rounded-md focus:outline-none'/>
                        <input type="submit" value="Subcribe" className='px-4 py-2 bg-secondary rounded-md-ml-2 cursor-pointer hover:bg-white hocer:text-primary duration-300 transition-all' />
                    </div>
                </div>
                {/* Footer navigations */}
               <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='space-y-4 mt-5'>
                            <h4 className='text-xl'>Platform</h4>
                            <ul className='space-y-3'>
                                <a href="" className='block hover:text-gray-300'>Overview</a>
                                <a href="" className='block hover:text-gray-300'>Features</a>
                                <a href="" className='block hover:text-gray-300'>About</a>
                                <a href="" className='block hover:text-gray-300'>Pricing</a>
                            </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                            <h4 className='text-xl'>Help</h4>
                            <ul className='space-y-3'>
                                <a href="" className='block hover:text-gray-300'>Overview</a>
                                <a href="" className='block hover:text-gray-300'>Features</a>
                                <a href="" className='block hover:text-gray-300'>About</a>
                                <a href="" className='block hover:text-gray-300'>Pricing</a>
                            </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                            <h4 className='text-xl'>Contact</h4>
                            <ul className='space-y-3'>
                                <p className='hover:text-gray-300'>Overview</p>
                                <p className='hover:text-gray-300'>Features</p>
                                <p className='hover:text-gray-300'>About</p>
                                <p className='hover:text-gray-300'>Pricing</p>
                            </ul>
                    </div>
               </div>
            </motion.div>

            <hr />
            <motion.div 
             variants={fadeIn("left",0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once:false, amount: 0.7 }}
            className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p className='text-center'>Andika Saputra, S.Kom 2023. All rights reaserved.</p>
            </motion.div>
        </div>
    );
};

export default Footer;