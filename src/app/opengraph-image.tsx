import { ImageResponse } from "next/og";

export const alt = "Guse Gård – dyr, natur og lokalmat i Kvinesdal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphBilde() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(180deg, #cfe0e3 0%, #ece3c6 60%, #f3dca7 100%)",
          color: "#1f3224",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "72px 80px 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#a23f2b",
              fontWeight: 700,
            }}
          >
            Gård i Kvinesdal
          </div>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 700, lineHeight: 1 }}>
            Guse Gård
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: 150,
            padding: "0 80px",
            background: "#2f4a36",
            color: "#ffffff",
            fontSize: 44,
          }}
        >
          Dyr, natur og lokalmat
        </div>
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 72,
            width: 150,
            height: 150,
            borderRadius: 75,
            background: "#fbe6a2",
            display: "flex",
          }}
        />
      </div>
    ),
    size,
  );
}
