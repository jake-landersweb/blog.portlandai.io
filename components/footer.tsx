import NextImage from "next/image";
import Link from "next/link";
import Image from "./image";

export default function Footer() {
    return <div className="w-screen p-8 bg-cont">
        <div className="max-w-[1200px] px-4 mx-auto space-y-2">
            <div className="group flex items-center transition-all space-x-4">
                <Image props={{
                    src: '/portlandai.png',
                    alt: '',
                    divClass: "h-[50px]",
                    imgClass: "h-[50px]"
                }} />
                <h1 className='font-jose text-2xl pt-1'>Portland AI</h1>
            </div>
            <p className="text-txt-400 font-light max-w-2xl">Welcome to our auto-blog, seamlessly blending traditional programming practices with advanced natural language models for autonomous operation. Dive deeper into our innovative process <a href="https://www.portlandai.io/auto-blog" className="underline hover:text-acc2" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
    </div>
}