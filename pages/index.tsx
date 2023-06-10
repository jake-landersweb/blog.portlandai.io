import ArticleList from '@/components/articleList';
import { Article, getArticles } from '@/utils/article';
import { GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';
import Head from 'next/head';
import ServerError from '@/components/serverError';

interface ArticleListProps {
    error: boolean;
    articles: Article[];
    page: number;
    morePages: boolean;
    category: string | null;
}

const Home: NextPage<ArticleListProps> = ({ error, articles, page, morePages, category }) => {
    if (error) {
        return <ServerError />
    }

    const nav = () => {
        const items = []
        if (page > 1) {
            items.push(<Link href={`/?page=${page - 1}`}>
                <p className='px-4 py-2 bg-cont-100 rounded-md text-txt hover:opacity-50 transition-opacity'>Previous page</p>
            </Link>)
        }
        if (morePages) {
            items.push(<Link href={`/?page=${page + 1}`}>
                <p className='px-4 py-2 bg-main rounded-md text-white hover:opacity-50 transition-opacity'>Next page</p>
            </Link>)
        }
        return items
    }

    const getCat = () => {
        if (category == null) {
            return "Recent Posts"
        }
        return category
    }

    return <>
        <Head>
            <title>Portland AI - Latest Articles</title>
            <meta name="description" content="Explore contemporary discussion of the intersection of AI and other sectors of the world." />
            <link rel="canonical" href="https://blog.portlandai.io" />
        </Head>
        <div className="space-y-4 md:space-y-2">
            <h2 className='text-3xl md:text-4xl font-light'>{getCat()}</h2>
            <div className="space-y-8">
                <ArticleList articles={articles} />
                <div className="flex items-center space-x-2">
                    {nav()}
                </div>
            </div>
        </div>
    </>
};

export default Home;

interface QueryParams extends ParsedUrlQuery {
    page?: string;
}

export const getServerSideProps: GetServerSideProps<ArticleListProps, QueryParams> = async ({ query }) => {
    try {
        const pageSize = 10; // Set your desired page size
        const { page, category } = query

        if (!page || isNaN(Number(page))) {
            return {
                redirect: {
                    destination: '/?page=1',
                    permanent: true,
                },
            };
        }

        let cat = undefined

        if (category) {
            cat = decodeURIComponent(category.toString())
        }

        const pageNumber = Number(page)


        // Fetch the articles using the provided function
        const res = await getArticles(pageSize, pageNumber, cat);

        if (res.status == 200) {
            return {
                props: {
                    error: false,
                    articles: res.body.articles,
                    page: pageNumber,
                    morePages: res.body.more,
                    category: cat == undefined ? null : cat,
                }
            };
        } else {
            console.log("Error fetching articles: ", res.message)
            return {
                props: {
                    error: true,
                    articles: [],
                    page: 1,
                    morePages: false,
                    category: null,
                }
            }
        }
    } catch (error) {
        console.error('Error fetching articles:', error);
        return {
            props: {
                error: true,
                articles: [],
                page: 1,
                morePages: false,
                category: null,
            }
        };
    }
};