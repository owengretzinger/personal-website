import Article from "@/components/article"
import fs, { existsSync } from 'fs';
import path from 'path'

const articleDirectory = path.join(process.cwd(), 'public/articles');


export default function ArticlePage({ params }: { params: { id: string } }) {

    const pathIfDisplayed = path.resolve(articleDirectory, "displayed_articles", `${params.id}.md`);
    const pathIfHidden = path.resolve(articleDirectory, "hidden_articles", `${params.id}.md`);
    const pathToArticle = existsSync(pathIfDisplayed) ? pathIfDisplayed : pathIfHidden;





    return (
        <main id="articleBackground" className="changeColOnStart toWave">
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