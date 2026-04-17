import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificados - Foro Nacional del Agua",
  description:
    "Descarga tu certificado de participación o ponencia en los Foros Nacionales del Agua organizados por la Cámara de Comercio, Industria y Turismo de Ica.",
};

export default function CertificadosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
