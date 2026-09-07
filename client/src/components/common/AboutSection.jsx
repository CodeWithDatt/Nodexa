import { useEffect, useRef, useState } from "react";

import {
  Bot,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Create a Workspace",
      description:
        "Start with a blank infinite canvas or choose a powerful template built for your workflow.",
      icon: Lightbulb,
      accent: "violet",
    },

    {
      number: "02",
      title: "Add Your Ideas",
      description:
        "Sketch freely, connect ideas, build diagrams, and turn rough thoughts into structured systems.",
      icon: Sparkles,
      accent: "cyan",
    },

    {
      number: "03",
      title: "Collaborate with AI",
      description:
        "Invite your team or let Nodexa AI help organize ideas, generate structures, and accelerate work.",
      icon: Bot,
      accent: "blue",
    },

    {
      number: "04",
      title: "Build and Share",
      description:
        "Transform your workspace into something actionable, share it with your team, and keep building.",
      icon: Rocket,
      accent: "purple",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
      "
      style={{
        backgroundColor: "var(--color-background)",
      }}
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* TOP GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-[-200px]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            blur-[150px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.16), transparent 70%)",
          }}
        />

        {/* LEFT GLOW */}

        <div
          className="
            absolute
            left-[-250px]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            blur-[150px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)",
          }}
        />

        {/* RIGHT GLOW */}

        <div
          className="
            absolute
            right-[-250px]
            bottom-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            blur-[150px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.1), transparent 70%)",
          }}
        />

        {/* DOT GRID */}

        <div
          className="
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
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

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
        {/* =========================================
            HEADER
        ========================================= */}

        <div
          className={`
            mx-auto
            max-w-3xl
            text-center
            transition-all
            duration-1000
            ease-out

            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          {/* EYEBROW */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]
            "
            style={{
              color: "#38bdf8",

              borderColor: "var(--color-border-strong)",

              backgroundColor: "var(--color-surface)",
            }}
          >
            <Sparkles size={13} />
            HOW NODEXA WORKS
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-7
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
            From Idea to Impact.
            <br />
            <span
              className="
                bg-gradient-to-r
                from-violet-400
                via-purple-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              All in One Workspace.
            </span>
          </h2>

          {/* DESCRIPTION */}

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
            Nodexa gives your ideas a place to grow — from the first spark of
            inspiration to collaborative systems your entire team can build on.
          </p>
        </div>

        {/* =========================================
            WORKFLOW
        ========================================= */}

        <div
          className="
            relative
            mt-16
            lg:mt-20
          "
        >
          {/* =========================================
              DESKTOP CONNECTION LINE
          ========================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-[12%]
              right-[12%]
              top-[48px]
              hidden
              h-[2px]
              lg:block
            "
            style={{
              background:
                "linear-gradient(90deg, rgba(124,58,237,0.55), rgba(34,211,238,0.6), rgba(59,130,246,0.55), rgba(168,85,247,0.5))",
            }}
          />

          {/* GLOW LINE */}

          <div
            className="
              pointer-events-none
              absolute
              left-[12%]
              right-[12%]
              top-[44px]
              hidden
              h-[10px]
              blur-xl
              lg:block
            "
            style={{
              background:
                "linear-gradient(90deg, rgba(124,58,237,0.18), rgba(34,211,238,0.18), rgba(59,130,246,0.18))",
            }}
          />

          {/* =========================================
              STEP CARDS
          ========================================= */}

          <div
            className="
              relative
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              const accentStyles = {
                violet: {
                  iconBackground: "linear-gradient(135deg, #8b5cf6, #6d28d9)",

                  glow: "rgba(124,58,237,0.45)",

                  border: "rgba(139,92,246,0.38)",
                },

                cyan: {
                  iconBackground: "linear-gradient(135deg, #06b6d4, #0e7490)",

                  glow: "rgba(6,182,212,0.35)",

                  border: "rgba(6,182,212,0.35)",
                },

                blue: {
                  iconBackground: "linear-gradient(135deg, #3b82f6, #1d4ed8)",

                  glow: "rgba(59,130,246,0.4)",

                  border: "rgba(59,130,246,0.35)",
                },

                purple: {
                  iconBackground: "linear-gradient(135deg, #a855f7, #7e22ce)",

                  glow: "rgba(168,85,247,0.4)",

                  border: "rgba(168,85,247,0.35)",
                },
              };

              const style = accentStyles[step.accent];

              return (
                <div
                  key={step.number}
                  className={`
                    group
                    relative
                    rounded-[28px]
                    border
                    p-7
                    transition-all
                    duration-700
                    ease-out
                    hover:-translate-y-2

                    ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }
                  `}
                  style={{
                    backgroundColor: "var(--color-surface-elevated)",

                    borderColor: "var(--color-border)",

                    transitionDelay: `${index * 130}ms`,
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.borderColor = style.border;

                    event.currentTarget.style.boxShadow = `0 25px 70px ${style.glow}`;
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.borderColor =
                      "var(--color-border)";

                    event.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* =====================================
                      CARD BACKGROUND GLOW
                  ===================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[28px]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                    style={{
                      background: `
                        radial-gradient(
                          circle at top left,
                          ${style.glow},
                          transparent 55%
                        )
                      `,
                    }}
                  />

                  {/* =====================================
                      STEP NUMBER
                  ===================================== */}

                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        text-lg
                        font-black
                        tracking-wider
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-3
                      "
                      style={{
                        background: style.iconBackground,

                        borderColor: style.border,

                        color: "#ffffff",

                        boxShadow: `0 12px 35px ${style.glow}`,
                      }}
                    >
                      {step.number}
                    </div>

                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        opacity-60
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:opacity-100
                      "
                      style={{
                        backgroundColor: "var(--color-surface-hover)",

                        color: "var(--color-text-secondary)",
                      }}
                    >
                      <Icon size={19} />
                    </div>
                  </div>

                  {/* =====================================
                      CONTENT
                  ===================================== */}

                  <div
                    className="
                      relative
                      mt-8
                    "
                  >
                    <h3
                      className="
                        text-xl
                        font-bold
                        tracking-tight
                      "
                      style={{
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-7
                      "
                      style={{
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* =====================================
                      STEP LABEL
                  ===================================== */}

                  <div
                    className="
                      relative
                      mt-7
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                    "
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      style={{
                        color: "#22d3ee",
                      }}
                    />
                    Step {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <div
          className={`
            mx-auto
            mt-14
            flex
            max-w-3xl
            flex-col
            items-center
            justify-center
            gap-4
            rounded-2xl
            border
            px-6
            py-5
            text-center
            transition-all
            duration-1000
            delay-500
            sm:flex-row
            sm:text-left

            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
          style={{
            backgroundColor: "var(--color-surface)",

            borderColor: "var(--color-border)",
          }}
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-violet-600
              to-cyan-500
              text-white
              shadow-lg
            "
          >
            <Users size={20} />
          </div>

          <div>
            <p
              className="
                font-semibold
              "
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              Built for ideas that are bigger than a document.
            </p>

            <p
              className="
                mt-1
                text-sm
              "
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Create, connect, collaborate, and keep everything moving forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
