import { Github, Instagram, Twitter, Linkedin, ArrowUpRight } from "lucide-react"

const socialLinks = [
    { href: "https://github.com/naveencodecloud", icon: Github, label: "Github" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "X" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
]

export const Footer = () => {
    return (
        <footer className="w-full bg-neutral-900 text-white mt-16">
            <div className="max-w-6xl mx-auto px-8">

                {/* CTA Row */}
                <div className="py-16 border-b border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-5">Let's Talk</p>
                        <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-white">
                            Got a project<br />
                            <span className="text-[#ffe600]">in mind?</span>
                        </h2>
                    </div>
                    <a href="mailto:hello@example.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#ffe600] text-neutral-900 font-black text-sm uppercase tracking-widest hover:bg-white transition-colors no-underline hover:no-underline group shrink-0">
                        hello@example.com
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>

                {/* Bottom Row */}
                <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider">
                        © naveen.studio {new Date().getFullYear()}. All rights reserved.
                    </span>
                    <div className="flex items-center gap-2">
                        {socialLinks.map(({ href, icon: Icon, label }, i) => (
                            <a key={i} href={href} target="_blank" aria-label={label}
                                className="p-2 border border-neutral-700 hover:border-[#ffe600] hover:text-[#ffe600] transition-colors text-neutral-500">
                                <Icon className="w-3.5 h-3.5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
