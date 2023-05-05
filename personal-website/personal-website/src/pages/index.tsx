import Head from 'next/head'
import Image from 'next/image'
import pfp from '../../public/pfp.jpeg'

import { BsList, BsInstagram } from 'react-icons/bs'
import { FiMail, FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { IconType } from 'react-icons'

// import { Nav } from '../nav'
import { NavTest } from '../navTest'

// import React, { useRef } from 'react';

import React, { useState, useEffect } from 'react';


function LogoButton() {
  return (
    <a href="/">
      <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="31" strokeWidth="7" className='stroke-orange' />
        <circle cx="35" cy="35" r="28" strokeWidth="7" className='stroke-black' />
        <circle cx="35" cy="35" r="12.9231" strokeWidth="7" className='stroke-black' />
      </svg>
    </a>
  )
}

function Wave1() {
  return (
    <div className="absolute left-0 right-0 top-0 -z-10">
      <svg viewBox="0 0 818 818" xmlns="http://www.w3.org/2000/svg" className={"fill-blue w-[818px] h-[818px] max-w-full max-h-[100vw]"}>
        <path d="M459.887 361.499C736.105 360.358 813.72 120.024 818 0H0V722.999C59.3526 723.379 149.808 650.223 172.636 564.605C195.464 478.987 299.616 362.162 459.887 361.499Z" />
      </svg>
    </div>
  )
}

function Wave1x() {
  return (
    <div className="absolute top-0 left-0">
      <svg width="818" height="723" viewBox="0 0 818 723" xmlns="http://www.w3.org/2000/svg" className="fill-blue">
        <path d="M459.887 361.499C736.105 360.358 813.72 120.024 818 0H0V722.999C59.3526 723.379 149.808 650.223 172.636 564.605C195.464 478.987 299.616 362.162 459.887 361.499Z" />
      </svg>
    </div>
  )
}

const NavButtons = (buttons: [string, string][]) => {
  return (
    <>
      {
        buttons.map((button, index) => {
          var text = button[0]
          var link = button[1]
          return (
            <li key={text} >
              <a href={link} className="group flex">
                <p className="text-orange">{index + 1}.&nbsp;</p>
                <p className="group-hover:text-orange transition">{text}</p>
              </a>
            </li>
          )
        })
      }</>
  )
}

const OutlineButton = (text: string, link: string) => {
  return (
    <a href={link} target="_blank"
      className='border-2 border-orange px-4 py-2 rounded-lg text-orange hover:bg-light-orange transition'>
      {text}
    </a>
  )
}

const TextLink = (text: string, link: string) => {
  return (
    <a href={link} target="_blank"
      className=" whitespace-nowrap relative text-orange text-decoration: none; hover:text-orange 
      before:content-['']
      before:absolute
      before:block
      before:w-full
      before:h-[2px]
      before:bottom-0
      before:left-0
      before:bg-orange
      before:scale-x-0
      before:origin-top-left
      before:transition 
      before:duration-300 
      before:ease-in-out 
      before:hover:scale-x-100">
      {text}
    </a>
  )
}

const SocialButton = (icon: IconType, link: string) => {
  return (
    <li key={link} className="w-14 h-14 rounded-full border-[3px] border-orange hover:bg-light-orange transition grid content-center">
      <a href={link} target="_blank" className="grid content-center">
        {icon({ className: "text-orange w-5/6 h-5/6 mx-auto my-auto" })}
      </a>
    </li>
  )
}

function SocialButtons() {
  return (
    <ul className="flex gap-12 justify-center">
      {SocialButton(FiMail, "mailto:owengretzinger@gmail.com/")}
      {SocialButton(FaLinkedinIn, "https://www.linkedin.com/in/owengretzinger")}
      {SocialButton(BsInstagram, "https://www.instagram.com/prowengramming")}
      {SocialButton(FiGithub, "https://github.com/owengretzinger")}
    </ul>
  )
}

const SectionHeader = (title: string) => {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border border-grey"></div>
      <span className="flex-shrink mx-4 text-black text-4xl">{title}</span>
      <div className="flex-grow border border-grey"></div>
    </div>
  )
}


