import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image'
// import pfp from "../../public/images/pfp_standing_outdoors.png";
// import pfp from "../../public/images/pfp_standing_outdoors_2.jpeg";
import pfp from "../../public/images/headshot.png";
// import pfp from "../../public/images/mmmmmm.png";

import macLogo from "../../public/images/mcmaster-logo.png";
import arcticWolf from "../../public/images/arctic-wolf.png";
import personal1 from "../../public/images/personal-1.png";
import personal2 from "../../public/images/personal-2.png";
import personal3 from "../../public/images/personal-3.png";

import Nav from "../components/nav";
import TextLink from '../components/textLink';
import OutlineButton from '../components/outlineButton';
import SocialButtons from '../components/socialButtons';
import FadeInOnScroll from '@/components/fadeInOnScroll';
import { Wave1, Wave2, Wave3, Wave4 } from '../components/waves';
import NavButton from '@/components/navButton';
import { ProjectLinkIcon } from '@/components/projectIconLink';
import RevealPage from '@/components/revealPage';

import websiteSections from '../../lib/websiteSections';
import projectInfo, { linkToTitle } from '../../lib/projectInfo';
import { getArticlesData } from '../../lib/getArticlesData';

import { BsTag } from 'react-icons/bs'

export const metadata: Metadata = {

};

function SectionHeader({ ...props }: any) {
  return (
    <FadeInOnScroll>
      <div className="relative flex py-5 items-center mt-20" id={props.id.toLowerCase()}>
        <div className="flex-grow border border-grey"></div>
        <span className="flex-shrink mx-4 text-black text-4xl">
          <h2 className="whitespace-nowrap">{props.title}</h2>
        </span>
        <div className="flex-grow border border-grey"></div>
      </div>
    </FadeInOnScroll>
  )
}

