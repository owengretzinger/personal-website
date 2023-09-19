import FadeInOnScroll from '@/components/fadeInOnScroll';
import { FixedLogo } from '@/components/logoSVG';
import Nav from '@/components/nav';
import RevealPage from '@/components/revealPage';
import { ResumeLink } from '@/components/textLink';
import Image from 'next/image';
import { FaCalendar, FaCode, FaGraduationCap, FaLink, FaPhoneAlt, FaStar } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';


import headshot from "../../../public/images/pfp_suit_white_bg.png";
import { ReactNode } from 'react';
import { RiTeamFill } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';
import { Metadata } from 'next';
import OutlineButton from '@/components/outlineButton';
import React from 'react';
import { BsFillChatFill, BsPersonFill } from 'react-icons/bs';
import { type } from 'os';

const isPublic = true;
type resumeVersion = "front end" | "full stack" | "general";
const version: resumeVersion = "full stack";

const resumePDFlink = "/Resume - Owen Gretzinger.pdf";

export const metadata: Metadata = {
  title: 'Resume - Owen Gretzinger',
  description: "I'm a software developer on a mission to spread love. Check out my resume to see my education, work experience, skills, projects, and leadership experience!",
}

export default function Resume() {
  return (
    <>
      <RevealPage />
      <div className="max-w-full min-h-screen bg-blue/30 font-normal px-4 print:px-0 py-10 print:py-0 text-[#000]">
        <FadeInOnScroll delay={11} waitForLoad={true}
          className="relative w-full bg-white rounded-theme shadow-xl
                         sm:max-w-[52rem] lg:aspect-[8.5/11] mx-auto mt-20 lg:mt-0
                         print:w-[52rem] print:h-[100vh] print:aspect-[8.5/11] print:m-0 print:shadow-none">
          <div className="w-full h-full flex flex-col rounded-outline p-4 md:p-16 print:p-16 print:border-none">
            {/* desktop header */}
            <div className={`hidden w-full sm:flex print:flex justify-between ${isPublic ? "items-center" : "items-start"}`}>
              <div className="flex flex-col gap-1 text-xs">
                <h2 className="flex-1 text-4xl font-[1000] h-fit leading-8">Owen{isPublic && <br />} Gretzinger</h2>
                <div className="flex gap-6">
                  {!isPublic &&
                    <>
                      <div className="flex items-center gap-[2px] w-fit">
                        <MdLocationOn className="w-5 h-5" />
                        <span className="text-xs font-extrabold">
                          Oakville, ON
                        </span>
                      </div>
                      <div className="flex items-center gap-1 w-fit">
                        <FaPhoneAlt className="w-4 h-4" />
                        <span className="text-xs font-extrabold">
                          +1 (289) 681-9925
                        </span>
                      </div>
                    </>
                  }
                </div>
              </div>

              {/* <Image src={headshot} alt="Headshot of me" width={128} height={128} className="rounded-full border-[3px] border-black" /> */}
              <div className="flex-1 flex sm:justify-end print:justify-end">
                <div className="flex flex-col w-fit sm:items-end print:items-end gap-[2px] text-xs">
                  <ResumeLink text="owengretzinger.com" href="https://owengretzinger.com" icon="website" target="_blank" isPublic={isPublic} />
                  <ResumeLink text={isPublic ? "owengretzinger@gmail.com" : "owengretzinger@gmail.com"} href={isPublic ? "mailto:owengretzinger@gmail.com" : "mailto:owengretzinger@gmail.com"} icon="email" target="_blank" isPublic={isPublic} />
                  <ResumeLink text="in/owengretzinger" href="https://www.linkedin.com/in/owengretzinger" icon="linkedin" target="_blank" isPublic={isPublic} />
                  <ResumeLink text="owengretzinger" href="https://github.com/owengretzinger" icon="github" target="_blank" isPublic={isPublic} />
                  {/* {!isPublic &&
                    <ResumeLink text="+1 (289) 681-9925" href="tel:+12896819925" icon="phone" target="_blank" isPublic={isPublic} />} */}
                  {/* <div className="flex items-center gap-1 w-fit">
                    <MdLocationOn className="w-4 h-4" />
                    <span className="text-xs font-bold">
                      Oakville, ON
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            {/* mobile header */}
            <div className="sm:hidden print:hidden">
              <div className="flex w-full max-w-full justify-between items-center gap-3">
                <h2 className="text-3xl [@media(min-width:400px)]:text-4xl font-[1000]">Owen<br />Gretzinger</h2>
                <div>
                  {/* <Image src={headshot} alt="Headshot of me" className="w-[128px] max-w-full aspect-square rounded-full border-[3px] border-black" /> */}
                </div>
              </div>
            </div>

            {/* <span className="w-1/2 min-h-[2px] bg-black my-6 mx-auto [print-color-adjust:exact] [-webkit-print-color-adjust:exact]" /> */}

            {/* body */}
            <div className="w-full h-full flex flex-col sm:flex-row print:flex-row gap-4 mt-10">
              {/* left column */}
              <div className="flex-1 flex flex-col gap-4">
                {/* links, shown on mobile only */}
                <div className="sm:hidden print:hidden">
                  <ResumeSection title="Links" className="sm:hidden print:hidden">
                    <ResumeLink text="owengretzinger.com" href="https://owengretzinger.com" icon="website" target="_blank" isPublic={isPublic} />
                    <ResumeLink text={isPublic ? "owengretzinger@gmail.com" : "owengretzinger@gmail.com"} href={isPublic ? "mailto:owengretzinger@gmail.com" : "mailto:owengretzinger@gmail.com"} icon="email" target="_blank" isPublic={isPublic} />
                    <ResumeLink text="in/owengretzinger" href="https://www.linkedin.com/in/owengretzinger" icon="linkedin" target="_blank" isPublic={isPublic} />
                    <ResumeLink text="owengretzinger" href="https://github.com/owengretzinger" icon="github" target="_blank" isPublic={isPublic} />
                  </ResumeSection>
                </div>
                <ResumeSection title="Highlights of Qualification" icon={BsFillChatFill}>
                  <div className="text-xs">
                    {
                      (version === "front end" && <>
                        Third-year computer science co-op student passionate about front-end development with significant experience in React. Hard worker evidenced by a 4.0/4.0 GPA, with strong communication skills and an eagerness to learn.
                      </>) ||
                      (version === "full stack" && <>
                        <BulletPoints bulletpoints={[
                          // ---------- DEFAULT ----------
                          <>Third-year computer science student proficient in Python and React, with previous technical internship experience.</>,
                          <>Strong leadership skills gained through roles as a teaching assistant, camp program leader, and involvement in student societies and youth programs.</>,
                          <>Eagerness to learn and commitment to follow through demonstrated by completion of personal projects and top academic performance.</>,
                          // <>Strong collaboration skills and familiarity with development tools as a result of previous co-op experience at Arctic Wolf.</>,
                          // ---------- CUSTOM ----------
                          // <>Third-year computer science student proficient in Python and Java, with previous technical internship experience.</>,
                          // <>Leadership skills gained through roles as a teaching assistant, camp program leader, and involvement in student societies and youth programs.</>,
                          // <>Third-year computer science co-op student with strong leadership skills and significant experience using Python and Java.</>,
                          // <></>,
                          // <>Eagerness to learn and commitment to follow through demonstrated by completion of personal projects and top academic performance.</>,
                          // <>Strong communication skills and familiarity with development tools as a result of previous co-op experience at Arctic Wolf.</>,
                          // <>Third-year computer science co-op student passionate about full-stack development with significant experience using NodeJS.</>,
                          // <>Third-year computer science co-op student possessing relevant experience using Python, Java, and SQL.</>,
                          // <>Third-year computer science co-op student passionate about full-stack development possessing relevant experience using Python, Java, and SQL.</>,
                          // <>Experience writing clean code and working with version control from previous co-op at Arctic Wolf.</>,
                          // <>Self-driven analytical thinker evidenced by a 4.0/4.0 GPA and completion of personal projects.</>,
                          // <>Strong communication and teamwork skills as a result of previous co-op experience at Arctic Wolf and a variety of leadership experience.</>,
                          // <>Solid understanding of algorithms and data structures evidenced by a 4.0/4.0 GPA and becoming a teaching assistant for a practical DSA implementation course.</>,
                        ]} />
                      </>)
                      // ||
                      // (version === "general" && <>
                      //   Third-year computer science co-op student passionate about software development with a focus on front end development with significant experience in React.

                      //   Hard worker evidenced by a 4.0/4.0 GPA, with strong communication skills and an eagerness to learn.
                      // </>)
                    }
                  </div>
                </ResumeSection>
                <ResumeSection title="Education" icon={FaGraduationCap}>
                  <ResumeChunk
                    title="McMaster University"
                    institution="Bachelor of Computer Science"
                    date="Sep 2021 - Apr 2025"
                    bulletpoints={[
                      <>GPA: 4.0/4.0 (awarded Provost's Honour Roll Medal twice for attaining an A+ in all courses to date).</>,
                      // ---------- DEFAULT ----------
                      <>Gained experience related to databases, algorithms, and software design through course work.</>,
                      // ---------- CUSTOM ----------
                      // <>Gained experience related to databases, object-oriented design, and algorithms through course work.</>,
                      // <>Gained experience related to Python, Java, databases, and unit testing through course work.</>,
                      // <>Gained experience related to programming languages, databases, and design techniques through course work.</>,
                      // <>Includes courses on data structures & algorithms, software development, and databases.</>
                    ]}
                  />
                </ResumeSection>
                <ResumeSection title="Work Experience" icon={MdWork}>
                  <ResumeChunk
                    title="Teaching Assistant"
                    institution="McMaster University"
                    date="Sep 2023 - Present"
                    bulletpoints={[
                      // <>Teaching Assistant for SFWRENG 3XB3 - Software Engineering Practice and Experience: Binding Theory to Practice</>,
                      <>Leading labs for 40 third-year software engineering students, which includes providing technical expertise on data structures and algorithms.</>,
                      // <>Leading labs for 40 third-year software engineering students, which includes providing technical expertise on data structures and algorithms and giving feedback on evaluations (course code SFWRENG 3XB3).</>,
                      // <>Lead labs and mark evaluations for 25+ third-year software engineering students taking "SFWRENG 3XB3 - Software Engineering Practice and Experience: Binding Theory to Practice".</>,
                      // <>Provide technical expertise about data structures & algorithms (sorting algorithms, graph algorithms, dynamic programming) to students.</>
                    ]}
                  />
                  <ResumeChunk
                    title="Developer Co-op"
                    institution="Arctic Wolf"
                    // institutionLink='https://arcticwolf.com/'
                    date="May 2023 - Aug 2023"
                    bulletpoints={[
                      //<>Developed software using Javascript in an Agile environment.</>,
                      <>Played a leading role in the development of an internal Chrome extension using JavaScript, improving incident triage efficiency for 150+ security analysts.</>,
                      <>Implemented Webpack and worked with NodeJS extensively, resulting in reduced development time and more efficient, bundled code.</>,
                      <>Integrated FullStory (a digital experience platform) using its REST API to acquire usage analytics, improving development prioritization.</>,
                      <>Redesigned the Chrome extension's UI.</>,
                      <>Resolved 10 security vulnerabilities (XSS, ReDoS, SSRF).</>,

                      // <>Worked in an Agile development environment.</>,
                      //<div data-indent={true}>Implemented <TextLink text='FullStory' href={'https://www.fullstory.com/'} /> to gain insights into how users interact with the extension.</div>,
                      //<div data-indent={true}>Communicated directly with users of the extension to catch and fix 4 functionality-breaking bugs.</div>,
                      //<>Took a primary role in the Agile development of an internal chrome extension which is used by 150+ security engineers to triage customer incidents more efficiently.</>,
                      //<>Implemented <TextLink text='FullStory' href={'https://www.fullstory.com/'} /> </>,
                      // <>Won the quarterly team recognition award as part of the 6-member "Fast Track" team, standing out among 484 people in R&D for exceptional team performance in terms of speed, quality, and innovation.</>,
                      // <>Take on a variety of projects and responsibilities in an Agile environment as a member of the 6-person "Fast Track" team.</>,
                      // <div data-indent={true}>Develop features for an internally used chrome extension using JavaScript, allowing security engineers to triage customer incidents more efficiently.</div>,
                      // <div data-indent={true}>Create Cyber Defense Maturity Assessment survery tool allowing Arctic Wolf to more easily identify the security posture of potential clients.</div>,
                    ]}
                  />
                  <ResumeChunk
                    title="Program Leader"
                    institution="Camp Mini-Yo-We"
                    // institutionLink='https://www.miniyowe.com/'
                    date="May 2022 - Aug 2022"
                    bulletpoints={[
                      // ---------- DEFAULT ----------
                      <>Created quality experiences for 500 children total which included working with a team, organizing other staff, and using creativity to adapt to unexpected situations.</>,
                      <>Led and managed a team of 26 people in running a staff appreciation week for 202 people (August 2023).</>,
                      // ---------- CUSTOM ----------
                      // <>Created quality experiences for 500 children total which included working with a team, organizing other staff, and using creativity to adapt to unexpected situations.</>,
                      // <>Led and managed a team of 26 people in running a staff appreciation week for 202 people which required handling ambiguous problems (August 2023).</>,
                      // <>Scheduled and organized other staff members.</>,
                      // "Organized and scheduled other staff members assisting with program activities.",
                      // "Prepared camp for the summer which included leading various operations that developed responsibility, dependability, and communication skills (May 2022 - Jun 2022)."
                    ]}
                  />
                </ResumeSection>
              </div>




              {/* right column */}
              <div className="flex-1 flex flex-col gap-4">
                <ResumeSection title="Projects" icon={FaCode}>
                  <ResumeProject
                    title="Personal Website"
                    href="https://owengretzinger.com"
                    projectType="Personal Project"
                    description={<>Developed a website using React that demonstrates meticulous attention to detail and showcases additional projects.</>}
                  />
                  <ResumeProject
                    title="Simple Terms"
                    href="https://devpost.com/software/simple-terms"
                    projectType="Hackathon Project"
                    description={<>Created a Chrome extension that uses AI to summarize terms and conditions. Made with two other students for Hack the North 2023, using OpenAI's API and React.</>}
                  />
                  <ResumeProject
                    title="Jazz Musician Website"
                    href="https://mattausgretzinger.com"
                    projectType="Personal Project"
                    description={<>Designed and built a website for a professional jazz musician using React, including a Content Management System (CMS).</>}
                  />
                  <ResumeProject
                    title="Education Data for Change"
                    href="https://owengretzinger.com/education-data-for-change"
                    projectType="Hackathon & Personal Project"
                    description={<>Collaborated with team members to create a website that offers insights into the Ontario
                      education system using HTML, CSS, JavaScript, Python, and SQL.</>}
                  />
                  {/* <ResumeProject
                          title="Triangle Ball"
                          href="https://github.com/owengretzinger/triangle-ball"
                          projectType="Personal Project"
                          description="Wrote 10,000+ lines of code creating a game as a personal project using C# and Unity, featuring highly
                          effective bots that were implemented by applying university level calculus."
                        /> */}
                  {/* <ResumeProject
                    title="Binary0101"
                    href="https://cs1xd3.online/ShowModulePublish?modulePublishId=0a6330dc-6e05-447c-820f-293aca08929a&fullscreen=true"
                    projectType="School Project"
                    description={<>Created a web app using Elm that teaches the basics of binary, designed to follow design principles.</>}
                  /> */}
                  {/* <ResumeProject
                    title="Server Insights"
                    href="https://github.com/owengretzinger/server-insights"
                    projectType="Hackathon & Personal Project"
                    description={<>Achieved first place in a hackathon of 44 participants by developing a discord bot which analyzes messages and produces various graphs using Python and MatPlotLib.</>}
                  /> */}
                </ResumeSection>
                <ResumeSection title="Skills" icon={FaStar}>
                  <div className="flex flex-col gap-1 text-xs">
                    <div className="flex gap-3">
                      <h3 className="w-[90px] shrink-0 font-extrabold text-right">Languages</h3>
                      <p className="">
                        <strong>Python</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>, Java, Haskell, C#, HTML, CSS, SQL, C++, C, Elm
                        {/* <strong>Python</strong>, <strong>Java</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>, Haskell, C#, HTML, CSS, SQL, C++, C, Elm */}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <h3 className="w-[90px] shrink-0 font-extrabold text-right">Tools</h3>
                      <p className=""><strong>React</strong>, <strong>NodeJS</strong>, <strong>Git</strong>, NextJS, Jira, Confluence, Linux, Figma</p>
                    </div>
                    <div className="flex gap-3">
                      <h3 className="w-[90px] shrink-0 font-extrabold text-right">Methodologies</h3>
                      <p className="">Agile Development, Design Patterns, Software Development Life Cycle (SDLC), Unified Modeling Language (UML)</p>
                    </div>
                    {/* <div className="flex gap-3">
                      <h3 className="w-[84px] shrink-0 font-extrabold text-right">Soft Skills</h3>
                      <p className="">Work Ethic, Communication, Leadership, Time Management, Teamwork</p>
                    </div> */}
                  </div>
                </ResumeSection>
                <ResumeSection title="Leadership Experience" icon={RiTeamFill}>
                  <ResumeChunk
                    title="Year Representative"
                    institution="McMaster Computer Science Society"
                    date="Oct 2022 - Present"
                    bulletpoints={[
                      <>Communicate with the third-year computer science body and university officials to resolve issues.</>,
                      <>Collaborate with society members to plan and execute engaging events.</>
                    ]}
                  />
                  <ResumeChunk
                    title="Youth Leader"
                    institution="Church on the Rock"
                    date="Sep 2021 - Present"
                    bulletpoints={[
                      <>Leader on team running weekly youth programs for 20+ participants which includes
                        running games, planning special events, and mentoring participants.</>
                    ]}
                  />
                  {/* <ResumeChunk 
                          title=""
                          institution=""
                          date=""
                          bulletpoints={[
                            ""
                          ]}
                        /> */}
                </ResumeSection>
              </div>
            </div>
          </div>

          {isPublic &&
            <>
              <div className="absolute print:fixed top-0 left-0 -z-50">
                <svg viewBox="0 0 818 818" xmlns="http://www.w3.org/2000/svg" className={`w-[310px] max-w-[94%] aspect-square max-h-[100vw] fill-blue rounded-tl-theme print:rounded-tl-none`}>
                  <path d="M459.887 361.499C736.105 360.358 813.72 120.024 818 0H0V722.999C59.3526 723.379 149.808 650.223 172.636 564.605C195.464 478.987 299.616 362.162 459.887 361.499Z" />
                </svg>
              </div>
              <div className="absolute print:fixed -z-50 bottom-0 right-0">
                <svg viewBox="0 0 818 818" xmlns="http://www.w3.org/2000/svg" className={`w-[180px] max-w-[94%] aspect-square -scale-100 max-h-[100vw] fill-blue rounded-tl-theme print:rounded-tl-none ml-auto`}>
                  <path d="M459.887 361.499C736.105 360.358 813.72 120.024 818 0H0V722.999C59.3526 723.379 149.808 650.223 172.636 564.605C195.464 478.987 299.616 362.162 459.887 361.499Z" />
                </svg>
              </div>
            </>
          }

        </FadeInOnScroll>
        <FadeInOnScroll className="[@media(min-width:1145px)]:hidden print:hidden mt-12 font-extrabold flex justify-center">
          <OutlineButton text={"Download"} href={resumePDFlink} target="_blank" />
        </FadeInOnScroll>
      </div>
      <div className="hidden lg:block print:hidden fixed top-0 left-0">
        <FadeInOnScroll delay={7} waitForLoad={true} className="">
          <FixedLogo />
        </FadeInOnScroll>
      </div>
      <div className="hidden [@media(min-width:1145px)]:flex print:hidden font-extrabold fixed top-4 right-10 h-[42px] rounded-lg items-center">
        <FadeInOnScroll delay={13} waitForLoad={true} className="">
          <OutlineButton text={"Download"} href={resumePDFlink} target="_blank" />
        </FadeInOnScroll>
      </div>
      <div className="block print:hidden font-extrabold">
        <Nav showOnLargeScreens={false} homePage={false} >
          <OutlineButton text={"Download"} href={resumePDFlink} />
        </Nav>
      </div>
    </>



  )
}

function ResumeSection({ ...props }: any) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-[1000]">{props.title}</h2>
        {/* {props.icon && <props.icon className="text-2xl" />} */}
      </div>
      <span className="w-full h-[4px] bg-black mb-[6px]" />
      <div className="flex flex-col gap-[6px]">
        {props.children}
      </div>
    </div>
  )
}

