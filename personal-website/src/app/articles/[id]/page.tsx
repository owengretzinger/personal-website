import Article from "@/components/article"
import fs, { existsSync } from 'fs';
import path from 'path'

import { Metadata, ResolvingMetadata } from 'next'
import matter from "gray-matter";

const articleDirectory = path.join(process.cwd(), 'public/articles');


type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent?: ResolvingMetadata
  ): Promise<Metadata> {
    
    const fileName = params.id.endsWith(".md") ? params.id : `${params.id}.md`;

    const pathIfDisplayed = path.resolve(articleDirectory, "displayed_articles", fileName);
    const pathIfHidden = path.resolve(articleDirectory, "hidden_articles", fileName);
    const pathToArticle = existsSync(pathIfDisplayed) ? pathIfDisplayed : pathIfHidden
    const article = fs.readFileSync(pathToArticle, 'utf8');
    const articleMatter = matter(article);

    return {
        title: `${articleMatter.data.title}: ${articleMatter.data.subtitle}`,
        description: `${articleMatter.content.slice(0, 200)}`,
    }
}

export default function ArticlePage({ params }: { params: { id: string } }) {

    const fileName = params.id.endsWith(".md") ? params.id : `${params.id}.md`;

    const pathIfDisplayed = path.resolve(articleDirectory, "displayed_articles", fileName);
    const pathIfHidden = path.resolve(articleDirectory, "hidden_articles", fileName);
    const pathToArticle = existsSync(pathIfDisplayed) ? pathIfDisplayed : pathIfHidden;

    return (
        <main>
            <Article articlePathFromRoot={pathToArticle} />
        </main>
    )
}

export async function generateStaticParams() {

    const displayedDir = path.resolve(articleDirectory, 'displayed_articles');
    const hiddenDir = path.resolve(articleDirectory, 'hidden_articles');



    const filenames = fs.readdirSync(displayedDir).concat(fs.readdirSync(hiddenDir));

    return filenames.map((name: string) => ({
        id: name,
    }));
}