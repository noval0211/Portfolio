import gsap from "gsap"
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skillJson from '../json/skill.json'
import { Code, Server, Wrench } from 'lucide-react'
import type { LucideIcon } from "lucide-react";


const iconMap: Record<string, LucideIcon> = {
    code: Code,
    server: Server,
    wrench: Wrench
}

const colorMap: Record<string, string> = {
    Frontend: "from-blue-500 to-cyan-200",
    Backend: "from-green-500 to-emerald-200",
    Tools: "from-red-500 to-orange-200"
}

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
    const text = 'SKILLS'
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".skill-letter", {
                y: -80,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "bounce.out",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 80%",
                    toggleActions: "restart reverse restart reverse"
                },
            })

            gsap.fromTo(".skill",
                {
                    x: "100%",
                    opacity: 0
                },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 2,
                    stagger: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "restart reverse restart reverse",
                    },
                }
            )

            gsap.to(".icon-spin", {
                rotation: "+=360",
                repeat: -1,
                duration: 5,
                ease: "none", 
            });

        }, containerRef)
        return () => ctx.revert()
    }, [])

    const data = skillJson.skill

    return (
        <>
            <div ref={containerRef} className="bg-[var(--background)] flex flex-col gap-5 py-30 p-10 md:p-20 h-full items-center justify-between">
                {/* TITLE OF SECTION */}
                <div className="flex md:gap-4 font-extrabold">
                    {text.split("").map((char, index) => (
                        <a key={index}
                            className="scale-75 md:scale-100 skill-letter w-12 aspect-square flex items-center justify-center text-2xl text-[var(--color)] outline-2 outline-[var(--color)] rounded-md">
                            {char}
                        </a>
                    ))}
                </div>

                {/* LITTLE TEXT DESCRIBE */}
                <span className="text-center text-[var(--color)] opacity-70 ">
                    Here are the tools that I can use in web development for frontend and backend.
                </span>
                
                {/* LIST */}
                <div
                    className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 md:mt-10">
                    {data.map((items, index) => {
                        const Icon = iconMap[items.icon]
                        const Color = colorMap[items.title]
                        return (
                            <div
                                key={index}
                                className="skill w-full p-5 bg-neutral-900 rounded-2xl flex flex-col flex-1 gap-5"
                                onMouseOver={(e) => gsap.to(e.currentTarget, {
                                    scale: 1.01,
                                    duration: 0.3,
                                    boxShadow: "0px 0px 5px rgba(255,255,255,1)",
                                    ease: "power2.out"
                                })}
                                onMouseLeave={(e) => gsap.to(e.currentTarget, {
                                    scale: 1,
                                    duration: 0.3,
                                    boxShadow: "0px 0px 0px rgba(0,0,0,1)",
                                    ease: "power2.out"
                                })}>

                                <div className="flex gap-3 items-center">
                                    <div className={`bg-gradient-to-br ${Color} w-15 h-15 p-[4px] rounded-full`}>
                                        <div className="icon-spin w-full h-full bg-[var(--background)] flex items-center justify-center rounded-full" >
                                            {Icon && <Icon className="w-full text-[var(--color)]" />}
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-[var(--color)]">
                                        <span className="font-extrabold">{items.title}</span>
                                        <span className="opacity-60">{items.describe}</span>
                                    </div>
                                </div>
                                <hr className="bg-[var(--color)] h-[3px] rounded-full opacity-60" />
                                <ul className="flex h-full flex-col gap-2 bg-[var(--background)] p-3 rounded-xl">
                                    {items.list.map((items, index) => (
                                        <li key={index}
                                            className="flex flex-col gap-3 font-bold">
                                            <div className="flex justify-between  text-[var(--color)]">
                                                {items.name}
                                                <span className="px-3 py-0.5 bg-[var(--color)] text-[var(--background)] text-sm rounded-md">{items.percentage}%</span>
                                            </div>
                                            <div className="relative h-3">
                                                <div className="w-full h-full bg-[var(--color)] rounded-full opacity-70 " />
                                                <div className="z-10 absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-green-500 outline-2 rounded-full"
                                                    style={{ width: `${items.percentage}%` }} />
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                                <hr className="bg-[var(--color)] h-[3px] rounded-full opacity-60" />
                                <span className="text-[var(--color)] text-center text-sm">{items.list.length} core technology</span>
                            </div>
                        )
                    })}

                </div>
            </div >
        </>
    )
}