
import ResumeImg from '../assets/resume.jpg'
export default function Resume(){
    return <section className='flex flex-col md:flex-row bg-secondary' id='resume'>
        <div className='py-5 md:w-1/2 flex justify-end'>
            <img className='w-[500px] h-[400px] px-10' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center font-hero-font'>
            <h1 className='text-4xl text-white text-bold border-b-4 border-[#2B2D77] w-[160px] mb-10 md:text-center'>Resume</h1>
            <p className='text-justify px-5 pb-5 text-white'>You can view my Resume and <a className=' hover:underline text-slate-400' href='/DhivakarV-Resume.pdf' target='_blank'>Download</a></p>
            </div>
        </div>
    </section>
} 