import { useEffect, useRef } from "react";

import {
  Bot,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  Cpu,
  FileText,
  Layers3,
  MousePointer2,
  Network,
  Share2,
  Sparkles,
  Users,
  WandSparkles,
  Zap,
} from "lucide-react";

/* =========================================
   FEATURE DATA
========================================= */

const features = [
  {
    id: "01",
    title: "Infinite Visual Canvas",
    description:
      "Turn ideas into structured diagrams with a limitless workspace designed for brainstorming, planning, and system design.",
    icon: MousePointer2,
    accent: "cyan",
    badge: "Create freely",
    visual: "canvas",
  },

  {
    id: "02",
    title: "Real-Time Collaboration",
    description:
      "Build together with your team using live cursors, shared workspaces, instant updates, and collaborative editing.",
    icon: Users,
    accent: "violet",
    badge: "Work together",
    visual: "collaboration",
  },

  {
    id: "03",
    title: "AI That Understands Your Work",
    description:
      "Ask Nodexa AI to generate diagrams, improve architecture, organize ideas, and help transform your thoughts into action.",
    icon: Bot,
    accent: "blue",
    badge: "Powered by AI",
    visual: "ai",
  },

  {
    id: "04",
    title: "Build System Architecture",
    description:
      "Design APIs, services, databases, workflows, and complete technical architectures visually in one workspace.",
    icon: Network,
    accent: "purple",
    badge: "Visual architecture",
    visual: "architecture",
  },

  {
    id: "05",
    title: "Smart Templates",
    description:
      "Start faster with reusable templates for brainstorming, system design, workflows, product planning, and more.",
    icon: Layers3,
    accent: "cyan",
    badge: "Start faster",
    visual: "templates",
  },

  {
    id: "06",
    title: "Everything Connected",
    description:
      "Keep your ideas, diagrams, files, and team conversations connected inside one powerful workspace.",
    icon: Share2,
    accent: "blue",
    badge: "One workspace",
    visual: "connected",
  },
];

/* =========================================
   MAIN COMPONENT
========================================= */

