import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  CreditCard,
  PlayCircle,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";

const LandingPage = () => {
  const heroRef = useRef(null);

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const actionsRef = useRef(null);
  const benefitsRef = useRef(null);

  /* =========================================
     PAGE LOAD ANIMATION
  ========================================= */

  useEffect(() => {
    const elements = [
      badgeRef.current,
      titleRef.current,
      descriptionRef.current,
      actionsRef.current,
      benefitsRef.current,
    ];

    const timers = [];

    elements.forEach((element, index) => {
      if (!element) return;

      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";

      const timer = setTimeout(
        () => {
          element.style.transition = `
          opacity 0.8s ease,
          transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)
        `;

          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        },
        150 + index * 140,
      );

      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <main
      ref={heroRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        pt-16
      "
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-text-primary)",
      }}
    >
      {/* =========================================
          BACKGROUND GLOWS
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* PURPLE GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-[5%]
            h-[520px]
            w-[520px]
            -translate-x-1/2
            rounded-full
            blur-[140px]
          "
          style={{
            background: "var(--hero-glow-1)",
          }}
        />

        {/* CYAN GLOW */}

        <div
          className="
            absolute
            right-[-180px]
            top-[180px]
            h-[460px]
            w-[460px]
            rounded-full
            blur-[140px]
          "
          style={{
            background: "var(--hero-glow-2)",
          }}
        />

        {/* BLUE GLOW */}

        <div
          className="
            absolute
            bottom-[60px]
            left-[-180px]
            h-[460px]
            w-[460px]
            rounded-full
            blur-[140px]
          "
          style={{
            background: "var(--hero-glow-3)",
          }}
        />
      </div>

      {/* =========================================
          DOT GRID
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-grid) 1.2px,
              transparent 1.2px
            )
          `,

          backgroundSize: "28px 28px",
        }}
      />

      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <section
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-64px)]
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-4
          pb-20
          pt-10
          text-center
          sm:px-6
          lg:px-8
        "
      >
        {/* =========================================
            BADGE
        ========================================= */}

        <div
          ref={badgeRef}
          className="
            mb-7
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
            tracking-[0.2em]
          "
          style={{
            color: "var(--color-accent-cyan)",
            borderColor: "var(--color-border-strong)",
            backgroundColor: "var(--color-badge-background)",
            boxShadow: "0 10px 30px var(--shadow-color)",
          }}
        >
          <Sparkles size={15} />
          AI-Powered Collaborative Workspace
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
            "
            style={{
              backgroundColor: "var(--color-accent-cyan)",
            }}
          />
        </div>

        {/* =========================================
            TITLE
        ========================================= */}

        <h1
          ref={titleRef}
          className="
            max-w-5xl
            text-5xl
            font-black
            leading-[1.05]
            tracking-tight
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          <span
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Think It.
          </span>{" "}
          <span
            className="
              bg-gradient-to-r
              from-violet-500
              via-purple-500
              to-cyan-500
              bg-clip-text
              text-transparent
            "
          >
            Connect It.
          </span>
          <br />
          <span
            className="
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-violet-500
              bg-clip-text
              text-transparent
            "
          >
            Build It Together.
          </span>
        </h1>

        {/* =========================================
            DESCRIPTION
        ========================================= */}

        <p
          ref={descriptionRef}
          className="
            mt-8
            max-w-3xl
            text-base
            font-medium
            leading-8
            sm:text-lg
          "
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          An AI-powered collaborative visual workspace for brainstorming ideas,
          designing systems, creating diagrams, and building together in real
          time.
        </p>

        {/* =========================================
            BUTTONS
        ========================================= */}

        <div
          ref={actionsRef}
          className="
            mt-9
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
          "
        >
          {/* PRIMARY BUTTON */}

          <Link
            to="/signup"
            className="
              group
              flex
              min-w-[210px]
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              via-purple-500
              to-blue-500
              px-7
              py-4
              text-sm
              font-bold
              text-white
              shadow-[0_15px_45px_rgba(124,58,237,0.35)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_60px_rgba(124,58,237,0.55)]
            "
          >
            Start Creating Free
            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* SECONDARY BUTTON */}

          <a
            href="#nodexa-preview"
            className="
              group
              flex
              min-w-[190px]
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              px-7
              py-4
              text-sm
              font-bold
              transition-all
              duration-300
              hover:-translate-y-1
            "
            style={{
              color: "var(--color-text-primary)",
              backgroundColor: "var(--button-secondary-bg)",
              borderColor: "var(--color-border-strong)",
              boxShadow: "0 10px 30px var(--shadow-color)",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.backgroundColor =
                "var(--button-secondary-hover)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.backgroundColor =
                "var(--button-secondary-bg)";
            }}
          >
            <PlayCircle
              size={18}
              style={{
                color: "var(--color-accent-cyan)",
              }}
            />
            Explore Nodexa
          </a>
        </div>

        {/* =========================================
            BENEFITS
        ========================================= */}

        <div
          ref={benefitsRef}
          className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-4
            text-sm
            font-medium
            sm:gap-x-10
          "
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          {/* BENEFIT 1 */}

          <div className="flex items-center gap-2">
            <WandSparkles
              size={16}
              style={{
                color: "var(--color-accent-cyan)",
              }}
            />
            Free forever for individuals
          </div>

          {/* DIVIDER */}

          <div
            className="
              hidden
              h-4
              w-px
              sm:block
            "
            style={{
              backgroundColor: "var(--color-border-strong)",
            }}
          />

          {/* BENEFIT 2 */}

          <div className="flex items-center gap-2">
            <CreditCard
              size={16}
              style={{
                color: "var(--color-accent-cyan)",
              }}
            />
            No credit card required
          </div>

          {/* DIVIDER */}

          <div
            className="
              hidden
              h-4
              w-px
              sm:block
            "
            style={{
              backgroundColor: "var(--color-border-strong)",
            }}
          />

          {/* BENEFIT 3 */}

          <div className="flex items-center gap-2">
            <Zap
              size={16}
              style={{
                color: "var(--color-accent-cyan)",
              }}
            />
            Real-time collaboration
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
