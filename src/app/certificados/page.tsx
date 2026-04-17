import Link from "next/link";
import { eventos } from "./data";

export default function CertificadosPage() {
  const foro1 = eventos["1-foro-nacional-del-agua"];
  const foro2 = eventos["2-foro-del-rio-ica"];

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Hero with blue gradient */}
      <div className="relative bg-gradient-to-br from-[#1B67B1] to-[#1D4E89] overflow-hidden">
        {/* Ripple pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Wave bottom */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-16 sm:h-20"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="#F8F9FA"
          />
        </svg>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-32 sm:pb-36 text-center">
          {/* Location badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-white/60">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              ICA, PERÚ · CÁMARA DE COMERCIO
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Certificados{" "}
            <span className="text-[#3FA9F5]">del Foro del Agua</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Descarga tu certificado de participación o ponencia en los Foros
            organizados por la Cámara de Comercio, Industria y Turismo de Ica.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 -mt-14 pb-20">
        {/* Section divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#3FA9F5]/30 to-transparent" />
          <h2 className="text-[10px] font-bold text-[#1B67B1]/50 uppercase tracking-[0.2em]">
            Selecciona tu evento
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#3FA9F5]/30 to-transparent" />
        </div>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <EventCard evento={foro1} badge="1er Foro" basePath="/certificados/1-foro-nacional-del-agua" />
          <EventCard evento={foro2} badge="2do Foro" basePath="/certificados/2-foro-del-rio-ica" />
        </div>
      </div>
    </div>
  );
}

function EventCard({
  evento,
  badge,
  basePath,
}: {
  evento: { titulo: string; subtitulo: string; fecha: string; ubicacion: string };
  badge: string;
  basePath: string;
}) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:shadow-[#1B67B1]/8 transition-all duration-300 overflow-hidden">
      {/* Top accent line */}
      <div className="h-1.5 bg-gradient-to-r from-[#1B67B1] to-[#3FA9F5]" />

      <div className="p-7">
        {/* Badge */}
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-[#1B67B1]/10 text-[#1B67B1] uppercase tracking-wider mb-5">
          {badge}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#1D4E89] mb-1">
          {evento.titulo}{" "}
          <span className="text-[#3FA9F5]">{evento.subtitulo}</span>
        </h3>

        {/* Meta */}
        <div className="flex flex-col gap-1.5 my-5">
          <div className="flex items-center gap-2 text-sm text-[#4B5563]/60">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#3FA9F5]/60">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {evento.fecha}
          </div>
          <div className="flex items-center gap-2 text-sm text-[#4B5563]/60">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#3FA9F5]/60">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {evento.ubicacion}
          </div>
        </div>

        {/* Wave divider */}
        <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="w-full h-3 my-4 text-[#3FA9F5]/15">
          <path d="M0,10 C100,20 200,0 300,10 C350,15 380,5 400,10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href={`${basePath}/ponentes`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1B67B1] text-white text-sm font-semibold hover:bg-[#1D4E89] hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-[#1B67B1]/20"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762z" />
            </svg>
            Ponentes
          </Link>
          <Link
            href={`${basePath}/participantes`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-[#1B67B1] text-[#1B67B1] text-sm font-semibold hover:bg-[#1B67B1] hover:text-white hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            Participantes
          </Link>
        </div>
      </div>
    </div>
  );
}
