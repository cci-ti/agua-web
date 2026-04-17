import CertificadosTable from "../../CertificadosTable";
import { eventos, ponentesForo2 } from "../../data";

export default function PonentesPage() {
  const evento = eventos["2-foro-del-rio-ica"];

  return (
    <CertificadosTable
      items={ponentesForo2}
      tipo="ponentes"
      evento={evento}
      stats={[
        { label: "Ponentes", value: ponentesForo2.length, icon: "users" },
        { label: "Próximamente", value: "—", icon: "calendar" },
        { label: "Certificado", value: "", icon: "check" },
      ]}
    />
  );
}