export default function Website() {
  return (
    <div className="text-black font-noto">
      <Head>
        <title>owengretzinger.com</title>
        <meta name="description" content="Owen Gretzinger's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full bg-white fixed -z-20"></div>

      <Nav />

      <main className="px-5 lg:px-20 xl:px-40">
        <section className='min-h-screen w-full flex items-center'>
        <Wave1 />
          <div className="w-full flex flex-col lg:flex-row justify-between mt-32 lg:mt-0">
            <div className="lg:w-7/12 max-w-[650px] space-y-6 self-center">
              <h2 className="text-xl xl:text-2xl">Hi, my name is</h2>
              <h1 className="text-4xl xl:text-5xl">Owen Gretzinger.</h1>
              <h2 className="text-xl xl:text-2xl">I’m a software developer on a mission to {TextLink("spread love", "/")}, one line of code at a time.
                My priority is producing excellent work while communicating with precision and clarity.</h2>
              {SocialButtons()}
            </div>
            <div className="flex-1 self-center p-10 lg:py-0">
              <Image src={pfp} alt="Picture of me" className="w-full max-w-[334px] rounded-xl shadow-2xl mx-auto" priority={true} />
            </div>
          </div>
        </section>
        
        <section>
          {SectionHeader("About Me")}
          <div className="flex flex-col space-y-10 my-5 lg:space-y-20 lg:my-10">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
              <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                <h2 className="text-2xl pb-4">Education:</h2>
                <p className="text-base pb-6 lg:pb-0">
                  I take computer science at McMaster University, where I’m a Year Representative for the Computer Science Society.
                  More information can be found on my {TextLink("resume", "/")}!</p>
              </div>
              <div className="basis-1/2 w-full max-w-[500px] aspect-[5/2.22] border-[3px] border-black rounded-[20px] lg:ml-5">
              
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse justify-center items-center lg:justify-between">
              <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                <h2 className="text-2xl pb-4 lg:text-right">Experience:</h2>
                <p className="text-base pb-6 lg:pb- lg:text-right">
                  I’m currently doing a co-op at {TextLink("Arctic Wolf", "https://arcticwolf.com/")}, where I work on front-end stuff using React. 
                  I'm thankful for this opportunity to work at a {TextLink("top rated workplace", "https://arcticwolf.com/resources/press-releases/fortune-and-great-place-to-work-rank-arctic-wolf-as-top-10-2022-best-medium-workplaces/")}! #jointhepack</p>
              </div>
              <div className="basis-1/2 w-full max-w-[500px] aspect-[5/2.22] border-[3px] border-black rounded-[20px] lg:mr-5">
              
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
              <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                <h2 className="text-2xl pb-4">Personal:</h2>
                <p className="text-base pb-6 lg:pb-0">
                  When I’m not at school or work, I can be found reading, volunteering with youth, playing the drums, 
                  or coding projects of my own!</p>
              </div>
              <div className="basis-1/2 w-full max-w-[500px] aspect-[5/2.22] border-[3px] border-black rounded-[20px] lg:ml-5">
              
              </div>
            </div>
          </div>
        </section>

        <section>
          {SectionHeader("Projects")}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-[600px]:bg-sky-300 justify-items-center">
            <div className="w-full max-w-[500px] aspect-[5/2.22] rounded-[20px] outline outline-[3px] outline-black flex">
              <Image src={require("../../public/testprojectpic.png")} alt="website" className="basis-1/12 rounded-tl-[20px] rounded-bl-[20px] border-r-[3px] border-black" />
              
            </div>
          </div>
        </section>

        <section>
          {SectionHeader("Articles")}
          
        </section>

        <section>
          {SectionHeader("Contact")}
          
        </section>
      </main>


      
    </div>
  )
}


function Projects() {
  const info = [
    ["Personal Website"],
    ["Education Data for Change"],
    [],[],[],[],[],[],[],
  ]
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-[600px]:bg-sky-300 justify-items-center">
      {info.map((project, i) =>
        <div className={`w-full max-w-[500px] aspect-[5/2.22] border-[3px] border-black rounded-[20px]
        lg:${i % 2 == 0 ? "justify-self-end" : "justify-self-start"}`}>

        </div>
      )}
    </div>
  );
}






function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");
  

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      
      const atTopOfPage = scrollY < 50;
      if (atTopOfPage) {
          setScrollDirection("up");
      }
      else if (direction !== scrollDirection && (Math.abs(scrollY - lastScrollY) > 1)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

function Nav() {
  const scrollDirection = useScrollDirection();

  return (
      <div>
          <nav className={`fixed w-full px-10 py-2 z-10 bg-white transition duration-500 ${scrollDirection === "up" ? "translate-y-0" : "-translate-y-20"}`}>
          <div className="flex h-16 items-center justify-between">
              <LogoButton />
              <BsList className="lg:hidden stroke-black stroke-1" size={50} />
              <ul className="hidden lg:flex gap-12">
                  {NavButtons([["About", "/"], ["Projects", "/"], ["Articles", "/"], ["Contact", "/"]])}
                  <li key={"Resume"} >{OutlineButton("Resume", "https://google.com")}</li>
              </ul>
          </div>
      </nav>
      </div>
  );
};