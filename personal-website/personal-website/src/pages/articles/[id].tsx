import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import Layout from '../../../components/layout';
import Nav from "../../../components/nav";
import matter from 'gray-matter';

export default function Post() {

  return (
    <Layout>
      
      <div className="min-h-screen py-8 relative overflow-hidden lg:py-12 bg-blue">
        <div className="relative w-full px-6 py-12 bg-white rounded-[20px] shadow-xl md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
          <MarkdownToHtml />
        </div>
      </div>

    </Layout>

  );
}



function MarkdownToHtml(){
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

  return (
    <div className="prose
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
      ">
      <ReactMarkdown 
        components={{a: ({ node, ...props }) => <a target="_blank" {...props} />}}
        children={`${articleContent}`} 
      />
    </div>
  );
}