import { Article } from "@/utils/article";
import { convertEpochToDateString } from "@/utils/utils";
import { IoMdTime } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { LuGauge } from "react-icons/lu";

export default function ArticleInfo({ article }: { article: Article }) {
    const large = () => {
        return <div className="text-txt-400 grid grid-cols-3 items-center">
            <div className="flex items-center space-x-2 mx-auto">
                <IoCalendarOutline size={20} />
                <p>{convertEpochToDateString(article.created)}</p>
            </div>
            <div className="flex items-center space-x-2 mx-auto">
                <IoMdTime size={20} />
                <p>{article.read_length}</p>
            </div>
            <div className="flex items-center space-x-2 mx-auto">
                <LuGauge size={20} />
                <p>{article.difficulty}</p>
            </div>
        </div>
    }

    const small = () => {
        return <p className="text-xs font-light text-cont-400">{convertEpochToDateString(article.created)}</p>
    }

    return <div className="">
        <div className="lg:hidden">{small()}</div>
        <div className="hidden lg:block">{large()}</div>
    </div>
}