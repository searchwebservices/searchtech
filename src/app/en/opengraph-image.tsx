import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Search Technologies - Software Architects in Los Cabos";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(139, 124, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 124, 247, 0.05) 0%, transparent 50%)",
            display: "flex",
          }}
        />

        {/* Logo and Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8b7cf7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span
            style={{
              marginLeft: 20,
              fontSize: 48,
              fontWeight: 300,
              color: "#ffffff",
              letterSpacing: "0.3em",
            }}
          >
            SEARCH
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            THE DIGITAL INFRASTRUCTURE
          </span>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              background: "linear-gradient(90deg, #8b7cf7, #a78bfa)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.2,
            }}
          >
            CABO DESERVES
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            color: "rgba(255, 255, 255, 0.7)",
            display: "flex",
          }}
        >
          Software Architects in Los Cabos
        </div>

        {/* Bottom Badge */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <span
            style={{
              fontSize: 18,
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            searchtech.mx
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

