import Article from "@/components/article"
// import { usePathname } from 'next/navigation';
import fs from 'fs';
import path from 'path'
import { json } from "stream/consumers";

const articleDirectory = path.join(process.cwd(), 'public/articles');


export default function ArticlePage({ params }: { params: { id: string } }) {
    // const pathname = usePathname();
    // const id = pathname?.substring(pathname.lastIndexOf('/') + 1)
    // console.log("parapsm: " + JSON.stringify(params));

    //const path = tryRequire(`articles/displayed_articles/${params.id}`) ? `articles/displayed_articles/${params.id}` : `articles/hidden_articles/${params.id}`;
    
    
    const pathToArticle = path.resolve(articleDirectory, "displayed_articles", `${params.id}.md`);
    // C:\Users\12896\Important\Programming\Personal\personal-website\personal-website\public\articles\displayed_articles\a-mission-to-spread-love.md
    // C:\Users\12896\Important\Programming\Personal\personal-website\personal-website\public\articles\displayed_articles\a-mission-to-spread-love
    return (
        <main>
            {Article(pathToArticle)}
        </main>
    )
}

export async function generateStaticParams() {
    const dirRelativeToPublicFolder = 'displayed_articles'

    const dir = path.resolve(articleDirectory, dirRelativeToPublicFolder);

    const filenames = fs.readdirSync(dir);

    
    // const articleNames = fs.readdirSync("@/articles/displayed_articles");
   
    return filenames.map((name : string) => ({
      id: name,
    }));
  }

const tryRequire = (path: string) => {
    try {
        return require(`raw-loader!${path}.md`);
    } catch (err) {
        return null;
    }
  };