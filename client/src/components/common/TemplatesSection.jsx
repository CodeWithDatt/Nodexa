import { useEffect, useRef } from "react";

import {
  ArrowRight,
  Boxes,
  Code2,
  Database,
  GitBranch,
  LayoutTemplate,
  Lightbulb,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";

const templates = [
  {
    title: "System Architecture",
    description: "Microservices, load balancers, DB, and multi-region caches.",
    icon: Network,
    type: "architecture",
    accent: "violet",
  },

  {
    title: "Logic Flowchart",
    description: "Decision trees, condition branches, and state endpoints.",
    icon: Workflow,
    type: "flowchart",
    accent: "cyan",
  },

  {
    title: "Mind Map Tree",
    description: "Central concept with expanding multi-level ideas.",
    icon: Lightbulb,
    type: "mindmap",
    accent: "purple",
  },

  {
    title: "Database ERD",
    description: "Relational table schemas, primary and foreign key links.",
    icon: Database,
    type: "database",
    accent: "blue",
  },

  {
    title: "Kanban Agile Board",
    description: "Backlog, in Progress, Review, and Done workflow.",
    icon: Boxes,
    type: "kanban",
    accent: "cyan",
  },

  {
    title: "Sprint Planning",
    description: "Sprint points, velocity tracking, and key milestones.",
    icon: GitBranch,
    type: "sprint",
    accent: "violet",
  },

  {
    title: "User Journey Map",
    description:
      "Touchpoints, friction points, sentiment scores, and emotions.",
    icon: Sparkles,
    type: "journey",
    accent: "purple",
  },

  {
    title: "API Sequence Diagram",
    description: "Client, Gateway, API, and microservice async lifecycles.",
    icon: Code2,
    type: "api",
    accent: "blue",
  },
];

const TemplatesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("templates-visible");
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const getAccentColor = (accent) => {
    const colors = {
      violet: "#8b5cf6",
      cyan: "#22d3ee",
      purple: "#a855f7",
      blue: "#3b82f6",
    };

    return colors[accent];
  };

  const renderPreview = (type, accent) => {
    const color = getAccentColor(accent);

    /* =========================================
       SYSTEM ARCHITECTURE
    ========================================= */

    if (type === "architecture") {
      return (
        <div className="template-preview-canvas">
          <div className="template-line line-architecture-1" />

          <div className="template-line line-architecture-2" />

          <div className="template-line line-architecture-3" />

          <div className="preview-node preview-node-api">API</div>

          <div
            className="preview-node preview-node-service"
            style={{
              borderColor: `${color}80`,
              color,
            }}
          >
            SVC
          </div>

          <div className="preview-node preview-node-db">DB</div>
        </div>
      );
    }

    /* =========================================
       FLOWCHART
    ========================================= */

    if (type === "flowchart") {
      return (
        <div className="template-preview-canvas">
          <div
            className="flow-node flow-start"
            style={{
              borderColor: `${color}70`,
              color,
            }}
          >
            Start
          </div>

          <div className="flow-diamond">◆</div>

          <div className="flow-node flow-process">Process</div>

          <div className="flow-line flow-line-1" />

          <div className="flow-line flow-line-2" />
        </div>
      );
    }

    /* =========================================
       MIND MAP
    ========================================= */

    if (type === "mindmap") {
      return (
        <div className="template-preview-canvas">
          <div className="mind-line mind-line-left" />

          <div className="mind-line mind-line-right" />

          <div className="mind-line mind-line-bottom" />

          <div className="mind-node mind-node-left">A</div>

          <div
            className="mind-core"
            style={{
              backgroundColor: color,
            }}
          >
            Core
          </div>

          <div className="mind-node mind-node-right">B</div>
        </div>
      );
    }

    /* =========================================
       DATABASE
    ========================================= */

    if (type === "database") {
      return (
        <div className="template-preview-canvas">
          <div className="database-table database-users">
            <span>Users</span>

            <small>PK id</small>

            <small>name</small>
          </div>

          <div className="database-table database-orders">
            <span>Orders</span>

            <small>PK id</small>

            <small>FK user_id</small>
          </div>

          <div className="database-connection" />
        </div>
      );
    }

    /* =========================================
       KANBAN
    ========================================= */

    if (type === "kanban") {
      return (
        <div className="template-preview-canvas kanban-preview">
          <div className="kanban-column">
            <span />

            <div />

            <div />
          </div>

          <div className="kanban-column">
            <span />

            <div />

            <div />
          </div>

          <div className="kanban-column">
            <span />

            <div />

            <div />
          </div>
        </div>
      );
    }

    /* =========================================
       SPRINT
    ========================================= */

    if (type === "sprint") {
      return (
        <div className="template-preview-canvas">
          <div className="sprint-line sprint-line-1">Sprint 01</div>

          <div className="sprint-line sprint-line-2">Sprint 02</div>

          <div className="sprint-line sprint-line-3">Sprint 03</div>
        </div>
      );
    }

    /* =========================================
       JOURNEY
    ========================================= */

    if (type === "journey") {
      return (
        <div className="template-preview-canvas journey-preview">
          <div className="journey-path" />

          <div className="journey-point journey-point-1" />

          <div className="journey-point journey-point-2" />

          <div className="journey-point journey-point-3" />

          <div className="journey-label journey-label-1">Discover</div>

          <div className="journey-label journey-label-2">Decide</div>
        </div>
      );
    }

    /* =========================================
       API SEQUENCE
    ========================================= */

    if (type === "api") {
      return (
        <div className="template-preview-canvas api-preview">
          <div className="api-column">Client</div>

          <div className="api-column">Gateway</div>

          <div className="api-column">Service</div>

          <div className="api-arrow api-arrow-1" />

          <div className="api-arrow api-arrow-2" />

          <div className="api-arrow api-arrow-3" />
        </div>
      );
    }

    return null;
  };

  return (
    <section
      id="templates"
      ref={sectionRef}
      className="
        templates-section
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

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
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
            backgroundSize: "28px 28px",
          }}
        />

        <div className="templates-glow templates-glow-left" />

        <div className="templates-glow templates-glow-right" />
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
          className="
            templates-header
            mx-auto
            max-w-3xl
            text-center
          "
        >
          {/* BADGE */}

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
              tracking-[0.18em]
            "
            style={{
              color: "#a78bfa",
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border-strong)",
            }}
          >
            <LayoutTemplate size={13} />
            Pre-Built Blueprints
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Start With an Idea,
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
              Not a Blank Canvas.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              sm:text-base
            "
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            Choose from battle-tested production templates and start designing
            your next idea immediately.
          </p>
        </div>

        {/* =========================================
            TEMPLATE GRID
        ========================================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {templates.map((template, index) => {
            const Icon = template.icon;

            return (
              <article
                key={template.title}
                className="
                  template-card
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                {/* HOVER GLOW */}

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
                    background: `
                      radial-gradient(
                        circle at 50% 0%,
                        ${getAccentColor(template.accent)}22,
                        transparent 60%
                      )
                    `,
                  }}
                />

                {/* =====================================
                    PREVIEW
                ===================================== */}

                <div
                  className="
                    relative
                    h-[145px]
                    overflow-hidden
                    border-b
                  "
                  style={{
                    backgroundColor: "var(--color-background-secondary)",

                    borderColor: "var(--color-border)",
                  }}
                >
                  {/* DOT GRID */}

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
                      backgroundSize: "15px 15px",
                    }}
                  />

                  {renderPreview(template.type, template.accent)}
                </div>

                {/* =====================================
                    CARD CONTENT
                ===================================== */}

                <div
                  className="
                    relative
                    p-5
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      mb-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    style={{
                      backgroundColor: `${getAccentColor(template.accent)}15`,

                      borderColor: `${getAccentColor(template.accent)}35`,
                    }}
                  >
                    <Icon
                      size={18}
                      style={{
                        color: getAccentColor(template.accent),
                      }}
                    />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      text-[15px]
                      font-bold
                    "
                    style={{
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {template.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                    "
                    style={{
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {template.description}
                  </p>

                  {/* HOVER BUTTON */}

                  <button
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      opacity-70
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                    style={{
                      color: getAccentColor(template.accent),
                    }}
                  >
                    Use Template
                    <ArrowRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================================
            EXPLORE BUTTON
        ========================================= */}

        <div
          className="
            templates-bottom
            mt-12
            flex
            justify-center
          "
        >
          <button
            className="
              group
              flex
              items-center
              gap-3
              rounded-xl
              border
              px-6
              py-3.5
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
            style={{
              backgroundColor: "var(--button-secondary-bg)",

              color: "var(--color-text-primary)",

              borderColor: "var(--color-border-strong)",
            }}
          >
            Explore All 100+ Production Templates
            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              style={{
                color: "#22d3ee",
              }}
            />
          </button>
        </div>
      </div>

      {/* =========================================
          COMPONENT STYLES
      ========================================= */}

      <style>
        {`
          /* ===============================
             SECTION ANIMATION
          =============================== */

          .templates-header {
            opacity: 0;
            transform: translateY(35px);
            transition:
              opacity 0.8s ease,
              transform 0.8s cubic-bezier(
                0.16,
                1,
                0.3,
                1
              );
          }

          .template-card {
            opacity: 0;
            transform:
              translateY(35px)
              scale(0.98);
          }

          .templates-bottom {
            opacity: 0;
            transform: translateY(20px);
            transition:
              opacity 0.7s ease 0.6s,
              transform 0.7s cubic-bezier(
                0.16,
                1,
                0.3,
                1
              ) 0.6s;
          }

          .templates-visible .templates-header {
            opacity: 1;
            transform: translateY(0);
          }

          .templates-visible .template-card {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);

            transition:
              opacity 0.7s ease,
              transform 0.7s cubic-bezier(
                0.16,
                1,
                0.3,
                1
              ),
              box-shadow 0.4s ease,
              border-color 0.4s ease;
          }

          .templates-visible
            .template-card:nth-child(1) {
            transition-delay: 0.08s;
          }

          .templates-visible
            .template-card:nth-child(2) {
            transition-delay: 0.14s;
          }

          .templates-visible
            .template-card:nth-child(3) {
            transition-delay: 0.20s;
          }

          .templates-visible
            .template-card:nth-child(4) {
            transition-delay: 0.26s;
          }

          .templates-visible
            .template-card:nth-child(5) {
            transition-delay: 0.32s;
          }

          .templates-visible
            .template-card:nth-child(6) {
            transition-delay: 0.38s;
          }

          .templates-visible
            .template-card:nth-child(7) {
            transition-delay: 0.44s;
          }

          .templates-visible
            .template-card:nth-child(8) {
            transition-delay: 0.50s;
          }

          .templates-visible
            .templates-bottom {
            opacity: 1;
            transform: translateY(0);
          }

          /* ===============================
             GLOWS
          =============================== */

          .templates-glow {
            position: absolute;
            width: 450px;
            height: 450px;
            border-radius: 999px;
            filter: blur(140px);
            pointer-events: none;
          }

          .templates-glow-left {
            left: -250px;
            top: 25%;

            background:
              rgba(
                124,
                58,
                237,
                0.10
              );
          }

          .templates-glow-right {
            right: -250px;
            top: 50%;

            background:
              rgba(
                6,
                182,
                212,
                0.08
              );
          }

          /* ===============================
             ARCHITECTURE PREVIEW
          =============================== */

          .template-preview-canvas {
            position: absolute;
            inset: 0;
          }

          .preview-node {
            position: absolute;

            display: flex;

            align-items: center;
            justify-content: center;

            min-width: 35px;

            padding:
              7px
              10px;

            border-radius: 6px;

            border:
              1px
              solid
              rgba(
                148,
                163,
                184,
                0.25
              );

            background:
              var(
                --color-surface
              );

            color:
              var(
                --color-text-primary
              );

            font-size: 8px;

            font-weight: 700;

            box-shadow:
              0
              8px
              20px
              rgba(
                0,
                0,
                0,
                0.12
              );
          }

          .preview-node-api {
            left: 14%;
            top: 52%;
          }

          .preview-node-service {
            left: 50%;
            top: 52%;

            transform:
              translate(
                -50%,
                -50%
              );
          }

          .preview-node-db {
            right: 14%;
            top: 52%;
          }

          .template-line {
            position: absolute;

            height: 1px;

            background:
              linear-gradient(
                90deg,
                transparent,
                #22d3ee,
                transparent
              );

            opacity: 0.8;
          }

          .line-architecture-1 {
            width: 55px;

            left: 25%;
            top: 50%;

            transform:
              rotate(
                -10deg
              );
          }

          .line-architecture-2 {
            width: 55px;

            right: 25%;
            top: 50%;

            transform:
              rotate(
                10deg
              );
          }

          .line-architecture-3 {
            display: none;
          }

          /* ===============================
             FLOWCHART
          =============================== */

          .flow-node {
            position: absolute;

            padding:
              5px
              11px;

            border-radius: 999px;

            border:
              1px
              solid
              rgba(
                148,
                163,
                184,
                0.25
              );

            background:
              var(
                --color-surface
              );

            font-size: 7px;

            font-weight: 700;
          }

          .flow-start {
            top: 14%;
            left: 50%;

            transform:
              translateX(
                -50%
              );
          }

          .flow-diamond {
            position: absolute;

            left: 50%;
            top: 44%;

            transform:
              translate(
                -50%,
                -50%
              );

            color:
              #8b5cf6;

            font-size: 16px;
          }

          .flow-process {
            left: 50%;
            bottom: 12%;

            transform:
              translateX(
                -50%
              );
          }

          .flow-line {
            position: absolute;

            width: 1px;

            background:
              rgba(
                34,
                211,
                238,
                0.65
              );
          }

          .flow-line-1 {
            height: 22px;

            left: 50%;
            top: 28%;
          }

          .flow-line-2 {
            height: 22px;

            left: 50%;
            bottom: 26%;
          }

          /* ===============================
             MIND MAP
          =============================== */

          .mind-core {
            position: absolute;

            left: 50%;
            top: 50%;

            transform:
              translate(
                -50%,
                -50%
              );

            display: flex;

            align-items: center;
            justify-content: center;

            width: 45px;
            height: 45px;

            border-radius: 50%;

            color: white;

            font-size: 8px;

            font-weight: 700;

            box-shadow:
              0
              10px
              25px
              rgba(
                0,
                0,
                0,
                0.2
              );
          }

          .mind-node {
            position: absolute;

            padding:
              5px
              9px;

            border-radius: 5px;

            background:
              var(
                --color-surface
              );

            border:
              1px
              solid
              rgba(
                148,
                163,
                184,
                0.2
              );

            font-size: 7px;
          }

          .mind-node-left {
            left: 13%;
            top: 50%;
          }

          .mind-node-right {
            right: 13%;
            top: 50%;
          }

          .mind-line {
            position: absolute;

            height: 1px;

            background:
              rgba(
                168,
                85,
                247,
                0.75
              );
          }

          .mind-line-left {
            width: 60px;

            left: 24%;
            top: 52%;
          }

          .mind-line-right {
            width: 60px;

            right: 24%;
            top: 52%;
          }

          .mind-line-bottom {
            display: none;
          }

          /* ===============================
             DATABASE
          =============================== */

          .database-table {
            position: absolute;

            width: 58px;

            padding:
              6px;

            border-radius: 6px;

            border:
              1px
              solid
              rgba(
                96,
                165,
                250,
                0.35
              );

            background:
              var(
                --color-surface
              );

            font-size: 6px;
          }

          .database-table span {
            display: block;

            margin-bottom: 4px;

            font-size: 7px;

            font-weight: 700;

            color:
              #60a5fa;
          }

          .database-table small {
            display: block;

            opacity: 0.7;
          }

          .database-users {
            left: 12%;
            top: 28%;
          }

          .database-orders {
            right: 12%;
            top: 28%;
          }

          .database-connection {
            position: absolute;

            left: 39%;
            top: 50%;

            width: 22%;

            height: 1px;

            background:
              linear-gradient(
                90deg,
                #60a5fa,
                #22d3ee
              );
          }

          /* ===============================
             KANBAN
          =============================== */

          .kanban-preview {
            display: flex;

            align-items: center;
            justify-content: center;

            gap: 10px;
          }

          .kanban-column {
            width: 40px;
          }

          .kanban-column span {
            display: block;

            width: 18px;
            height: 3px;

            margin-bottom: 6px;

            border-radius: 10px;

            background:
              rgba(
                148,
                163,
                184,
                0.5
              );
          }

          .kanban-column div {
            width: 100%;
            height: 28px;

            margin-bottom: 5px;

            border-radius: 4px;

            border:
              1px
              solid
              rgba(
                148,
                163,
                184,
                0.16
              );

            background:
              var(
                --color-surface
              );
          }

          /* ===============================
             SPRINT
          =============================== */

          .sprint-line {
            position: relative;

            width: 60%;

            margin:
              13px
              auto;

            padding:
              6px
              10px;

            border-radius: 5px;

            border:
              1px
              solid
              rgba(
                34,
                211,
                238,
                0.18
              );

            background:
              var(
                --color-surface
              );

            color:
              #22d3ee;

            font-size: 7px;

            text-align: center;
          }

          .sprint-line-1 {
            margin-top: 32px;
          }

          /* ===============================
             JOURNEY
          =============================== */

          .journey-path {
            position: absolute;

            left: 12%;
            right: 12%;

            top: 54%;

            height: 2px;

            background:
              linear-gradient(
                90deg,
                #22d3ee,
                #8b5cf6,
                #22d3ee
              );

            border-radius: 999px;
          }

          .journey-point {
            position: absolute;

            top: 50%;

            width: 9px;
            height: 9px;

            border-radius: 50%;

            background:
              #8b5cf6;

            box-shadow:
              0
              0
              15px
              #8b5cf6;
          }

          .journey-point-1 {
            left: 20%;
          }

          .journey-point-2 {
            left: 48%;
          }

          .journey-point-3 {
            right: 20%;
          }

          .journey-label {
            position: absolute;

            font-size: 7px;

            color:
              var(
                --color-text-secondary
              );
          }

          .journey-label-1 {
            left: 12%;
            top: 25%;
          }

          .journey-label-2 {
            right: 12%;
            top: 25%;
          }

          /* ===============================
             API SEQUENCE
          =============================== */

          .api-preview {
            display: flex;

            justify-content: center;

            gap: 28px;

            padding-top: 25px;
          }

          .api-column {
            position: relative;

            padding-top: 5px;

            color:
              #22d3ee;

            font-size: 7px;

            font-weight: 700;

            text-align: center;
          }

          .api-column::after {
            content: "";

            display: block;

            width: 1px;
            height: 70px;

            margin:
              6px
              auto;

            background:
              rgba(
                34,
                211,
                238,
                0.25
              );
          }

          .api-arrow {
            position: absolute;

            height: 1px;

            background:
              #8b5cf6;
          }

          .api-arrow-1 {
            width: 60px;

            left: 29%;
            top: 55px;
          }

          .api-arrow-2 {
            width: 60px;

            left: 48%;
            top: 78px;
          }

          .api-arrow-3 {
            width: 60px;

            left: 29%;
            top: 101px;
          }

          /* ===============================
             HOVER
          =============================== */

          .template-card:hover {
            border-color:
              rgba(
                139,
                92,
                246,
                0.45
              );

            box-shadow:
              0
              25px
              60px
              rgba(
                0,
                0,
                0,
                0.22
              );
          }

          [data-theme="light"]
            .template-card:hover {
            box-shadow:
              0
              25px
              60px
              rgba(
                15,
                23,
                42,
                0.12
              );
          }

          /* ===============================
             REDUCED MOTION
          =============================== */

          @media (
            prefers-reduced-motion: reduce
          ) {
            .templates-header,
            .template-card,
            .templates-bottom {
              opacity: 1 !important;

              transform: none !important;

              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default TemplatesSection;
