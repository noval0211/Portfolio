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

    const handleLink = (name: string) => {
        switch (name) {
            case 'Gmail':
                const recipientEmail = "novaldaffa0211@gmail.com";
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`;
                window.open(gmailUrl, "_blank");
                break;
            case 'Whatsapp':
                const url = 'https://wa.me/6281382234517'
                window.open(url, '_blank')
                break;
        }
    };

    const dataContact = [
        {
            name: 'Gmail',
            desc: 'novaldaffa0211@gmail.com',
            posibleContact: true,
            imgUrl: 'https://cdn-icons-png.flaticon.com/128/5968/5968534.png'
        },
        {
            name: 'Linked In',
            posibleContact: true,
            imgUrl: 'https://cdn-icons-png.flaticon.com/128/145/145807.png'
        },
        {
            name: 'Instagram',
            posibleContact: false,
            imgUrl: 'https://cdn-icons-png.flaticon.com/128/15707/15707749.png'
        },
        {
            name: 'Facebook',
            posibleContact: false,
            imgUrl: 'https://cdn-icons-png.flaticon.com/128/3670/3670032.png'
        },
        {
            name: 'Whatsapp',
            desc: '081382234517',
            posibleContact: true,
            imgUrl: 'https://cdn-icons-png.flaticon.com/128/3670/3670051.png'
        },
    ]
    return (
        <>
            <div className="py-25">
                <div className="text-[var(--color)] flex flex-col justify-center items-center gap-2 ">
                    <a className="text-4xl font-bold">Contact Me</a>
                    <span className="opacity-70 w-1/2 text-center">Have a question or want to work together? let's contact me. i'll try to respond as fast as posible</span>
                </div>

                <div className="flex flex-col md:flex-row items-center md:gap-5 mx-5 lg:mx-20 mt-10">
                    
                    {/* FEATURE MAIL FORM */}
                    <form onSubmit={MailPost}
                        className="relative order-2 md:order-1 w-full lg:w-1/2 p-10 bg-neutral-900 rounded-2xl scale-75 md:scale-90">

                        <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-5 items-center justify-center text-[var(--color)] font-bold backdrop-blur-xs rounded-2xl">
                            <a className="text-3xl text-center">Sorry Feature Not Working</a>
                            <a className="w-1/2 text-center opacity-70">For Now</a>
                        </div>

                        <InputForm label="Name" type="text" placeholder="Your Name" valueName={name} setValue={setName} />
                        <InputForm label="Email" type="email" placeholder="your.email@example.com" valueName={email} setValue={setEmail} />
                        <InputForm label="Subject" type="text" placeholder="What is this about ?" valueName={subject} setValue={setSubject} />
                        <InputArea label="Message" placeholder="Your Message..." valueName={message} setValue={setMessage} />
                        <button type="submit" className="w-full py-3 mt-3 font-bold text-[var(--color)] bg-gradient-to-r from-blue-500 to-green-500 rounded-md cursor-pointer">Send Message</button>
                    </form>

                    {/* CLASIC */}
                    <div className="w-[80%] lg:w-1/2 md:order-2 flex flex-col gap-4  scale-90">
                        {dataContact.map((items, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleLink(items.name)}
                                    className={`relative bg-neutral-900 text-[var(--color)] flex items-center px-7 py-2 rounded-full ${items.desc && 'group'} outline-1 outline-white ${items.posibleContact ? 'hover:outline-1 cursor-pointer' : 'outline-none'}   `}>
                                    <img src={items.imgUrl} className="w-10 h-10" />
                                    <div className="relative flex flex-col justify-center ml-5 ">
                                        <a className="font-bold translate-y-0 group-hover:-translate-y-2.5 transition-all ease-in duration-150">{items.name}</a>
                                        <span className="absolute text-sm opacity-0 translate-y-0 group-hover:opacity-70 group-hover:translate-y-2.5 transition-all ease-in duration-150">{items.desc}</span>
                                    </div>
                                    <div className="absolute right-5 w-2 h-2 bg-[var(--color)] rounded-full" />
                                    <div className={`${items.posibleContact && 'hidden'} z-10 absolute top-0 left-0 backdrop-blur-xs w-full h-full rounded-full`} />
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div >
        </>
    )
}