import { useMemo, useRef, useState } from "react";

import {
  Hand,
  Layers3,
  Minus,
  MousePointer2,
  Plus,
  RotateCcw,
  Send,
  Share2,
  Sparkles,
  ZoomIn,
} from "lucide-react";

/* =========================================
   INITIAL ARCHITECTURE NODES
========================================= */

const initialNodes = [
  {
    id: "frontend",
    title: "Next.js 15 + Mobile",
    label: "INGRESS_CLIENT",
    description: "Multi-region edge routing",
    x: 35,
    y: 175,
    accent: "#06b6d4",
  },

  {
    id: "balancer",
    title: "ALB Cluster",
    label: "LAYER_7_ALB",
    description: "Health check failover",
    x: 275,
    y: 175,
    accent: "#60a5fa",
  },

  {
    id: "gateway",
    title: "API Gateway",
    label: "API_GATEWAY",
    description: "JWT • Rate limit • Routing",
    x: 500,
    y: 150,
    accent: "#3b82f6",
  },

  {
    id: "service",
    title: "Order Engine",
    label: "ORDER_SERVICE",
    description: "Node.js • WebSockets",
    x: 735,
    y: 45,
    accent: "#a855f7",
  },

  {
    id: "inventory",
    title: "Inventory Cluster",
    label: "SVC_INVENTORY",
    description: "Distributed stock service",
    x: 735,
    y: 240,
    accent: "#06b6d4",
  },

  {
    id: "database",
    title: "MongoDB Cluster",
    label: "DATABASE",
    description: "Primary + replica nodes",
    x: 975,
    y: 175,
    accent: "#60a5fa",
  },

  {
    id: "redis",
    title: "Redis Cache",
    label: "CACHE_LAYER",
    description: "Sessions • Pub/Sub",
    x: 500,
    y: 410,
    accent: "#10b981",
  },
];

/* =========================================
   INITIAL CONNECTIONS
========================================= */

const initialConnections = [
  ["frontend", "balancer"],
  ["balancer", "gateway"],
  ["gateway", "service"],
  ["gateway", "inventory"],
  ["service", "database"],
  ["inventory", "database"],
  ["inventory", "redis"],
];

/* =========================================
   NODE DIMENSIONS
========================================= */

const nodeWidth = 190;
const nodeHeight = 105;

/* =========================================
   MAIN COMPONENT
========================================= */

