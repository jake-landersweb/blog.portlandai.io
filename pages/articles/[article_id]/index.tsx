import ArticleInfo from '@/components/articleInfo';
import MarkdownRenderer from '@/components/markdownRenderer/markdownRenderer';
import Tags from '@/components/tags';
import { Article } from '@/utils/article';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillRedditCircle, AiOutlineCheck, AiOutlineLink, AiOutlineTwitter } from 'react-icons/ai'
import { TbRobot } from 'react-icons/tb'

interface ArticleProps {
    article: Article;
}

export const getServerSideProps: GetServerSideProps<ArticleProps, ParsedUrlQuery> = async (
    context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
    const { article_id } = context.params || {};
    const ROOT_URL = process.env.ROOT_URL;
    const API_KEY = process.env.API_KEY;

    // Make the API request to fetch the article data
    const response = await fetch(`${ROOT_URL}/portlandai/articles/${article_id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
    });
    const article: Article = await response.json();

    return {
        props: {
            article,
        },
    };
};

export default function ArticlePage({ article }: ArticleProps) {

    const [copied, setCopied] = useState(false)

    const sources = () => {
        const items = []
        for (let i = 0; i < article.sources.length; i++) {
            items.push(<a className='text-txt-400 hover:text-txt transition-all hover:underline' href={article.sources[i]} target="_blank" rel="noopener noreferrer"><p>- {article.sources[i]}</p></a>)
        }
        return items
    }

    const shareLink = (icon: JSX.Element, bgColor: string, link: string) => {
        return <a href={link} target="_blank" rel="noopener noreferrer">
            <div className={`${bgColor} text-white hover:opacity-60 transition-all p-2 rounded-md`}>
                {icon}
            </div>
        </a>
    }

    const shareLinks = () => {
        const items = []
        const url = encodeURIComponent(`blog.portlandai.io/articles/${article.article_id}`);
        const text = encodeURIComponent(article.title);

        const facebookUrl = `https://www.facebook.com/sharer.php?u=${url}`;
        const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
        const redditUrl = `https://www.reddit.com/submit?url=${url}&title=${text}`;

        items.push(shareLink(<AiFillFacebook size={25} />, "bg-facebook", facebookUrl))
        items.push(shareLink(<AiOutlineTwitter size={25} />, "bg-twitter", twitterUrl))
        items.push(shareLink(<AiFillLinkedin size={25} />, "bg-linkedin", linkedInUrl))
        items.push(shareLink(<AiFillRedditCircle size={25} />, "bg-reddit", redditUrl))

        return items
    }

    function wait(seconds: number): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(resolve, seconds * 1000);
        });
    }

    async function copyToClipboard(text: string) {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true)
            await wait(3);
            setCopied(false)
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    const getCopyIcon = () => {
        if (copied) {
            return <AiOutlineCheck size={25} />
        } else {
            return <AiOutlineLink size={25} />
        }
    }

    return <>
        <Head>
            <title>Portland AI - {article.title}</title>
            <meta name="description" content={article.description} />
            <meta name="keywords" content={article.keywords.join(',')} />
            <meta name="author" content={article.author} />
            <meta name="category" content={article.category} />
            <meta name="article:published_time" content={new Date(article.created).toISOString()} />

            {/* Open Graph tags */}
            <meta property="og:title" content={article.title} />
            <meta property="og:description" content={article.description} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`https://blog.portlandai.io/article/${article.article_id}`} />
            <meta property="og:image" content={article.article_cover_img} />
            <meta property="og:image:alt" content={article.article_cover_img_description} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={article.title} />
            <meta name="twitter:description" content={article.description} />
            <meta name="twitter:image" content={article.article_cover_img} />
            <meta name="twitter:image:alt" content={article.article_cover_img_description} />

            {/* Schema.org markup */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://blog.portlandai.io/article/${article.article_id}`
                    },
                    "headline": article.title,
                    "description": article.description,
                    "image": [article.article_cover_img],
                    "author": {
                        "@type": "Person",
                        "name": article.author
                    },
                    "datePublished": new Date(article.created).toISOString(),
                    "publisher": {
                        "@type": "Organization",
                        "name": "Portland AI",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://blog.portlandai.io/favicon.ico",
                            "width": 1024,
                            "height": 1024
                        }
                    }
                })
            }} />
        </Head>
        <div className="space-y-8">
            <h1 className='text-4xl md:text-6xl font-light'>{article.title}</h1>
            <div className="space-y-4 grid place-items-center">
                <img src={article.article_cover_img} alt={article.article_cover_img_description} className={`object-scale-down max-h-[300px]`} />
                <p className='text-txt-400 font-light text-center max-w-2xl'>{article.description}</p>
            </div>
            <Tags tags={article.keywords} />
            <div className="hidden md:block">
                <ArticleInfo article={article} />
            </div>
            <MarkdownRenderer content={`${article.content!.replace(/\\n/g, '\n')}`} />
            <div data-aos="fade-up" className="bg-cont p-4 space-y-4 rounded-md flex flex-col justify-center items-start h-full">
                <div className="p-4 bg-acc w-min rounded-full text-white"><TbRobot size={50} /></div>
                <div className="space-y-2 flex-grow">
                    <h3 className="text-2xl font-medium">AI Content Generation</h3>
                    <p className="font-light">This article was generated completely automonously using AI. Seamlessly combine AI prowess and traditional programming expertise: the Autonomous AI-Powered Blog Management Platform. Our platform is a testament to the creative potential of AI, offering a fully automated, AI-run blog operation that can create, manage, and grow your online presence. It&apos;s not just a tool—it&apos;s a dynamic partner that can take your content strategy to the next level.</p>
                </div>
                <a href="https://portlandai.io" target="_blank" rel="noopener noreferrer"><p className="hover:underline hover:cursor-pointer hover:text-acc w-fit">Learn More &rarr;</p></a>
            </div>
            <div className="space-y-1">
                <p className='font-light'>Share This Article:</p>
                <div className="flex space-x-2 items-center">
                    <button onClick={(_) => copyToClipboard(`blog.portlandai.io/articles/${article.article_id}`)}>
                        <div className={`bg-acc text-white hover:opacity-60 transition-all p-2 rounded-md hover:cursor-pointer`}>
                            {getCopyIcon()}
                        </div>
                    </button>
                    {shareLinks()}
                </div>
            </div>
            <div className="space-y-2">
                <h4 className='font-light'>Sources:</h4>
                <div className="">
                    {sources()}
                </div>
            </div>
        </div>
    </>
}