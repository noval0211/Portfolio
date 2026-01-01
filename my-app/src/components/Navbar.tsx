import { Menu } from "lucide-react"
import { useState } from "react"

interface SectionProps {
    setSection: (value: string) => void
    activeSection: string
}

export default function Navbar({ setSection, activeSection }: SectionProps) {

    const [mobileMenu,setMobileMenu] = useState(false) 
    
    const listNavbar = [
        { label: 'Me', id: 'me' },
        { label: 'Skills', id: 'skills' },
        { label: 'Project', id: 'project' },
        { label: 'Contact Me', id: 'contact-me' },
    ]

    return (
        <>
            <nav className="z-50 fixed top-0 w-screen flex justify-center">
                <div className="flex items-center justify-between bg-[var(--background)] w-[90%] pb-1 px-10 text-[var(--color)] text-lg outline-2 select-none rounded-b-2xl">
                    <a className="font-bold cursor-pointer" onClick={() => setSection('me')}>My.Porto</a>
                    
                    <div 
                    onClick={() => setMobileMenu(prev => !prev)}
                    className="p-2 lg:hidden">
                        <Menu size={40}/>
                    </div>
                    
                    <ul className={`absolute lg:relative lg:flex lg:gap-2 font-bold ${mobileMenu ? 'flex top-16 mt-1 right-[5%] bg-[var(--color)] text-[var(--background)] outline-2 rounded-2xl' : 'hidden'}`}>
                        {listNavbar.map((items, index) => {
                            return (
                                <li key={index}
                                    id={items.label}
                                    onClick={() => {
                                        setSection(items.id),
                                        setMobileMenu(false)
                                    }}
                                    className={`w-fit px-4 lg:px-5 py-3 lg:py-1.5 flex items-center justify-center text-[1rem] cursor-pointer transition ease-in duration-200
                                ${activeSection === items.id ? 'lg:border-t-2' : 'hover:opacity-50'}
                                `}>
                                    {items.label}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>

        </>
    )
}