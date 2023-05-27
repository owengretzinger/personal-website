import { useRouter } from 'next/router';

import Article from "../../components/article";


export default function Page() {
    const router = useRouter();
    const { query = {} } = router || {};
    const { id = 0 } = query || {};

    const path = tryRequire(`articles/displayed_articles/${id}`) ? `articles/displayed_articles/${id}` : `articles/hidden_articles/${id}`;

    return (
        <main>
            {Article(path, id as string)}
        </main>
    )
}

const tryRequire = (path: string) => {
    try {
        return require(`raw-loader!../../../${path}.md`);
    } catch (err) {
        return null;
    }
  };