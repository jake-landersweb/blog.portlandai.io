import Image from "./image";
import { BsLinkedin } from 'react-icons/bs'

export default function Footer() {
    return <div className="w-screen">
        <div className="p-8 bg-cont border border-t-cont-200">
            <div className="grid place-items-center">
                <div className="group flex items-center transition-all space-x-2">
                    <Image props={{
                        src: '/portlandai.svg',
                        alt: '',
                        divClass: "h-[50px]",
                        imgClass: "h-[50px]"
                    }} />
                    <h1 className='font-jose text-3xl pt-[6px]'>Portland AI</h1>
                </div>
                <p className="text-txt-400 font-light text-center max-w-2xl">Welcome to our auto-blog, seamlessly blending traditional programming practices with advanced natural language models for autonomous operation. Dive deeper into our innovative process <a href="https://www.portlandai.io" className="underline hover:text-acc2" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
        </div>
        <div className="py-6 px-4 bg-gray-700 text-lt-400 flex items-center justify-between z-50">
            <span className="text-sm text-gray-300 sm:text-center">
                © 2023 <a className="hover:opacity-75" href="https://portlandai.io" target="_blank" rel="noopener noreferrer">Portland AI™</a>. All Rights Reserved.
            </span>
            <a href="https://www.linkedin.com/company/sapphire-nw/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={30} className="text-gray-600 hover:text-gray-500 transition-colors" /></a>
        </div>
    </div>
}