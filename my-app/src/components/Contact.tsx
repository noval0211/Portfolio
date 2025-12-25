import InputArea from "./InputArea";
import InputForm from "./InputForm";

export default function Contact() {
    return (
        <>
            <div className="py-20">
                <div className="text-[var(--color)] flex flex-col justify-center items-center gap-2 ">
                    <a className="text-4xl font-bold">Contact Me</a>
                    <span className="opacity-70 w-1/2 text-center">Have a question or want to work together? Feel free to reach out. I'll get back to you as soon as possible.</span>
                </div>
                <form
                    className="w-1/2 p-10 mx-20 mt-25 bg-neutral-900 rounded-2xl">
                    <InputForm label="Name" type="text" placeholder="Your Name" />
                    <InputForm label="Email" type="email" placeholder="your.email@example.com" />
                    <InputForm label="Subject" type="text" placeholder="What is this about ?" />
                    <InputArea label="Message" placeholder="Your Message..." />
                    <button type="submit" className="w-full py-3 mt-3 font-bold text-[var(--color)] bg-gradient-to-r from-blue-500 to-green-500 rounded-md cursor-pointer">Send Message</button>
                </form>
            </div>
        </>
    )
}