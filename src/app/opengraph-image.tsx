import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kirill Vitoshkin — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const skills = ["React", "Next.js", "Node.js", "TypeScript", "React Native"];

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            KV
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#34d399",
              }}
            />
            <span
              style={{ color: "#34d399", fontSize: 14, fontWeight: 600 }}
            >
              Available for work
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid #222",
            marginTop: 48,
            marginBottom: 52,
          }}
        />

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "white",
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-4px",
            }}
          >
            Kirill
          </span>
          <span
            style={{
              color: "#4a4a4a",
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-4px",
            }}
          >
            Vitoshkin
          </span>
        </div>

        {/* Subtitle */}
        <span
          style={{
            color: "#666666",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginTop: 28,
          }}
        >
          Full-Stack Developer
        </span>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            marginTop: 32,
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 999,
              padding: "12px 28px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 16,
              fontWeight: 700,
              color: "#111111",
              letterSpacing: "-0.3px",
            }}
          >
            Hire me →
          </div>
        </div>

        {/* Skills — pushed to bottom */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: "auto",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill}
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: 8,
                padding: "8px 18px",
                color: "rgba(255,255,255,0.35)",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
