import CertificadosTable from "../../CertificadosTable";
import { eventos, participantesForo2 } from "../../data";

export default function ParticipantesPage() {
  const evento = eventos["2-foro-del-rio-ica"];

  return (
    <CertificadosTable
      items={participantesForo2}
      tipo="participantes"
      evento={evento}
      stats={[
        { label: "Participantes", value: participantesForo2.length, icon: "users" },
        { label: "Próximamente", value: "—", icon: "calendar" },
        { label: "Certificado", value: "", icon: "check" },
      ]}
    />
  );
}
