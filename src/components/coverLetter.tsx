import fs from 'fs';
import path from 'path'

import matter from "gray-matter";
import ReactMarkdown from 'react-markdown';
import { TextLinkPassProps } from './textLink';

const letterDirectory = path.join(process.cwd(), 'public/articles');

export default function CoverLetterContent() {

  const pathToLetter = path.resolve(letterDirectory, "cover_letter.md");
  const letter = fs.readFileSync(pathToLetter, 'utf8');
  const letterMatter = matter(letter);

  return (
    <ReactMarkdown
      components={{
        a: ({ ...props }) => {
          props.target = "_blank";
          return (
            <TextLinkPassProps {...props}></TextLinkPassProps>
          )
        }
      }}
      children={`${letterMatter.content}`}
    />
  )

}