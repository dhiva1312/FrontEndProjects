import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logoimg from '../assets/DHIVAKAR.png';

export default function Header(){
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const imgStyle = {
        height: '40px', // Adjust this value to the desired height
        width: 'auto', // Adjust this value to maintain aspect ratio or set a fixed width
        transition: 'all 0.3s ease', // Add transition for smooth effect
        // Conditionally change size on hover
        transform: isHovered ? 'scale(1.4)' : 'scale(1)' // Increase size on hover
    };
    return <header className="flex justify-between px-5 bg-primary py-2">
        <img src={logoimg} style={imgStyle} alt='logo' onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
                onMouseLeave={() => setIsHovered(false)}  /> 
        <nav className="hidden md:block">
        <ul className="flex text-black">
        <li><a href='/'>Home</a></li>
            <li><a href='/#about'>About</a></li>
            <li><a href='/#project'>Projects</a></li>
            <li><a href='/#resume'>Resume</a></li>
            <li><a href='/#contact'>Contact</a></li>
        </ul>
        </nav>
        { toggleMenu && <nav className="block md:hidden ">
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href='/'>Home</a></li>
            <li><a href='/#about'>About</a></li>
            <li><a href='/#project'>Projects</a></li>
            <li><a href='/#resume'>Resume</a></li>
            <li><a href='/#contact'>Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'>
        
        <Bars3Icon className="text-white h-5"/></button>
    </header>
}