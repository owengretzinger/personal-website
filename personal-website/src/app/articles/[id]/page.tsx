import Article from "@/components/article"
import ArticleBackground from "@/components/articleBackground";
import fs, { existsSync } from 'fs';
import path from 'path'

const articleDirectory = path.join(process.cwd(), 'public/articles');


export default function ArticlePage({ params }: { params: { id: string } }) {

    const fileName = params.id.endsWith(".md") ? params.id : `${params.id}.md`;

    const pathIfDisplayed = path.resolve(articleDirectory, "displayed_articles", fileName);
    const pathIfHidden = path.resolve(articleDirectory, "hidden_articles", fileName);
    const pathToArticle = existsSync(pathIfDisplayed) ? pathIfDisplayed : pathIfHidden;

    return (
        <main>
            <ArticleBackground>
                <Article articlePathFromRoot={pathToArticle} />
            </ArticleBackground>
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