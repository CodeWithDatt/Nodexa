const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        {
          name: "Infinite Canvas",
          href: "#infinite-canvas",
        },
        {
          name: "Features",
          href: "#features",
        },
        {
          name: "Templates",
          href: "#templates",
        },
        {
          name: "How It Works",
          href: "#how-it-works",
        },
      ],
    },
    {
      title: "Developers",
      links: [
        {
          name: "Developer Platform",
          href: "#developers",
        },
        {
          name: "Documentation",
          href: "https://github.com/CodeWithDatt",
          external: true,
        },
        {
          name: "API & Webhooks",
          href: "#developers",
        },
        {
          name: "GitHub",
          href: "https://github.com/CodeWithDatt",
          external: true,
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          name: "About Nodexa",
          href: "#about",
        },
        {
          name: "Features",
          href: "#features",
        },
        {
          name: "Templates",
          href: "#templates",
        },
        {
          name: "Contact",
          href: "mailto:dattpatel207@gmail.com",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          name: "Privacy Policy",
          href: "#privacy",
        },
        {
          name: "Terms of Service",
          href: "#terms",
        },
        {
          name: "Security",
          href: "#security",
        },
        {
          name: "Contact Support",
          href: "mailto:dattpatel@gmail.com",
        },
      ],
    },
  ];

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-slate-800/80 bg-[#090d18] text-slate-300"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute right-[10%] top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      {/* TOP CTA */}
      <div className="relative border-b border-slate-800/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row lg:px-8">
          {/* CTA Text */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 shadow-lg shadow-cyan-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M12 2v20" />
                <path d="M2 12h20" />
                <path d="M5 5l14 14" />
                <path d="M19 5 5 19" />
              </svg>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Ready to create?
              </p>

              <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                Turn your next idea into something remarkable.
              </h3>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="/signup"
            className="group inline-flex items-center gap-3 rounded-xl border border-purple-400/30 bg-gradient-to-r from-purple-600 via-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/30"
          >
            Start Building
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* BRAND */}
          <div className="max-w-sm">
            <a href="#home" className="group inline-flex items-center gap-3">
              {/* Logo */}
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-purple-400/30 bg-gradient-to-br from-[#151c31] to-[#0c1020] shadow-lg shadow-purple-500/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-500/25">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                >
                  <circle cx="13" cy="13" r="3" fill="#22D3EE" />

                  <circle cx="35" cy="12" r="3" fill="#8B5CF6" />

                  <circle cx="35" cy="35" r="3" fill="#38BDF8" />

                  <circle cx="13" cy="35" r="3" fill="#A855F7" />

                  <path
                    d="M15 14.5L33 12.5M36 15L35 32M32.5 35L15 34M13 31.5V16"
                    stroke="url(#nodexaGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  <defs>
                    <linearGradient
                      id="nodexaGradient"
                      x1="10"
                      y1="10"
                      x2="38"
                      y2="38"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#22D3EE" />
                      <stop offset="0.5" stopColor="#8B5CF6" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Nodexa
                </h2>

                <p className="text-xs text-slate-500">Think. Connect. Build.</p>
              </div>
            </a>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              An AI-powered collaborative workspace built for brainstorming
              ideas, designing systems, connecting concepts, and building better
              together.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-7 flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/CodeWithDatt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Datt Patel on GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.25 9.25 0 0 1 12 6.9c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.48A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/datt-patel-31865032b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Datt Patel on LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.27ZM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V8.98h3.56v11.47Z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:dattpatel@gmail.com"
                aria-label="Send email to Datt Patel"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />

                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
            </div>

            {/* Developer */}
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-purple-400/15 bg-purple-500/5 px-4 py-2 text-xs text-slate-400">
              <span>Crafted by</span>

              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Datt Patel
              </span>

              <span className="text-purple-400">✦</span>
            </div>
          </div>

          {/* FOOTER NAVIGATION */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-200">
                {section.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                    >
                      <span className="h-1 w-1 rounded-full bg-slate-600 transition-all duration-300 group-hover:w-3 group-hover:bg-cyan-400" />

                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} Nodexa. All rights reserved.
            </p>

            <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <p className="text-sm text-slate-500">
              Developed with <span className="text-purple-400">♥</span> by{" "}
              <a
                href="https://www.linkedin.com/in/datt-patel-31865032b/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 transition-opacity hover:opacity-80"
              >
                Datt Patel
              </a>
            </p>
          </div>

          {/* System Status */}
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-4 py-2 text-xs font-medium text-slate-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span>All systems operational</span>

            <span className="text-emerald-400">99.99%</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </footer>
  );
};

export default FooterSection;
