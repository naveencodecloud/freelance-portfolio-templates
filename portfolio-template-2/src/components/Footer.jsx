import { Github, Instagram, Twitter, Linkedin } from "lucide-react"

const socialLinks = [
    { href: "https://github.com/naveencodecloud", icon: Github, label: "Github" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "X" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
]

export const Footer = () => {
    return (
        <footer className="w-full max-w-7xl mx-auto px-6 py-10 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm text-zinc-400 dark:text-zinc-500">© site.com {new Date().getFullYear()}. All rights reserved.</span>
            <div className="flex items-center gap-5">
                <a href="mailto:hello@site.com" className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors no-underline hover:no-underline">hello@site.com</a>
                <div className="flex items-center gap-3">
                    {socialLinks.map(({ href, icon: Icon, label }, i) => (
                        <a key={i} href={href} target="_blank" aria-label={label} className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1">
                            <Icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
