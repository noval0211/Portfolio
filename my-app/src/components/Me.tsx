import { useState } from "react"

export default function Me() {
    const [about, setAbout] = useState(false)
    return (
        <>
            <div className="w-screen min-h-screen h-fit bg-[var(--color)] flex flex-col md:flex-row items-center justify-around select-none md:pr-24">

                {/* PROFILE PICTURE */}
                <div className="w-full md:w-1/3 pt-30">
                    <div className="flex items-center justify-center">
                        <div className="relative bg-blue-500 w-40 md:w-50 lg:w-60 rounded-2xl select-none ">
                            <img src="./me.png"
                                className="bg-gradient-to-b from-black h-full border-4 border-[var(--background)] rounded-2xl" />
                        </div>
                    </div>

                </div>

                {/* MEDIA */}
                <div className="hidden absolute sm:mt-15 md:mt-0 translate-x-1/2 right-1/6 sm:right-1/5 md:-translate-y-1/2 ">
                    <ul className="flex flex-col sm:flex-row gap-3">
                        <li className="object-cover w-10 h-10 p-0.5 rounded-full flex items-center justify-center bg-[var(--background)] outline-2 outline-[var(--color)] cursor-pointer">
                            <img src="https://cdn-icons-png.flaticon.com/128/3670/3670032.png" />
                        </li>
                        <li className="object-cover w-10 h-10 p-0.5 rounded-full flex items-center justify-center bg-[var(--background)] outline-2 outline-[var(--color)] cursor-pointer">
                            <img src="https://cdn-icons-png.flaticon.com/128/15707/15707749.png" />
                        </li>
                        <li className="object-cover w-10 h-10 p-0.5 rounded-full flex items-center justify-center bg-[var(--background)] outline-2 outline-[var(--color)] cursor-pointer">
                            <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" />
                        </li>

                    </ul>
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-2/3 md:bg-[var(--background)] text-[var(--background)] md:text-[var(--color)] p-10 md:p-20 md:pt-32 ">

                    <div className="w-full flex flex-col ">
                        {/* MOBILE UI GREETINSG */}
                        <div className="sm:hidden flex flex-col gap-3 items-center font-extrabold">
                            <a className="text-2xl">Hello </a>
                            <a className="font-bold opacity-70 text-blue-900">I'm</a>
                            <a className="text-lg">Naufal Daffa Sya'bana</a>
                        </div>

                        {/* TAB & DESKTOP UI GREETINGS */}
                        <div className="hidden sm:flex flex-col items-center md:items-start bg-blue-500 bg-clip-text">
                            <div className="bg-gradient-to-b from-100% from-black to-transparent bg-clip-text">
                                <a className="font-extrabold text-xl">Hello, I'm <span className="text-transparent text-2xl">Naufal Daffa Sya'bana</span></a>
                            </div>
                            <a className="opacity-70 ">I as a Junior Web Developer</a>
                        </div>

                        {/* DESCRIBE */}
                        <div className="mt-10 flex flex-col gap-5 text-sm text-justify select-text">
                            <p>
                                I am a Junior Web Developer with hands-on experience
                                in building responsive and interactive web interfaces
                                using modern JavaScript frameworks.

                            </p>
                            <ul className="list-disc text-start ml-10">
                                <li>Can build responsive web applications using modern frontend technologies.</li>
                                <li>Could implement backend APIs for handling data and authentication.</li>
                                <li>Might apply clean code principles and proper project structuring.</li>
                                <li>Can use Git for version control and collaborate in team workflows.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full mt-10 select-text">
                        <div className="w-full h-full flex flex-col">
                            <a
                                onClick={() => setAbout(prev => !prev)}
                                className="w-fit font-extrabold underline underline-offset-8 cursor-pointer text-green-500">About Me
                                <span className="inline-block animate-pulse ml-2 text-xl">👋</span></a>

                            {!about && (
                                <a className="mt-5 ">{".".repeat(10)}</a>
                            )}

                            <ul className={`${!about && 'hidden'} mt-5 text-sm list-disc ml-10`}>
                                <li>I'm graduate from University Indraprasta PGRI (2025).</li>
                                <li>My goal from Code to make my personal AI.</li>
                                <li>I like to learn something who can make me close of my goal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}