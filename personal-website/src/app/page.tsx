import { Metadata } from 'next';
import HomePage from './home-page';
import { getArticlesData } from '../../lib/getArticlesData';



import Image from 'next/image'
import pfp from "../../public/images/pfp_standing_outdoors.png";
import macLogo from "../../public/images/mcmaster-logo.png";
import arcticWolf from "../../public/images/arctic-wolf.png";
import personal1 from "../../public/images/personal-1.png";
import personal2 from "../../public/images/personal-2.png";
import personal3 from "../../public/images/personal-3.png";


import { PaletteContext } from './palette-provider';
import { ScrollingDisabledContext } from './scrolling-disabled-provider';

import Nav from "../components/nav";
import TextLink from '../components/textLink';
import OutlineButton from '../components/outlineButton';
import SocialButtons from '../components/socialButtons';
import FadeInOnScroll from '@/components/fadeInOnScroll';
import ColourPaletteButton from '../components/colourPaletteButton';
import { Wave1, Wave2, Wave3, Wave4 } from '../components/waves';

import websiteSections from '../../lib/websiteSections';

import { BsTag } from 'react-icons/bs'
import Link from 'next/link';
import NavButton from '@/components/navButton';
import projectInfo, { NameToIcon } from '../../lib/projectInfo';

const resumeLink = "/resume.pdf";

export const metadata: Metadata = {

};

function SectionHeader({ ...props }: any) {
  return (
    <FadeInOnScroll>
      <div className="relative flex py-5 items-center mt-20" id={props.id.toLowerCase()}>
        <div className="flex-grow border border-grey"></div>
        <span className="flex-shrink mx-4 text-black text-4xl">{props.title}</span>
        <div className="flex-grow border border-grey"></div>
      </div>
    </FadeInOnScroll>
  )
}

