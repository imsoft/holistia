import type { Metadata } from "next";
import { Footer, Header } from "@/components/shared";

export const metadata: Metadata = {
  title: "Holistia",
  description:
    "Holistia es una plataforma de bienestar integral que conecta a profesionales y usuarios para mejorar la salud mental, física y social. Únete a nuestra comunidad y descubre terapias tradicionales y alternativas, herramientas innovadoras de monitoreo, y un apoyo continuo para transformar tu bienestar.",
};

export default function WebSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
