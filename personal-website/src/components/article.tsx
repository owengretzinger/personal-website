import { HeadingProps } from "react-markdown/lib/ast-to-react";

import ReactMarkdown from 'react-markdown';
// import remarkGfm from "remark-gfm";
import matter from 'gray-matter';
import { format } from 'date-fns'

import Nav from "./nav";
import TextLink, { ButtonLinkScrollOnClick, TextLinkPassProps } from './textLink';
import { FixedLogo } from './logoSVG';
import FadeInOnScroll from './fadeInOnScroll';

import readTime from '../lib/readTime';
import websiteSections from '../lib/websiteSections';

import React from "react";
import fs from 'fs';
import RevealPage from "./revealPage";
import HomeButtonAfterDivider from "./homeButton";
import SyntaxHighlightCodeBlock from "./codeBlock";



export default function Article({ ...props }) {
  const article = fs.readFileSync(props.articlePathFromRoot, 'utf8');
  const articleMatter = matter(article);

  const tableOfContentsData: { id: string, text: string, level: number }[] = [];
  if (articleMatter.data.title)
    tableOfContentsData.push({ id: "home", text: articleMatter.data.title, level: 1 });
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
      <ul className="list-disc">
        {tableOfContentsData.map(({ level, id, text }) => (
          <li key={id} className={`${getHeadingClass(level)} ${level === 1 ? "list-none" : ""}`}>
            <ButtonLinkScrollOnClick text={text} scrollTo={id} closeMobileNav={true} breakWords={true} />
          </li>
        ))}
      </ul>
    );
  }

  var date: string = articleMatter.data.dateModified;
  if (date) {
    const dateArray = date.split('-');
    date = format(new Date(Number(dateArray[0]), Number(dateArray[1]) - 1, Number(dateArray[2])), 'MMMM d, y');
  }
  if (articleMatter.data.dateModified > articleMatter.data.dateCreated) {
    date = "Modified " + date;
  }

  return (
    <>
      <RevealPage />
      <div className="max-w-full mx-auto bg-blue">
        <div className="w-full px-4 lg:pl-[21rem]">
          <div className="max-w-3xl mx-auto xl:max-w-none py-10 xl:ml-0 xl:mr-64 xl:pr-16">
            <FadeInOnScroll delay={11} waitForLoad={true} className="w-full px-0 bg-white rounded-theme shadow-xl md:max-w-3xl lg:max-w-4xl py-4 lg:py-16 mx-auto mt-20 lg:mt-0">
              <div className="prose mx-auto px-4
                          font-semibold prose-strong:font-black
                          prose-h1:font-extrabold prose-h2:font-extrabold prose-h3:font-extrabold prose-h4:font-extrabold
                          prose-a:no-underline prose-a:font-semibold
                          prose-img:shadow-xl
                          prose-img:rounded-outline
                          prose-img:mx-auto
                          lg:prose-img:max-h-[400px] lg:prose-img:w-fit
                          prose-code:bg-black/10 prose-code:rounded-md prose-code:px-1
                          
                          ">
                <p className="text-grey text-right not-prose">{date} | {readTime(articleMatter.content)} minute read</p>
                <h1 className="text-4xl -mb-4 not-prose">{articleMatter.data.title}</h1>
                <p className="text-grey not-prose">{articleMatter.data.subtitle}{articleMatter.data.link && <> (<TextLink text="Link" href={articleMatter.data.link} />)</>}</p>

                <hr />

                <ReactMarkdown
                  components={{
                    h1: addToTOC,
                    h2: addToTOC,
                    h3: addToTOC,
                    h4: addToTOC,
                    a: ({ ...props }) => {
                      props.target = "_blank";
                      for (const section of websiteSections(true)) {
                        if (props.href && props.href === `/${section}`) {
                          props.href = `/?section=${section}`;
                        }
                      }
                      if (props.href && props.href.startsWith("/")) {
                        props.target = "_self";
                      }
                      return (
                        <TextLinkPassProps {...props}></TextLinkPassProps>
                        // TextLinkPassProps({children, ...props})
                      )
                    },
                    pre({ node, ...props }) {
                      return <div className="not-prose">{props.children}</div>
                    },
                    code({ node, children, inline, className, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return match ? (
                        <SyntaxHighlightCodeBlock
                          language={match[1]}
                          children={String(children).replace(/\n$/, "")}                      
                          {...props}
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    
                    
                    
                    



                  }}
                  children={`${articleMatter.content}`}
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
        <FadeInOnScroll delay={9} waitForLoad={true} className="hidden lg:flex fixed top-0 left-0 bottom-0 w-80 py-10 pl-4 lg:items-center">
          <nav className="relative bg-white rounded-theme p-4 w-[304px] shadow-xl">
            <h2 className="text-2xl text-center w-full">Table of Contents</h2>
            <TableOfContents />
            <HomeButtonAfterDivider />
          </nav>
        </FadeInOnScroll>
      </div>


      <div className="hidden lg:block">
        <FadeInOnScroll delay={7} waitForLoad={true} className="fixed top-0 left-0">
          <FixedLogo />
        </FadeInOnScroll>
      </div>
      <Nav showOnLargeScreens={false} homePage={false}>
        <div className="text-left relative bg-white p-4 w-full">
          <TableOfContents />
        </div>
      </Nav>
    </>
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