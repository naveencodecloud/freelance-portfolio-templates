import { Github, Instagram, Twitter, Linkedin } from "lucide-react"

const socialLinks = [
    { href: "https://github.com/naveencodecloud", icon: Github, label: "Github" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "X" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
]

export const Footer = () => {
    return (
        <footer className="w-full max-w-6xl mx-auto px-6 py-10">
            <div className="glass rounded-2xl px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-sm text-white/30">© naveen.studio {new Date().getFullYear()}. All rights reserved.</span>
                <div className="flex items-center gap-5">
                    <a href="mailto:hello@naveen.studio" className="text-sm text-white/40 hover:text-white transition-colors no-underline hover:no-underline">hello@naveen.studio</a>
                    <div className="flex items-center gap-3">
                        {socialLinks.map(({ href, icon: Icon, label }, i) => (
                            <a key={i} href={href} target="_blank" aria-label={label} className="text-white/40 hover:text-white transition-colors p-1">
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
