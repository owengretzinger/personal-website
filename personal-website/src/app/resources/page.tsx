import Article from "@/components/article"

import path from 'path'
const articleDirectory = path.join(process.cwd(), 'public/articles');


export default function ArticlePage({ params }: { params: { id: string } }) {

    const pathToArticle = path.resolve(articleDirectory, "hidden_articles", "resources.md")

    return (
        <main className="bg-blue">
            <Article articlePathFromRoot={pathToArticle} />
        </main>
    )
}