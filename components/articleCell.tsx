import { Article } from "@/utils/article";
import Image from "./image";
import Tags from "./tags";
import Link from "next/link";
import ArticleInfo from "./articleInfo";

export default function ArticleCell({ article }: { article: Article }) {
    return <div data-aos="fade-up" className="group rounded-md p-2 md:p-0 md:rounded-none grid grid-cols-5 gap-4 items-center place-items-center border border-cont-100 md:border-transparent">
        <div className="col-span-2">
            <Link href={`/articles/${article.article_id}`}>
                <Image props={{
                    src: article.article_cover_img ?? "",
                    alt: article.article_cover_img_description,
                    divClass: "md:h-[300px] w-auto overflow-hidden grid place-items-center md:block",
                    imgClass: "object-center object-cover h-full"
                }} />
            </Link>
        </div>
        <div className="space-y-2 col-span-3">
            <div className="hidden md:block">
                <Link href={`/?page=1&category=${encodeURIComponent(article.category)}`}>
                    <p className="text-lg text-txt-400 font-light hover:text-txt-500 hover:underline transition-all">{article.category}</p>
                </Link>
            </div>
            <Link href={`/articles/${article.article_id}`}><h3 className="md:text-2xl md:font-medium md:hover:opacity-50 transition-opacity">{article.title}</h3></Link>
            <div className="md:pt-2 hidden md:block">
                <Tags tags={article.keywords} />
            </div>
            <div className="">
                <ArticleInfo article={article} />
            </div>
        </div>

    </div>
}