const WorkspacePreview = () => {
  const canvasRef = useRef(null);

  /* =========================================
     STATES
  ========================================= */

  const [nodes, setNodes] = useState(initialNodes);

  const [connections, setConnections] = useState(initialConnections);

  const [selectedNode, setSelectedNode] = useState("gateway");

  const [activeTool, setActiveTool] = useState("select");

  /*
    90% DEFAULT ZOOM

    Zoom changes by exactly 10%.

    90 → 100 → 110
    90 → 80 → 70
  */

  const [zoom, setZoom] = useState(0.9);

  const [pan, setPan] = useState({
    x: 0,
    y: 0,
  });

  const [dragState, setDragState] = useState(null);

  const [panState, setPanState] = useState(null);

  const [aiPrompt, setAiPrompt] = useState(
    "Create a scalable e-commerce architecture with Redis cache",
  );

  const [aiStatus, setAiStatus] = useState(
    "Architecture ready. I connected the main services.",
  );

  const [isGenerating, setIsGenerating] = useState(false);

  const [shared, setShared] = useState(false);

  /* =========================================
     CREATE NODE MAP
  ========================================= */

  const nodeMap = useMemo(() => {
    return Object.fromEntries(nodes.map((node) => [node.id, node]));
  }, [nodes]);

  /* =========================================
     DRAG NODE
  ========================================= */

  const handleNodePointerDown = (event, node) => {
    if (activeTool !== "select") {
      return;
    }

    event.stopPropagation();

    setSelectedNode(node.id);

    setDragState({
      nodeId: node.id,

      startMouseX: event.clientX,

      startMouseY: event.clientY,

      startNodeX: node.x,

      startNodeY: node.y,
    });
  };

  /* =========================================
     PAN CANVAS
  ========================================= */

  const handleCanvasPointerDown = (event) => {
    if (activeTool !== "hand") {
      setSelectedNode(null);
      return;
    }

    setPanState({
      startMouseX: event.clientX,

      startMouseY: event.clientY,

      startPanX: pan.x,

      startPanY: pan.y,
    });
  };

  /* =========================================
     POINTER MOVE
  ========================================= */

  const handlePointerMove = (event) => {
    /*
      DRAG NODE
    */

    if (dragState) {
      const deltaX = (event.clientX - dragState.startMouseX) / zoom;

      const deltaY = (event.clientY - dragState.startMouseY) / zoom;

      setNodes((currentNodes) =>
        currentNodes.map((node) =>
          node.id === dragState.nodeId
            ? {
                ...node,

                x: dragState.startNodeX + deltaX,

                y: dragState.startNodeY + deltaY,
              }
            : node,
        ),
      );
    }

    /*
      PAN CANVAS
    */

    if (panState) {
      setPan({
        x: panState.startPanX + event.clientX - panState.startMouseX,

        y: panState.startPanY + event.clientY - panState.startMouseY,
      });
    }
  };

  /* =========================================
     STOP POINTER ACTION
  ========================================= */

  const handlePointerUp = () => {
    setDragState(null);

    setPanState(null);
  };

  /* =========================================
     ZOOM IN

     +10%
  ========================================= */

  const zoomIn = () => {
    setZoom((current) => Math.min(1.3, Number((current + 0.1).toFixed(1))));
  };

  /* =========================================
     ZOOM OUT

     -10%
  ========================================= */

  const zoomOut = () => {
    setZoom((current) => Math.max(0.6, Number((current - 0.1).toFixed(1))));
  };

  /* =========================================
     RESET CANVAS
  ========================================= */

  const resetCanvas = () => {
    setNodes(initialNodes);

    setConnections(initialConnections);

    setZoom(0.9);

    setPan({
      x: 0,
      y: 0,
    });

    setSelectedNode("gateway");

    setActiveTool("select");
  };

  /* =========================================
     ADD COMPONENT

     IMPORTANT LOGIC:

     1. Uses currently selected node
        as parent.

     2. If nothing is selected,
        API Gateway becomes parent.

     3. New component is automatically
        connected to parent.

     4. Components appear in different
        positions.

     5. New component becomes selected.
  ========================================= */

  const addComponent = () => {
    /*
      Get selected parent.

      If there is no selected node,
      use API Gateway.
    */

    const parentId = selectedNode || "gateway";

    /*
      Find selected parent node.
    */

    const parentNode = nodes.find((node) => node.id === parentId);

    if (!parentNode) {
      return;
    }

    /*
      Count existing components
      connected from this parent.

      This helps position each
      new component differently.
    */

    const existingChildren = connections.filter(
      ([fromId]) => fromId === parentId,
    ).length;

    /*
      Create unique ID.
    */

    const id = `service-${Date.now()}`;

    /*
      Different vertical positions.

      Components won't stack
      on exactly the same place.
    */

    const verticalOffsets = [0, -145, 145, -290, 290];

    const verticalOffset =
      verticalOffsets[existingChildren % verticalOffsets.length];

    /*
      Create new node.

      New node appears to the
      right of the selected node.
    */

    const newNode = {
      id,

      title: "New Service",

      label: "NEW_COMPONENT",

      description: "Connected component",

      x: parentNode.x + 245,

      y: parentNode.y + verticalOffset,

      accent: "#8b5cf6",
    };

    /*
      Add node.
    */

    setNodes((currentNodes) => [...currentNodes, newNode]);

    /*
      Create connection.

      Parent
        ↓
      New Component
    */

    setConnections((currentConnections) => [
      ...currentConnections,

      [parentId, id],
    ]);

    /*
      Automatically select
      newly created node.
    */

    setSelectedNode(id);
  };

  /* =========================================
     AI GENERATE
  ========================================= */

  const generateWithAI = (event) => {
    event.preventDefault();

    if (!aiPrompt.trim()) {
      return;
    }

    setIsGenerating(true);

    setAiStatus("Nodexa AI is analyzing your architecture...");

    setTimeout(() => {
      setAiStatus(`Generated architecture plan for: "${aiPrompt}"`);

      setIsGenerating(false);
    }, 1200);
  };

  /* =========================================
     SHARE
  ========================================= */

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      setShared(true);

      setTimeout(() => {
        setShared(false);
      }, 1800);
    } catch {
      setShared(true);

      setTimeout(() => {
        setShared(false);
      }, 1800);
    }
  };

  return (
    <section
      id="nodexa-preview"
      className="
        relative
        z-10
        px-4
        pb-28
        sm:px-6
        lg:px-8
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================
            MAIN WORKSPACE CONTAINER
        ===================================== */}

        <div
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-[#2e334d]/70
            bg-[#0b0e18]
            shadow-[0_30px_90px_rgba(0,0,0,0.65)]
          "
        >
          {/* =====================================
              TOP TOOLBAR
          ===================================== */}

          <div
            className="
              flex
              h-14
              items-center
              justify-between
              gap-3
              border-b
              border-[#2e334d]/60
              bg-[#191b26]/95
              px-3
              sm:px-5
            "
          >
            {/* =====================================
                LEFT TOOLS
            ===================================== */}

            <div
              className="
                flex
                items-center
                gap-1.5
              "
            >
              {/* SELECT TOOL */}

              <button
                onClick={() => setActiveTool("select")}
                title="Select"
                className={`
                  rounded-xl
                  p-2
                  transition

                  ${
                    activeTool === "select"
                      ? "bg-violet-600 text-white"
                      : `
                        text-slate-400
                        hover:bg-[#232635]
                        hover:text-white
                      `
                  }
                `}
              >
                <MousePointer2 size={17} />
              </button>

              {/* HAND TOOL */}

              <button
                onClick={() => setActiveTool("hand")}
                title="Pan canvas"
                className={`
                  rounded-xl
                  p-2
                  transition

                  ${
                    activeTool === "hand"
                      ? "bg-violet-600 text-white"
                      : `
                        text-slate-400
                        hover:bg-[#232635]
                        hover:text-white
                      `
                  }
                `}
              >
                <Hand size={17} />
              </button>

              <div
                className="
                  mx-1
                  h-5
                  w-px
                  bg-[#2e334d]
                "
              />

              {/* =====================================
                  ADD COMPONENT

                  ONLY ONE COMPONENT BUTTON
              ===================================== */}

              <button
                onClick={addComponent}
                title={
                  selectedNode
                    ? "Add component to selected node"
                    : "Add component to API Gateway"
                }
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-cyan-500/30
                  bg-[#232635]
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-cyan-300
                  transition
                  hover:border-cyan-400/50
                  hover:bg-[#2a2d3e]
                  hover:text-cyan-200
                "
              >
                <Plus size={15} />

                <span className="hidden sm:inline">Component</span>
              </button>
            </div>

            {/* =====================================
                CENTER FILE NAME
            ===================================== */}

            <div
              className="
                hidden
                items-center
                gap-2
                text-xs
                md:flex
              "
            >
              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_10px_rgba(52,211,153,0.8)]
                "
              />

              <span
                className="
                  font-medium
                  text-white
                "
              >
                nodexa-system-design.ndx
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-violet-400/30
                  bg-violet-500/10
                  px-2
                  py-0.5
                  text-[10px]
                  text-violet-300
                "
              >
                live
              </span>
            </div>

            {/* =====================================
                RIGHT CONTROLS
            ===================================== */}

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              {/* ZOOM */}

              <div
                className="
                  hidden
                  items-center
                  rounded-xl
                  border
                  border-[#2e334d]
                  bg-[#232635]
                  px-1
                  sm:flex
                "
              >
                <button
                  onClick={zoomOut}
                  title="Zoom out"
                  className="
                    p-1.5
                    text-slate-400
                    transition
                    hover:text-white
                  "
                >
                  <Minus size={14} />
                </button>

                <span
                  className="
                    min-w-12
                    text-center
                    text-xs
                    font-semibold
                    text-white
                  "
                >
                  {Math.round(zoom * 100)}%
                </span>

                <button
                  onClick={zoomIn}
                  title="Zoom in"
                  className="
                    p-1.5
                    text-slate-400
                    transition
                    hover:text-white
                  "
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* RESET */}

              <button
                onClick={resetCanvas}
                title="Reset canvas"
                className="
                  rounded-xl
                  border
                  border-[#2e334d]
                  bg-[#232635]
                  p-2
                  text-slate-400
                  transition
                  hover:text-white
                "
              >
                <RotateCcw size={16} />
              </button>

              {/* COLLABORATORS */}

              <div
                className="
                  hidden
                  -space-x-2
                  sm:flex
                "
              >
                <Avatar
                  letter="A"
                  className="
                    bg-blue-500
                    text-white
                  "
                />

                <Avatar
                  letter="S"
                  className="
                    bg-purple-500
                    text-white
                  "
                />

                <Avatar
                  letter="J"
                  className="
                    bg-emerald-400
                    text-black
                  "
                />
              </div>

              {/* SHARE */}

              <button
                onClick={handleShare}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-violet-600
                  px-3
                  py-2
                  text-xs
                  font-semibold
                  text-white
                  transition
                  hover:bg-violet-500
                "
              >
                <Share2 size={14} />

                <span className="hidden sm:inline">
                  {shared ? "Copied!" : "Share"}
                </span>
              </button>
            </div>
          </div>

          {/* =====================================
              CANVAS
          ===================================== */}

          <div
            ref={canvasRef}
            onPointerDown={handleCanvasPointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className={`
              relative
              h-[590px]
              overflow-hidden
              bg-[#0b0e18]
              sm:h-[650px]

              ${
                activeTool === "hand"
                  ? `
                    cursor-grab
                    active:cursor-grabbing
                  `
                  : "cursor-default"
              }
            `}
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(167,139,250,0.18) 1.15px, transparent 1.15px)",

              backgroundSize: "28px 28px",
            }}
          >
            {/* =====================================
                CANVAS WORLD
            ===================================== */}

            <div
              className="
                absolute
                left-0
                top-0
                h-[700px]
                w-[1250px]
                origin-top-left
              "
              style={{
                transform: `
                  translate(
                    ${pan.x}px,
                    ${pan.y}px
                  )
                  scale(${zoom})
                `,
              }}
            >
              {/* =====================================
                  CONNECTIONS
              ===================================== */}

              <svg
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  h-full
                  w-full
                "
              >
                <defs>
                  <linearGradient
                    id="nodeConnection"
                    x1="0%"
                    x2="100%"
                    y1="0%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" />

                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>

                {connections.map(([fromId, toId]) => {
                  const from = nodeMap[fromId];

                  const to = nodeMap[toId];

                  if (!from || !to) {
                    return null;
                  }

                  const startX = from.x + nodeWidth;

                  const startY = from.y + nodeHeight / 2;

                  const endX = to.x;

                  const endY = to.y + nodeHeight / 2;

                  const middleX = startX + (endX - startX) / 2;

                  return (
                    <path
                      key={`${fromId}-${toId}`}
                      d={`
                          M ${startX} ${startY}

                          C
                          ${middleX} ${startY},

                          ${middleX} ${endY},

                          ${endX} ${endY}
                        `}
                      fill="none"
                      stroke="url(#nodeConnection)"
                      strokeWidth="2.5"
                      strokeOpacity="0.8"
                    />
                  );
                })}
              </svg>

              {/* =====================================
                  ARCHITECTURE NODES
              ===================================== */}

              {nodes.map((node) => (
                <ArchitectureNode
                  key={node.id}
                  node={node}
                  selected={selectedNode === node.id}
                  onPointerDown={handleNodePointerDown}
                />
              ))}

              {/* =====================================
                  COLLAB CURSOR
                  SARAH
              ===================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[835px]
                  top-[58px]
                  z-30
                "
              >
                <MousePointer2
                  size={22}
                  className="
                    rotate-[-12deg]
                    text-purple-400
                  "
                  fill="currentColor"
                />

                <span
                  className="
                    ml-4
                    -mt-1
                    block
                    w-max
                    rounded-full
                    bg-purple-500
                    px-3
                    py-1
                    text-[11px]
                    font-bold
                    text-white
                    shadow-xl
                  "
                >
                  Sarah connected API
                </span>
              </div>

              {/* =====================================
                  COLLAB CURSOR
                  ALEX
              ===================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[575px]
                  top-[235px]
                  z-30
                "
              >
                <MousePointer2
                  size={22}
                  className="
                    rotate-[-12deg]
                    text-blue-400
                  "
                  fill="currentColor"
                />

                <span
                  className="
                    ml-4
                    -mt-1
                    block
                    w-max
                    rounded-full
                    bg-blue-500
                    px-3
                    py-1
                    text-[11px]
                    font-bold
                    text-white
                    shadow-xl
                  "
                >
                  Alex editing Gateway
                </span>
              </div>

              {/* =====================================
                  JOHN STATUS
              ===================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[510px]
                  top-[545px]
                  z-30
                "
              >
                <div
                  className="
                    rounded-full
                    border
                    border-emerald-400/40
                    bg-[#11131d]/95
                    px-3
                    py-1.5
                    text-[11px]
                    text-emerald-300
                    shadow-xl
                  "
                >
                  ● John verified cache TTL
                </div>
              </div>
            </div>

            {/* =====================================
                NODExA AI PANEL
            ===================================== */}

            <div
              className="
                absolute
                bottom-6
                right-6
                z-40
                w-[390px]
                max-w-[calc(100%-48px)]
                rounded-2xl
                border
                border-cyan-500/35
                bg-[#191b26]/95
                p-4
                shadow-[0_20px_60px_rgba(0,0,0,0.65)]
                backdrop-blur-xl
              "
            >
              {/* AI HEADER */}

              <div
                className="
                  mb-3
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#2e334d]
                  pb-3
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2.5
                  "
                >
                  {/* ANIMATED AI STAR */}

                  <div
                    className="
                      nodexa-ai-star
                      relative
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-cyan-400/20
                        blur-md
                      "
                    />

                    <Sparkles
                      size={19}
                      className="
                        relative
                        z-10
                        text-cyan-400
                      "
                    />
                  </div>

                  <span
                    className="
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    Ask Nodexa AI
                  </span>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-cyan-500/30
                    bg-cyan-500/10
                    px-2
                    py-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-cyan-300
                  "
                >
                  Live
                </span>
              </div>

              {/* AI FORM */}

              <form onSubmit={generateWithAI} className="space-y-3">
                <textarea
                  value={aiPrompt}
                  onChange={(event) => setAiPrompt(event.target.value)}
                  rows={2}
                  placeholder="Ask Nodexa AI..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#2e334d]
                    bg-[#232635]
                    p-3
                    text-xs
                    leading-5
                    text-white
                    outline-none
                    placeholder:text-slate-500
                    focus:border-cyan-500/60
                  "
                />

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <p
                    className="
                      line-clamp-2
                      text-[11px]
                      leading-4
                      text-cyan-300
                    "
                  >
                    {aiStatus}
                  </p>

                  <button
                    disabled={isGenerating}
                    className="
                      flex
                      shrink-0
                      items-center
                      gap-2
                      rounded-lg
                      bg-gradient-to-r
                      from-violet-600
                      to-blue-500
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-white
                      transition
                      hover:brightness-110
                      disabled:opacity-60
                    "
                  >
                    {isGenerating ? (
                      <Sparkles
                        size={14}
                        className="
                          animate-spin
                        "
                      />
                    ) : (
                      <Send size={14} />
                    )}
                    Generate
                  </button>
                </div>
              </form>
            </div>

            {/* =====================================
                ONLINE STATUS
            ===================================== */}

            <div
              className="
                absolute
                bottom-6
                left-6
                z-40
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[#2e334d]
                bg-[#191b26]/90
                px-3
                py-1.5
                text-[11px]
                text-slate-300
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
              3 collaborators online
            </div>

            {/* =====================================
                MOBILE ZOOM
            ===================================== */}

            <div
              className="
                absolute
                bottom-16
                left-4
                z-40
                flex
                items-center
                gap-1
                rounded-xl
                border
                border-[#2e334d]
                bg-[#191b26]
                p-1
                sm:hidden
              "
            >
              <button
                onClick={zoomOut}
                className="
                  p-2
                  text-slate-400
                "
              >
                <Minus size={15} />
              </button>

              <span
                className="
                  px-2
                  text-xs
                  text-white
                "
              >
                {Math.round(zoom * 100)}%
              </span>

              <button
                onClick={zoomIn}
                className="
                  p-2
                  text-slate-400
                "
              >
                <ZoomIn size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================
            SMALL INSTRUCTIONS
        ===================================== */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-4
            gap-y-3
            text-xs
            text-slate-500
          "
        >
          <span>Drag nodes</span>

          <span>•</span>

          <span>Select a node and add a component</span>

          <span>•</span>

          <span>Switch to hand tool to pan</span>

          <span>•</span>

          <span>Zoom and reset</span>

          <span>•</span>

          <span>Ask Nodexa AI</span>
        </div>
      </div>

      {/* =====================================
          AI STAR ANIMATION
      ===================================== */}

      <style>
        {`

          @keyframes nodexaStarAnimation {

            0% {
              transform: rotate(0deg) scale(1);

              filter: drop-shadow(
                0 0 3px
                rgba(34, 211, 238, 0.4)
              );
            }

            25% {
              transform:
                rotate(8deg)
                scale(1.08);

              filter: drop-shadow(
                0 0 8px
                rgba(34, 211, 238, 0.85)
              );
            }

            50% {
              transform:
                rotate(0deg)
                scale(1.15);

              filter: drop-shadow(
                0 0 12px
                rgba(34, 211, 238, 1)
              );
            }

            75% {
              transform:
                rotate(-8deg)
                scale(1.08);

              filter: drop-shadow(
                0 0 8px
                rgba(34, 211, 238, 0.85)
              );
            }

            100% {
              transform:
                rotate(0deg)
                scale(1);

              filter: drop-shadow(
                0 0 3px
                rgba(34, 211, 238, 0.4)
              );
            }

          }


          .nodexa-ai-star {

            animation:
              nodexaStarAnimation
              2.8s
              ease-in-out
              infinite;

          }

        `}
      </style>
    </section>
  );
};

/* =========================================
   ARCHITECTURE NODE
========================================= */

const ArchitectureNode = ({ node, selected, onPointerDown }) => {
  return (
    <div
      onPointerDown={(event) => onPointerDown(event, node)}
      className="
        absolute
        select-none
        rounded-2xl
        bg-[#191b26]
        p-4
        shadow-xl
        transition-shadow
      "
      style={{
        left: node.x,

        top: node.y,

        width: nodeWidth,

        height: nodeHeight,

        border: selected
          ? `
              2px solid
              ${node.accent}
            `
          : `
              1px solid
              #2e334d
            `,

        boxShadow: selected
          ? `
              0 0 28px
              ${node.accent}35
            `
          : `
              0 14px 30px
              rgba(0,0,0,0.25)
            `,

        cursor: "grab",
      }}
    >
      {/* RESIZE DOTS */}

      {selected && (
        <>
          <ResizeDot
            position="
              -top-1.5
              -left-1.5
            "
            color={node.accent}
          />

          <ResizeDot
            position="
              -top-1.5
              -right-1.5
            "
            color={node.accent}
          />

          <ResizeDot
            position="
              -bottom-1.5
              -left-1.5
            "
            color={node.accent}
          />

          <ResizeDot
            position="
              -bottom-1.5
              -right-1.5
            "
            color={node.accent}
          />
        </>
      )}

      {/* LABEL */}

      <div
        className="
          mb-2
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-wider
          "
          style={{
            color: node.accent,
          }}
        >
          {node.label}
        </span>

        <span
          className="
            h-2
            w-2
            rounded-full
          "
          style={{
            backgroundColor: node.accent,
          }}
        />
      </div>

      {/* TITLE */}

      <div
        className="
          flex
          items-center
          gap-2
          text-sm
          font-bold
          text-white
        "
      >
        <Layers3
          size={16}
          style={{
            color: node.accent,
          }}
        />

        {node.title}
      </div>

      {/* DESCRIPTION */}

      <p
        className="
          mt-2
          text-[11px]
          leading-4
          text-slate-400
        "
      >
        {node.description}
      </p>
    </div>
  );
};

/* =========================================
   RESIZE DOT
========================================= */

const ResizeDot = ({ position, color }) => {
  return (
    <span
      className={`
        absolute
        ${position}
        h-3
        w-3
        rounded-sm
        border-2
        border-[#0b0e18]
      `}
      style={{
        backgroundColor: color,
      }}
    />
  );
};

/* =========================================
   AVATAR
========================================= */

const Avatar = ({ letter, className }) => {
  return (
    <div
      className={`
        flex
        h-7
        w-7
        items-center
        justify-center
        rounded-full
        border-2
        border-[#0b0e18]
        text-[10px]
        font-bold
        ${className}
      `}
    >
      {letter}
    </div>
  );
};

export default WorkspacePreview;
