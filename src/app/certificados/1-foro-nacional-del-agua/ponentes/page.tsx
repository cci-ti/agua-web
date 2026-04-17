import CertificadosTable from "../../CertificadosTable";
import { eventos, ponentesForo1 } from "../../data";

export default function PonentesPage() {
  const evento = eventos["1-foro-nacional-del-agua"];

  return (
    <CertificadosTable
      items={ponentesForo1}
      tipo="ponentes"
      evento={evento}
      stats={[
        { label: "Ponentes", value: ponentesForo1.length, icon: "users" },
        { label: "Abril 2025", value: "08", icon: "calendar" },
        { label: "Certificado", value: "", icon: "check" },
      ]}
    />
  );
}
