import { Github, Instagram, Twitter, Linkedin, ArrowUpRight } from "lucide-react"

const socialLinks = [
    { href: "https://github.com/naveencodecloud", icon: Github, label: "Github" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "X" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
]

export const Footer = () => {
    return (
        <footer className="w-full border-t border-zinc-100">
            <div className="w-full max-w-7xl mx-auto px-6 py-20">

                {/* CTA */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mb-16">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-4">Let's build together</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
                            Have a startup idea?<br />
                            <span className="text-emerald-500">Let's ship it.</span>
                        </h2>
                    </div>
                    <a href="mailto:hello@example.com"
                        className="inline-flex items-center gap-3 px-7 py-4 bg-zinc-900 text-white rounded-xl font-semibold text-sm hover:bg-zinc-700 transition-colors no-underline hover:no-underline group shrink-0">
                        hello@example.com
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>

                {/* Bottom */}
                <div className="border-t border-zinc-100 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-sm text-zinc-400">© naveen.studio {new Date().getFullYear()}. All rights reserved.</span>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ href, icon: Icon, label }, i) => (
                                <a key={i} href={href} aria-label={label}
                                    className="text-zinc-400 hover:text-zinc-800 transition-colors p-1">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
