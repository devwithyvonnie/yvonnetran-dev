import { motion, useScroll, useTransform } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import { projects } from "./data/projects";

function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-main)]">
      <CursorGlow />
      {/* Ambient Background Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[var(--dusty-pink)] opacity-20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[var(--mist-blue)] opacity-20 blur-3xl"
      />

      {/* Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply">
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Floating Navbar */}
      <nav className="fixed left-1/2 top-5 z-50 flex w-[92%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-white/20 bg-white/50 px-5 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl md:px-8 md:py-5">
        <p className="font-serif text-xl md:text-2xl">YT</p>

        <div className="flex gap-4 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--text-soft)] md:gap-8 md:text-sm md:tracking-[0.2em]">
          <a
            href="#about"
            className="transition duration-300 hover:text-[var(--terracotta)]">
            About
          </a>
          <a
            href="#projects"
            className="transition duration-300 hover:text-[var(--terracotta)]">
            Work
          </a>
          <a
            href="#resume"
            className="transition duration-300 hover:text-[var(--terracotta)]">
            Resume
          </a>
          <a
            href="#contact"
            className="transition duration-300 hover:text-[var(--terracotta)]">
            Contact
          </a>
        </div>
      </nav>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-[var(--terracotta)]"
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h1 className="select-none font-serif text-[20rem] text-black opacity-[0.02]">
          Atelier
        </h1>
      </div>

      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center px-6">
        {/* Floating Decorative Elements */}

        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-[var(--dusty-pink)] opacity-20 blur-3xl" />

        <div className="absolute right-[15%] top-[30%] h-40 w-40 rounded-full bg-[var(--mist-blue)] opacity-20 blur-3xl" />

        <div className="absolute bottom-[20%] left-[20%] h-28 w-28 rounded-full bg-[var(--sage-light)] opacity-20 blur-3xl" />

        <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-[var(--dusty-pink)]/10 blur-[120px]" />

        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-[var(--sage)]/10 blur-[140px]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="text-center">
          <p className="mb-6 uppercase tracking-[0.4em] text-sm text-[var(--text-soft)]">
            Frontend Developer & Creative Technologist
          </p>

          <h1 className="font-semibold tracking-[-0.04em] text-6xl leading-[0.9] sm:text-7xl md:text-[10rem]">
            Yvonne
            <br />
            Tran
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
            Crafting immersive digital experiences through frontend development,
            thoughtful UI design, and interactive storytelling.
          </p>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-20 flex flex-col items-center gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-soft)]">
              Scroll
            </p>

            <div className="h-16 w-[1px] bg-[var(--text-soft)] opacity-40" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-6 py-32 md:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative">
            <div className="rounded-[3rem] border border-[var(--line)] bg-white/30 p-8 shadow-xl backdrop-blur">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[var(--terracotta)]">
                About the Atelier
              </p>

              <h2 className="font-serif text-5xl leading-none md:text-7xl">
                Design-minded.
                <br />
                Code-driven.
              </h2>
            </div>

            <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-[var(--dusty-pink)] opacity-50 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}>
            <p className="text-xl leading-relaxed text-[var(--text-soft)] md:text-2xl">
              I’m a frontend developer and creative technologist focused on
              building thoughtful, immersive digital experiences. My work blends
              clean development, visual storytelling, responsive UI, and
              practical business functionality.
            </p>

            <p className="mt-8 text-lg leading-relaxed text-[var(--text-soft)]">
              From client websites to full-stack applications, I enjoy creating
              interfaces that feel intentional, polished, and memorable — not
              just functional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Section */}
      <section
        id="projects"
        className="relative min-h-screen px-6 py-32 md:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-24">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[var(--text-soft)]">
              Featured Work
            </p>

            <h2 className="font-serif text-6xl leading-none md:text-8xl">
              Project
              <br />
              Stories
            </h2>
          </div>

          <div className="space-y-28">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`grid items-center gap-12 md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}>
                <div className="relative overflow-visible">
                  <div className="relative overflow-hidden rounded-[3rem] border border-[var(--line)] bg-[var(--bg-soft)] p-5 shadow-xl">
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-[8rem] text-black/[0.04] md:text-[12rem]">
                        {project.backgroundWord}
                      </span>
                    </div>

                    <motion.div
                      animate={{
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{
                        scale: 1.04,
                        y: -10,
                        rotate: index % 2 === 0 ? -1.5 : 1.5,
                      }}
                      className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-60" />
                    </motion.div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 rounded-full bg-[var(--dusty-pink)] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[var(--text-dark)] shadow-lg">
                    {project.type}
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[var(--terracotta)]">
                    {project.mood}
                  </p>

                  <h3 className="font-serif text-5xl leading-none md:text-7xl">
                    {project.title}
                  </h3>

                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--text-soft)]">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--line)] bg-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--text-soft)]">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-[var(--text-dark)] px-8 py-4 text-sm uppercase tracking-[0.25em] text-[var(--bg-main)] transition hover:bg-[var(--sage)]">
                        Live Site
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[var(--line)] bg-white/40 px-8 py-4 text-sm uppercase tracking-[0.25em] text-[var(--text-soft)] transition hover:text-[var(--terracotta)]">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative overflow-hidden px-6 py-32 md:px-20">
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[repeating-radial-gradient(circle_at_center,var(--line)_0_1px,transparent_1px_18px)]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[var(--text-soft)]">
            Skills Garden
          </p>

          <h2 className="font-serif text-6xl leading-none md:text-8xl">
            A Quiet
            <br />
            System of Tools
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
            A curated collection of technologies, design practices, and
            development tools I use to shape thoughtful digital experiences.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Frontend Stone",
                items: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
              },
              {
                title: "Backend Stone",
                items: ["Node.js", "Express", "REST APIs", "SQL"],
              },
              {
                title: "Design Stone",
                items: [
                  "UI/UX",
                  "GitHub",
                  "Vercel",
                  "Figma",
                  "Responsive Design",
                ],
              },
            ].map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 60, rotate: index === 1 ? 2 : -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? 1 : -1 }}
                whileHover={{ y: -12, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative rounded-[45%_55%_50%_50%/55%_45%_55%_45%] border border-[var(--line)] bg-white/40 p-10 shadow-xl backdrop-blur">
                <div className="absolute -top-6 right-10 h-16 w-16 rounded-full bg-[var(--sage)]/10 blur-2xl" />

                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--terracotta)]">
                  0{index + 1}
                </p>

                <h3 className="font-serif text-4xl">{group.title}</h3>

                <div className="mt-8 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-[var(--bg-main)]/70 px-4 py-2 text-sm text-[var(--text-soft)]">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="relative overflow-hidden px-6 py-32 md:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-24">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[var(--text-soft)]">
              Experience
            </p>

            <h2 className="font-serif text-6xl leading-none md:text-8xl">
              Building thoughtful
              <br />
              digital experiences.
            </h2>
          </div>

          <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT SIDE */}
            <div className="space-y-12">
              <div className="rounded-[2.5rem] border border-[var(--line)] bg-white/30 p-10 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--terracotta)]">
                  About My Work
                </p>

                <p className="mt-8 text-2xl leading-relaxed text-[var(--text-dark)]">
                  I design and develop immersive frontend experiences focused on
                  visual storytelling, responsive systems, elegant interfaces,
                  and meaningful user interaction.
                </p>

                <p className="mt-6 leading-relaxed text-[var(--text-soft)]">
                  My work blends frontend engineering with design sensitivity —
                  creating digital products that feel intentional, cinematic,
                  intuitive, and emotionally engaging.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "UI/UX Design",
                  "Responsive Design",
                  "Node.js",
                  "Git/GitHub",
                  "Creative Direction",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-[2rem] border border-[var(--line)] bg-white/20 p-6 text-center text-sm uppercase tracking-[0.2em] text-[var(--text-soft)] backdrop-blur">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">
              {[
                {
                  year: "2026",
                  title: "Web Development B.S.",
                  company: "Full Sail University",
                },
                {
                  year: "2025",
                  title: "Mythos CRM",
                  company: "Full Stack CRM Platform",
                },
                {
                  year: "2024",
                  title: "T Beauty Lounge",
                  company: "Medical Spa Website",
                },
                {
                  year: "2024",
                  title: "Tomo Japanese Cuisine",
                  company: "Restaurant Website",
                },
                {
                  year: "2022 — Present",
                  title: "Operations Manager",
                  company: "T Beauty Lounge",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[var(--line)] bg-white/20 p-8 backdrop-blur transition duration-500 hover:-translate-y-1 hover:bg-white/40">
                  <p className="text-sm uppercase tracking-[0.25em] text-[var(--terracotta)]">
                    {item.year}
                  </p>

                  <h3 className="mt-4 font-serif text-4xl leading-none">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[var(--text-soft)]">{item.company}</p>
                </div>
              ))}

              <a
                href="/TranYvonneResume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-[var(--text-dark)] px-8 py-4 text-sm uppercase tracking-[0.25em] text-[var(--bg-main)] transition hover:bg-[var(--sage)]">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32 md:px-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="pointer-events-none select-none font-serif text-[10rem] text-black/[0.03] md:text-[18rem]">
            Connect
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-3xl rounded-[3rem] border border-[var(--line)] bg-white/40 p-10 text-center shadow-xl backdrop-blur md:p-16">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[var(--terracotta)]">
            Contact
          </p>

          <h2 className="font-serif text-6xl leading-none md:text-8xl">
            Let’s build
            <br />
            something thoughtful.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[var(--text-soft)]">
            I’m open to frontend developer roles, creative web projects,
            freelance websites, and collaborations centered around thoughtful
            digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:devwithyvonnie@gmail.com"
              className="rounded-full bg-[var(--text-dark)] px-8 py-4 text-sm uppercase tracking-[0.25em] text-[var(--bg-main)] transition hover:bg-[var(--sage)]">
              Email Me
            </a>

            <a
              href="https://github.com/devwithyvonnie"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line)] bg-white/40 px-8 py-4 text-sm uppercase tracking-[0.25em] text-[var(--text-soft)] transition hover:text-[var(--terracotta)]">
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/yvonne-tran-451858191/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line)] bg-white/40 px-8 py-4 text-sm uppercase tracking-[0.25em] text-[var(--text-soft)] transition hover:text-[var(--terracotta)]">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--line)] px-6 py-10 text-center text-sm text-[var(--text-soft)]">
        <p className="font-serif text-2xl text-[var(--text-dark)]">
          Yvonne Tran
        </p>
        <p className="mt-2 uppercase tracking-[0.25em]">
          Frontend Developer & Creative Technologist
        </p>
        <p className="mt-4">
          © 2026 Built with React, Tailwind, and Framer Motion.
        </p>
      </footer>
    </main>
  );
}

export default App;
