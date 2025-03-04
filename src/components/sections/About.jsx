import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["JavaScript", "React", "Tailwind", "TailWindCSS",];
    const backendSkills = ["Node.js", "Python", "PHP", "C#",];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 ml-5">
                        I'm an 18 years old polish high schooler at the starting point of an exciting journey of <span>programming</span>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 cursor-pointer text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 cursor-pointer text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> High School</strong> - Technikum Kinematograficzno-Komputerowe im. Krzysztofa Kieślowskiego (2021-2026)
                            </li>
                            <li>
                                <strong>Relevant Coursework: </strong>SEP G1,
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> FrontEnd Developer for <br/>"Fundacja Promocji m.st. Warszawy" Internship (02.2024 - 03.2024)</h4>
                                <p>

                                    Developed new features on the site in PHP WordPress.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold"> QA for PlayWay <br/>Internship (11.2024-12.2024)</h4>
                                <p>
                                    Tested games in many aspects such as optimization, bugs, and such.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </RevealOnScroll>
        </section>
    )
}