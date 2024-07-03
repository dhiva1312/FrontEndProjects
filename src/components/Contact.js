
import ResumeImg from '../assets/resume.jpg'
export default function Contact(){
    const phoneNumber = '9042313322';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const emailAddress = 'dhivakarvasu2000@gmail.com';
  const emailLink = `mailto:${emailAddress}`;
    return <section className='flex flex-col md:flex-row bg-primary px-5 py-32 justify-center text-black' id='contact'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl text-black text-bold hover:border-b-2 hover:border-[black] w-[130px] mb-10 md:text-center'>Contact</h1>
            <p className='text-justify px-5 pb-5 '>If You want to discuss more in detail, Please Contact me!.</p>
            <p className='py-2'><span className='font-bold'>Email:</span><a href={emailLink} target="_blank" rel="noopener noreferrer">
          {emailAddress}
        </a></p>
            <p className='py-2'><span className='font-bold'>Phone:</span> <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          {phoneNumber}
        </a></p>
        </div>
    </section>
} 