export default async function Page() {
  const articleData = await getArticles();

  return (
    <>
      <RevealPage />
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
        <li>
          <FadeInOnScroll delay={12} waitForLoad={true} noDelayOnMobile={true}>
            <OutlineButton text={"Resume"} href="/resume" />
          </FadeInOnScroll>
        </li>
        {/* <FadeInOnScroll delay={13} waitForLoad={true} noDelayOnMobile={true}>
          <li key="Colour Palette">{ColourPaletteButton(paletteIndex, setPaletteIndex)}</li>
        </FadeInOnScroll> */}
      </Nav>

      <main className="px-5 lg:px-20 xl:px-40 relative">
        <section className='min-h-screen w-full flex items-center'>
          <div className="w-full flex flex-col lg:flex-row justify-between mt-32 lg:mt-0">
            <div className="lg:w-7/12 max-w-[650px] space-y-6 self-center">
              <FadeInOnScroll delay={5} waitForLoad={true}><p className="text-xl xl:text-2xl">Hi, my name is</p></FadeInOnScroll>
              <FadeInOnScroll delay={7} waitForLoad={true}><h1 className="text-4xl xl:text-5xl">Owen Gretzinger.</h1></FadeInOnScroll>
              <FadeInOnScroll delay={9} waitForLoad={true}>
                <p className="text-xl xl:text-2xl">I’m a software developer on a mission
                  to {<TextLink text="spread love" href="/articles/a-mission-to-spread-love" newWindow={false} breakWords="false" />}, one line of code at a time.
                  My priority is producing excellent work while communicating with precision and clarity.</p>
              </FadeInOnScroll>
              <FadeInOnScroll delay={11} waitForLoad={true} className="mx-auto">
                <SocialButtons />
              </FadeInOnScroll>
            </div>
            <FadeInOnScroll delay={13} waitForLoad={true}>
              <div className={`flex-1 self-center p-10 lg:py-0`}>
                <Image src={pfp} alt="Me" width={334} height={334} priority={true} placeholder='blur'
                  className={`rounded-xl shadow-2xl mx-auto`} />
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
                  <h3 className="text-2xl pb-4">Education:</h3>
                </FadeInOnScroll>
                <FadeInOnScroll delay={3}>
                  <p className="text-base pb-6 lg:pb-0">
                    I take computer science at McMaster University, where I’m a Year Representative for the Computer Science Society.
                    More information can be found on my {<TextLink text="resume" href="/resume" newWindow={false} />}!
                  </p>
                </FadeInOnScroll>
              </div>


              <FadeInOnScroll delay="calculate" className="basis-1/2 w-full max-w-[500px] aspect-[5/2.22] rounded-theme drop-shadow-xl lg:ml-5 bg-white">
                <div className="w-full h-full rounded-outline overflow-hidden flex">
                  <div className="basis-[40%] lg:basis-[30%] min-[1100px]:basis-[40%] border-r-[3px] border-black flex justify-center items-center bg-[#69143B]">
                    <Image src={macLogo} alt="McMaster University Logo"
                      className="w-3/4" />
                  </div>
                  <div className="flex flex-col justify-between basis-[60%] lg:basis-[70%] min-[1100px]:basis-[60%] ml-1 my-1">
                    <div className="flex flex-col">
                      <p className="text-lg min-[475px]:text-2xl whitespace-nowrap">McMaster University</p>
                      <p className="text-xs min-[475px]:text-base text-grey">Hamilton, ON</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base min-[475px]:text-lg whitespace-nowrap">Computer Science Co-op</p>
                      <p className="text-xs min-[475px]:text-base text-grey">B.A.Sc.</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base min-[475px]:text-lg">Level II</p>
                      <p className="text-xs min-[475px]:text-base text-grey">April 2025 Expected Graduation</p>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>


            </div>



            <div className="flex flex-col lg:flex-row-reverse justify-center items-center lg:justify-between show-on-scroll">
              <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                <FadeInOnScroll delay={2}>
                  <h3 className="text-2xl pb-4 lg:text-right">Experience:</h3>
                </FadeInOnScroll>
                <FadeInOnScroll delay={3}>
                  <p className="text-base pb-2 lg:text-right">
                    I’m currently on co-op as a developer at {<TextLink text="Arctic Wolf" href="https://arcticwolf.com/" breakWords="false" />}, where I take on all kinds of tasks as part of the "Fast Track" team!
                    I'm thankful for this opportunity to be part of a {<TextLink text="top rated workplace" href="https://arcticwolf.com/resources/press-releases/fortune-and-great-place-to-work-rank-arctic-wolf-as-top-10-2022-best-medium-workplaces" breakWords={false} />}. #jointhepack
                  </p>
                  <p className="text-xs text-grey pb-6 lg:pb-0 lg:text-right"><em>
                    The views expressed on this site are my own and do not necessarily reflect those of Arctic Wolf.
                  </em></p>
                </FadeInOnScroll>
              </div>
              <FadeInOnScroll delay="calculate" className="basis-1/2 w-full max-w-[500px] aspect-[5/2.22] rounded-theme drop-shadow-2xl lg:mr-5 ">
                <div className="w-full h-full rounded-outline overflow-hidden">
                  <Image src={arcticWolf} alt="Arctic Wolf 'I've joined the pack' Image"
                    className="" />
                </div>
              </FadeInOnScroll>
            </div>



            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between show-on-scroll">
              <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                <FadeInOnScroll delay={2}>
                  <h3 className="text-2xl pb-4">Personal:</h3>
                </FadeInOnScroll>
                <FadeInOnScroll delay={3}>
                  <p className="text-base pb-6 lg:pb-0">
                    When I’m not at school or work, I can be found reading, volunteering with youth, playing the drums,
                    or coding projects of my own!</p>
                </FadeInOnScroll>
              </div>


              <FadeInOnScroll className="relative basis-1/2 w-full max-w-[500px] aspect-[5/2.22] lg:ml-5 drop-shadow-xl">
                <div className="absolute w-full h-full flex justify-end items-start">
                  <div className="h-[83.33%] aspect-square rounded-outline">
                    <Image src={personal3} alt="Me playing the drums with a band"
                      className="w-full h-full" />
                  </div>
                </div>
                <div className="absolute w-full h-full flex justify-center items-center">
                  <div className="h-[83.33%] aspect-square rounded-outline">
                    <Image src={personal2} alt="Me getting pied in the face by a youth"
                      className="w-full h-full" />
                  </div>
                </div>
                <div className="absolute w-full h-full flex justify-start items-end">
                  <div className="h-[83.33%] aspect-square rounded-outline">
                    <Image src={personal1} alt="Me singing and leading youth"
                      className="w-full h-full" />
                  </div>
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
                  <div className={`w-full h-full overflow-hidden rounded-outline bg-white flex flex-col lg:flex-row 
                         ${i % 2 == 0 ? "lg:justify-self-end" : "lg:justify-self-start"}`}>
                    <Link title={`Open ${project.title} in a new tab`} href={project.links.open ? project.links.open : project.links.github ? project.links.github : "/not-found"} target="_blank"

                      className="absolute w-full h-full bg-white opacity-0 z-10"></Link>
                    <div className="lg:basis-[30%] min-[1100px]:basis-[40%] aspect-[3/2] lg:aspect-auto relative border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black flex justify-center items-center">
                      <Image src={project.thumbnail} alt={`${project.id} thumbnail`}
                        className="absolute w-full h-full object-cover brightness-[80%]" />
                      <Image src={project.icon} alt={`${project.id} icon`}
                        className="absolute w-5/12 lg:w-1/2 aspect-square rounded-full border-[3px] border-black" />
                    </div>
                    <div className="flex flex-col lg:basis-[70%] min-[1100px]:basis-[60%] ml-1 my-1">
                      <div className="flex">
                        <div className="basis-[87%] flex flex-col">
                          <h3 className="text-md">
                            <span className={`whitespace-nowrap relative  text-decoration:none; text-black group-hover:text-orange
                                before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                                before:bottom-0 before:left-0 before:bg-orange before:origin-top-left 
                                before:transition before:duration-300 before:ease-in-out before:scale-x-0 group-hover:before:scale-x-100
                                transition duration-300`}>
                              {project.title}
                            </span>
                          </h3>
                          <p className="font-medium text-sm text-grey -mt-1">{project.subtitle}</p>
                          <div className="font-normal text-sm my-2 leading-[18px]">
                            {project.description}
                          </div>
                        </div>
                        <div className="basis-[13%] flex flex-col items-end gap-2 p-2 pl-1">
                          {Object.keys(project.links).map((link) =>
                            <Link title={linkToTitle(link, project.title)} key={link} href={project.links[link as keyof typeof project.links]!} target={link === "article" ? "_self" : "_blank"} className="z-20">
                              <ProjectLinkIcon name={link} />
                            </Link>
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
                  </div>
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
                      <p className="max-w-full text-2xl">
                        <TextLink text={article.title} href={`/articles/${article.id}`} newWindow={false} breakWords={true} className="text-2xl" />
                      </p>
                      <p className="text-sm text-grey">{article.subtitle}</p>
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
                <SocialButtons />
              </FadeInOnScroll>
            </div>

          </section>
          {/* no fade in bc if moves the bottom lower */}
          <footer className="text-grey text-center my-10">
            <Link href="https://github.com/owengretzinger/" target='_blank'>Designed & Built by Owen Gretzinger</Link>
          </footer>
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