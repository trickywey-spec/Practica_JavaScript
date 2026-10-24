import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impulso Digital | Comunidad estudiantil",
  description:
    "Impulso Digital es una iniciativa estudiantil para aprender, crear y compartir tecnología.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
