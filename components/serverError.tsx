import Head from "next/head"
import Link from "next/link"

const ServerError = () => {
    return <>
        <Head>
            <title key="title">Sapphire - Server Error</title>
            <meta name="keywords" id="keywords" content="Pacific Northwest Development,Portland Software Development,Oregon Software Development,Local Web Development,Mobile App Development,Portland Mobile App Development,Pretty Software,Ellegant UI,Luxury Software Development" />
        </Head>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-main">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Oh no!</p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Something went wrong. Please try again.</p>
                <div className="grid place-items-center">
                    <Link href="/">
                        <p className="bg-main px-4 py-2 rounded-md text-white hover:opacity-50 transition-opacity">Back to Home</p>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default ServerError