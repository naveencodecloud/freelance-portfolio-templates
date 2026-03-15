import portraitShot from '../assets/portraitshot.png';

const navLinks = [
    { href: "https://github.com/naveencodecloud", label: "GitHub" },
    { href: "#", label: "LinkedIn" },
]

export const Hero = () => {
    return (
        <>

            {/* Header Links */}
            <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto px-6 flex flex-row justify-end items-center gap-5 p-5">
                {navLinks.map((link, index) => (
                    <a href={link.href} target="_blank" key={index} className="text-sm font-semibold hover:opacity-75 p-1">{link.label}</a>
                ))}
            </div>

            {/* Landing Page */}
            <section className="py-24">
                <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto px-6 flex flex-row flex-wrap justify-between items-center gap-12">
                    {/* Left Content */}
                    <div className="flex-1 flex flex-col items-start gap-6 animate-fade-in">
                        <h1 className="text-4xl md:text-6xl lg:text-5xl font-semibold leading-[1.2]">
                            Naveen is a full stack SaaS developer working with founders to design, architect, and launch scalable web applications.
                        </h1>
                        <a href="mailto: hello@site.com" className="text-lg font-semibold p-1 underline hover:opacity-75">Contact</a>
                        <div className="flex items-center gap-3 mt-2 px-4 py-3 text-sm text-gray-800 font-medium bg-gray-200 rounded-full">
                            <div className="w-2.5 h-2.5 bg-green-600 rounded-full" />
                            <span>Available for new projects</span>
                        </div>
                    </div>


                    {/* Right Content */}
                    <div className="relative max-w-md mx-auto">
                        <img src={portraitShot} className="w-full aspect-4/5 object-cover sm:rotate-1" alt />
                    </div>
                </div>
            </section>
        </>
    )
}


