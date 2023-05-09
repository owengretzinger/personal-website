import Markdown from 'markdown-to-jsx';
import ReactMarkdown from 'react-markdown'
import React, { useState, useEffect } from 'react';
import Nav from "../../components/nav";
import mdFile from 'raw-loader!./articles/a-mission-to-spread-love.md';
import { getArticlesData } from '../../lib/articles';

import matter from 'gray-matter';

import Head from 'next/head'
import Image from 'next/image'
import pfp from '../../public/images/pfp.jpeg'


import { BsList, BsInstagram, BsTag, BsX } from 'react-icons/bs'
import { FiMail, FiGithub } from 'react-icons/fi'
import { FaLinkedinIn, FaItchIo } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { FiExternalLink, FiAward } from 'react-icons/fi'
import { MdOutlinePhoto } from 'react-icons/md'

// import { Nav } from '../nav'
import { NavTest } from '../navTest'
import { InferGetStaticPropsType } from 'next';

// import React, { useRef } from 'react';


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
      className="whitespace-nowrap relative z-20 text-orange text-decoration: none; hover:text-orange 
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

const SectionHeader = (title: string, id: string) => {
  return (
    <div className="relative flex py-5 items-center mt-20" id={id}>
      <div className="flex-grow border border-grey"></div>
      <span className="flex-shrink mx-4 text-black text-4xl">{title}</span>
      <div className="flex-grow border border-grey"></div>
    </div>
  )
}


export default function Website({ articleData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="text-black font-noto selection:bg-orange/20">
      <Head>
        <title>owengretzinger.com</title>
        <meta name="description" content="Owen Gretzinger's Personal Website" />
        <link rel="icon" href="/personal-website-icon-blue.ico" />
      </Head>

      <div className="w-full h-full bg-white fixed -z-20"></div>

      <Nav />

      <main className="px-5 lg:px-20 xl:px-40">
        <section className='min-h-screen w-full flex items-center' id="home">
          <Wave1 />
          <div className="w-full flex flex-col lg:flex-row justify-between mt-32 lg:mt-0">
            <div className="lg:w-7/12 max-w-[650px] space-y-6 self-center">
              <h2 className="text-xl xl:text-2xl">Hi, my name is</h2>
              <h1 className="text-4xl xl:text-5xl">Owen Gretzinger.</h1>
              <h2 className="text-xl xl:text-2xl">I’m a software developer on a mission 
                to {TextLink("spread love", "/articles/a-mission-to-spread-love")}, one line of code at a time.
                My priority is producing excellent work while communicating with precision and clarity.</h2>
              {SocialButtons()}
            </div>
            <div className="flex-1 self-center p-10 lg:py-0">
              <Image src={pfp} alt="Picture of me" className="w-full max-w-[334px] rounded-xl shadow-2xl mx-auto" priority={true} />
            </div>
          </div>
        </section>

        <section>
          {SectionHeader("About Me", "About")}
          <div className="flex flex-col space-y-10 my-5 lg:space-y-20 lg:my-10">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
              <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                <h2 className="text-2xl pb-4">Education:</h2>
                <p className="text-base pb-6 lg:pb-0">
                  I take computer science at McMaster University, where I’m a Year Representative for the Computer Science Society.
                  More information can be found on my {TextLink("resume", "/")}!</p>
              </div>
              <div className="basis-1/2 w-full max-w-[500px] aspect-[5/2.22] outline outline-[3px] outline-black rounded-[20px] overflow-hidden lg:ml-5 bg-white flex drop-shadow-xl">
                <div className="basis-[40%] lg:basis-[30%] min-[1100px]:basis-[40%] border-r-[3px] border-black flex justify-center items-center bg-[#69143B]">
                  <Image src={require("../../public/images/mcmaster-logo.png")} alt="McMaster University Logo"
                    className="w-3/4" />
                </div>
                <div className="flex flex-col justify-between basis-[60%] lg:basis-[70%] min-[1100px]:basis-[60%] ml-1 my-1">
                  <div className="flex flex-col">
                    <h3 className="text-lg min-[475px]:text-2xl">McMaster University</h3>
                    <p className="text-xs min-[475px]:text-base text-grey">Hamilton, ON</p>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-base min-[475px]:text-lg">Computer Science Co-op</h4>
                    <p className="text-xs min-[475px]:text-base text-grey">B.A.Sc.</p>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-base min-[475px]:text-lg">Level II</h4>
                    <p className="text-xs min-[475px]:text-base text-grey">April 2025 Expected Graduation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse justify-center items-center lg:justify-between">
              <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                <h2 className="text-2xl pb-4 lg:text-right">Experience:</h2>
                <p className="text-base pb-6 lg:pb- lg:text-right">
                  I’m currently doing a co-op at {TextLink("Arctic Wolf", "https://arcticwolf.com/")}, where I work on front-end stuff using React.
                  I'm thankful for this opportunity to work at a {TextLink("top rated workplace", "https://arcticwolf.com/resources/press-releases/fortune-and-great-place-to-work-rank-arctic-wolf-as-top-10-2022-best-medium-workplaces/")}! #jointhepack</p>
              </div>
              <div className="basis-1/2 w-full max-w-[500px] aspect-[5/2.22] outline outline-[3px] outline-black rounded-[20px] lg:mr-5 overflow-hidden drop-shadow-xl">
                <Image src={require("../../public/images/arctic-wolf.png")} alt="Arctic Wolf Image"
                       className="rounded-[20px]" />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
              <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                <h2 className="text-2xl pb-4">Personal:</h2>
                <p className="text-base pb-6 lg:pb-0">
                  When I’m not at school or work, I can be found reading, volunteering with youth, playing the drums,
                  or coding projects of my own!</p>
              </div>
              <div className="relative basis-1/2 w-full max-w-[500px] aspect-[5/2.22] lg:ml-5 drop-shadow-xl">
                <Image src={require("../../public/images/personal-3.png")} alt=""
                  className="absolute right-0 top-0 h-5/6 w-fit rounded-[20px] outline outline-[3px] outline-black" />
                <div className="absolute top-[8.333%] w-full h-5/6 flex justify-center">
                  <Image src={require("../../public/images/personal-2.png")} alt=""
                    className="w-fit rounded-[20px] outline outline-[3px] outline-black" />
                </div>
                <Image src={require("../../public/images/personal-1.png")} alt=""
                  className="absolute left-0 bottom-0 h-5/6 w-fit rounded-[20px] outline outline-[3px] outline-black" />
              </div>
            </div>
          </div>
        </section>

        <section>
          {SectionHeader("Projects", "Projects")}
          <Projects />
        </section>

        <section>
          {SectionHeader("Articles", "Articles")}
          <ul className="flex flex-col text-center space-y-4">
            {
              articleData.map((article) => {
                return (
                  <li key={article.id}>
                    <h2 className="text-2xl">
                      {TextLink(article.title, `/articles/${article.id}`)}
                    </h2>
                    <h3 className="text-sm text-grey">{article.subtitle}</h3>
                  </li>
                )
              })
            }
          </ul>
        </section>


        <div className="h-screen flex flex-col justify-between">
          <section className="h-full flex flex-col justify-center">
            {SectionHeader("Let's Connect", "Contact")}
            <div className="flex flex-col pt-12 space-y-16 text-center items-center">
              <div>
                <p className="text-grey">
                  Thank you for checking out my website!<br /><br />
                  Let me know if you have any questions or suggestions,<br />
                  and feel free to contact me for any reason.
                </p>
              </div>
              <div className="min-w-[368px]">
                {SocialButtons()}
                </div>
            </div>
          </section>
          <footer className="text-grey text-center my-10">Designed & Built by Owen Gretzinger</footer>
        </div>
      </main>



    </div>
  )
}


