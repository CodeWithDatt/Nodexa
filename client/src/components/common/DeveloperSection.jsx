import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Code2,
  GitBranch,
  Terminal,
  Sparkles,
  Braces,
  Boxes,
} from "lucide-react";

const DeveloperSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("developer-visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const developerFeatures = [
    {
      icon: Code2,
      title: "Developer Friendly",
      description:
        "Build powerful workflows with flexible tools designed for modern development teams.",
    },
    {
      icon: GitBranch,
      title: "Visual Architecture",
      description:
        "Map systems, services, APIs, and application flows in one connected workspace.",
    },
    {
      icon: Terminal,
      title: "Built for Builders",
      description:
        "Turn technical ideas into structured diagrams and collaborative development plans.",
    },
  ];

  return (
    <section
      id="developers"
      ref={sectionRef}
      className="
        developer-section
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
      "
      style={{
        backgroundColor: "var(--color-background-secondary)",
      }}
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          blur-[150px]
        "
        style={{
          background: "rgba(124, 58, 237, 0.12)",
        }}
      />

      {/* Dot Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-50
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-grid) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
            developer-header
          "
        >
          <div
            className="
              developer-badge
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-4
              py-2
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
            "
            style={{
              color: "#22d3ee",
              borderColor: "var(--color-border-strong)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <Braces size={15} />
            Built For Developers
          </div>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Build Ideas.
            <span
              className="
                bg-gradient-to-r
                from-violet-500
                via-purple-500
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              Design Systems.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              sm:text-lg
            "
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Nodexa gives developers a visual workspace for planning
            architecture, connecting systems, and collaborating on complex
            technical ideas.
          </p>
        </div>

        {/* Main Developer Workspace */}

        <div
          className="
            developer-workspace
            relative
            mt-16
            overflow-hidden
            rounded-[28px]
            border
            p-5
            shadow-2xl
            sm:p-8
            lg:p-10
          "
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border-strong)",
          }}
        >
          {/* Workspace Grid */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-40
            "
            style={{
              backgroundImage: `
                radial-gradient(
                  circle,
                  var(--color-grid) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "26px 26px",
            }}
          />

          {/* Workspace Content */}

          <div
            className="
              relative
              z-10
              grid
              gap-10
              lg:grid-cols-2
              lg:items-center
            "
          >
            {/* Left Content */}

            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  px-3
                  py-2
                  text-xs
                  font-bold
                "
                style={{
                  color: "#22d3ee",
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-surface-elevated)",
                }}
              >
                <Boxes size={15} />
                TECHNICAL WORKSPACE
              </div>

              <h3
                className="
                  mt-6
                  text-3xl
                  font-black
                  leading-tight
                  sm:text-4xl
                "
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                From architecture
                <br />
                to execution.
              </h3>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-8
                "
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                Design system architecture, connect ideas visually, and turn
                technical discussions into structured plans your entire team can
                understand.
              </p>

              {/* Feature List */}

              <div className="mt-8 space-y-4">
                {[
                  "Visual system architecture",
                  "Connected workflows and diagrams",
                  "Collaborative technical planning",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      p-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    "
                    style={{
                      backgroundColor: "var(--color-surface-elevated)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-gradient-to-br
                        from-violet-600
                        to-cyan-500
                        text-white
                      "
                    >
                      <Sparkles size={16} />
                    </div>

                    <span
                      className="font-medium"
                      style={{
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}

              <Link
                to="/signup"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  via-purple-500
                  to-blue-500
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_15px_40px_rgba(124,58,237,0.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(124,58,237,0.55)]
                "
              >
                Start Building
                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* Right Visual */}

            <div
              className="
                relative
                min-h-[420px]
                overflow-hidden
                rounded-2xl
                border
              "
              style={{
                backgroundColor: "var(--color-background-secondary)",
                borderColor: "var(--color-border-strong)",
              }}
            >
              {/* Grid */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-70
                "
                style={{
                  backgroundImage: `
                    radial-gradient(
                      circle,
                      var(--color-grid) 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Connection Lines */}

              <svg
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                "
                viewBox="0 0 600 420"
                fill="none"
              >
                <path
                  d="M130 120 C220 120 220 210 300 210"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  strokeOpacity="0.8"
                />

                <path
                  d="M300 210 C380 210 390 130 480 130"
                  stroke="#22d3ee"
                  strokeWidth="3"
                  strokeOpacity="0.8"
                />

                <path
                  d="M300 210 C390 210 400 310 490 310"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeOpacity="0.8"
                />
              </svg>

              {/* Node 1 */}

              <div
                className="
                  developer-node
                  absolute
                  left-[8%]
                  top-[14%]
                  w-[150px]
                  rounded-2xl
                  border
                  p-4
                  shadow-xl
                "
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-strong)",
                }}
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-violet-500/20
                    text-violet-400
                  "
                >
                  <Code2 size={17} />
                </div>

                <h4
                  className="mt-3 text-sm font-bold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  Product Vision
                </h4>

                <p
                  className="mt-2 text-xs leading-5"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Plan the next generation of your product.
                </p>
              </div>

              {/* Core Node */}

              <div
                className="
                  developer-core
                  absolute
                  left-1/2
                  top-1/2
                  w-[180px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-2xl
                  border
                  p-5
                  shadow-[0_20px_60px_rgba(124,58,237,0.35)]
                "
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "rgba(139,92,246,0.55)",
                }}
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-violet-600
                    to-purple-500
                    text-white
                  "
                >
                  <Boxes size={20} />
                </div>

                <div
                  className="
                    mt-4
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-violet-400
                  "
                >
                  Core System
                </div>

                <h4
                  className="mt-1 text-sm font-bold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  Nodexa Platform
                </h4>

                <p
                  className="mt-2 text-xs leading-5"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Connect ideas, systems, and workflows.
                </p>
              </div>

              {/* AI Node */}

              <div
                className="
                  developer-node
                  absolute
                  right-[8%]
                  top-[14%]
                  w-[150px]
                  rounded-2xl
                  border
                  p-4
                  shadow-xl
                "
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-strong)",
                }}
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-cyan-500/20
                    text-cyan-400
                  "
                >
                  <Sparkles size={17} />
                </div>

                <h4
                  className="mt-3 text-sm font-bold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  AI Assistant
                </h4>

                <p
                  className="mt-2 text-xs leading-5"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Turn thoughts into structured ideas.
                </p>
              </div>

              {/* Sync Node */}

              <div
                className="
                  developer-node
                  absolute
                  bottom-[10%]
                  right-[7%]
                  w-[155px]
                  rounded-2xl
                  border
                  p-4
                  shadow-xl
                "
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-strong)",
                }}
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-blue-500/20
                    text-blue-400
                  "
                >
                  <GitBranch size={17} />
                </div>

                <h4
                  className="mt-3 text-sm font-bold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  Real-Time Sync
                </h4>

                <p
                  className="mt-2 text-xs leading-5"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Collaborate instantly with your team.
                </p>

                <div className="absolute right-4 top-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-emerald-400
                        opacity-70
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-emerald-400
                      "
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}

        <div
          className="
            mt-10
            grid
            gap-5
            md:grid-cols-3
          "
        >
          {developerFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  developer-feature-card
                  rounded-2xl
                  border
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-violet-600/20
                    to-cyan-500/20
                    text-cyan-400
                  "
                >
                  <Icon size={21} />
                </div>

                <h3
                  className="mt-5 text-lg font-bold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Local Animation Styles */}

      <style>{`
        .developer-section .developer-header,
        .developer-section .developer-workspace,
        .developer-section .developer-feature-card {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .developer-section.developer-visible .developer-header {
          opacity: 1;
          transform: translateY(0);
        }

        .developer-section.developer-visible .developer-workspace {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.15s;
        }

        .developer-section.developer-visible .developer-feature-card {
          opacity: 1;
          transform: translateY(0);
        }

        .developer-section.developer-visible
          .developer-feature-card:nth-child(1) {
          transition-delay: 0.25s;
        }

        .developer-section.developer-visible
          .developer-feature-card:nth-child(2) {
          transition-delay: 0.35s;
        }

        .developer-section.developer-visible
          .developer-feature-card:nth-child(3) {
          transition-delay: 0.45s;
        }

        .developer-core {
          animation: developerPulse 4s ease-in-out infinite;
        }

        @keyframes developerPulse {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.03);
          }
        }

        .developer-node {
          animation: developerFloat 5s ease-in-out infinite;
        }

        .developer-node:nth-of-type(2) {
          animation-delay: 1s;
        }

        @keyframes developerFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .developer-section * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DeveloperSection;
