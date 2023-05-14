import Article from "../components/article";

export default function Page() {
    const id = "resources"
    return (
        <>
            {Article(`articles/hidden_articles/${id}`, id)}
        </>
    )
}