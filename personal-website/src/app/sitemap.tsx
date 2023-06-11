import { MetadataRoute } from 'next'
import path from 'path';
import fs from 'fs';

const articleDirectory = path.join(process.cwd(), 'public/articles');

export default function sitemap(): MetadataRoute.Sitemap {

    const allArticles = fs.readdirSync(path.resolve(articleDirectory, "displayed_articles")).concat(fs.readdirSync(path.resolve(articleDirectory, "hidden_articles")));
    
    const allArticlesSiteMap = allArticles.map((url: string) => ({
        url: `https://owengretzinger.com/articles/${url}`,
    }));

    return [
        {
            url: 'https://owengretzinger.com',
        },
        {
            url: 'https://owengretzinger.com/resume',
        },
    ].concat(allArticlesSiteMap);
}