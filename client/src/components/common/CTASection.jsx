import { ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section
      id="signup"
      className="
        relative
        overflow-hidden
        px-4
        py-24
        sm:px-6
        lg:px-8
      "
      style={{
        backgroundColor: "var(--color-background)",
      }}
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      {/* Main purple glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[150px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.20) 0%, rgba(124,58,237,0.08) 35%, transparent 70%)",
        }}
      />

      {/* Cyan glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[10%]
          h-[420px]
          w-[420px]
          rounded-full
          blur-[140px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%)",
        }}
      />

      {/* Left glow */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-[-180px]
          h-[420px]
          w-[420px]
          rounded-full
          blur-[140px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.10), transparent 70%)",
        }}
      />

      {/* Dot grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
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
          DECORATIVE LINES
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-px
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-border-strong), transparent)",
        }}
      />

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[620px]
          max-w-6xl
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* =========================================
            BADGE
        ========================================= */}

        <div
          className="
            group
            mb-8
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
            tracking-[0.22em]
            transition-all
            duration-300
            hover:-translate-y-0.5
          "
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border-strong)",
            color: "#22d3ee",
            boxShadow: "0 10px 35px rgba(34,211,238,0.08)",
          }}
        >
          <Sparkles
            size={14}
            className="
              transition-transform
              duration-300
              group-hover:rotate-12
            "
          />
          Get Started Today
        </div>

        {/* =========================================
            HEADING
        ========================================= */}

        <h2
          className="
            max-w-5xl
            text-5xl
            font-black
            leading-[1.05]
            tracking-tight
            sm:text-6xl
            md:text-7xl
          "
          style={{
            color: "var(--color-text-primary)",
          }}
        >
          Ready to Bring Your Ideas
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
            to Life?
          </span>
        </h2>

        {/* =========================================
            DESCRIPTION
        ========================================= */}

        <p
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-base
            leading-8
            sm:text-lg
            md:text-xl
          "
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          Create, collaborate, design, and build in one powerful visual
          workspace. Turn your ideas into something real with Nodexa.
        </p>

        {/* =========================================
            ACTION BUTTONS
        ========================================= */}

        <div
          className="
            mt-10
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
              relative
              flex
              min-w-[220px]
              items-center
              justify-center
              gap-3
              overflow-hidden
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              via-purple-500
              to-blue-500
              px-8
              py-4
              text-sm
              font-bold
              text-white
              shadow-[0_18px_55px_rgba(124,58,237,0.38)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_25px_70px_rgba(124,58,237,0.60)]
            "
          >
            {/* Button shine */}

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />

            <span className="relative">Start Creating Free</span>

            <ArrowRight
              size={18}
              className="
                relative
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* SECONDARY BUTTON */}

          <a
            href="#templates"
            className="
              group
              flex
              min-w-[200px]
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              px-8
              py-4
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-1
            "
            style={{
              backgroundColor: "var(--button-secondary-bg)",
              borderColor: "var(--color-border-strong)",
              color: "var(--color-text-primary)",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.backgroundColor =
                "var(--color-surface-hover)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.backgroundColor =
                "var(--button-secondary-bg)";
            }}
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

        {/* =========================================
            TRUST MESSAGE
        ========================================= */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-center
            gap-3
            sm:flex-row
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              font-medium
            "
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            <CheckCircle2 size={18} className="text-cyan-400" />
            Free to start
          </div>

          <div
            className="
              hidden
              h-4
              w-px
              sm:block
            "
            style={{
              backgroundColor: "var(--color-border)",
            }}
          />

          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              font-medium
            "
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            <CheckCircle2 size={18} className="text-cyan-400" />
            No credit card required
          </div>

          <div
            className="
              hidden
              h-4
              w-px
              sm:block
            "
            style={{
              backgroundColor: "var(--color-border)",
            }}
          />

          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              font-medium
            "
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            <Zap size={17} className="text-cyan-400" />
            Built for teams
          </div>
        </div>

        {/* =========================================
            BOTTOM DECORATION
        ========================================= */}

        <div
          className="
            mt-16
            flex
            items-center
            justify-center
            gap-2
            opacity-70
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-violet-400
              shadow-[0_0_14px_rgba(139,92,246,0.9)]
            "
          />

          <div
            className="
              h-px
              w-12
              bg-gradient-to-r
              from-violet-400
              to-cyan-400
            "
          />

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-cyan-400
              shadow-[0_0_16px_rgba(34,211,238,0.9)]
            "
          />

          <div
            className="
              h-px
              w-12
              bg-gradient-to-r
              from-cyan-400
              to-violet-400
            "
          />

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-violet-400
              shadow-[0_0_14px_rgba(139,92,246,0.9)]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
