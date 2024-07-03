import workExperience from '../assets/Black Flatlay Photo Motivational Finance Quote Facebook Cover.png'
export default function Work(){
    return <section className='flex flex-col md:flex-row bg-secondary' id='about'>
        <div className='py-5 md:w-1/2'>
          
            <div className='flex flex-col justify-center font-hero-font'>
            <h1 className='text-4xl text-white text-bold border-b-4 border-[white] w-[160px] mb-10 md:text-center ml-2'>Work Experience</h1>
            <p className='text-justify px-5 pb-5 text-white'>At UniQin.ai, I worked as a Software Developer from July 2023 to June 2024, where I played a key role in designing, developing, and maintaining web applications with a focus on frontend technologies. I successfully developed an E-commerce website utilizing Vue.js and the Quasar framework, and a comprehensive sign-up flow featuring sign-in, sign-up, password reset, WhatsApp integration, and more. Additionally, I leveraged React.js for various projects, enhancing my skills in state management, component reusability, and user authentication. My work ensured efficient, scalable, and user-centric solutions, contributing to the company’s product offerings and overall success.</p>
            </div>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <img src={workExperience}/>
        </div>
    </section>
} 