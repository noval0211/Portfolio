import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Me from "./components/Me"
import Skills from "./components/Skills"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  const [activeSection, setActiveSection] = useState('me')

  const sectionMove = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    })
  }

  useEffect(() => {
    const section = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.4 })
    section.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    fetch("https://topupstore-omega.vercel.app");
  }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar setSection={sectionMove} activeSection={activeSection} />

        <section id="me" className="w-screen min-h-screen h-fit ">
          <Me />
        </section>

        <section id="skills" className="w-screen min-h-screen h-fit">
          <Skills />
        </section>

        <hr className="bg-[var(--color)] h-0.5" />

        <section id="project" className="w-screen min-h-screen h-fit">
          <Project />
        </section>

        <hr className="bg-[var(--color)] h-0.5" />

        <section id="contact-me" className="w-screen min-h-screen h-fit">
          <Contact />
        </section>

        <hr className="bg-[var(--color)] h-0.5" />
        <Footer />
      </div>
    </>
  )
}

export default App