export default async function Page() {
  const articleData = await getArticles();

  return (
    <>
      <Wave1 />
      <Nav>
        {websiteSections(false).map((text, index) => {
          return (
            <li key={text} >
              <FadeInOnScroll delay={index + 8} waitForLoad={true} noDelayOnMobile={true}>
                <NavButton text={text} number={index + 1} />
              </FadeInOnScroll>
            </li>
          )
        })}
        <FadeInOnScroll delay={12} waitForLoad={true} noDelayOnMobile={true}>
          <li key={"Resume"} >
            <OutlineButton text={"Resume"} href={resumeLink} />
          </li>
        </FadeInOnScroll>
        <FadeInOnScroll delay={13} waitForLoad={true} noDelayOnMobile={true}>
          {/* <li key="Colour Palette">{ColourPaletteButton(paletteIndex, setPaletteIndex)}</li> */}
        </FadeInOnScroll>
      </Nav>

      <main className="px-5 lg:px-20 xl:px-40 relative">
        <section className='min-h-screen w-full flex items-center' id="home">
          <div className="w-full flex flex-col lg:flex-row justify-between mt-32 lg:mt-0">
            <div className="lg:w-7/12 max-w-[650px] space-y-6 self-center">
              <FadeInOnScroll delay={5} waitForLoad={true}><h2 className="text-xl xl:text-2xl">Hi, my name is</h2></FadeInOnScroll>
              <FadeInOnScroll delay={7} waitForLoad={true}><h1 className="text-4xl xl:text-5xl">Owen Gretzinger.</h1></FadeInOnScroll>
              <FadeInOnScroll delay={9} waitForLoad={true}>
                <h2 className="text-xl xl:text-2xl">I’m a software developer on a mission
                  to {<TextLink text="spread love" href="/articles/a-mission-to-spread-love" newWindow="false" breakWords="false" />}, one line of code at a time.
                  My priority is producing excellent work while communicating with precision and clarity.</h2>
              </FadeInOnScroll>
              <FadeInOnScroll delay={11} waitForLoad={true}>
                <SocialButtons />
              </FadeInOnScroll>
            </div>
            <FadeInOnScroll delay={13} waitForLoad={true}>
              <div className={`flex-1 self-center p-10 lg:py-0`}>
                <Image src={pfp} alt="Me" priority placeholder='blur'
                  className={`w-full max-w-[334px] rounded-xl shadow-2xl mx-auto`} />
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        <Wave2 />

        <section>
          <SectionHeader title="About Me" id="About" />

          <div className="flex flex-col space-y-10 my-5 lg:space-y-20 lg:my-10">

            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between show-on-scroll">
              <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                <FadeInOnScroll delay={2}>
                  <h2 className="text-2xl pb-4">Education:</h2>
                </FadeInOnScroll>
                <FadeInOnScroll delay={3}>
                  <p className="text-base pb-6 lg:pb-0">
                    I take computer science at McMaster University, where I’m a Year Representative for the Computer Science Society.
                    More information can be found on my {<TextLink text="resume" href={resumeLink} />}!
                  </p>
                </FadeInOnScroll>
              </div>


              <FadeInOnScroll delay="calculate" className="basis-1/2 w-full max-w-[500px] aspect-[5/2.22] rounded-[20px] drop-shadow-xl lg:ml-5 bg-white">
                <div className="w-full h-full outline outline-[3px] outline-black rounded-[20px] overflow-hidden flex">
                  <div className="basis-[40%] lg:basis-[30%] min-[1100px]:basis-[40%] border-r-[3px] border-black flex justify-center items-center bg-[#69143B]">
                    <Image src={macLogo} alt="McMaster University Logo"
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
              </FadeInOnScroll>


            </div>



            <div className="flex flex-col lg:flex-row-reverse justify-center items-center lg:justify-between show-on-scroll">
              <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                <FadeInOnScroll delay={2}>
                  <h2 className="text-2xl pb-4 lg:text-right">Experience:</h2>
                </FadeInOnScroll>
                <FadeInOnScroll delay={3}>
                  <p className="text-base pb-6 lg:pb- lg:text-right">
                    I’m currently doing a co-op at {<TextLink text="Arctic Wolf" href="https://arcticwolf.com/" breakWords="false" />}, where I work on the security services triage team.
                    I'm thankful for this opportunity to work at a {<TextLink text="top rated workplace" href="https://arcticwolf.com/resources/press-releases/fortune-and-great-place-to-work-rank-arctic-wolf-as-top-10-2022-best-medium-workplaces" breakWords="false" />}! #jointhepack
                  </p>
                </FadeInOnScroll>
              </div>
              <FadeInOnScroll delay="calculate" className="basis-1/2 w-full max-w-[500px] aspect-[5/2.22] rounded-[20px] drop-shadow-2xl lg:mr-5 ">
                <div className="w-full h-full outline outline-[3px] outline-black rounded-[20px] overflow-hidden">
                  <Image src={arcticWolf} alt="Arctic Wolf 'I've joined the pack' Image"
                    className="" />
                </div>
              </FadeInOnScroll>
            </div>



            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between show-on-scroll">
              <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                <FadeInOnScroll delay={2}>
                  <h2 className="text-2xl pb-4">Personal:</h2>
                </FadeInOnScroll>
                <FadeInOnScroll delay={3}>
                  <p className="text-base pb-6 lg:pb-0">
                    When I’m not at school or work, I can be found reading, volunteering with youth, playing the drums,
                    or coding projects of my own!</p>
                </FadeInOnScroll>
              </div>


              <FadeInOnScroll className="relative basis-1/2 w-full max-w-[500px] aspect-[5/2.22] lg:ml-5 drop-shadow-xl">
                <div className="absolute w-full h-full flex justify-end items-start rounded-[20px] drop-shadow-xl">
                  <Image src={personal3} alt="Me playing the drums with a band"
                    className="w-fit h-[83.33%] rounded-[20px] outline outline-[3px] outline-black" />
                </div>
                <div className="absolute w-full h-full flex justify-center items-center rounded-[20px] drop-shadow-xl">
                  <Image src={personal2} alt="Me getting pied in the face by a youth"
                    className="w-fit h-[83.33%] rounded-[20px] outline outline-[3px] outline-black" />
                </div>
                <div className="absolute w-full h-full flex justify-start items-end rounded-[20px] drop-shadow-xl">
                  <Image src={personal1} alt="Me singing and leading youth"
                    className="w-fit h-[83.33%] rounded-[20px] outline outline-[3px] outline-black" />
                </div>
              </FadeInOnScroll>

            </div>

          </div>
        </section>

        <Wave3 />

        <section>
          <SectionHeader title="Projects" id="Projects" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center my-5">
            {projectInfo().map((project, i) =>
              <FadeInOnScroll key={project.id} delay={"calculate"} className="relative w-full max-w-[500px] lg:aspect-[5/2.22]">
                <div className="group relative w-full h-full drop-shadow-[0_4px_3px_rgb(0,0,0,0.5)] lg:hover:-translate-y-2 lg:hover:drop-shadow-[0_12px_3px_rgb(0,0,0,0.5)] lg:transition-[box-shadow,_transform,_filter] lg:duration-300 lg:ease-out">
                  <Link href={project.links.open ? project.links.open : project.links.github ? project.links.github : "/not-found"} target="_blank"
                    className={`w-full h-full rounded-[20px] overflow-hidden outline outline-[3px] outline-black bg-white flex flex-col lg:flex-row 
                         ${i % 2 == 0 ? "lg:justify-self-end" : "lg:justify-self-start"}`}>
                    <div className="lg:basis-[30%] min-[1100px]:basis-[40%] aspect-[3/2] lg:aspect-auto relative border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black flex justify-center items-center">
                      <Image src={project.thumbnail} alt={`${project.id} thumbnail`}
                        className="absolute w-full h-full lg:rounded-tr-none lg:rounded-bl-[20px] object-cover brightness-[80%]" />
                      <Image src={project.icon} alt={`${project.id} icon`}
                        className="absolute w-5/12 lg:w-1/2 aspect-square rounded-full border-[3px] border-black" />
                    </div>
                    <div className="flex flex-col lg:basis-[70%] min-[1100px]:basis-[60%] ml-1 my-1">
                      <div className="flex">
                        <div className="basis-[91%] flex flex-col">
                          <h2 className="text-md">
                            <a className={`whitespace-nowrap relative  text-decoration:none; text-black hover:text-orange
                                before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                                before:bottom-0 before:left-0 before:bg-orange before:origin-top-left 
                                before:transition before:duration-300 before:ease-in-out
                                transition duration-300`}>
                              hehe
                            </a>
                          </h2>
                          <h3 className="font-medium text-sm text-grey -mt-1">{project.subtitle}</h3>
                          <div className="font-normal text-sm my-2 leading-[18px]">
                            {project.description}
                          </div>
                        </div>
                        <div className="basis-[9%] flex flex-col items-end gap-2 p-2 pl-1">
                          {Object.keys(project.links).map((link) =>
                            <a key={link} href={project.links[link as keyof typeof project.links]} target={link === "article" ? "_self" : "_blank"} className="z-20">
                              <NameToIcon name={link} />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex mt-auto space-x-1">
                        {project.tags.map((tag) =>
                          <div key={tag} className="flex rounded-full border-2 border-blue items-center">
                            {BsTag({ className: "text-blue stroke-[0.5px] w-5 aspect-square pl-1" })}
                            <p className="font-bold text-xs text-blue py-0.5 pr-1.5">{tag}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </FadeInOnScroll>
            )}
          </div>
        </section>

        <section>
          <SectionHeader title="Articles" id="Articles" />
          <ul className="flex flex-col text-center space-y-4">
            {
              articleData.map((article, index) => {
                return (
                  <li key={article.id}>
                    <FadeInOnScroll delay={index * 2 + 2}>
                      <h2 className="text-2xl">
                        {<TextLink text={article.title} href={`/articles/${article.id}`} newWindow="false" />}
                      </h2>
                      <h3 className="text-sm text-grey">{article.subtitle}</h3>
                    </FadeInOnScroll>
                  </li>
                )
              })
            }
          </ul>
        </section>


        <div className="h-screen flex flex-col justify-between">
          <section className="h-full flex flex-col justify-center">
            <SectionHeader title="Let's Connect" id="Contact" />
            <div className="flex flex-col pt-12 space-y-16 text-center items-center">
              <FadeInOnScroll>
                <p className="text-grey">
                  Thank you for checking out my website!<br /><br />
                  Let me know if you have any questions or suggestions,<br />
                  and feel free to contact me for any reason.
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <div className="min-w-[368px]">
                  <SocialButtons />
                </div>
              </FadeInOnScroll>
            </div>

          </section>
          <footer className="text-grey text-center my-10">Designed & Built by Owen Gretzinger</footer>
        </div>

      </main>

      <Wave4 />
    </>
  )
}

async function getArticles() {
  const articleData = getArticlesData();
  return articleData;
}