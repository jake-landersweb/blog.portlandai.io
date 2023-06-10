import { Article } from "@/utils/article";
import Image from "./image";
import Tags from "./tags";
import Link from "next/link";
import ArticleInfo from "./articleInfo";

export default function ArticleCell({ article }: { article: Article }) {
    return <div data-aos="fade-up" className="group rounded-md md:rounded-none grid grid-cols-5 grid-flow-row items-stretch border border-cont-100 md:border-transparent overflow-hidden h-[150px] md:h-full">
        <div className="col-span-2 relative overflow-hidden h-full">
            <Link href={`/articles/${article.article_id}`} className="h-full">
                <div className="h-full w-full max-h-[200px]">
                    <img src={article.article_cover_img} className="object-cover h-full w-full" />
                </div>
            </Link>
        </div>
        <div className="col-span-3 pl-4 bg-cont-100 md:bg-transparent md:h-full grid place-items-center py-2">
            <div className="md:space-y-2">
                <div className="">
                    <Link href={`/?page=1&category=${encodeURIComponent(article.category)}`}>
                        <p className="text-sm md:text-lg text-txt-400 font-light md:hover:text-txt-500 md:hover:underline transition-all">{article.category}</p>
                    </Link>
                </div>
                <Link href={`/articles/${article.article_id}`}><h3 className="md:text-2xl md:font-medium md:hover:opacity-50 transition-opacity">{article.title}</h3></Link>
                <div className="md:pt-2 hidden lg:block">
                    <Tags tags={article.keywords} />
                </div>
                <div className="">
                    <ArticleInfo article={article} />
                </div>
            </div>
        </div>
    </div>
}
