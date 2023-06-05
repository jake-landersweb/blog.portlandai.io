import { Article } from "@/utils/article";
import Image from "./image";
import Tags from "./tags";
import Link from "next/link";
import ArticleInfo from "./articleInfo";

export default function ArticleCell({ article }: { article: Article }) {
    return <div className="group bg-cont-100 rounded-md p-2 md:p-0 md:rounded-none md:bg-transparent md:grid md:grid-cols-5 md:gap-4 md:items-center md:place-items-center">
        <div className="space-y-2 col-span-3">
            <Link href={`/?page=1&category=${encodeURIComponent(article.category)}`}>
                <p className="text-lg text-txt-400 font-light hover:text-txt-500 hover:underline transition-all">{article.category}</p>
            </Link>
            <Link href={`/articles/${article.article_id}`}><h3 className="text-2xl font-medium hover:opacity-50 transition-opacity">{article.title}</h3></Link>
            <div className="pt-2">
                <Tags tags={article.keywords} />
            </div>
            <div className="pb-2 md:pb-0">
                <ArticleInfo article={article} />
            </div>
        </div>
        <div className="col-span-2">
            <Link href={`/articles/${article.article_id}`}>
                <Image props={{
                    src: article.article_cover_img ?? "",
                    alt: article.article_cover_img_description,
                    divClass: "h-[200px] md:h-[300px] w-auto overflow-hidden grid place-items-center md:block",
                    imgClass: "object-center object-cover h-full"
                }} />
            </Link>
        </div>
    </div>
}