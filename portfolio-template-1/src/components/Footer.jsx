const footerLinks = [
    { href: "mailto: hello@example.com", label: "Contact" },
    { href: "#", label: "GitHub" },
    { href: "#", label: "LinkedIn" },
]

export const Footer = () => {
    return (
        <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto px-6 flex flex-row justify-center items-center gap-12 py-10">
            {
                footerLinks.map((link, index) => (
                    <a href={link.href} target="_blank" key={index} className="text-sm font-semibold hover:opacity-75 p-1">{link.label}</a>
                ))
            }
        </div>
    )
}