const FeatureSection = () => {
  const sectionRef = useRef(null);

  /* =========================================
     SCROLL REVEAL ANIMATION
  ========================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const animatedElements = section.querySelectorAll("[data-feature-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("feature-visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="
        relative
        overflow-hidden
        px-4
        py-24
        sm:px-6
        sm:py-28
        lg:px-8
        lg:py-32
      "
      style={{
        backgroundColor: "var(--color-background)",
      }}
    >
      {/* =========================================
          BACKGROUND EFFECTS
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
            top-[-180px]
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            blur-[160px]
          "
          style={{
            background: "rgba(124,58,237,0.10)",
          }}
        />

        {/* LEFT GLOW */}

        <div
          className="
            absolute
            left-[-250px]
            top-[40%]
            h-[500px]
            w-[500px]
            rounded-full
            blur-[150px]
          "
          style={{
            background: "rgba(6,182,212,0.07)",
          }}
        />

        {/* RIGHT GLOW */}

        <div
          className="
            absolute
            right-[-250px]
            top-[55%]
            h-[500px]
            w-[500px]
            rounded-full
            blur-[150px]
          "
          style={{
            background: "rgba(59,130,246,0.08)",
          }}
        />
      </div>

      {/* =========================================
          DOT BACKGROUND
      ========================================= */}

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

      {/* =========================================
          CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          {/* EYEBROW */}

          <div
            data-feature-animate
            className="
              feature-reveal
              mx-auto
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
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border-strong)",
            }}
          >
            <Sparkles size={14} />
            Everything You Need
            <span
              className="
                h-1.5
                w-1.5
                animate-pulse
                rounded-full
                bg-cyan-400
              "
            />
          </div>

          {/* TITLE */}

          <h2
            data-feature-animate
            className="
              feature-reveal
              mt-7
              text-4xl
              font-black
              leading-tight
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            One workspace.
            <br />
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
              Unlimited possibilities.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            data-feature-animate
            className="
              feature-reveal
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
            Nodexa brings powerful visual collaboration, AI assistance, and
            system design tools together in one beautiful workspace built for
            modern teams.
          </p>
        </div>

        {/* =========================================
            FEATURE GRID
        ========================================= */}

        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* =========================================
            BOTTOM HIGHLIGHT
        ========================================= */}

        <div
          data-feature-animate
          className="
            feature-reveal
            relative
            mt-16
            overflow-hidden
            rounded-3xl
            border
            p-6
            sm:p-8
            lg:p-10
          "
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          {/* GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-80px]
              top-[-80px]
              h-[280px]
              w-[280px]
              rounded-full
              bg-violet-500/10
              blur-[90px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* LEFT */}

            <div
              className="
                max-w-2xl
              "
            >
              <div
                className="
                  mb-4
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-violet-400/20
                    bg-violet-500/10
                    text-violet-400
                  "
                >
                  <BrainCircuit size={22} />
                </div>

                <span
                  className="
                    text-sm
                    font-bold
                    text-violet-400
                  "
                >
                  Powered by Nodexa AI
                </span>
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  sm:text-3xl
                "
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                From idea to architecture,
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-cyan-400
                    to-violet-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  faster than ever.
                </span>
              </h3>

              <p
                className="
                  mt-4
                  max-w-xl
                  leading-7
                "
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                Describe what you want to build and let Nodexa AI help organize
                your ideas, generate architecture, and improve your workspace.
              </p>
            </div>

            {/* RIGHT */}

            <div
              className="
                flex
                shrink-0
                flex-col
                gap-3
              "
            >
              <FeatureCheck text="Generate diagrams instantly" />

              <FeatureCheck text="Organize ideas automatically" />

              <FeatureCheck text="Collaborate in real time" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          ANIMATIONS
      ========================================= */}

      <style>
        {`

          .feature-reveal {
            opacity: 0;
            transform:
              translateY(35px);
            transition:
              opacity 0.8s ease,
              transform 0.8s
              cubic-bezier(
                0.16,
                1,
                0.3,
                1
              );
          }


          .feature-visible {
            opacity: 1;
            transform:
              translateY(0);
          }


          .feature-card {
            opacity: 0;
            transform:
              translateY(40px)
              scale(0.98);
            transition:
              opacity 0.7s ease,
              transform 0.7s
              cubic-bezier(
                0.16,
                1,
                0.3,
                1
              ),
              box-shadow 0.35s ease,
              border-color 0.35s ease;
          }


          .feature-card.feature-visible {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }


          @keyframes featureFloat {

            0%,
            100% {
              transform:
                translateY(0);
            }

            50% {
              transform:
                translateY(-8px);
            }

          }


          .feature-float {
            animation:
              featureFloat
              4s
              ease-in-out
              infinite;
          }


          @keyframes featurePulse {

            0%,
            100% {
              opacity: 0.45;
              transform:
                scale(1);
            }

            50% {
              opacity: 1;
              transform:
                scale(1.08);
            }

          }


          .feature-pulse {
            animation:
              featurePulse
              3s
              ease-in-out
              infinite;
          }

        `}
      </style>
    </section>
  );
};

/* =========================================
   FEATURE CARD
========================================= */

const FeatureCard = ({ feature, index }) => {
  const cardRef = useRef(null);

  const Icon = feature.icon;

  /* =========================================
     CARD SCROLL ANIMATION
  ========================================= */

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("feature-visible");
            }, index * 90);

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, [index]);

  return (
    <article
      ref={cardRef}
      className="
        feature-card
        group
        relative
        min-h-[360px]
        overflow-hidden
        rounded-3xl
        border
        p-6
        sm:p-7
      "
      style={{
        backgroundColor: "var(--color-surface)",

        borderColor: "var(--color-border)",

        transitionDelay: `${index * 50}ms`,
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";

        event.currentTarget.style.boxShadow = "0 24px 70px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.borderColor = "var(--color-border)";

        event.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* =====================================
          CARD GLOW
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-70px]
          top-[-70px]
          h-[200px]
          w-[200px]
          rounded-full
          opacity-0
          blur-[80px]
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: getGlowColor(feature.accent),
        }}
      />

      {/* =====================================
          NUMBER
      ===================================== */}

      <span
        className="
          absolute
          right-6
          top-6
          text-4xl
          font-black
          tracking-tight
          opacity-[0.06]
        "
        style={{
          color: "var(--color-text-primary)",
        }}
      >
        {feature.id}
      </span>

      {/* =====================================
          ICON
      ===================================== */}

      <div
        className={`
          feature-float
          relative
          z-10
          flex
          h-13
          w-13
          items-center
          justify-center
          rounded-2xl
          border
        `}
        style={{
          color: getAccentColor(feature.accent),

          backgroundColor: getAccentBackground(feature.accent),

          borderColor: getAccentBorder(feature.accent),
        }}
      >
        <Icon size={24} />
      </div>

      {/* =====================================
          CONTENT
      ===================================== */}

      <div
        className="
          relative
          z-10
          mt-7
        "
      >
        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.16em]
          "
          style={{
            color: getAccentColor(feature.accent),
          }}
        >
          {feature.badge}
        </span>

        <h3
          className="
            mt-3
            text-xl
            font-bold
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
          style={{
            color: "var(--color-text-primary)",
          }}
        >
          {feature.title}
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-7
          "
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          {feature.description}
        </p>
      </div>

      {/* =====================================
          VISUAL AREA
      ===================================== */}

      <FeatureVisual type={feature.visual} accent={feature.accent} />
    </article>
  );
};

