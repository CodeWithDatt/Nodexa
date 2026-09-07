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

import WorkspacePreview from "../components/common/WorkspacePreview";
import FeatureSection from "../components/common/FeatureSection";
import InfiniteCanvas from "../components/common/InfiniteCanvas";
import TemplatesSection from "../components/common/TemplatesSection";
import DeveloperSection from "../components/common/DeveloperSection";
import AboutSection from "../components/common/AboutSection";
import CTASection from "../components/common/CTASection";
import FooterSection from "../components/common/FooterSection";

const LandingPage = () => {
  const heroRef = useRef(null);

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const actionsRef = useRef(null);
  const benefitsRef = useRef(null);

  /* =========================================
     HERO LOAD ANIMATION
  ========================================= */

  useEffect(() => {
    const elements = [
      badgeRef.current,
      titleRef.current,
      descriptionRef.current,
      actionsRef.current,
      benefitsRef.current,
    ];

    elements.forEach((element, index) => {
      if (!element) return;

      element.style.opacity = "0";
      element.style.transform = "translateY(35px)";

      const timer = setTimeout(
        () => {
          element.style.transition = `
          opacity 0.9s ease,
          transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)
        `;

          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        },
        150 + index * 140,
      );

      return () => clearTimeout(timer);
    });
  }, []);

  /* =========================================
     SCROLL TO SECTION
  ========================================= */

  const scrollToPreview = (event) => {
    event.preventDefault();

    const element = document.querySelector("#nodexa-preview");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* =========================================
          HERO SECTION
      ========================================= */}

      <main
        ref={heroRef}
        className="
          relative
          overflow-hidden
          transition-colors
          duration-500
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
          {/* CENTER PURPLE GLOW */}

          <div
            className="
              absolute
              left-1/2
              top-[5%]
              h-[500px]
              w-[500px]
              -translate-x-1/2
              rounded-full
              blur-[140px]
              sm:h-[650px]
              sm:w-[650px]
            "
            style={{
              background: "var(--hero-glow-1)",
            }}
          />

          {/* RIGHT CYAN GLOW */}

          <div
            className="
              absolute
              right-[-180px]
              top-[250px]
              h-[450px]
              w-[450px]
              rounded-full
              blur-[140px]
            "
            style={{
              background: "var(--hero-glow-2)",
            }}
          />

          {/* LEFT BLUE GLOW */}

          <div
            className="
              absolute
              left-[-180px]
              bottom-[50px]
              h-[450px]
              w-[450px]
              rounded-full
              blur-[140px]
            "
            style={{
              background: "var(--hero-glow-3)",
            }}
          />
        </div>

        {/* =========================================
            DOT GRID BACKGROUND
        ========================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-70
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
            min-h-screen
            max-w-7xl
            flex-col
            items-center
            justify-center
            px-4
            pb-24
            pt-32
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
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              shadow-[0_10px_30px_var(--shadow-color)]
              sm:text-[11px]
            "
            style={{
              color: "#22d3ee",
              borderColor: "var(--color-border-strong)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <Sparkles size={15} />

            <span>AI-Powered Collaborative Workspace</span>

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.9)]
              "
            />
          </div>

          {/* =========================================
              HERO TITLE
          ========================================= */}

          <h1
            ref={titleRef}
            className="
              max-w-6xl
              text-5xl
              font-black
              leading-[1.05]
              tracking-tight
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            {/* THINK IT */}
            <span
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              Think It.
            </span>{" "}
            {/* CONNECT IT */}
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
              Connect It.
            </span>
            <br />
            {/* BUILD IT */}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
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
              leading-8
              sm:text-lg
              sm:leading-8
            "
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            An AI-powered collaborative visual workspace for brainstorming
            ideas, designing systems, creating diagrams, and building together
            in real time.
          </p>

          {/* =========================================
              HERO BUTTONS
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
                min-w-[220px]
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
              onClick={scrollToPreview}
              className="
                group
                flex
                min-w-[200px]
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                px-7
                py-4
                text-sm
                font-bold
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                color: "var(--color-text-primary)",
                backgroundColor: "var(--button-secondary-bg)",
                borderColor: "var(--color-border-strong)",
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
                size={19}
                className="
                  text-cyan-400
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
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
              sm:gap-x-10
            "
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            {/* BENEFIT 1 */}

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <WandSparkles size={16} className="text-cyan-400" />

              <span>Free forever for individuals</span>
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

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <CreditCard size={16} className="text-cyan-400" />

              <span>No credit card required</span>
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

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Zap size={16} className="text-cyan-400" />

              <span>Real-time collaboration</span>
            </div>
          </div>

          {/* =========================================
              SCROLL INDICATOR
          ========================================= */}

          <div
            className="
              absolute
              bottom-8
              left-1/2
              hidden
              -translate-x-1/2
              flex-col
              items-center
              gap-2
              md:flex
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
              "
              style={{
                color: "var(--color-text-muted)",
              }}
            >
              Discover More
            </span>

            <div
              className="
                flex
                h-9
                w-5
                justify-center
                rounded-full
                border
                p-1
              "
              style={{
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="
                  h-2
                  w-1
                  animate-bounce
                  rounded-full
                  bg-cyan-400
                "
              />
            </div>
          </div>
        </section>
      </main>

      <WorkspacePreview />

      <FeatureSection />

      <InfiniteCanvas />

      <TemplatesSection />

      <DeveloperSection />

      <AboutSection />

      <CTASection />

      <FooterSection />
    </>
  );
};

export default LandingPage;