function ResumeChunk({ title, institution, institutionLink, date, bulletpoints }: { title: string, institution: string, institutionLink?: string, date?: string, bulletpoints: ReactNode[] }) {
  return (
    <div>
      {/* {date && <div className="flex items-center gap-1 -mb-[6px]">
        <FaCalendar className="text-xs" />
        <p className="text-xs font-light">{date}</p>
      </div>} */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-extrabold">{title}</h3>
        <p className="text-xs font-light">{date}</p>
      </div>
      <h4 className="text-xs font-extrabold -mt-1">
        {institutionLink ? <ResumeLink text={institution} href={institutionLink} isPublic={isPublic} /> : institution}
      </h4>
      <BulletPoints bulletpoints={bulletpoints} />
    </div>
  )
}

function BulletPoints({ bulletpoints }: { bulletpoints: ReactNode[] }) {
  return (
    <ul className="list-disc list-outside text-xs pl-4">
      {bulletpoints.map((point, i) => {
        return React.isValidElement(point) && <li key={i} className={point.props['data-indent'] ? "translate-x-4 pr-4" : ""}>{point}</li>
      })}
    </ul>
  )
}

function ResumeProject({ title, href, projectType, description }: { title: string, href: string, projectType: string, description: ReactNode }) {
  return (
    <div>
      <ResumeLink text={title} href={href} icon="link" target="_blank" isPublic={isPublic} />
      <h4 className="text-xs font-extrabold -mt-1">{projectType}</h4>
      <p className="text-xs">{description}</p>
    </div>
  )
}