import NextLink from 'next/link'
import { useState } from "react";
import Image from './image';
import Menu from './menu';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="bg-cont border border-b-cont-200 z-50 items-center w-screen grid place-items-center fixed top-0 left-0 h-[65px]">
            <div className="flex items-center justify-between max-w-[1200px] w-full px-2">
                <div className="flex space-x-4">
                    <div className="">
                        <NextLink href="/" onClick={(e) => closeMenu()}>
                            <div className="group flex items-center transition-all space-x-2">
                                <Image props={{
                                    src: '/portlandai.svg',
                                    alt: '',
                                    divClass: "h-[50px]",
                                    imgClass: "h-[50px]"
                                }} />
                                <h1 className='font-jose text-3xl pt-[6px]'>Portland AI</h1>
                            </div>
                        </NextLink>
                    </div>
                </div>
                {/* The full sized menu */}
                {/* {menu("hidden md:flex md:space-x-8 md:items-center")} */}
                {/* Mobile menu */}
                {isOpen ? (
                    <button onClick={handleClick} className={`md:hidden text-txt-400 w-10 h-10 focus:outline-none fixed right-2 z-50`}>
                        <span className="sr-only">Open main menu</span>
                        <div
                            className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                            <span aria-hidden="true" className={`${isOpen ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                            <span aria-hidden="true"
                                className={`${isOpen ? 'opacity-0' : ''}  block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out`}></span>
                            <span aria-hidden="true"
                                className={`${isOpen ? "-rotate-45" : "translate-y-1.5"}  block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
                        </div>
                    </button>
                ) : (
                    <button onClick={handleClick} className={`md:hidden text-txt-400 w-10 h-10 relative focus:outline-none z-50`}>
                        <span className="sr-only">Open main menu</span>
                        <div
                            className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                            <span aria-hidden="true" className={`${isOpen ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                            <span aria-hidden="true"
                                className={`${isOpen ? 'opacity-0' : ''}  block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out`}></span>
                            <span aria-hidden="true"
                                className={`${isOpen ? "-rotate-45" : "translate-y-1.5"}  block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
                        </div>
                    </button>
                )}
                <Menu onClick={(_) => closeMenu()}
                    className={`top-0 right-0 w-[75vw] py-[75px] pb-4 space-y-2 px-4 bg-cont fixed h-screen z-40 ease-in-out duration-300 border-l border-cont-200 overflow-auto ${isOpen ? "translate-x-0 " : "translate-x-full"}`}
                />
            </div>
        </div>
    )
}

export default Header