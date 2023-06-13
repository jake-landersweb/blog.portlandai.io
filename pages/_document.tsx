import { CssBaseline } from "@nextui-org/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html style={{ "scrollPaddingTop": "65px" }} className="scroll-smooth">
            <Head>{CssBaseline.flush()}</Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
