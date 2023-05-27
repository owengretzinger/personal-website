'use client';

import Article from "@/components/article"
import { usePathname } from 'next/navigation';


export default function ArticlePage() {
    const pathname = usePathname();
    const id = pathname?.substring(pathname.lastIndexOf('/') + 1)
    const path = tryRequire(`articles/displayed_articles/${id}`) ? `articles/displayed_articles/${id}` : `articles/hidden_articles/${id}`;
    
    return (
        <main>
            {Article(path/*, id as string*/)}
        </main>
    )
}

const tryRequire = (path: string) => {
    try {
        return require(`raw-loader!../../../../${path}.md`);
    } catch (err) {
        return null;
    }
  };