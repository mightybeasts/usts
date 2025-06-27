import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { styles} from '../style'
import {navLinks} from '../constants'
import {logo,menu,close} from '../assets'

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-300 ease-in-out ${scrolled ? "bg-black" : "bg-transparent"}`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto ">
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0)
          }}
        >
          
          <p className="text-white text-[32px] font-bold cursor-pointer flex   hover:text-zinc-400 cursor-pointer">USTS
          &nbsp; <span className='sm:block hidden'>
            </span> </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav)=>(
            <li key={nav.id}
              className={`${active === nav.title ? "text-zinc-400" : "text-white"}  
              hover:text-zinc-400  text-[18px] font-medium cursor-pointer `}
                onClick={()=>setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
            <div className="sm:hidden flex flex1-1 justify-end items-center">
              <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-20px object-contain cursor-pointer'
              onClick={()=> setToggle(!toggle)}
              />
              <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((nav)=>(
            <li key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-slate-600"}
                font-poppins font-medium cursor-pointer text-[16px] `}
                onClick={()=>{
                  setToggle(!toggle)
                  setActive(nav.title)}}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
              </div>
            </div>

      </div>
    </nav>
  )
}

export default Navbar