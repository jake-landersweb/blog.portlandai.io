import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer';
import Menu from '@/components/menu';
import Head from 'next/head';
import Link from 'next/link';
import Image from '@/components/image';
import { useEffect } from 'react';
import AOS from "aos";
import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
        colors: {
            primary: '#3C63EC',
            secondary: '#A47DE2',
        },
    }
})

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);

    return <>
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-2QC05WSRCX"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-2QC05WSRCX');
            `,
                }}
            />
        </Head>
        <div className="scroll-smooth text-txt">
            <header className='md:hidden'>
                <Header />
            </header>
            <main>
                <NextUIProvider theme={theme}>
                    <div className="min-h-screen mx-auto">
                        <div className="grid grid-cols-8 gap-4 pt-[65px] md:pt-0">
                            <div className="hidden md:block md:col-span-2 bg-cont-100 min-h-[100vh]">
                                <div className="sticky top-4 overflow-auto whitespace-normal mx-auto max-w-[500px] py-4 px-2 lg:px-8">
                                    <div className="space-y-2 mr-2">
                                        <Link href="/">
                                            <div className="group flex items-center transition-all space-x-2">
                                                <Image props={{
                                                    src: '/sapphire-nw-text-blue.svg',
                                                    alt: '',
                                                    divClass: "h-[50px]",
                                                    imgClass: "h-[50px]"
                                                }} />
                                            </div>
                                        </Link>
                                        <p className='text-txt-300 font-light'>
                                            Explore contemporary discussion of the intersection of AI and other sectors of the world.
                                        </p>
                                        <div className="my-10">
                                            <Menu className={''} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-8 md:col-span-6 overflow-auto">
                                <div className="max-w-[1000px] mx-auto py-8 px-4">
                                    <Component {...pageProps} />
                                </div>
                            </div>
                        </div>
                    </div>
                </NextUIProvider>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    </>
}

export default MyApp