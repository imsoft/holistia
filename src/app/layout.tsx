import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Holistia",
  description:
    "Holistia es una plataforma de bienestar integral que conecta a profesionales y usuarios para mejorar la salud mental, física y social. Únete a nuestra comunidad y descubre terapias tradicionales y alternativas, herramientas innovadoras de monitoreo, y un apoyo continuo para transformar tu bienestar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
