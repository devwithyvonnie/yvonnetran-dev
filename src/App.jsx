import { motion, useScroll, useTransform } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import { projects } from "./data/projects";

function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  return (
    <main className="relative py-24 overflow-hidden bg-[var(--bg-main)]">
      <CursorGlow />

      {/* Ambient Background Glow */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[var(--dusty-pink)] opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[var(--mist-blue)] opacity-20 blur-3xl"
      />

      {/* Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply">
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Floating Navbar */}
      <nav className="fixed left-1/2 top-4 z-50 flex w-[92%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-white/20 bg-white/50 px-5 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl md:px-8 md:py-5">
        <p className="font-serif text-xl md:text-2xl">YT</p>
        <div className="flex gap-5 text-[0.6rem] uppercase tracking-[0.1em] md:gap-8 md:text-sm md:tracking-[0.2em]">
          <a href="#about" className="transition duration-300 hover:text-[var(--terracotta)]">About</a>
          <a href="#projects" className="transition duration-300 hover:text-[var(--terracotta)]">Work</a>
          <a href="#resume" className="transition duration-300 hover:text-[var(--terracotta)]">Resume</a>
          <a href="#contact" className="transition duration-300 hover:text-[var(--terracotta)]">Contact</a>
        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-[var(--terracotta)]"
      />

      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h1 className="select-none font-serif text-[16rem] text-black opacity-[0.025] md:text-[22rem]">自然</h1>
      </div>

      {/* ── Hero ── */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-28 md:min-h-screen md:pt-40">
        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-[var(--dusty-pink)] opacity-20 blur-3xl" />
        <div className="absolute right-[15%] top-[30%] h-40 w-40 rounded-full bg-[var(--mist-blue)] opacity-20 blur-3xl" />
        <div className="absolute bottom-[20%] left-[20%] h-28 w-28 rounded-full bg-[var(--sage-light)] opacity-20 blur-3xl" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-xs text-[var(--text-soft)] md:mb-6 md:tracking-[0.4em] md:text-sm">
            Frontend Developer & Creative Technologist
          </p>

          <h1 className="font-semibold tracking-[-0.04em] text-[3.5rem] leading-[0.9] sm:text-7xl md:text-[10rem]">
            Yvonne
            <br />
            Tran
          </h1>

          <p className="mx-auto mt-6 max-w-sm text-base leading-relaxed text-[var(--text-soft)] md:mt-10 md:max-w-2xl md:text-lg">
            Interfaces grown from intention —<br className="hidden sm:block" />
            where frontend craft meets visual storytelling<br className="hidden sm:block" />
            and every detail is earned.
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-14 flex flex-col items-center gap-3 md:mt-20">
            <p className="text-xs tracking-[0.3em] text-[var(--text-soft)]">流れる</p>
            <div className="h-12 w-[1px] bg-[var(--text-soft)] opacity-40 md:h-16" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── About ── */}
      <section id="about" className="relative px-6 py-20 md:px-20 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative">
            <div className="rounded-[2rem] border border-[var(--line)] bg-white/30 p-6 shadow-xl backdrop-blur md:rounded-[3rem] md:p-8">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[var(--terracotta)] md:mb-4 md:text-sm">
                物語 — Story
              </p>
              <h2 className="font-serif text-4xl leading-none md:text-5xl lg:text-7xl">
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
            <p className="text-lg leading-relaxed text-[var(--text-soft)] md:text-xl lg:text-2xl">
              I'm a frontend developer with roots on both sides of the screen —
              I help run a medical spa in Arizona, which means I've lived the gap
              between what a business needs and what its website actually does.
              I build from that understanding.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[var(--text-soft)] md:mt-8 md:text-lg">
              My work lives somewhere between a React component and a mood board —
              frontend builds, client sites that actually reflect the people behind
              them, and lately, a growing curiosity in ML and data science that I'm
              actively learning my way through. I like making things that feel like
              they were grown, not generated.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="relative px-6 py-20 md:px-20 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 md:mb-24">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[var(--text-soft)] md:mb-4 md:text-sm">
              Featured Work
            </p>
            <h2 className="font-serif text-4xl leading-none md:text-7xl">
              Project
              <br />
              Stories
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`grid items-center gap-10 md:gap-12 md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}>

                {/* Image card */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--bg-soft)] p-4 shadow-xl md:rounded-[3rem] md:p-5">
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-[6rem] text-black/[0.04] md:text-[12rem]">
                        {project.backgroundWord}
                      </span>
                    </div>
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.04, y: -10, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                      className="relative aspect-[4/3] max-w-md mx-auto overflow-hidden rounded-[1.25rem] md:rounded-[2rem]">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-60" />
                    </motion.div>
                  </div>

                  {/* Type badge — clamped so it never escapes the card on mobile */}
                  <div className="absolute -bottom-4 right-4 rounded-full bg-[var(--dusty-pink)] px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--text-dark)] shadow-lg md:-bottom-6 md:-right-6 md:px-6 md:py-3 md:text-xs md:tracking-[0.25em]">
                    {project.type}
                  </div>
                </div>

                {/* Text */}
                <div className="pt-4 md:pt-0">
                  <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[var(--terracotta)] md:mb-4">
                    {project.mood}
                  </p>
                  <h3 className="font-serif text-4xl leading-none md:text-5xl lg:text-7xl">
                    {project.title}
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-[var(--text-soft)] md:mt-8 md:max-w-xl md:text-lg">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--line)] bg-white/30 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.15em] text-[var(--text-soft)] md:px-4 md:py-2 md:text-xs md:tracking-[0.2em]">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-[var(--text-dark)] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[var(--bg-main)] transition hover:bg-[var(--sage)] md:px-8 md:py-4 md:text-sm">
                        Live Site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[var(--line)] bg-white/40 px-6 py-3 text-xs uppercase tracking-[0.25em] text-[var(--text-soft)] transition hover:text-[var(--terracotta)] md:px-8 md:py-4 md:text-sm">
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

      {/* ── Skills ── */}
      <section id="skills" className="relative overflow-hidden px-6 py-20 md:px-20 md:py-32">

        {/* Raked sand background — horizontal lines suggesting a zen garden */}
        <div className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "repeating-linear-gradient(180deg, var(--line) 0px, var(--line) 1px, transparent 1px, transparent 28px)",
          }}
        />
        {/* Subtle radial fade so lines don't fight the content */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,var(--bg-main)_100%)]" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[var(--text-soft)] md:mb-4 md:text-sm">
            Skills Garden
          </p>
          <h2 className="font-serif text-4xl leading-none md:text-8xl">
            A Quiet
            <br />
            System of Tools
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-soft)] md:mt-8 md:max-w-2xl md:text-lg">
            A curated collection of technologies, design practices, and
            development tools I use to shape thoughtful digital experiences.
          </p>

          <div className="mt-12 grid gap-10 md:mt-24 md:gap-6 md:grid-cols-3 md:items-start">
            {[
              {
                title: "Frontend Stone",
                kanji: "前",
                meaning: "mae · the front",
                rotate: "-1deg",
                mobileRotate: "-0.5deg",
                shape: "55% 45% 48% 52% / 48% 52% 48% 52%",
                mobileShape: "40% 60% 45% 55% / 45% 55% 45% 55%",
                items: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
              },
              {
                title: "Backend Stone",
                kanji: "根",
                meaning: "ne · the root",
                rotate: "1.5deg",
                mobileRotate: "0.75deg",
                shape: "48% 52% 55% 45% / 52% 48% 52% 48%",
                mobileShape: "55% 45% 50% 50% / 50% 50% 50% 50%",
                items: ["Node.js", "Express", "REST APIs", "SQL", "FastAPI", "Python"],
              },
              {
                title: "Design Stone",
                kanji: "形",
                meaning: "katachi · the form",
                rotate: "-0.8deg",
                mobileRotate: "-0.4deg",
                shape: "52% 48% 45% 55% / 55% 45% 55% 45%",
                mobileShape: "45% 55% 55% 45% / 55% 45% 55% 45%",
                items: ["UI/UX", "Figma", "GitHub", "Vercel", "Responsive Design", "Scikit-learn"],
              },
            ].map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 60, rotate: index === 1 ? 2 : -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: parseFloat(group.rotate) }}
                whileHover={{ y: -14, rotate: 0, scale: 1.02 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: index * 0.12 }}
                style={{
                  borderRadius: group.shape,
                }}
                className="relative border border-[var(--line)] bg-white/50 p-10 shadow-2xl backdrop-blur md:p-12">

                {/* Glow behind stone */}
                <div className="absolute -inset-2 rounded-full bg-[var(--sage)]/10 blur-2xl -z-10" />

                {/* Kanji watermark */}
                <div className="pointer-events-none absolute bottom-6 right-8 font-serif text-[6rem] leading-none text-[var(--text-dark)] opacity-[0.05] select-none">
                  {group.kanji}
                </div>

                <p className="mb-1 text-xs uppercase tracking-[0.3em] text-[var(--terracotta)]">
                  0{index + 1}
                </p>
                <p className="mb-3 text-[0.6rem] tracking-[0.2em] text-[var(--text-soft)] opacity-70">
                  {group.meaning}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl">{group.title}</h3>
                <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-[var(--bg-main)]/70 px-3 py-1.5 text-sm text-[var(--text-soft)]">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resume ── */}
      <section id="resume" className="relative overflow-hidden px-6 py-20 md:px-20 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 md:mb-24">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[var(--text-soft)] md:mb-4 md:text-sm">
              Experience
            </p>
            <h2 className="font-serif text-4xl leading-none md:text-8xl">
              Building thoughtful
              <br />
              digital experiences.
            </h2>
          </div>

          <div className="grid gap-10 md:gap-16 md:grid-cols-[1.1fr_0.9fr]">
            {/* Left */}
            <div className="space-y-8 md:space-y-12">
              <div className="rounded-[2rem] border border-[var(--line)] bg-white/30 p-8 backdrop-blur md:rounded-[2.5rem] md:p-10">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--terracotta)] md:text-sm">
                  About My Work
                </p>
                <p className="mt-6 text-xl leading-relaxed text-[var(--text-dark)] md:mt-8 md:text-2xl">
                  I design and develop immersive frontend experiences focused on
                  visual storytelling, responsive systems, elegant interfaces,
                  and meaningful user interaction.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[var(--text-soft)] md:mt-6">
                  My work blends frontend engineering with design sensitivity —
                  creating digital products that feel intentional, cinematic,
                  intuitive, and emotionally engaging.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {[
                  "React", "JavaScript", "Tailwind CSS", "UI/UX Design",
                  "Responsive Design", "Node.js", "Python", "Scikit-learn",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-[1.5rem] border border-[var(--line)] bg-white/20 p-4 text-center text-xs uppercase tracking-[0.15em] text-[var(--text-soft)] backdrop-blur md:rounded-[2rem] md:p-6 md:text-sm md:tracking-[0.2em]">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — timeline */}
            <div className="space-y-4 md:space-y-8">
              {[
                {
                  year: "2026",
                  title: "Web Development B.S.",
                  company: "Full Sail University",
                },
                {
                  year: "2026",
                  title: "Japan Transit Delay",
                  company: "ML Prediction · FastAPI · React",
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
                  className="rounded-[1.5rem] border border-[var(--line)] bg-white/20 p-6 backdrop-blur transition duration-500 hover:-translate-y-1 hover:bg-white/40 md:rounded-[2rem] md:p-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--terracotta)] md:text-sm">
                    {item.year}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-none md:mt-4 md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-soft)] md:mt-3">
                    {item.company}
                  </p>
                </div>
              ))}

              <a
                href="/TranYvonneResume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-[var(--text-dark)] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[var(--bg-main)] transition hover:bg-[var(--sage)] md:px-8 md:py-4 md:text-sm">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-24 md:min-h-screen md:px-20 md:py-32">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="pointer-events-none select-none font-serif text-[6rem] text-black/[0.03] md:text-[18rem]">
            Connect
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative mx-auto w-full max-w-3xl rounded-[2rem] border border-[var(--line)] bg-white/40 p-8 text-center shadow-xl backdrop-blur md:rounded-[3rem] md:p-16">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[var(--terracotta)] md:mb-4 md:text-sm">
            Contact
          </p>
          <h2 className="font-serif text-3xl leading-none md:text-5xl lg:text-8xl">
            Let's build
            <br />
            something thoughtful.
          </h2>
          <p className="mx-auto mt-6 max-w-xs text-base leading-relaxed text-[var(--text-soft)] md:mt-8 md:max-w-xl md:text-lg">
            I'm open to frontend developer roles, creative web projects,
            freelance websites, and collaborations centered around thoughtful
            digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10 md:gap-4">
            <a
              href="mailto:devwithyvonnie@gmail.com"
              className="rounded-full bg-[var(--text-dark)] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[var(--bg-main)] transition hover:bg-[var(--sage)] md:px-8 md:py-4 md:text-sm">
              Email Me
            </a>
            <a
              href="https://github.com/devwithyvonnie"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line)] bg-white/40 px-6 py-3 text-xs uppercase tracking-[0.25em] text-[var(--text-soft)] transition hover:text-[var(--terracotta)] md:px-8 md:py-4 md:text-sm">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yvonne-tran-451858191/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line)] bg-white/40 px-6 py-3 text-xs uppercase tracking-[0.25em] text-[var(--text-soft)] transition hover:text-[var(--terracotta)] md:px-8 md:py-4 md:text-sm">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[var(--line)] px-6 py-8 text-center text-sm text-[var(--text-soft)] md:py-10">
        <p className="font-serif text-xl text-[var(--text-dark)] md:text-2xl">Yvonne Tran</p>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] md:text-sm">
          Frontend Developer & Creative Technologist
        </p>
        <p className="mt-3 text-xs md:mt-4 md:text-sm">
          © 2026 Built with React, Tailwind, and Framer Motion.
        </p>
      </footer>
    </main>
  );
}

export default App;