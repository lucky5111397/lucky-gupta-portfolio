import { useMemo } from "react";
import useReducedMotion from "../hooks/useReducedMotion";

/**
 * TraceNetwork — the design's signature element.
 * A sparse, geometric grid of "service nodes" connected by lines that
 * pulse in sequence, evoking a distributed system / request trace —
 * grounded in the subject (a backend/AI developer's world) rather than
 * a generic "AI network" cliché. Positions sit on a real grid, and the
 * pulse timing is deterministic (seeded), not random noise.
 */
export default function TraceNetwork({ density = "normal", className = "" }) {
  const reducedMotion = useReducedMotion();

  const { nodes, edges } = useMemo(() => {
    const cols = density === "dense" ? 7 : 5;
    const rows = density === "dense" ? 5 : 4;
    const width = 1000;
    const height = 700;
    const nodeList = [];
    let id = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // deterministic jitter via a simple seeded formula (no Math.random for SSR/consistency)
        const seed = (r * cols + c) * 37.13;
        const jitterX = (Math.sin(seed) * 0.5 + 0.5) * 40 - 20;
        const jitterY = (Math.cos(seed * 1.7) * 0.5 + 0.5) * 40 - 20;
        nodeList.push({
          id: id++,
          x: (c / (cols - 1)) * width + jitterX,
          y: (r / (rows - 1)) * height + jitterY,
          delay: (seed % 4) * 0.6,
          size: 2.5 + (seed % 3),
        });
      }
    }

    // Connect each node to its right and bottom neighbor to form a sparse grid graph
    const edgeList = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        if (c < cols - 1) edgeList.push({ from: idx, to: idx + 1, delay: (idx % 5) * 0.4 });
        if (r < rows - 1)
          edgeList.push({ from: idx, to: idx + cols, delay: (idx % 6) * 0.35 });
      }
    }

    return { nodes: nodeList, edges: edgeList };
  }, [density]);

  return (
    <svg
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="node-glow">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map((edge, i) => {
        const from = nodes[edge.from];
        const to = nodes[edge.to];
        if (!from || !to) return null;
        return (
          <line
            key={`edge-${i}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="url(#edge-gradient)"
            strokeWidth="1"
            opacity={reducedMotion ? 0.25 : undefined}
            className={reducedMotion ? "" : "animate-pulse-slow"}
            style={
              reducedMotion
                ? undefined
                : { animationDelay: `${edge.delay}s`, animationDuration: "4s" }
            }
          />
        );
      })}

      {nodes.map((node) => (
        <g key={`node-${node.id}`}>
          <circle cx={node.x} cy={node.y} r={node.size * 4} fill="url(#node-glow)" opacity="0.35" />
          <circle
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="#22D3EE"
            opacity={reducedMotion ? 0.6 : undefined}
            className={reducedMotion ? "" : "animate-node-pulse"}
            style={reducedMotion ? undefined : { animationDelay: `${node.delay}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
