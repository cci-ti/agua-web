// =====================================================
// Datos de Certificados - Foros Nacionales del Agua
// =====================================================

export interface Participante {
  id: number;
  nombre: string;
  estado: "certificado" | "pendiente";
}

export interface Ponente {
  id: number;
  nombre: string;
  tema: string;
  estado: "certificado" | "pendiente";
}

export interface EventoInfo {
  slug: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  fecha: string;
  ubicacion: string;
  organizador: string;
}

// =====================================================
// Información de los eventos
// =====================================================

export const eventos: Record<string, EventoInfo> = {
  "1-foro-nacional-del-agua": {
    slug: "1-foro-nacional-del-agua",
    titulo: "I Foro Nacional",
    subtitulo: "del Agua",
    descripcion:
      "Lista oficial de participantes y ponentes certificados en el I Foro Nacional del Agua organizado por la Cámara de Comercio de Ica.",
    fecha: "08 de Abril, 2025",
    ubicacion: "Universidad Nacional San Luis Gonzaga, Ica",
    organizador: "Cámara de Comercio, Industria y Turismo de Ica",
  },
  "2-foro-del-rio-ica": {
    slug: "2-foro-del-rio-ica",
    titulo: "II Foro del",
    subtitulo: "Río Ica",
    descripcion:
      "Lista oficial de participantes y ponentes certificados en el II Foro del Río Ica organizado por la Cámara de Comercio de Ica.",
    fecha: "Próximamente",
    ubicacion: "Ica, Perú",
    organizador: "Cámara de Comercio, Industria y Turismo de Ica",
  },
};

// =====================================================
// Ponentes del 1er Foro Nacional del Agua
// =====================================================

export const ponentesForo1: Ponente[] = [
  {
    "id": 1,
    "nombre": "Daniel Portocarrero",
    "tema": "SITUACIÓN ACTUAL Y PROPUESTAS PARA LA GESTIÓN DEL SISTEMA ACUÍFERO ICA",
    "estado": "certificado"
  },
  {
    "id": 2,
    "nombre": "Juan Luis Camere",
    "tema": "Consideraciones sobre el balance Hídrico de la Cuenca",
    "estado": "certificado"
  },
  {
    "id": 3,
    "nombre": "Pedro Grados",
    "tema": "Experiencia de Recarga Inducida en los Ríos Rimac y Chillón",
    "estado": "certificado"
  },
  {
    "id": 4,
    "nombre": "Alfredo Sotil",
    "tema": "RECARGA GESTIONADA DEL ACUÍFERO DEL VALLE DE ICA",
    "estado": "certificado"
  },
  {
    "id": 5,
    "nombre": "Manuel Olaechea",
    "tema": "Manejo de Aguas Residuales en los Molinos",
    "estado": "certificado"
  },
  {
    "id": 6,
    "nombre": "Egdar Ollachica",
    "tema": "Automatización de los Pozos y Riego Deficitarios controlado en uvas de mesa",
    "estado": "certificado"
  },
  {
    "id": 7,
    "nombre": "Orlando Tito",
    "tema": "Monitoreo Satelital del Riego en Cultivo Vid",
    "estado": "certificado"
  },
  {
    "id": 8,
    "nombre": "Eduardo Vásquez Pizarro",
    "tema": "Riesgo Complementario con Agua Superficial",
    "estado": "certificado"
  },
  {
    "id": 9,
    "nombre": "Luz Heredia",
    "tema": "Administrando el Agua Potable con la Comunidad",
    "estado": "certificado"
  }
];

// =====================================================
// Participantes del 1er Foro Nacional del Agua
// =====================================================

