import CertificadosTable from "../../CertificadosTable";
import { eventos, participantesForo1 } from "../../data";

export default function ParticipantesPage() {
  const evento = eventos["1-foro-nacional-del-agua"];

  return (
    <CertificadosTable
      items={participantesForo1}
      tipo="participantes"
      evento={evento}
      stats={[
        { label: "Participantes", value: participantesForo1.length, icon: "users" },
        { label: "Abril 2025", value: "08", icon: "calendar" },
        { label: "Certificado", value: "", icon: "check" },
      ]}
    />
  );
}
