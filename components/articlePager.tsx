"use client"

import { Article, getArticles } from "@/utils/article"
import { useState } from "react"
import ArticleList from "./articleList"

export default async function ArticlePager() {
    const [pageNumber, setPageNumber] = useState(0)

    const [articles, setArticles] = useState<Article[]>([])

    const res = await getArticles(2, 1)
    setArticles(res.body)

    return <div className="">
        <ArticleList articles={articles} />
    </div>
}