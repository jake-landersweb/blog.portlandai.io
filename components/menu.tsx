import NextLink from 'next/link'
import { MouseEventHandler } from 'react'

export default function Menu({ className, onClick }: { className: string, onClick?: MouseEventHandler<HTMLAnchorElement> | undefined }) {
    const menuItems = ["Tech Infrastructure", "Strategic Innovation", "AI & Customer Experience", "AI Basics", "Workforce Evolution", "Tech Ethics", "AI Overview",]

    const menuItem = (title: string) => {
        return <div className="">
            <NextLink onClick={onClick} href={`/?page=1&category=${encodeURIComponent(title)}`}>
                <h3 className='text-lg hover:text-txt-400 transition-all hover:underline'>
                    {title}
                </h3>
            </NextLink>
        </div>
    }

    let items = []
    for (let i = 0; i < menuItems.length; i++) {
        items.push(menuItem(menuItems[i]))
    }

    return <div className={className}>
        <div className="space-y-2">
            <h3 className='text-sm font-semibold text-gray-400'>Categories</h3>
            {items}
            <div className="border border-cont-200 bg-white p-2 rounded-md space-y-2">
                <div className="">
                    <p className='text-xs font-medium text-acc'>Sapphire NW</p>
                    <h4 className='font-light text-txt-500'>Want to use this technology for your own site or business?</h4>
                </div>
                <div className="">
                    <a className="underline text-txt-400 hover:text-acc transition-colors" href="https://sapphirenw.com/auto-blog" target="_blank" rel="noopener noreferrer">Learn more &rarr;</a>
                </div>
            </div>
        </div>
    </div>
}