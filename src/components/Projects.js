import WebsiteBlog from '../assets/signup-flow.png'
import Ecommerce from '../assets/ecommerce_websites.jpg';
import FoodEcommerce from '../assets/food-ecommerce.jpg'



export default function Projects() {
  return <section className="flex flex-col justify-center py-5 px-5 bg-primary text-black" id='project'>
    <div className="w-full">
      <div className='flex flex-col px-5'>
        <h1 className='text-4xl text-bold border-b-4 border-[#ccc] w-[160px] mb-10 font-hero-font'>PROJECTS</h1>
        <p className='py-5'>There are some of My Best Projects. I have Built these with React, Vue and Vanilla Javascript</p>
      </div>

    </div>
    <div className="w-full">
      <div className='flex flex-col md:flex-row px-5 gap-5'>
        <div className='relative'> <img className='h-[300px] w-[500px]' src={WebsiteBlog} />
          <div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100'>
            <p className='text-justify py-5 text-black font-semibold px-2'> I developed a comprehensive sign-up flow using Vue.js, JavaScript, CSS, and HTML. This project encompassed various features including sign-in, sign-up, password reset, WhatsApp integration, connecting sellers, email integration, inviting users, and managing both new and existing users. The goal was to create a smooth and secure user onboarding experience, enhancing user engagement and facilitating seamless interactions. 
              This project strengthened my expertise in frontend development and user authentication processes</p>
          </div>

        </div>
        <div  className='relative'> <img className='h-[300px] w-[500px]' src={Ecommerce} />
        <div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100'>
          <p className='text-justify py-5 text-black font-semibold px-2'>I developed an E-commerce website using Vue.js and the Quasar framework. This project involved designing and implementing a seamless shopping experience with features such as product listings, search functionality, user authentication, shopping cart, and payment integration. Leveraging Vue.js allowed for a modular and reactive application structure, while Quasar provided a powerful and flexible framework for building a responsive and performant user interface. This project at UniQin.ai enhanced my 
            ability to deliver comprehensive web solutions that meet both business and user needs.</p>
        </div>
        </div>
      <div  className='relative'><img className='h-[300px] w-[500px]' src={FoodEcommerce} />
        <div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100'>
          <p className='text-justify py-5 text-black font-semibold px-2'>This project involved creating a responsive and user-friendly interface for customers to 
            browse restaurants, select meals, place orders, and track delivery status.
             Utilizing React.js ensured efficient state management and component reusability, while Tailwind CSS facilitated rapid UI development with its utility-first approach. This experience strengthened my frontend development skills, particularly in building dynamic web applications that prioritize both functionality and aesthetic design.</p>
        </div></div>



    </div>
    </div>




    </section >
}