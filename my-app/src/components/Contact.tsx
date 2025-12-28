import InputArea from "./InputArea";
import InputForm from "./InputForm";
import api from "../api/api";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const resetForm = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }
    const MailPost = async (e: React.FormEvent) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);

        const res = await api.post('email/send', formData)

        if (!res) return toast.error("Failed to Send Email");

        toast.success(res.data.message)
        resetForm()
    }

    return (
        <>
            <div className="py-20">
                <div className="text-[var(--color)] flex flex-col justify-center items-center gap-2 ">
                    <a className="text-4xl font-bold">Contact Me</a>
                    <span className="opacity-70 w-1/2 text-center">Have a question or want to work together? Feel free to reach out. I'll get back to you as soon as possible.</span>
                </div>
                <form onSubmit={MailPost}
                    className="w-1/2 p-10 mx-20 mt-25 bg-neutral-900 rounded-2xl">
                    <InputForm label="Name" type="text" placeholder="Your Name" valueName={name} setValue={setName} />
                    <InputForm label="Email" type="email" placeholder="your.email@example.com" valueName={email} setValue={setEmail} />
                    <InputForm label="Subject" type="text" placeholder="What is this about ?" valueName={subject} setValue={setSubject} />
                    <InputArea label="Message" placeholder="Your Message..." valueName={message} setValue={setMessage} />
                    <button type="submit" className="w-full py-3 mt-3 font-bold text-[var(--color)] bg-gradient-to-r from-blue-500 to-green-500 rounded-md cursor-pointer">Send Message</button>
                </form>
            </div>
        </>
    )
}