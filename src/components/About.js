import AboutImg from '../assets/about.png'
export default function About(){
    return <section className='flex flex-col md:flex-row bg-primary' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center font-hero-font'>
            <h1 className='text-4xl text-black text-bold border-b-4 border-[#2B2D77] w-[160px] mb-10 md:text-center'>About Me</h1>
            <p className='text-justify px-5 pb-5 '>I am Dhivakar, a software developer with a strong focus on front-end development. While my proficiency in Python is at a basic level, I am dedicated to expanding my skills in both Python and backend development. Currently, my expertise lies in front-end technologies such as React, Vue, and JavaScript, where I specialize in crafting visually engaging and responsive websites. I am committed to continuous learning and growth, with aspirations to deepen my understanding of Python and backend technologies such as SQL for database management. My passion for software development drives me to stay updated with industry trends and best practices, ensuring that I deliver high-quality solutions that meet the evolving needs of clients and users.</p>
            </div>
        </div>
    </section>
} 