const techStack = ["React", "Typescript", "Node.js", "Express", "Javascript", "MongoDB", "PostgreSQL", "Jest", "Python", "GraphQL", "Git", "Github", "Tailwindcss", "Docker", "AWS", "Web Security", "Hugging Face", "AI Integration"]


export const About = () => {
    return (
        <section className="relative pt-8 overflow-hidde">
            <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 sm:gap-12 items-center">
                {/* Content */}
                <div className="md:max-w-xl">
                    <p className="text-lg leading-relaxed">Naveen is a full stack SaaS developer helping founders turn ideas into launch-ready products in weeks.
                        He has over 6 years of experience building SaaS products and web applications,
                        and he works closely with founders and teams throughout the entire product development.
                    </p>
                </div>

                {/* techStack */}
                <div className="overflow-hidden font-mono">
                    <div className="flex flex-wrap gap-2 sm:gap-3 max-w-md mx-auto items-center justify-center">
                        {techStack.map((stack, idx) => (
                            <div key={idx} className="shrink-0 p-2 text-muted-foreground/70 sm:text-muted-foreground/60 hover:text-muted-foreground">
                                <span className="text-base sm:text-base font-semibold">{stack}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>


    )
}