/* =========================================
   FEATURE VISUALS
========================================= */

const FeatureVisual = ({ type, accent }) => {
  if (type === "canvas") {
    return (
      <div
        className="
          absolute
          bottom-5
          left-6
          right-6
          h-20
          overflow-hidden
          rounded-xl
          border
        "
        style={{
          backgroundColor: "var(--color-background-secondary)",

          borderColor: "var(--color-border)",
        }}
      >
        <div
          className="
            absolute
            inset-0
            opacity-60
          "
          style={{
            backgroundImage: `
              radial-gradient(
                circle,
                var(--color-grid) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "14px 14px",
          }}
        />

        <div
          className="
            absolute
            left-5
            top-5
            h-7
            w-20
            rounded-lg
            border
            bg-cyan-500/10
          "
          style={{
            borderColor: "rgba(34,211,238,0.4)",
          }}
        />

        <div
          className="
            absolute
            left-[115px]
            top-8
            h-px
            w-12
            bg-cyan-400/50
          "
        />

        <div
          className="
            absolute
            right-5
            top-4
            h-10
            w-20
            rounded-lg
            border
            bg-violet-500/10
          "
          style={{
            borderColor: "rgba(139,92,246,0.4)",
          }}
        />
      </div>
    );
  }

  if (type === "collaboration") {
    return (
      <div
        className="
          absolute
          bottom-5
          left-6
          right-6
          flex
          items-center
          justify-between
          rounded-xl
          border
          px-5
          py-4
        "
        style={{
          backgroundColor: "var(--color-background-secondary)",

          borderColor: "var(--color-border)",
        }}
      >
        <div
          className="
            flex
            -space-x-2
          "
        >
          <MiniAvatar letter="A" />

          <MiniAvatar letter="S" />

          <MiniAvatar letter="J" />
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            text-xs
            font-medium
            text-emerald-400
          "
        >
          <span
            className="
              h-2
              w-2
              animate-pulse
              rounded-full
              bg-emerald-400
            "
          />
          Live editing
        </div>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div
        className="
          absolute
          bottom-5
          left-6
          right-6
          rounded-xl
          border
          p-4
        "
        style={{
          backgroundColor: "var(--color-background-secondary)",

          borderColor: "var(--color-border)",
        }}
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              feature-pulse
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-violet-500/15
              text-violet-400
            "
          >
            <Sparkles size={17} />
          </div>

          <div>
            <div
              className="
                text-xs
                font-semibold
              "
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              Nodexa AI
            </div>

            <div
              className="
                mt-1
                h-2
                w-28
                animate-pulse
                rounded-full
                bg-violet-400/30
              "
            />
          </div>
        </div>
      </div>
    );
  }

  if (type === "architecture") {
    return (
      <div
        className="
          absolute
          bottom-5
          left-6
          right-6
          h-20
          rounded-xl
          border
        "
        style={{
          backgroundColor: "var(--color-background-secondary)",

          borderColor: "var(--color-border)",
        }}
      >
        <div
          className="
            absolute
            left-5
            top-7
            h-6
            w-12
            rounded-md
            border
            border-cyan-400/40
            bg-cyan-400/10
          "
        />

        <div
          className="
            absolute
            left-[72px]
            top-10
            h-px
            w-10
            bg-violet-400/50
          "
        />

        <div
          className="
            absolute
            left-[115px]
            top-6
            h-8
            w-14
            rounded-md
            border
            border-violet-400/40
            bg-violet-400/10
          "
        />

        <div
          className="
            absolute
            left-[175px]
            top-10
            h-px
            w-10
            bg-blue-400/50
          "
        />

        <div
          className="
            absolute
            right-5
            top-7
            h-6
            w-12
            rounded-md
            border
            border-blue-400/40
            bg-blue-400/10
          "
        />
      </div>
    );
  }

  if (type === "templates") {
    return (
      <div
        className="
          absolute
          bottom-5
          left-6
          right-6
          grid
          grid-cols-3
          gap-2
          rounded-xl
          border
          p-3
        "
        style={{
          backgroundColor: "var(--color-background-secondary)",

          borderColor: "var(--color-border)",
        }}
      >
        <TemplateMini />

        <TemplateMini />

        <TemplateMini />
      </div>
    );
  }

  return (
    <div
      className="
        absolute
        bottom-5
        left-6
        right-6
        flex
        items-center
        justify-between
        rounded-xl
        border
        px-4
        py-4
      "
      style={{
        backgroundColor: "var(--color-background-secondary)",

        borderColor: "var(--color-border)",
      }}
    >
      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <Cloud
          size={17}
          className="
            text-cyan-400
          "
        />

        <span
          className="
            text-xs
            font-medium
          "
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          Connected
        </span>
      </div>

      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <Code2
          size={16}
          className="
            text-violet-400
          "
        />

        <FileText
          size={16}
          className="
            text-blue-400
          "
        />

        <Cpu
          size={16}
          className="
            text-cyan-400
          "
        />
      </div>
    </div>
  );
};

/* =========================================
   FEATURE CHECK
========================================= */

const FeatureCheck = ({ text }) => {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        text-sm
      "
      style={{
        color: "var(--color-text-secondary)",
      }}
    >
      <div
        className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-emerald-500/10
          text-emerald-400
        "
      >
        <Check size={14} />
      </div>

      {text}
    </div>
  );
};

/* =========================================
   MINI AVATAR
========================================= */

const MiniAvatar = ({ letter }) => {
  return (
    <div
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border-2
        text-[10px]
        font-bold
        text-white
      "
      style={{
        background:
          letter === "A" ? "#3b82f6" : letter === "S" ? "#8b5cf6" : "#10b981",

        borderColor: "var(--color-background-secondary)",
      }}
    >
      {letter}
    </div>
  );
};

/* =========================================
   TEMPLATE MINI
========================================= */

const TemplateMini = () => {
  return (
    <div
      className="
        h-12
        rounded-lg
        border
        p-2
      "
      style={{
        borderColor: "var(--color-border)",
      }}
    >
      <div
        className="
          h-1.5
          w-7
          rounded-full
          bg-violet-400/50
        "
      />

      <div
        className="
          mt-2
          h-1.5
          w-full
          rounded-full
          bg-slate-400/20
        "
      />

      <div
        className="
          mt-1
          h-1.5
          w-3/4
          rounded-full
          bg-slate-400/20
        "
      />
    </div>
  );
};

/* =========================================
   ACCENT HELPERS
========================================= */

const getAccentColor = (accent) => {
  const colors = {
    cyan: "#22d3ee",
    violet: "#a78bfa",
    blue: "#60a5fa",
    purple: "#c084fc",
  };

  return colors[accent];
};

const getAccentBackground = (accent) => {
  const colors = {
    cyan: "rgba(34,211,238,0.10)",
    violet: "rgba(167,139,250,0.10)",
    blue: "rgba(96,165,250,0.10)",
    purple: "rgba(192,132,252,0.10)",
  };

  return colors[accent];
};

const getAccentBorder = (accent) => {
  const colors = {
    cyan: "rgba(34,211,238,0.25)",
    violet: "rgba(167,139,250,0.25)",
    blue: "rgba(96,165,250,0.25)",
    purple: "rgba(192,132,252,0.25)",
  };

  return colors[accent];
};

const getGlowColor = (accent) => {
  const colors = {
    cyan: "rgba(34,211,238,0.18)",
    violet: "rgba(167,139,250,0.18)",
    blue: "rgba(96,165,250,0.18)",
    purple: "rgba(192,132,252,0.18)",
  };

  return colors[accent];
};

export default FeatureSection;
