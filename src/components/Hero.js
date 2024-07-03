import heroimg from '../assets/hero.png'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
export default function Hero(){
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center ' id='hero'>
        <div className='w-1/2 flex flex-col'>  <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im<span className='text-black' > Dhivakar </span>
        <p className='text-2xl'>Software Developer</p>
        </h1>
        <div className='flex py-10 '>
            <a href='https://twitter.com/DhivakarV_1312' target='_blank' className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
            <a href='https://www.instagram.com/dhivakar_45/' target='_blank' className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
            <a href='https://www.linkedin.com/in/dhivakardhiva/' target='_blank' className='hover:text-white'><AiOutlineLinkedin size={40} /></a>
        </div>
        
        
        </div>
      
        <img className='md:w-1/3' src={heroimg} alt='heroimg' />
    </section>
}