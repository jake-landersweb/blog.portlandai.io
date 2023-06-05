import { ResponseBody } from "@/utils/responseBody"

export interface ArticleIdea {
    blog_id: string;
    article_id: string;
    title: string;
    description: string;
    metadata: Record<string, any>;
    created?: number;
    created_str?: string;
    used?: boolean;
    updated?: number | null;
    updated_str?: string | null;
}

export interface Article {
    article_id: string;
    blog_id: string;
    article_idea_id: string;
    title: string;
    description: string;
    content: string | undefined;
    article_cover_img: any;
    article_cover_img_description: string;
    category: string;
    keywords: string[];
    author: string;
    read_length: string;
    difficulty: string;
    sources: string[];
    created: number;
    created_str: string;
    updated?: any;
    updated_str?: any;
}

export async function getArticles(pageSize?: number, pageNumber?: number, category?: string | undefined): Promise<ResponseBody> {
    const ROOT_URL = process.env.ROOT_URL;
    const API_KEY = process.env.API_KEY;

    if (!ROOT_URL || !API_KEY) {
        console.log("Environment not setup correctly")
        return {
            status: 500,
            message: "The environment was not setup correctly",
            body: undefined
        }
    }

    const res = await fetch(`${ROOT_URL}/portlandai/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            page_size: pageSize ?? 10,
            page_number: pageNumber ?? 1,
            category: category,
        }),
        next: {
            revalidate: 0,
        }
    });

    if (!res.ok) {
        return {
            status: 400,
            message: "There was an issue sending the request to the server",
            body: undefined
        }
    }

    const data = await res.json()

    return {
        status: 200,
        message: "Success",
        body: data
    }
}