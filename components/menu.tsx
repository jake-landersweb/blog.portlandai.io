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
        </div>
    </div>
}