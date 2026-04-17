"use client";

import { useState } from "react";
import Link from "next/link";
import { getInitials } from "./data";
import type { Participante, Ponente } from "./data";

type CertItem = Participante | Ponente;

function isPonente(item: CertItem): item is Ponente {
  return "tema" in item;
}

interface CertificadosTableProps {
  items: CertItem[];
  tipo: "ponentes" | "participantes";
  evento: {
    titulo: string;
    subtitulo: string;
    descripcion: string;
    ubicacion: string;
    organizador: string;
    fecha: string;
  };
  stats?: { label: string; value: string | number; icon?: "check" | "users" | "calendar" }[];
  backHref?: string;
}

export default function CertificadosTable({
  items,
  tipo,
  evento,
  stats,
  backHref = "/certificados",
}: CertificadosTableProps) {
  const [search, setSearch] = useState("");

  const filtered = items.filter((item) => {
    const searchLower = search.toLowerCase();
    const matchNombre = item.nombre.toLowerCase().includes(searchLower);
    if (isPonente(item)) {
      return matchNombre || item.tema.toLowerCase().includes(searchLower);
    }
    return matchNombre;
  });

  const defaultStats = stats ?? [
    {
      label: tipo === "ponentes" ? "Ponentes" : "Participantes",
      value: items.length,
      icon: "users" as const,
    },
    { label: "Fecha", value: evento.fecha, icon: "calendar" as const },
    { label: "Certificado", value: "", icon: "check" as const },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Hero section with blue gradient */}
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
        {/* Bottom wave */}
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

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-8 pb-36 sm:pb-40">
          {/* Back link */}
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white font-medium mb-8 group transition-colors"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Volver a Certificados
          </Link>

          {/* Location badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-white/60">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {evento.ubicacion}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            {evento.titulo}{" "}
            <span className="text-[#3FA9F5]">{evento.subtitulo}</span>
          </h1>

          {/* Description */}
          <p className="text-center text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {evento.descripcion}
          </p>
        </div>
      </div>

      {/* Stats cards – floating on wave boundary */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 -mt-16 relative z-10">
        <div className="flex items-stretch bg-white rounded-2xl shadow-xl shadow-[#1B67B1]/15 divide-x divide-gray-100 overflow-hidden">
          {defaultStats.map((stat, i) => (
            <div key={i} className="flex-1 flex flex-col items-center justify-center px-2 sm:px-10 py-5 sm:py-8">
              {stat.icon === "check" ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="#1B67B1" strokeWidth="3" className="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <span className="text-3xl sm:text-5xl font-bold text-[#1B67B1] mb-0.5 sm:mb-1">
                  {stat.value}
                </span>
              )}
              <span className="text-[8px] sm:text-xs font-bold text-[#4B5563]/40 uppercase tracking-[0.1em] sm:tracking-[0.15em] mt-0.5 sm:mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
        {/* Search bar */}
        <div className="relative mb-10">
          <div className="flex items-center bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-300 ml-5 flex-shrink-0">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              className="flex-1 px-4 py-4 text-sm text-[#4B5563] placeholder-gray-400 focus:outline-none bg-transparent"
              placeholder={
                tipo === "ponentes"
                  ? "Buscar ponente por nombre..."
                  : "Buscar participante por nombre..."
              }
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id={`search-${tipo}`}
            />
            <div className="flex-shrink-0 mr-3">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1B67B1] text-white text-xs font-semibold">
                {filtered.length} {tipo}
              </span>
            </div>
          </div>
        </div>

        {/* Section divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#3FA9F5]/30 to-transparent" />
          <h2 className="text-[10px] font-bold text-[#1B67B1]/60 uppercase tracking-[0.2em]">
            {tipo === "ponentes" ? "Ponentes Registrados" : "Participantes Registrados"}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#3FA9F5]/30 to-transparent" />
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-[50px_1fr_140px] sm:grid-cols-[70px_1fr_180px] items-center px-4 sm:px-6 py-3.5 bg-[#1B67B1]">
            <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider">#</span>
            <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider">Nombre Completo</span>
            <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider text-center">Estado</span>
          </div>

          {/* Body */}
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-[50px_1fr_140px] sm:grid-cols-[70px_1fr_180px] items-center px-4 sm:px-6 py-3.5 border-b border-gray-100 last:border-0 hover:bg-sky-50/50 transition-colors duration-150 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"
                }`}
              >
                <span className="text-xs text-[#4B5563]/40 font-medium">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-[#1B67B1] to-[#3FA9F5] flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                    {getInitials(item.nombre)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#1D4E89] truncate">
                      {item.nombre}
                    </p>
                    {isPonente(item) && (
                      <p className="text-xs text-[#4B5563]/50 truncate">
                        {item.tema}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  {item.estado === "certificado" ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-[11px] font-semibold">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z" clipRule="evenodd" />
                      </svg>
                      Certificado
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-[11px] font-semibold">
                      Pendiente
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 px-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 mx-auto text-gray-300 mb-3">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[#4B5563]/50 text-sm">
                No se encontraron {tipo} con ese nombre.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
