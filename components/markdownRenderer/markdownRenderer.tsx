import Image from "next/image"
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function MarkdownRenderer({ content }: { content: string }) {
    type MarkdownHeader = {
        type: string,
        title: string,
    }

    function parseMdHeaders(markdown: string): MarkdownHeader[] {
        const result: MarkdownHeader[] = [];
        const lines = markdown.split('\n');


        for (const l of lines) {
            const line = l.trim()
            const match = line.match(/^(\#{1,6})\s*(.+)$/);
            if (match) {
                const type = 'h' + match[1].length;
                const title = match[2];
                // ignore h1 tags
                if (type != "h1") {
                    result.push({ type, title });
                }
            }
        }

        return result;
    }

    const getNav = () => {
        const mdHeaders = parseMdHeaders(content)

        const navItems: any[] = []

        for (let i = 0; i < mdHeaders.length; i++) {
            let className: string
            let prefix: string
            switch (mdHeaders[i].type) {
                case "h2":
                    className = "text-lg font-medium text-txt-500 hover:text-main"
                    prefix = ""
                    break;
                case "h3":
                    className = "text-txt-400 hover:text-main"
                    prefix = "-"
                    break;
                default:
                    className = "pl-2 text-txt-300 hover:text-main"
                    prefix = "-"
            }
            navItems.push(createNavLink(mdHeaders[i].title, prefix, className))
        }

        return navItems
    }

    const generateSlug = (str: string) => {

        str = str?.replace(/^\s+|\s+$/g, '')
        str = str?.toLowerCase()
        const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
        const to = 'aaaaaeeeeiiiioooouuuunc------'

        for (let i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
        }

        str = str?.replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')

        return str
    }

    const createNavLink = (title: string, prefix: string, className: string = "") => {
        return <a href={`#${generateSlug(title)}`}><p className={`transition-all ${className}`}>{prefix} {title}</p></a>
    }

    const MarkdownComponents: object = {
        blockquote({ node, inline, className, ...props }: any) {
            return <div className="pt-4 px-4 border border-bg-acc rounded-md">
                <div className="flex space-x-2 content-center text-txt-400">
                    <IoIosInformationCircleOutline size={20} />
                    <div className="font-mono text-sm">NOTE:</div>
                </div>
                <span {...props} />
            </div>
        },
        // remove large headers, as they are most likely a mistake
        h1: (props: any) => {
            return <div className=""></div>
        },
        h2: (props: any) => {
            const arr = props.children
            let heading = ''

            for (let i = 0; i < arr.length; i++) {
                if (arr[i]?.type !== undefined) {
                    for (let j = 0; j < arr[i].props.children.length; j++) {
                        heading += arr[i]?.props?.children[0]
                    }
                } else heading += arr[i]
            }

            const slug = generateSlug(heading)
            return <h2 id={slug} {...props}></h2>
        },
        h3: (props: any) => {
            const arr = props.children
            let heading = ''

            for (let i = 0; i < arr.length; i++) {
                if (arr[i]?.type !== undefined) {
                    for (let j = 0; j < arr[i].props.children.length; j++) {
                        heading += arr[i]?.props?.children[0]
                    }
                } else heading += arr[i]
            }

            const slug = generateSlug(heading)

            return <h3 id={slug} {...props}></h3>
        },
        h4: (props: any) => {
            const arr = props.children
            let heading = ''

            for (let i = 0; i < arr.length; i++) {
                if (arr[i]?.type !== undefined) {
                    for (let j = 0; j < arr[i].props.children.length; j++) {
                        heading += arr[i]?.props?.children[0]
                    }
                } else heading += arr[i]
            }

            const slug = generateSlug(heading)
            return <h4 id={slug} {...props}></h4>
        },
        p: (paragraph: { children?: boolean; node?: any }) => {
            const items = []
            const { node } = paragraph

            for (let i = 0; i < node.children.length; i++) {
                if (node.children[i].tagName === "img") {
                    const image = node?.children[i]
                    // check if image is actually from the s3 host
                    if (image.properties.src.includes("https://portlandai-autoblog-images.s3.us-west-2.amazonaws.com/")) {
                        const metastring = image?.properties?.alt
                        const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
                        // const hasCaption = metastring?.toLowerCase().includes('{caption:')
                        // const caption = metastring?.match(/{caption: (.*?)}/)?.pop()

                        items.push(<div className="grid place-items-center">
                            <img src={image.properties.src} alt={alt} className={`object-scale-down max-h-[300px]`} />
                            {/* <Image src={image.properties.src} alt={alt} fill className="object-cover max-h-[300px]" /> */}
                            <div className="text-txt-400 text-sm font-extralight" aria-label={alt}>{alt}</div>
                        </div>)
                    }
                } else {
                    items.push(<p>{node.children[i].value}</p>)
                }
            }
            return <div>{items}</div>
        },
        a: (anchor: { href: string; children: Array<any> }) => {
            if (anchor.href.match('http')) {
                return (
                    <a
                        href={anchor.href}
                        target="_blank"
                        rel="noopener noreferrer">
                        {anchor.children}
                    </a>
                )
            }
            return <a href={anchor.href}>{anchor.children}</a>
        },
    }

    return <div className="">
        <div className="flex flex-row-reverse" data-aos="fade-up" data-aos-offset="200" data-aos-delay="250">
            <div className="space-y-4">
                <div className="border-t border-cont-200 w-full"></div>
                <div className="p-4">
                    {getNav()}
                </div>
                <div className="border-t border-cont-200 w-full"></div>
                <div className="grid grid-cols-4 place-items-center">
                    <div className="prose prose-stone prose-a:text-main hover:prose-a:opacity-50 transiton-all max-w-full col-span-4 prose-headings:text-main">
                        <ReactMarkdown components={MarkdownComponents}>
                            {content}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
}