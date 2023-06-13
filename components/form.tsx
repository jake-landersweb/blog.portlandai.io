import { Input, Loading, createTheme } from "@nextui-org/react";
import { useState } from "react";

export default function Form({ article_id }: { article_id: string }) {
    const [topic, setTopic] = useState("Learning more about auto-blog")
    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")

    const [isLoading, setIsLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    async function sendEmail() {
        if (formIsValid()) {
            try {
                setIsLoading(true)
                const b = {
                    "email": email,
                    "name": name,
                    "body": `Topic: ${topic}\nCompany: ${company}`,
                    "tag": `portlandai,${article_id}`,
                }
                const resp = await fetch('/api/mail', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(b)
                })
                console.log(resp)
                if (resp.status == 200) {
                    setShowSuccess(true)
                    setTimeout(() => setShowSuccess(false), 5000)
                    setTopic("")
                    setName("")
                    setCompany("")
                    setEmail("")
                } else {
                    setShowError(true)
                    setTimeout(() => setShowError(false), 5000)
                }
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
    }

    const getButtonClass = () => {
        var cls = "bg-main-400 transition-colors text-white h-[50px] rounded-md"
        if (showError) {
            cls += " bg-red-500"
        } else if (showSuccess) {
            cls += " bg-green-400"
        } else if (formIsValid()) {
            cls += " bg-main-500 hover:bg-main-600"
        }
        return cls
    }

    const formIsValid = () => {
        if (topic == "" || name == "" || company == "" || email == "" || !emailValid()) {
            return false
        } else {
            return true
        }
    }

    const emailValid = () => {
        if (email == "") {
            return true
        }
        const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const getNameValidationText = () => {
        if (name == "") {
            return " - Cannot be Empty"
        } else {
            return ""
        }
    }

    const getEmailValidationText = () => {
        if (email == "") {
            return " - Cannot be Empty"
        } else if (emailValid()) {
            return ""
        } else {
            return " - Invalid Email"
        }
    }

    const getButtonContent = () => {
        if (isLoading) {
            return <Loading type="points" color="currentColor" size="sm" />
        } else {
            if (showError) {
                return <p>There was an issue</p>
            }
            if (showSuccess) {
                return <p>Successfully sent request</p>
            }
            return <p>Submit</p>
        }
    }

    return <div>
        <div className="p-8 rounded-md bg-cont-100 w-fit space-y-8 lg:max-w-2xl text-lt">
            <h4 className="text-2xl md:text-4xl font-bold">Portland AI Auto-Blog</h4>
            <div className="space-y-2 pb-4">
                <p>Experience the cutting-edge innovation behind this blog post, powered by Portland AI's transformative auto-blog generation technology. Ready to revolutionize your business? Harness the potential of this advanced tech today. Explore integration possibilities by completing the form below. Step into the future of content creation with us!</p>
                <div className="">
                    <a className="underline hover:text-acc transition-colors" href="https://portlandai.io/#auto-blog" target="_blank" rel="noopener noreferrer">Learn how it works &rarr;</a>
                </div>
            </div>
            <div className="">
                <Input
                    underlined
                    fullWidth
                    labelPlaceholder={topic == "" ? "What would you like to talk about?" : "Topic"}
                    color="primary"
                    value={topic}
                    onChange={(e) => { setTopic(e.target.value) }}
                />
            </div>
            <div className="">
                <Input
                    underlined
                    fullWidth
                    labelPlaceholder={`Name${getNameValidationText()}`}
                    color="primary"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </div>
            <div className="">
                <Input
                    underlined
                    fullWidth
                    labelPlaceholder="Company"
                    color="primary"
                    value={company}
                    onChange={(e) => { setCompany(e.target.value) }}
                />
            </div>
            <div className="">
                <Input
                    underlined
                    fullWidth
                    inputMode="email"
                    labelPlaceholder={`Email${getEmailValidationText()}`}
                    color="primary"
                    value={email}
                    status={emailValid() ? "default" : "error"}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onClick={(_) => sendEmail()} disabled={!formIsValid()} className={getButtonClass()}>
                    {getButtonContent()}
                </button>
                <a href="https://calendly.com/jake-sapphirenw/30min" target="_blank" rel="noopener noreferrer">
                    <p className="border-2 border-cont-200 hover:bg-cont-200 transition-colors text-lt h-[50px] rounded-md grid place-items-center">
                        Schedule a Video Meeting
                    </p>
                </a>
            </div>
        </div>
    </div>
}