import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer';
import Menu from '@/components/menu';
import { GetServerSideProps } from 'next';
import { Vendor, getVendor } from '@/utils/vendor';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
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
            <header>
                <Header />
            </header>
            <main>
                <div className="max-w-[1200px] p-[65px] px-4 space-y-16 min-h-screen mx-auto">
                    <div className="grid grid-cols-8">
                        <div className="hidden md:block md:col-span-2">
                            <div className="sticky top-[65px] overflow-auto whitespace-normal">
                                <div className="space-y-2 mr-2">
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
                            <Component {...pageProps} />
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    </>
}

export default MyApp