import { Article } from "@/utils/article";
import ArticleCell from "./articleCell";

export default function ArticleList({ articles }: { articles: Article[] }) {
    let items = []

    for (let i = 0; i < articles.length; i++) {
        items.push(<ArticleCell article={articles[i]} />)
    }

    return <div className="space-y-8 md:space-y-16">{items}</div>
}