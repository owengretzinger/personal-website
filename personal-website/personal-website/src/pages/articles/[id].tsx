import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/layout';
import Nav from "../../components/nav";
import matter from 'gray-matter';
import React from 'react';
import TextLink from '../../components/textLink';
import handleClickScroll from '@/components/clickScroll';
import Logo from '@/components/logoSVG';

import rehypeSlug from 'rehype-slug';

import { HeadingProps } from "react-markdown/lib/ast-to-react";
import { MobileNavIsOpenContext } from '../_app';

export default function Post() {
  return (
    <MarkdownToHtml />
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

function TableOfContents(articleContent: JSX.Element) {

  const [headings, setHeadings] = useState<{ id: string, text: string | null, level: number }[]>([]);


  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
      .map((elem) => ({
        id: elem.id,
        text: elem.textContent,
        level: Number(elem.nodeName.charAt(1)),
      }));
    setHeadings(elements);
  }, []);


  return (
    <ul className="list-disc">
      {headings.map(heading => (
        <li key={heading.text}
          className={getHeadingClass(heading.level)}>
          <a href={`#${heading.id}`}>{heading.text}</a>
        </li>
      ))}
    </ul>
  )


}

function MarkdownToHtml() {
  const router = useRouter();
  const { query = {} } = router || {};
  const { id = 0 } = query || {};

  const [post, setPost] = useState('')

  useEffect(() => {
    if (id) {
      (async () => {
        import(`raw-loader!../../../articles/${id}.md`)
          .then(res => {
            setPost(res.default)
          })
      })();
    }
  }, [id]);

  const articleContent = matter(post).content;

  const toc: { id: string, text: string, level: number }[] = [];

  const [, setMobileNavOpen] = useContext(MobileNavIsOpenContext);

  function TOC() {
    return (
      <>
        <ul className="list-disc">
          {toc.map(({ level, id, text }) => (
            <li key={id} className={`${getHeadingClass(level)} ${level === 1 ? "list-none" : ""}`}>
              <button className='group text-orange transition-all duration-300 ease-in-out text-left' onClick={() => {handleClickScroll(level === 1 ? "home" : id); setMobileNavOpen(false)}}>
                <span className='break-words w-fit bg-left-bottom bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'>
                  {text}
                </span>
              </button>
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

  const addToTOC = ({ children, ...props }: React.PropsWithChildren<HeadingProps>) => {
    const level = Number(props.node.tagName.match(/h(\d)/)?.slice(1));
    if (level && children && typeof children[0] === "string") {
      const content = textContent(children);
      const id = content.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      if (!toc.some(entry => entry.id === id)) {
        toc.push({ id: id, text: content, level: level });
      }
      return React.createElement(
        props.node.tagName, { id }, children
      )
    } else {
      return React.createElement(props.node.tagName, props, children);
    }
  };



  return (

    <Layout bgClass="bg-blue">
      <div className="max-w-full mx-auto">
        <div className="w-full px-4 lg:pl-[21rem]">
          <div className="max-w-3xl mx-auto xl:max-w-none py-10 xl:ml-0 xl:mr-64 xl:pr-16">
            <div className="w-full px-0 bg-white rounded-[20px] shadow-xl md:max-w-3xl lg:max-w-4xl py-4 lg:py-16 mx-auto">
              <div className="prose mx-auto px-4
                          prose-a:whitespace-nowrap
                          prose-a:relative z-20 
                          prose-a:text-orange 
                          text-decoration:prose-a:none 
                          hover:prose-a:text-orange 
                          before:prose-a:content-['']
                          before:prose-a:absolute
                          before:prose-a:block
                          before:prose-a:w-full
                          before:prose-a:h-[2px]
                          before:prose-a:bottom-0
                          before:prose-a:left-0
                          before:prose-a:bg-orange
                          before:prose-a:scale-x-0
                          before:prose-a:origin-top-left
                          before:prose-a:transition 
                          before:prose-a:duration-300 
                          before:prose-a:ease-in-out 
                          before:hover:prose-a:scale-x-100
                          prose-a:no-underline
                          prose-img:rounded-[20px]
                          prose-img:border-[3px]
                          prose-img:border-black
                          ">

                <ReactMarkdown
                  components={{
                    h1: addToTOC,
                    h2: addToTOC,
                    h3: addToTOC,
                    h4: addToTOC,
                  }}
                  linkTarget="_blank"
                  children={`${articleContent}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex fixed top-0 left-0 bottom-0 w-80 py-10 pl-4 lg:items-center">
          <nav className="relative bg-white rounded-[20px] p-4 w-[304px] shadow-xl">
            <h2 className="text-2xl text-center w-full">Table of Contents</h2>
            <TOC />
          </nav>
        </div>
      </div>
      <div className="hidden lg:block fixed top-4 left-10">
        <a className="z-[100]" href="/">
          <Logo />
        </a>
      </div>
      
      
      <Nav showOnLargeScreens={false} homePage={false}>
        <div className="text-left relative bg-white p-4 w-full">
          <TOC />
        </div>
      </Nav>
    </Layout>

  );
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