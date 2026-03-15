import { Github, Instagram, Twitter, Linkedin } from "lucide-react"

const socialLinks = [
    { href: "https://github.com/naveencodecloud", icon: Github, label: "Github" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "X" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
]

export const Footer = () => {
    return (
        <footer className="w-full max-w-7xl mx-auto px-6 py-16 mt-8 border-t border-[#0d0d0d]/15 dark:border-[#f5f5f5]/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black mb-2 text-[#0e0e0e] dark:text-[#f5f5f5]">Let's work<br />together.</h2>
                    <a href="mailto:hello@example.com" className="text-lg font-semibold bg-linear-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-fuchsia-300 transition-all">hello@example.com</a>
                </div>
                <div className="flex items-center gap-5">
                    {socialLinks.map(({ href, icon: Icon, label }, i) => (
                        <a key={i} href={href} aria-label={label} className="text-[#0d0d0d]/55 dark:text-[#f5f5f5]/40 hover:text-[#0e0e0e] dark:hover:text-[#f5f5f5] transition-colors p-1">
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
            <p className="text-sm text-[#0d0d0d]/35 dark:text-[#f5f5f5]/20 mt-12">© naveen.studio {new Date().getFullYear()}. All rights reserved.</p>
        </footer>
    )
}
