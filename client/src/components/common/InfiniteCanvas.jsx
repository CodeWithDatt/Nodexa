import { useEffect, useRef } from "react";

import {
  ArrowRight,
  Brain,
  Bot,
  Check,
  Command,
  MousePointer2,
  Network,
  PenTool,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";

const InfiniteCanvas = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add("canvas-section-visible");
        }
      },
      {
        threshold: 0.15,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const highlights = [
    {
      icon: PenTool,
      title: "Organic Vector Smoothing",
      description:
        "Freehand strokes instantly transform into clean, high-resolution vector paths.",
    },
    {
      icon: Command,
      title: "Magnetic Smart Align",
      description:
        "Dynamic guide rails calculate spacing and intelligently align every connected idea.",
    },
  ];

  return (
    <section
      id="canvas"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        px-4
        py-24
        sm:px-6
        lg:px-8
        lg:py-32
      "
      style={{
        backgroundColor: "var(--color-background-secondary)",
      }}
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow */}

        <div
          className="
            absolute
            left-[15%]
            top-[10%]
            h-[320px]
            w-[320px]
            rounded-full
            blur-[140px]
          "
          style={{
            background: "var(--hero-glow-1)",
          }}
        />

        <div
          className="
            absolute
            bottom-[5%]
            right-[5%]
            h-[360px]
            w-[360px]
            rounded-full
            blur-[150px]
          "
          style={{
            background: "var(--hero-glow-2)",
          }}
        />

        {/* Dot Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-50
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-grid) 1px, transparent 1px)",

            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div
        ref={contentRef}
        className="
          canvas-content
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* =========================================
            TOP LABEL
        ========================================= */}

        <div className="mb-16 text-center">
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
              color: "#22d3ee",
              borderColor: "var(--color-border-strong)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <Sparkles size={14} />
            Infinite Canvas
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </div>

          <h2
            className="
              mx-auto
              mt-7
              max-w-3xl
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
            Your Ideas Need{" "}
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
              More Space.
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
            Break free from confined pages and rigid layouts. Explore ideas,
            connect systems, and build visual thinking spaces without limits.
          </p>
        </div>

        {/* =========================================
            MAIN GRID
        ========================================= */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-16
          "
        >
          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div className="canvas-left-content">
            {/* Badge */}

            <div
              className="
                mb-7
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
                tracking-[0.18em]
              "
              style={{
                color: "var(--color-text-secondary)",
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <Network size={14} className="text-violet-400" />
              Unconstrained Stage
            </div>

            {/* Title */}

            <h3
              className="
                max-w-xl
                text-4xl
                font-black
                leading-tight
                tracking-tight
                sm:text-5xl
              "
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              Think Bigger.
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
                Build Without Limits.
              </span>
            </h3>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-8
                sm:text-lg
              "
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Nodexa gives your thinking room to expand naturally. Move from
              early ideas to complete systems without ever running out of space.
            </p>

            {/* =========================================
                FEATURE CARDS
            ========================================= */}

            <div className="mt-10 space-y-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      canvas-feature-card
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      p-5
                      transition-all
                      duration-500
                      hover:-translate-y-1
                    "
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    {/* Hover Glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                      style={{
                        background:
                          "linear-gradient(120deg, rgba(124,58,237,0.10), transparent 55%)",
                      }}
                    />

                    <div className="relative flex gap-4">
                      {/* Icon */}

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                        "
                        style={{
                          background:
                            index === 0
                              ? "rgba(6,182,212,0.12)"
                              : "rgba(139,92,246,0.12)",

                          borderColor:
                            index === 0
                              ? "rgba(6,182,212,0.20)"
                              : "rgba(139,92,246,0.20)",
                        }}
                      >
                        <Icon
                          size={19}
                          className={
                            index === 0 ? "text-cyan-400" : "text-violet-400"
                          }
                        />
                      </div>

                      {/* Text */}

                      <div>
                        <h4
                          className="
                            text-base
                            font-bold
                          "
                          style={{
                            color: "var(--color-text-primary)",
                          }}
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                          "
                          style={{
                            color: "var(--color-text-secondary)",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =========================================
                TAGS
            ========================================= */}

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "#Brainstorming",
                "#InfiniteCanvas",
                "#SystemDesign",
                "#SprintPlanning",
              ].map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                  "
                  style={{
                    color: "var(--color-text-secondary)",
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-surface)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* =========================================
              RIGHT CANVAS
          ========================================= */}

          <div
            ref={canvasRef}
            className="
              canvas-visual
              relative
              min-h-[500px]
              overflow-hidden
              rounded-[28px]
              border
              p-4
              shadow-[0_30px_100px_rgba(0,0,0,0.25)]
              sm:min-h-[540px]
            "
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border-strong)",
            }}
          >
            {/* =========================================
                CANVAS TOP BAR
            ========================================= */}

            <div
              className="
                relative
                z-20
                flex
                items-center
                justify-between
                rounded-2xl
                border
                px-4
                py-3
              "
              style={{
                backgroundColor: "var(--color-surface-elevated)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(6,182,212,0.8))",
                  }}
                >
                  <MousePointer2 size={15} className="text-white" />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                    "
                    style={{
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Product Architecture
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                    "
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Infinite workspace
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className="
                    rounded-lg
                    border
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                  "
                  style={{
                    color: "var(--color-text-secondary)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  100%
                </div>

                <div className="flex -space-x-2">
                  <span className="h-7 w-7 rounded-full border-2 border-[#151a2b] bg-violet-500" />

                  <span className="h-7 w-7 rounded-full border-2 border-[#151a2b] bg-cyan-400" />

                  <span className="h-7 w-7 rounded-full border-2 border-[#151a2b] bg-blue-500" />
                </div>
              </div>
            </div>

            {/* =========================================
                DOT GRID
            ========================================= */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                top-[74px]
                opacity-70
              "
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--color-grid) 1px, transparent 1px)",

                backgroundSize: "22px 22px",
              }}
            />

            {/* =========================================
                CONNECTION LINES
            ========================================= */}

            <svg
              className="
                pointer-events-none
                absolute
                inset-0
                z-[5]
                h-full
                w-full
              "
              viewBox="0 0 700 540"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M150 190 C 250 190, 250 310, 360 300"
                stroke="url(#purpleLine)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />

              <path
                d="M370 300 C 470 290, 470 180, 570 180"
                stroke="url(#cyanLine)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />

              <path
                d="M370 310 C 480 340, 500 420, 590 420"
                stroke="url(#blueLine)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />

              <defs>
                <linearGradient id="purpleLine" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#8b5cf6" />

                  <stop offset="1" stopColor="#6366f1" />
                </linearGradient>

                <linearGradient id="cyanLine" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#22d3ee" />

                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>

                <linearGradient id="blueLine" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#6366f1" />

                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>

            {/* =========================================
                NODE 1
            ========================================= */}

            <div
              className="
                canvas-node
                absolute
                left-[8%]
                top-[22%]
                z-10
                w-[170px]
                rounded-2xl
                border
                p-5
              "
              style={{
                backgroundColor: "var(--color-surface-elevated)",
                borderColor: "var(--color-border-strong)",
              }}
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-500/20
                "
              >
                <Brain size={18} className="text-violet-400" />
              </div>

              <div
                className="
                  mt-4
                  inline-flex
                  rounded-full
                  bg-violet-500/15
                  px-2
                  py-1
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-violet-400
                "
              >
                Idea
              </div>

              <h4
                className="
                  mt-3
                  text-sm
                  font-bold
                "
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Product Vision
              </h4>

              <p
                className="
                  mt-2
                  text-[10px]
                  leading-5
                "
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                Explore ideas and define the next generation.
              </p>
            </div>

            {/* =========================================
                CENTER NODE
            ========================================= */}

            <div
              className="
                canvas-node
                absolute
                left-[34%]
                top-[40%]
                z-20
                w-[210px]
                rounded-2xl
                border
                p-5
                shadow-[0_20px_60px_rgba(124,58,237,0.22)]
              "
              style={{
                backgroundColor: "var(--color-surface-elevated)",
                borderColor: "rgba(139,92,246,0.55)",
              }}
            >
              <div className="flex items-start gap-3">
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
                    from-violet-500
                    to-purple-700
                    shadow-lg
                  "
                >
                  <Sparkles size={18} className="text-white" />
                </div>

                <div>
                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                    "
                    style={{
                      color: "#a78bfa",
                    }}
                  >
                    Core System
                  </span>

                  <h4
                    className="
                      mt-1
                      text-sm
                      font-bold
                    "
                    style={{
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Nodexa Platform
                  </h4>
                </div>
              </div>

              <p
                className="
                  mt-4
                  text-[10px]
                  leading-5
                "
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                Connect teams, ideas, systems and workflows inside one powerful
                visual workspace.
              </p>

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-2
                  text-[9px]
                  font-semibold
                  text-emerald-400
                "
              >
                <Check size={12} />
                System connected
              </div>
            </div>

            {/* =========================================
                AI NODE
            ========================================= */}

            <div
              className="
                canvas-node
                absolute
                right-[7%]
                top-[20%]
                z-10
                w-[165px]
                rounded-2xl
                border
                p-5
              "
              style={{
                backgroundColor: "var(--color-surface-elevated)",
                borderColor: "var(--color-border-strong)",
              }}
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-500/15
                "
              >
                <Bot size={18} className="text-cyan-400" />
              </div>

              <h4
                className="
                  mt-4
                  text-sm
                  font-bold
                "
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                AI Assistant
              </h4>

              <p
                className="
                  mt-2
                  text-[10px]
                  leading-5
                "
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                Turn thoughts into structured solutions instantly.
              </p>
            </div>

            {/* =========================================
                REALTIME NODE
            ========================================= */}

            <div
              className="
                canvas-node
                absolute
                bottom-[8%]
                right-[7%]
                z-10
                w-[175px]
                rounded-2xl
                border
                p-5
              "
              style={{
                backgroundColor: "var(--color-surface-elevated)",
                borderColor: "var(--color-border-strong)",
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/15
                  "
                >
                  <Zap size={18} className="text-blue-400" />
                </div>

                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              </div>

              <h4
                className="
                  mt-4
                  text-sm
                  font-bold
                "
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Real-Time Sync
              </h4>

              <p
                className="
                  mt-2
                  text-[10px]
                  leading-5
                "
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                Every idea updates instantly across your workspace.
              </p>
            </div>

            {/* =========================================
                SMALL AI STATUS
            ========================================= */}

            <div
              className="
                canvas-floating-status
                absolute
                bottom-[10%]
                left-[8%]
                z-20
                flex
                items-center
                gap-3
                rounded-xl
                border
                px-4
                py-3
                shadow-xl
              "
              style={{
                backgroundColor: "var(--color-surface-elevated)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-violet-500/15
                "
              >
                <WandSparkles size={14} className="text-violet-400" />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                  "
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  AI suggestion ready
                </p>

                <p
                  className="
                    mt-0.5
                    text-[8px]
                  "
                  style={{
                    color: "var(--color-text-muted)",
                  }}
                >
                  New connection discovered
                </p>
              </div>
            </div>

            {/* =========================================
                CURSOR
            ========================================= */}

            <MousePointer2
              className="
                absolute
                left-[68%]
                top-[53%]
                z-30
                fill-cyan-400
                text-cyan-400
                drop-shadow-[0_0_14px_rgba(34,211,238,0.7)]
              "
              size={26}
            />
          </div>
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <div
          className="
            canvas-bottom-cta
            relative
            mt-16
            flex
            flex-col
            gap-6
            rounded-3xl
            border
            p-7
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-8
          "
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-full
              w-[300px]
              rounded-full
              opacity-50
              blur-[100px]
            "
            style={{
              background: "var(--hero-glow-1)",
            }}
          />

          <div className="relative">
            <h3
              className="
                text-xl
                font-bold
                sm:text-2xl
              "
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              Start anywhere. Go everywhere.
            </h3>

            <p
              className="
                mt-2
                text-sm
              "
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Your workspace expands as fast as your ideas do.
            </p>
          </div>

          <a
            href="#templates"
            className="
              group
              relative
              flex
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              via-purple-500
              to-blue-500
              px-6
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_10px_30px_rgba(124,58,237,0.35)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_16px_45px_rgba(124,58,237,0.55)]
            "
          >
            Explore Templates
            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfiniteCanvas;
