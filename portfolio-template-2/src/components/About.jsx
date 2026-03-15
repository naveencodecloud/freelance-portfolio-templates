const skills = ["React", "TypeScript", "Express", "Node.js", "MongoDB", "PostgreSQL", "Docker", "AWS", "Next.js", "GraphQL", "Redis", "Python", "Tailwind CSS", "Vercel", "Git", "Github"]

export const About = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-zinc-100 dark:border-zinc-800">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">About</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 leading-snug">
                        Turning complex problems<br />into elegant solutions
                    </h2>
                    <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                        I'm Naveen, a full stack developer with 6+ years of experience building SaaS products, developer tools, and consumer applications. I work with founders from idea to launch.
                    </p>
                    <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        I believe in shipping early, iterating fast, and writing code that your future self will thank you for.
                    </p>
                </div>
                <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">Stack</p>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1.5 text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
