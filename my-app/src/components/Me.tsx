
export default function Me() {
    return (
        <>
            <div className="md:pt-50">
                <div className="relative bg-[var(--color)] pt-40 pb-20 md:pt-0 h-full select-none">

                    {/* PROFILE PICTURE */}
                    <div className="absolute top-30 md:-top-20 left-1/2 -translate-x-1/2 ">
                        <div className="relative w-40 md:w-50 lg:w-60 h-fit bg-[var(--color)] rounded-2xl select-none ">
                            <img src="./me.png"
                                className="bg-gradient-to-b from-black h-full border-4 border-[var(--background)] rounded-2xl" />
                        </div>
                    </div>

                    {/* MEDIA */}
                    <div className="absolute sm:mt-15 md:mt-0 translate-x-1/2 right-1/6 sm:right-1/5 md:-translate-y-1/2 ">
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
                    <div className="w-full pt-60 p-10 md:p-7 lg:p-10 xl:p-15 flex flex-col md:flex-row md:justify-between">
                        
                        <div className="w-full md:w-1/3 flex flex-col ">
                            {/* MOBILE UI GREETINSG */}
                            <div className="sm:hidden flex flex-col gap-3 items-center font-extrabold">
                                <a className="text-2xl">Hello </a>
                                <a className="font-bold opacity-70 text-blue-900">I'm</a>
                                <a className="text-lg">Naufal Daffa Sya'bana</a>
                            </div>

                            {/* TAB & DESKTOP UI GREETINGS */}
                            <div className="hidden sm:flex flex-col items-center md:items-start">
                                <a className="font-extrabold">Hello, I'm Naufal Daffa Sya'bana</a>
                                <a>I as a Junior Web Developer</a>
                            </div>

                            {/* DESCRIBE */}
                            <div className="mt-10 flex flex-col gap-3 text-sm text-justify select-text">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti accusamus earum itaque, illum deserunt accusantium assumenda totam repellat amet similique non beatae molestiae sint culpa, aperiam quo quis ea incidunt.
                                </p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti accusamus earum itaque, illum deserunt accusantium assumenda totam repellat amet similique non beatae molestiae sint culpa, aperiam quo quis ea incidunt.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 mt-5 select-text    ">
                            <div className="w-full h-full ">
                                <a className="font-extrabold">About Me</a>
                                <p className="mt-5 text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae fugit libero, earum quisquam beatae unde nihil labore id sapiente inventore laudantium! Ex iure iusto repudiandae minima. Ullam, omnis alias.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}