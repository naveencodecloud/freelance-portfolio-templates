import { useState } from "react"
import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"

const App = () => {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="relative min-h-screen overflow-clip bg-[#f5f5f5] dark:bg-[#0e0e0e] text-[#0d0d0d] dark:text-[#f5f5f5] transition-colors duration-300">
        <main>
          <Hero isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
