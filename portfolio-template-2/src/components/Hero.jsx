import { Github, Moon, Sun, ArrowUpRight, Instagram, Twitter, Linkedin } from "lucide-react"
import portraitShot from "../assets/portraitshot.png"

const navLinks = [
    { href: "https://github.com/naveencodecloud", icon: Github, label: "Github" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "X" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
]

export const Hero = ({ isDark, toggleTheme }) => {
    return (
        <>
            {/* Nav */}
            <nav className="w-full max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                <span className="text-sm font-mono font-semibold tracking-tight text-zinc-400 dark:text-zinc-500">naveen.dev</span>
                <div className="flex items-center gap-4">
                    {navLinks.map(({ href, icon: Icon, label }, i) => (
                        <a key={i} href={href} target="_blank" aria-label={label} className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1">
                            <Icon className="w-4 h-4" />
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="ml-1 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <section className="w-full max-w-7xl mx-auto px-6 py-20 md:py-32">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 animate-fade-in">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Available for freelance work</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-zinc-900 dark:text-zinc-50">
                            Full Stack<br />
                            <span className="text-indigo-600 dark:text-indigo-400">Developer</span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-10">
                            I build fast, scalable web applications for startups and growing businesses. Clean code, thoughtful architecture, real results.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href="mailto:hello@naveen.studio" className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity no-underline hover:no-underline">
                                Get in touch <ArrowUpRight className="w-4 h-4" />
                            </a>
                            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors no-underline hover:no-underline">
                                View work
                            </a>
                        </div>
                    </div>
                    {/* Portrait */}
                    <div className="shrink-0 w-64 lg:w-80">
                        <img src={portraitShot} alt="Portrait" className="w-full aspect-4/5 object-cover rounded-2xl" />
                    </div>
                </div>
            </section>
        </>
    )
}
