import { ResponseBody } from "./responseBody";

export interface Vendor {
    org_id: string;
    blog_id: string;
    prompt: string;
    categories: string[];
    created: number;
    created_str: string;
    updated: number | null;
    updated_str: string | null;
}

export async function getVendor(): Promise<ResponseBody> {
    const ORG_ID = process.env.ORG_ID;
    const BLOG_ID = process.env.BLOG_ID;
    const ROOT_URL = process.env.ROOT_URL;
    const API_KEY = process.env.API_KEY

    if (!ORG_ID || !BLOG_ID || !ROOT_URL || !API_KEY) {
        console.log("Environment not setup correctly")
        return {
            status: 500,
            message: "The environment was not setup correctly",
            body: undefined
        }
    }

    const res = await fetch(`${ROOT_URL}/${ORG_ID}/${BLOG_ID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        next: {
            revalidate: 60,
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