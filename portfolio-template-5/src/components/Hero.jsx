import { Github, ArrowUpRight, Instagram, Twitter, Linkedin } from "lucide-react"

const navLinks = [
    { href: "https://github.com/naveencodecloud", icon: Github, label: "Github" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "X" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
]

const stack = ["React", "Next.js", "Node.js", "TypeScript", "AWS", "PostgreSQL", "MongoDB", "Docker", "OpenAI API"]

export const Hero = () => {
    return (
        <>
            {/* Nav */}
            <nav className="w-full max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-tight text-zinc-800">naveen<span className="text-emerald-500">.</span>dev</span>
                <div className="hidden md:flex items-center gap-8">
                    {["Work", "About", "Contact"].map(item => (
                        <a key={item} href={`#${item.toLowerCase()}`}
                            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors no-underline hover:no-underline">
                            {item}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    {navLinks.map(({ href, icon: Icon, label }, i) => (
                        <a key={i} href={href} aria-label={label}
                            className="text-zinc-400 hover:text-zinc-800 transition-colors p-1">
                            <Icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>
            </nav>

            {/* Hero */}
            <section className="w-full max-w-7xl mx-auto px-6 pt-16 pb-28 animate-fade-in">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-16">

                    {/* Left */}
                    <div className="flex-1 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Available for new projects
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-zinc-900">
                            I build MVPs<br />
                            that launch in<br />
                            <span className="text-emerald-500">weeks.</span>
                        </h1>

                        <p className="text-lg text-zinc-500 max-w-lg leading-relaxed mb-4">
                            Naveen — full stack developer specializing in custom AI web applications and rapid MVP development for early-stage startups.
                        </p>
                        <p className="text-base text-zinc-400 max-w-lg leading-relaxed mb-10">
                            From idea to live product, fast. I work directly with founders to design, architect, and ship production-grade apps — no agencies, no middlemen.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-12">
                            <a href="mailto:hello@site.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-colors no-underline hover:no-underline">
                                Start a project <ArrowUpRight className="w-4 h-4" />
                            </a>
                            <a href="#work"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-200 text-zinc-700 rounded-lg text-sm font-semibold hover:border-zinc-400 transition-colors no-underline hover:no-underline">
                                View work
                            </a>
                        </div>

                        {/* Stack */}
                        <div className="flex flex-wrap gap-2">
                            {stack.map((s, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs text-zinc-500 font-medium">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right — value props */}
                    <div className="lg:w-80 space-y-3 lg:pt-12">
                        {[
                            { label: "MVP in 4–6 weeks", desc: "Full-stack product shipped to production, not a prototype." },
                            { label: "AI-native by default", desc: "OpenAI, Anthropic, RAG pipelines — built into your core product." },
                            { label: "Founder-focused", desc: "Direct communication, no handoffs. You talk to the builder." },
                            { label: "Post-launch support", desc: "I stay on after launch for iteration, bugs, and growth features." },
                        ].map((item, i) => (
                            <div key={i} className="p-5 rounded-xl border border-zinc-100 bg-white hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors">
                                <p className="text-sm font-semibold text-zinc-800 mb-1">{item.label}</p>
                                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
