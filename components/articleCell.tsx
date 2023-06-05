import { Article } from "@/utils/article";
import Image from "./image";
import Tags from "./tags";
import Link from "next/link";
import ArticleInfo from "./articleInfo";

export default function ArticleCell({ article }: { article: Article }) {
    return <div className="group grid grid-cols-5 gap-4 items-center place-items-center">
        <div className="space-y-2 col-span-3">
            <Link href={`/?page=1&category=${encodeURIComponent(article.category)}`}>
                <p className="text-lg text-txt-400 font-light hover:text-txt-500 hover:underline transition-all">{article.category}</p>
            </Link>
            <Link href={`/articles/${article.article_id}`}><h3 className="text-2xl font-medium hover:opacity-50 transition-opacity">{article.title}</h3></Link>
            <div className="pt-2">
                <Tags tags={article.keywords} />
            </div>
            <ArticleInfo article={article} />
        </div>
        <div className="col-span-2">
            <Image props={{
                src: article.article_cover_img ?? "",
                alt: article.article_cover_img_description,
                divClass: "h-[300px] w-auto overflow-hidden",
                imgClass: "object-center object-cover h-full"
            }} />
        </div>
    </div>
}