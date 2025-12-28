
export default function Me() {
    return (
        <>
            <div className="h-screen pt-50">
                <div className="relative bg-[var(--color)] h-full">
                    
                    {/* PROFILE PICTURE */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-50 h-full ">
                        <div className="w-full h-50 bg-[var(--color)] outline-2 outline-[var(--background)]  rounded-2xl">

                        </div>
                    </div>

                    {/* MEDIA */}
                    <div className="absolute right-1/6 -translate-y-1/2 ">
                        <ul className="flex gap-2">
                            <li className="object-cover w-[3vw] h-[3vw] p-0.5 rounded-full flex items-center justify-center bg-[var(--background)] outline-2 outline-[var(--color)] cursor-pointer">
                                <img src="https://cdn-icons-png.flaticon.com/128/3670/3670032.png"/>
                            </li>
                            <li className="object-cover w-[3vw] h-[3vw] p-0.5 rounded-full flex items-center justify-center bg-[var(--background)] outline-2 outline-[var(--color)] cursor-pointer">
                                <img src="https://cdn-icons-png.flaticon.com/128/15707/15707749.png"/>
                            </li>
                            <li className="object-cover w-[3vw] h-[3vw] p-0.5 rounded-full flex items-center justify-center bg-[var(--background)] outline-2 outline-[var(--color)] cursor-pointer">
                                <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png"/>
                            </li>
                        
                        </ul>
                    </div>

                    {/* CONTENT */}
                    <div className="w-full p-15 flex justify-between">
                        <div className="w-1/2 flex flex-col">
                            <a className="font-extrabold">Hello, I'm Naufal Daffa Sya'bana</a>
                            <a>I as a Junior Web Developer</a>

                            <div className="mt-10 flex flex-col gap-3">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti accusamus earum itaque, illum deserunt accusantium assumenda totam repellat amet similique non beatae molestiae sint culpa, aperiam quo quis ea incidunt.
                                </p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti accusamus earum itaque, illum deserunt accusantium assumenda totam repellat amet similique non beatae molestiae sint culpa, aperiam quo quis ea incidunt.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2 pl-35 ">
                            <div className="w-full h-full">
                                <a className=" font-extrabold">About Me</a>
                                <p className="mt-5">
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