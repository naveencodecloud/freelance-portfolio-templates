import { Github, ArrowUpRight, Instagram, Twitter, Linkedin } from "lucide-react"

const navLinks = [
    { href: "https://github.com/naveencodecloud", icon: Github, label: "Github" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "X" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
]

export const Hero = () => {
    return (
        <>
            {/* Nav */}
            <header className="w-full border-b-2 border-neutral-200">
                <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-800">Naveen.Studio</span>
                    <nav className="hidden md:flex items-center">
                        {["Work", "About", "Contact"].map((item, i) => (
                            <a key={i} href={`#${item.toLowerCase()}`}
                                className="text-xs font-bold uppercase tracking-widest px-5 py-2 text-neutral-500 border-l border-neutral-200 hover:bg-[#ffe600] hover:text-neutral-900 transition-colors no-underline hover:no-underline">
                                {item}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        {navLinks.map(({ href, icon: Icon, label }, i) => (
                            <a key={i} href={href} target="_blank" aria-label={label}
                                className="p-2 border border-neutral-200 hover:bg-[#ffe600] hover:border-neutral-300 transition-colors">
                                <Icon className="w-3.5 h-3.5 text-neutral-600" />
                            </a>
                        ))}
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="w-full max-w-6xl mx-auto px-8 animate-fade-in">
                {/* Yellow accent band */}
                <div className="bg-[#ffe600] border-b border-neutral-300 px-6 py-2 flex items-center gap-3 -mx-8">
                    <div className="w-2 h-2 rounded-full bg-neutral-800" />
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-800">Available for projects — 2025</span>
                </div>

                <div className="py-20 border-b border-neutral-200">
                    <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-end">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.4em] text-neutral-400 mb-8">Web Designer & Creative Director</p>
                            <h1 className="text-[14vw] md:text-[9vw] font-black uppercase leading-[0.85] tracking-tight text-neutral-900">
                                NAVEEN<br />
                                STUDIO<br />
                                <span className="relative inline-block">
                                    <span className="relative z-10"></span>
                                    <span className="absolute inset-0 bg-[#ffe600] -skew-x-3 -z-0" />
                                </span>
                            </h1>
                        </div>
                        <div className="space-y-8 pb-2">
                            <p className="text-base leading-relaxed text-neutral-500">
                                I design websites, brands, and digital experiences that are bold by intention and precise by craft.
                            </p>
                            <a href="mailto:hello@site.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#ffe600] hover:text-neutral-900 transition-colors no-underline hover:no-underline group">
                                Start a Project
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