export const participantesForo1: Participante[] = [
  {
    "id": 1,
    "nombre": "Aurora Romelia Tataje Atuncar",
    "estado": "certificado"
  },
  {
    "id": 2,
    "nombre": "Angélica Ursula Quispe Huarcaya",
    "estado": "certificado"
  },
  {
    "id": 3,
    "nombre": "Brenda Hidalgo Geldres",
    "estado": "certificado"
  },
  {
    "id": 4,
    "nombre": "Carlos Bernabé Diaz Quispe",
    "estado": "certificado"
  },
  {
    "id": 5,
    "nombre": "Carlos Galvez Pisconte",
    "estado": "certificado"
  },
  {
    "id": 6,
    "nombre": "Carlos Galvez Pisconte",
    "estado": "certificado"
  },
  {
    "id": 7,
    "nombre": "Carmen Patricia Uribe Donayre",
    "estado": "certificado"
  },
  {
    "id": 8,
    "nombre": "Claudia López Córdova",
    "estado": "certificado"
  },
  {
    "id": 9,
    "nombre": "Diego Fabian Torres Tapia",
    "estado": "certificado"
  },
  {
    "id": 10,
    "nombre": "Elizabeth  Meza Falconi",
    "estado": "certificado"
  },
  {
    "id": 11,
    "nombre": "Elizabeth Miriam Pardo Pardo",
    "estado": "certificado"
  },
  {
    "id": 12,
    "nombre": "Elizabeth Victoria Martinez Francia",
    "estado": "certificado"
  },
  {
    "id": 13,
    "nombre": "Elizabeth Victoria Martinez Francia",
    "estado": "certificado"
  },
  {
    "id": 14,
    "nombre": "Emma Marcela Cayo Palomino",
    "estado": "certificado"
  },
  {
    "id": 15,
    "nombre": "Emma Marcela Cayo Palomino",
    "estado": "certificado"
  },
  {
    "id": 16,
    "nombre": "Erlith Tafur Huaman",
    "estado": "certificado"
  },
  {
    "id": 17,
    "nombre": "ERNESTO GÓMEZ MARTÍNEZ",
    "estado": "certificado"
  },
  {
    "id": 18,
    "nombre": "Felix Ysaac Tataje Tucno",
    "estado": "certificado"
  },
  {
    "id": 19,
    "nombre": "Gisela Magallanes Guillén",
    "estado": "certificado"
  },
  {
    "id": 20,
    "nombre": "GUADALUPE DEL PILAR LUY KEN ALBITES",
    "estado": "certificado"
  },
  {
    "id": 21,
    "nombre": "Gustavo Alberto Huamani Casma",
    "estado": "certificado"
  },
  {
    "id": 22,
    "nombre": "Isabel Calderón",
    "estado": "certificado"
  },
  {
    "id": 23,
    "nombre": "JESSICA KAREN PINTO VARGAS",
    "estado": "certificado"
  },
  {
    "id": 24,
    "nombre": "Jesús Josué Salvador Vasquez Huamani",
    "estado": "certificado"
  },
  {
    "id": 25,
    "nombre": "Jhoana Maciel Gamboa Suarez",
    "estado": "certificado"
  },
  {
    "id": 26,
    "nombre": "José Carlos Espino Altamirano",
    "estado": "certificado"
  },
  {
    "id": 27,
    "nombre": "José Grimaldo Gavilán Bendezú",
    "estado": "certificado"
  },
  {
    "id": 28,
    "nombre": "Joseph Carlos jesus Llerena Uribe",
    "estado": "certificado"
  },
  {
    "id": 29,
    "nombre": "Joseph Serrano Flores",
    "estado": "certificado"
  },
  {
    "id": 30,
    "nombre": "Juan Andrés Soto Guevara",
    "estado": "certificado"
  },
  {
    "id": 31,
    "nombre": "Juana Iris Huaraca Medina",
    "estado": "certificado"
  },
  {
    "id": 32,
    "nombre": "Julio César Chávez Cárdenas",
    "estado": "certificado"
  },
  {
    "id": 33,
    "nombre": "Kiara Gianella Hernández Bonifaz",
    "estado": "certificado"
  },
  {
    "id": 34,
    "nombre": "Leonardo Ramírez Gutiérrez",
    "estado": "certificado"
  },
  {
    "id": 35,
    "nombre": "Leydy Loayza Mendoza",
    "estado": "certificado"
  },
  {
    "id": 36,
    "nombre": "Lorena Hilario Tenorio",
    "estado": "certificado"
  },
  {
    "id": 37,
    "nombre": "Lucio Quevedo Ccoicca",
    "estado": "certificado"
  },
  {
    "id": 38,
    "nombre": "Luis Pareja",
    "estado": "certificado"
  },
  {
    "id": 39,
    "nombre": "Luisa Rosario Huayanca Zapata",
    "estado": "certificado"
  },
  {
    "id": 40,
    "nombre": "María Estela Cornejo Fernández",
    "estado": "certificado"
  },
  {
    "id": 41,
    "nombre": "Mariana Nayely Mendoza Alarcon",
    "estado": "certificado"
  },
  {
    "id": 42,
    "nombre": "Marleny Garcia Salas",
    "estado": "certificado"
  },
  {
    "id": 43,
    "nombre": "Mayra Clariza Sales Guillermo",
    "estado": "certificado"
  },
  {
    "id": 44,
    "nombre": "Mayra Clariza Sales Guillermo",
    "estado": "certificado"
  },
  {
    "id": 45,
    "nombre": "Meliza Escajadillo Marca",
    "estado": "certificado"
  },
  {
    "id": 46,
    "nombre": "Miguel Chávez A",
    "estado": "certificado"
  },
  {
    "id": 47,
    "nombre": "Milagros Angelina Cortez Chamochumbi",
    "estado": "certificado"
  },
  {
    "id": 48,
    "nombre": "Mirna Ruth Monroe Montoya",
    "estado": "certificado"
  },
  {
    "id": 49,
    "nombre": "Natalia Tenorio Nieto",
    "estado": "certificado"
  },
  {
    "id": 50,
    "nombre": "ORLANDO JANAMPA GONZÁLEZ",
    "estado": "certificado"
  },
  {
    "id": 51,
    "nombre": "Oscar Antonio Bohórquez Pezo",
    "estado": "certificado"
  },
  {
    "id": 52,
    "nombre": "Pilar Aurora Pérez Torrealva",
    "estado": "certificado"
  },
  {
    "id": 53,
    "nombre": "Salome Aurora Pimentel Valdivia",
    "estado": "certificado"
  },
  {
    "id": 54,
    "nombre": "Sharon Rosa Valencia Ríos",
    "estado": "certificado"
  },
  {
    "id": 55,
    "nombre": "Silvia Loraine De Pomar Bendezú",
    "estado": "certificado"
  },
  {
    "id": 56,
    "nombre": "Sofia Fabiana Muñoz Andia",
    "estado": "certificado"
  },
  {
    "id": 57,
    "nombre": "Stefany Ana María Arrospide Sanchez",
    "estado": "certificado"
  },
  {
    "id": 58,
    "nombre": "Timoteo Torres Pinchi",
    "estado": "certificado"
  },
  {
    "id": 59,
    "nombre": "Ugo Gherardi de Orbegoso",
    "estado": "certificado"
  },
  {
    "id": 60,
    "nombre": "Víctor Jesús Galindo Berrocal",
    "estado": "certificado"
  },
  {
    "id": 61,
    "nombre": "Yimi Francisco torricot Hinostroza",
    "estado": "certificado"
  },
  {
    "id": 62,
    "nombre": "Estefania Luna victoria",
    "estado": "certificado"
  },
  {
    "id": 63,
    "nombre": "Irma Yolanda Huaman Huamani",
    "estado": "certificado"
  },
  {
    "id": 64,
    "nombre": "Luis Bacherres sandoval",
    "estado": "certificado"
  },
  {
    "id": 65,
    "nombre": "ricardo cueto huayhua",
    "estado": "certificado"
  },
  {
    "id": 66,
    "nombre": "williams carrasco pariona",
    "estado": "certificado"
  },
  {
    "id": 67,
    "nombre": "lucero serna quispe",
    "estado": "certificado"
  },
  {
    "id": 68,
    "nombre": "pamela lopez felipa",
    "estado": "certificado"
  },
  {
    "id": 69,
    "nombre": "alexandra guevara espinoza",
    "estado": "certificado"
  },
  {
    "id": 70,
    "nombre": "milagros lucana ramos",
    "estado": "certificado"
  },
  {
    "id": 71,
    "nombre": "Lucero Narda Herrera Moscaiza",
    "estado": "certificado"
  }
];

// =====================================================
// Ponentes del 2do Foro del Río Ica
// =====================================================

export const ponentesForo2: Ponente[] = [
  { id: 1, nombre: "Ponente 1", tema: "Tema por definir", estado: "pendiente" },
  { id: 2, nombre: "Ponente 2", tema: "Tema por definir", estado: "pendiente" },
];

// =====================================================
// Participantes del 2do Foro del Río Ica
// =====================================================

export const participantesForo2: Participante[] = [
  { id: 1, nombre: "Participante 1", estado: "pendiente" },
  { id: 2, nombre: "Participante 2", estado: "pendiente" },
];

// =====================================================
// Utilidades
// =====================================================

export function getInitials(nombre: string): string {
  return nombre
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
