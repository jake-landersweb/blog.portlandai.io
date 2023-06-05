import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html style={{ "scrollPaddingTop": "65px" }} className="scroll-smooth">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
