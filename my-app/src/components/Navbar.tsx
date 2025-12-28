
interface SectionProps {
    setSection: (value: string) => void
    activeSection: string
}

export default function Navbar({ setSection, activeSection }: SectionProps) {

    const listNavbar = [
        { label: 'Me', id: 'me' },
        { label: 'Skills', id: 'skills' },
        { label: 'Project', id: 'project' },
        { label: 'Contact Me', id: 'contact-me' },
    ]

    return (
        <>
            <nav className="z-50 fixed top-0 w-screen flex justify-center">
                <div className="relative flex items-center justify-between bg-[var(--background)] w-[90%] pb-1 px-10 text-[var(--color)] text-lg outline-2 outline-[var(--color)] select-none rounded-b-2xl">
                    <a>Text</a>

                    <ul className="flex gap-2">
                        {listNavbar.map((items, index) => {
                            return (
                                <li key={index}
                                    id={items.label}
                                    onClick={() => setSection(items.id)}
                                    className={`w-24 py-1.5 flex items-center justify-center text-[1rem] cursor-pointer transition ease-in duration-200
                                ${activeSection === items.id ? 'border-t-2' : 'hover:opacity-50'}
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