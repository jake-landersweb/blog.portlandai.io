import { capitalize } from "@/utils/utils"

export default function Tags({ tags }: { tags: string[] }) {
    const items = []

    const tagCell = (tag: string) => {
        return <div className="bg-opacity-30 rounded-md text-main opacity-50 m-1 text-sm font-light">{`#${capitalize(tag)}`}</div>
    }

    for (let i = 0; i < tags.length; i++) {
        items.push(tagCell(tags[i]))
    }

    return <div className="flex flex-wrap">{items}</div>
}