function Projects() {
  const projectInfo = [
    { "id": "personal-website",
      "title": "Personal Website",
      "subtitle": "Personal Project",
      "description":
        <p>
          Glad you’re here! {TextLink("Let me know", "/contact")} if anything isn’t working properly.
        </p>,
      "tags": ["REACT", "TAILWIND", "FIGMA"],
      "links": {
        "github": "https://github.com/owengretzinger/personal-website",
      }
    },
    { "id": "education-data-for-change",
      "title": "Education Data for Change",
      "subtitle": "Hackathon & Personal Project",
      "description":
        <p>
          Search for public schools in Ontario to view their EQAO and income data.
          Originally created for {TextLink("DeltaHacks IX", "/")} (2023), then improved in the following week.
        </p>,
      "tags": ["HTML", "SQL", "JAVASCRIPT"],
      "links": {
        "open": "https://owengretzinger.github.io/education-data-for-change/",
        "photos": "https://google.com",
        "github": "https://github.com/owengretzinger/education-data-for-change",
      }
    },
    { "id": "triangle-ball",
      "title": "Triangle Ball",
      "subtitle": "Personal Project",
      "description":
        <p>
          I learned how to code by creating this game over the span of years.
          Features highly effective bots that were implemented by applying university level calculus.
          I also created all the art.
        </p>,
      "tags": ["C#", "Unity"],
      "links": {
        "open": "https://owengretzinger.itch.io/triangle-ball",
        "photos": "https://google.com",
        "github": "https://github.com/owengretzinger/triangle-ball",
      }
    },
    { "id": "server-insights",
      "title": "Server Insights",
      "subtitle": "Hackathon & Personal Project",
      "description":
        <p>
          Discord bot that won my high school’s hackathon (2021), then was improved in the following weeks. 
          Analyzes messages sent in a discord server and creates graphs.
        </p>,
      "tags": ["PYTHON"],
      "links": {
        "photos": "https://google.com",
        "github": "https://github.com/owengretzinger/server-insights",
        "award": "https://devpost.com/software/server-insights",
      }
    },
    { "id": "tempestuous-turrets",
      "title": "Tempestuous Turrets",
      "subtitle": "Hackathon Project",
      "description":
        <p>
          Game created in 32 hours for {TextLink("Hack the North", "https://hackthenorth.com")} (2022). 
          Clicking the card links to play it in the web, 
          but it runs more smoothly if you {TextLink("download it here", "https://owengretzinger.itch.io/tempestuous-turrets")}.
        </p>,
      "tags": ["C#", "UNITY"],
      "links": {
        "open": "https://owengretzinger.itch.io/tempestuous-turrets",
        "photos": "https://google.com",
        "github": "https://github.com/owengretzinger/tempestuous-turrets",
        "itch": "https://owengretzinger.itch.io/tempestuous-turrets",
      }
    },
    { "id": "binary-0101",
      "title": "Binary 0101",
      "subtitle": "School Project",
      "description":
        <p>
          Web app that teaches the basics of binary, targeted towards high school students. 
          Created while following the design thinking process for a software design class.
        </p>,
      "tags": ["ELM", "DESIGN THINKING"],
      "links": {
        "open": "https://cs1xd3.online/ShowModulePublish?modulePublishId=0a6330dc-6e05-447c-820f-293aca08929a&fullscreen=true",
        "photos": "https://google.com",
        "github": "https://github.com/owengretzinger/binary-0101",
      }
    },
  ]
  const nameToIcon = {"open": FiExternalLink, "photos": MdOutlinePhoto, "github": FiGithub, "award": FiAward, "itch": FaItchIo}
  const [cardHovered, setCardHovered] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center my-5">
      {projectInfo.map((project, i) =>
        <div key={project.id} 
             className={`relative w-full max-w-[500px] lg:aspect-[5/2.22] rounded-[20px] overflow-hidden outline outline-[3px] outline-black bg-white flex flex-col lg:flex-row drop-shadow-[0_4px_3px_rgb(0,0,0,0.5)]
                         hover:-translate-y-2 hover:drop-shadow-[0_12px_3px_rgb(0,0,0,0.5)] transition duration-300 ease-out
                         ${i % 2 == 0 ? "lg:justify-self-end" : "lg:justify-self-start"}`}>
          <a href={"open" in project.links ? project.links["open"] : project.links["github"]} target="_blank"
            onMouseOver={() => setCardHovered(project.id)} onMouseLeave={() => setCardHovered("")}
            className="absolute w-full h-full bg-white opacity-0 z-10"></a>
          <div className="lg:basis-[30%] min-[1100px]:basis-[40%] aspect-[3/2] lg:aspect-auto relative border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black flex justify-center items-center">
            <Image src={require(`../../public/images/projects-images/${project.id}/${project.id}-thumbnail.png`)} alt=""
              className="absolute w-full h-full lg:rounded-tr-none lg:rounded-bl-[20px] object-cover" />
            <Image src={require(`../../public/images/projects-images/${project.id}/${project.id}-icon.png`)} alt=""
              className="absolute w-5/12 lg:w-1/2 aspect-square rounded-full border-[3px] border-black" />
          </div>
          <div className="flex flex-col lg:basis-[70%] min-[1100px]:basis-[60%] ml-1 my-1">
            <div className="flex">
              <div className="basis-[91%] flex flex-col">
                <h2 className="text-md">
                  <a className={`whitespace-nowrap relative  text-decoration: none; ${cardHovered == project.id ? "text-orange" : "text-black"} 
                                before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                                before:bottom-0 before:left-0 before:bg-orange before:origin-top-left 
                                before:transition before:duration-300 before:ease-in-out ${cardHovered == project.id ? "before:scale-x-100" : "before:scale-x-0"}
                                transition duration-300`}>
                    {project.title}
                  </a>
                </h2>
                <h3 className="font-notothin text-sm text-grey -mt-1">{project.subtitle}</h3>
                <div className="font-notothin text-sm my-2 leading-[18px]">
                  {project.description}
                </div>
              </div>
              <div className="basis-[9%] flex flex-col items-end gap-2 p-2 pl-1">
                {Object.keys(project.links).map((link) =>
                  <a key={link} href={project.links[link as keyof typeof project.links]} target="_blank" className="z-20">
                    {nameToIcon[link as keyof typeof nameToIcon]({ className: "text-black w-6 h-6 hover:text-orange transition" })}
                  </a>
                )}
              </div>
            </div>

            <div className="flex mt-auto space-x-1">
              {project.tags.map((tag) =>
                <div key={tag} className="flex rounded-full border-2 border-blue items-center">
                  {BsTag({ className: "text-blue stroke-[0.5px] w-5 aspect-square pl-1" })}
                  <p className="font-notomd text-xs text-blue py-0.5 pr-1.5">{tag}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




export async function getStaticProps() {
  const articleData = getArticlesData();
  return {
    props: {
      articleData
    },
  };
}


// function useScrollDirection() {
//   const [scrollDirection, setScrollDirection] = useState("up");


//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const updateScrollDirection = () => {
//       const scrollY = window.scrollY;
//       const direction = scrollY > lastScrollY ? "down" : "up";

//       const atTopOfPage = scrollY < 50;
//       if (atTopOfPage) {
//         setScrollDirection("up");
//       }
//       else if (direction !== scrollDirection && (Math.abs(scrollY - lastScrollY) > 1)) {
//         setScrollDirection(direction);
//       }
//       lastScrollY = scrollY > 0 ? scrollY : 0;
//     };
//     window.addEventListener("scroll", updateScrollDirection); // add event listener
//     return () => {
//       window.removeEventListener("scroll", updateScrollDirection); // clean up
//     }
//   }, [scrollDirection]);

//   return scrollDirection;
// };

// function Nav() {
//   const scrollDirection = useScrollDirection();

//   const handleClickScroll = (section: string) => {
//     const yOffset = -60;
//     const element = document.getElementById(section);
//     if (element) {
//       const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   };

//   const navButtons = ["About", "Projects", "Articles", "Contact"]

//   const [mobileNavOpen, setMobileNavOpen] = useState(false);

//   const toggleMobileNav = () => {
//     setMobileNavOpen(!mobileNavOpen);
//     document.body.style.overflow = mobileNavOpen ? "visible" : "hidden";
//   }

//   return (
//     <>
//       <div>
//       <nav className={`fixed w-full px-10 py-2 z-30 bg-white transition duration-500 ${scrollDirection === "up" ? "translate-y-0" : "-translate-y-20"}`}>
//         <div className="flex h-16 items-center justify-between">
//           <button className="flex z-[100]" onClick={() => handleClickScroll("home")}>
//             <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="35" cy="35" r="31" strokeWidth="7" className='stroke-orange' />
//               <circle cx="35" cy="35" r="28" strokeWidth="7" className='stroke-black' />
//               <circle cx="35" cy="35" r="12.9231" strokeWidth="7" className='stroke-black' />
//             </svg>
//           </button>
//           <button className="lg:hidden" onClick={toggleMobileNav}>
//             <BsList className="stroke-black stroke-1" size={50} />
//           </button>
//           <ul className="hidden lg:flex gap-12">
//             {
//               navButtons.map((text, index) => {
//                 return (
//                   <li key={text} >
//                     <button onClick={() => handleClickScroll(text)} className="group flex">
//                       <p className="text-orange">{index + 1}.&nbsp;</p>
//                       <p className="group-hover:text-orange transition">{text}</p>
//                     </button>
//                   </li>
//                 )
//               })
//             }
//             <li key={"Resume"} >{OutlineButton("Resume", "https://google.com")}</li>
//           </ul>
//         </div>
//         </nav>
//       </div>
//       <div className={`lg:hidden fixed z-50 w-screen h-screen ${mobileNavOpen ? "backdrop-blur-sm pointer-events-auto" : "backdrop-blur-none pointer-events-none"} transition-all duration-500`}>
//         <button className={`fixed h-screen w-screen`}
//           onClick={toggleMobileNav}>
//         </button>
//         <ul className={`fixed right-0 top-0 w-[200px] max-w-[75%] ${mobileNavOpen ? "translate-x-0" : "translate-x-full"} h-full 
//                         flex flex-col justify-center items-center text-center bg-white gap-12 transition-all duration-500`}>
//           <button className="fixed top-0 right-0 mr-10 mt-2" onClick={toggleMobileNav}>
//             <BsX className="stroke-black stroke-1" size={60} />
//           </button>
//           {
//             navButtons.map((text, index) => {
//               return (
//                 <li key={text} >
//                   <button onClick={() => {handleClickScroll(text);toggleMobileNav()}} className="group flex">
//                     <p className="text-orange">{index + 1}.&nbsp;</p>
//                     <p className="group-hover:text-orange transition">{text}</p>
//                   </button>
//                 </li>
//               )
//             })
//           }
//           <li key={"Resume"} >{OutlineButton("Resume", "https://google.com")}</li>
//         </ul>
//       </div>
//     </>
//   );
// };