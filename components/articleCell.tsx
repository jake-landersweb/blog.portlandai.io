import { Article } from "@/utils/article";
import Image from "./image";
import Tags from "./tags";
import Link from "next/link";
import ArticleInfo from "./articleInfo";

export default function ArticleCell({ article }: { article: Article }) {
    return <div data-aos="fade-up" className="group rounded-md md:rounded-none grid grid-cols-5 items-center place-items-center border border-cont-100 md:border-transparent overflow-hidden">
        <div className="col-span-2">
            <Link href={`/articles/${article.article_id}`}>
                <Image props={{
                    src: article.article_cover_img ?? "",
                    alt: article.article_cover_img_description,
                    divClass: "md:h-[250px] w-auto overflow-hidden grid place-items-center max-h-[150px] md:max-h-none",
                    imgClass: "object-center object-cover"
                }} />
            </Link>
        </div>
        <div className="col-span-3 pl-4 bg-cont-100 md:bg-transparent h-[150px] md:h-full grid place-items-center">
            <div className="space-y-2">
                <div className="">
                    <Link href={`/?page=1&category=${encodeURIComponent(article.category)}`}>
                        <p className="text-sm md:text-lg text-txt-400 font-light md:hover:text-txt-500 md:hover:underline transition-all">{article.category}</p>
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

    </div>
}