import React, { useContext, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

import { HeadingProps } from "react-markdown/lib/ast-to-react";

import Layout from './layout';
import Nav from "./nav";
import TextLink, { ButtonLink, TextLinkPassProps } from './textLink';
import handleClickScroll from '@/components/clickScroll';
import { FixedLogo } from '@/components/logoSVG';
import { MobileNavIsOpenContext, PaletteContext } from '../pages/_app';
import ErrorPage from '@/pages/404';
import ColourPaletteButton from './colourPaletteButton';
import { ALL } from 'dns';
import FadeInOnScroll from './fadeInOnScroll';
import { format } from 'date-fns'
import readTime from '@/utils/readTime';


export default function Article(articlePathFromRoot: string, articleID: string) {
  const [, setMobileNavOpen] = useContext(MobileNavIsOpenContext);
  const [paletteIndex, setPaletteIndex] = useContext(PaletteContext);

  const [article, setArticle] = useState('')
  useEffect(() => {
    if (articleID && tryRequire(articlePathFromRoot)) {
      (async () => {
        import(`raw-loader!../../${articlePathFromRoot}.md`)
          .then(res => {
            setArticle(res.default)
          })
      })();
    }
  }, [articleID]);

  const articleMatter = matter(article);

  const tableOfContentsData: { id: string, text: string, level: number }[] = [];
  if (articleMatter.data.title)
    tableOfContentsData.push({ id: "home",  text: articleMatter.data.title, level: 1 });
  const addToTOC = ({ children, ...props }: React.PropsWithChildren<HeadingProps>) => {
    const level = Number(props.node.tagName.match(/h(\d)/)?.slice(1));
    if (level && children) {
      const content = textContent(children);
      const id = content.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      if (!tableOfContentsData.some(entry => entry.id === id)) {
        tableOfContentsData.push({ id: id, text: content, level: level });
      }
      return React.createElement(
        props.node.tagName, { id }, children
      )
    } else {
      return React.createElement(props.node.tagName, props, children);
    }
  };
  function TableOfContents() {
    return (
      <>
        <ul className="list-disc">
          {tableOfContentsData.map(({ level, id, text }) => (
            <li key={id} className={`${getHeadingClass(level)} ${level === 1 ? "list-none" : ""}`}>
              {ButtonLink(text, ()=>{handleClickScroll(id); setMobileNavOpen(false)})}
            </li>
          ))}
        </ul>
        <div className="py-2">
          <div className="flex-grow border border-grey my-4"></div>
        </div>
        {TextLink("Home", "/", false)}
      </>

    );
  }

  var date : string = articleMatter.data.dateCreated;
  if (date) {
    const dateArray = date.split('-');
    date = format(new Date(Number(dateArray[0]), Number(dateArray[1])-1, Number(dateArray[2])), 'MMMM d, y');
  }

  return (
    article === '' ? <ErrorPage /> :
      <Layout bgClass="bg-blue change-col-on-start to-wave">
        <div className="max-w-full mx-auto">
          <div className="w-full px-4 lg:pl-[21rem]">
            <div className="max-w-3xl mx-auto xl:max-w-none py-10 xl:ml-0 xl:mr-64 xl:pr-16">
              <FadeInOnScroll delay={11} className="w-full px-0 bg-white rounded-[20px] shadow-xl md:max-w-3xl lg:max-w-4xl py-4 lg:py-16 mx-auto mt-20 lg:mt-0">
                  
                  
                <div className="prose mx-auto px-4
                          font-notomd prose-strong:font-noto
                          prose-h1:font-noto prose-h2:font-noto prose-h3:font-noto prose-h4:font-noto
                          prose-a:no-underline 
                          prose-img:shadow-xl
                          
                          prose-img:rounded-[20px]
                          prose-img:border-[3px]
                          prose-img:border-black
                          prose-img:mx-auto
                          lg:prose-img:max-h-[400px] lg:prose-img:w-fit
                          ">
                  <p className="text-grey text-right not-prose">{date} | {readTime(articleMatter.content)} minute read</p>
                  <h1 className="text-4xl -mb-4 not-prose">{articleMatter.data.title}</h1>
                  <p className="text-grey not-prose">{articleMatter.data.subtitle}</p>
                  <hr />
                  
                  <ReactMarkdown
                    components={{
                      h1: addToTOC,
                      h2: addToTOC,
                      h3: addToTOC,
                      h4: addToTOC,
                      a: ({ children, ...props }) => {
                        return (
                          TextLinkPassProps({children, ...props})
                        )
                      }


                    }}
                    linkTarget="_blank"
                    children={`${articleMatter.content}`}
                  />
                </div>
              </FadeInOnScroll>
            </div>
          </div>
          <FadeInOnScroll delay={9} className="hidden lg:flex fixed top-0 left-0 bottom-0 w-80 py-10 pl-4 lg:items-center">
            <nav className="relative bg-white rounded-[20px] p-4 w-[304px] shadow-xl">
              <h2 className="text-2xl text-center w-full">Table of Contents</h2>
              <TableOfContents />
            </nav>
          </FadeInOnScroll>
        </div>
        
          
          <div className="hidden lg:block">
            <FadeInOnScroll delay={7} className="fixed top-0 left-0">
            <FixedLogo />
            </FadeInOnScroll>
            </div>
          
          
        
        <div className="hidden lg:block">
          <FadeInOnScroll delay={13} className="fixed top-4 right-10">
            {ColourPaletteButton(paletteIndex, setPaletteIndex)}
          </FadeInOnScroll>
        </div>

        <Nav showOnLargeScreens={false} homePage={false}>
          <div className="text-left relative bg-white p-4 w-full">
            <TableOfContents />
          </div>
          {ColourPaletteButton(paletteIndex, setPaletteIndex)}
        </Nav>
      </Layout>

  );
}

const getHeadingClass = (level: number) => {
  switch (level) {
    case 1:
      return ""
    case 2:
      return "translate-x-4 w-[97%]"
    case 3:
      return "translate-x-8 w-[92%]"
    case 4:
      return "translate-x-12 w-[87%]"
    default:
      return "translate-x-16 w-[82%]"
  }
}

function textContent(elems: React.ReactNode | React.ReactNode[]): string {
  var content = "";
  for (const elem of Array.isArray(elems) ? elems : [elems]) {
    // if the element has children
    if (React.isValidElement(elem) && elem.props.children) {
      content += textContent(elem.props.children);
    }
    else if (typeof elem === "string") {
      content += elem;
    }
  }

  return content;
}

const tryRequire = (path: string) => {
  try {
    return require(`raw-loader!../../${path}.md`);
  } catch (err) {
    return null;
  }
};