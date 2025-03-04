import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Infinity Wordle in JS</h3>
              <p className="text-gray-400 mb-4">
                My take on the game "Wordle". I made it so you can play as many games as your browser will allow.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "js", "Node.js"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a href="https://infinity-wordle.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                 → View Project 
                </a>
                <a href="https://github.com/Keryyyl/Infinity_Wordle" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                 View Github ← 
                </a>
              </div>
            </div>
            <div
              className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Infinity Wordle in React</h3>
              <p className="text-gray-400 mb-4">
                That's a copy of my base 'Infinity Wordle' project, but ported to React and Tailwindcss.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "tailwindcss", "node.js", "js"].map((tech, key) => (
                  <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-smtransition
                      hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#"className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                 → View Project 
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                 View Github ← 
                </a>
              </div>
            </div>

            <div
              className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Shopping List App</h3>
              <p className="text-gray-400 mb-4">
                A better shopping list with many features such as vault and family.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ReactNative", "Metro", "NativeWind"].map(
                  (tech) => (
                    <span key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                 → View Project 
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                 View Github ← 
                </a>
              </div>
            </div>

            <div
              className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Placeholder</h3>
              <p className="text-gray-400 mb-4">
                I will change it once I get and idea for a new project. Probably a ReactAPP
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["A", "B", "C", "D"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                 → View Project
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                 View Github ← 
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};