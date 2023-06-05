import { Vendor } from '@/utils/vendor'
import NextLink from 'next/link'

export default function Menu({ className }: { className: string }) {
    const menuItems = ["Tech Infrastructure", "Strategic Innovation", "AI & Customer Experience", "AI Basics", "Workforce Evolution", "Tech Ethics", "AI Overview",]

    const menuItem = (title: string) => {
        return <div className="">
            <NextLink href={`/?page=1&category=${encodeURIComponent(title)}`}>
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
            {items}
        </div>
    </div>
}