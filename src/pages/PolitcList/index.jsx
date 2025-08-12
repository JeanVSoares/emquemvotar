import PoliticoCard from "../../component/PoliticoCard";

const politicos = [
  {
    nome: "Leonard Krasner",
    cargo: "Senior Designer",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    twitter: "#",
    linkedin: "#",
    projetos: 12,
    processos: 3,
    nomeLimpo: false
  },
  {
    nome: "Floyd Miles",
    cargo: "Principal Designer",
    foto: "https://randomuser.me/api/portraits/men/44.jpg",
    twitter: "#",
    linkedin: "#",
    projetos: 12,
    processos: 3,
    nomeLimpo: true
  },
  {
    nome: "Emily Selman",
    cargo: "VP, User Experience",
    foto: "https://randomuser.me/api/portraits/women/65.jpg",
    twitter: "#",
    linkedin: "#",
    projetos: 12,
    processos: 3,
    nomeLimpo: false
  },
  {
    nome: "Leonard Krasner",
    cargo: "Senior Designer",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    twitter: "#",
    linkedin: "#",
    projetos: 12,
    processos: 3,
    nomeLimpo: false
  },
  {
    nome: "Floyd Miles",
    cargo: "Principal Designer",
    foto: "https://randomuser.me/api/portraits/men/44.jpg",
    twitter: "#",
    linkedin: "#",
    projetos: 12,
    processos: 3,
    nomeLimpo: true
  },
  {
    nome: "Emily Selman",
    cargo: "VP, User Experience",
    foto: "https://randomuser.me/api/portraits/women/65.jpg",
    twitter: "#",
    linkedin: "#",
    projetos: 12,
    processos: 3,
    nomeLimpo: true
  },
  {
    nome: "Leonard Krasner",
    cargo: "Senior Designer",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    twitter: "#",
    linkedin: "#",
    projetos: 12,
    processos: 3,
    nomeLimpo: true

  },
  {
    nome: "Emily Selman",
    cargo: "VP, User Experience",
    foto: "https://randomuser.me/api/portraits/women/65.jpg",
    twitter: "#",
    linkedin: "#",
    projetos: 12,
    processos: 3,
    nomeLimpo: true
  },
  {
    nome: "Leonard Krasner",
    cargo: "Senior Designer",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    twitter: "#",
    linkedin: "#",
    projetos: 12,
    processos: 3,
    nomeLimpo: true
  },
  {
    nome: "Floyd Miles",
    cargo: "Principal Designer",
    foto: "https://randomuser.me/api/portraits/men/44.jpg",
    twitter: "#",
    linkedin: "#",
    projetos: 12,
    processos: 3,
    nomeLimpo: true
  },
  {
    nome: "Emily Selman",
    cargo: "VP, User Experience",
    foto: "https://randomuser.me/api/portraits/women/65.jpg",
    twitter: "#",
    linkedin: "#",
    projetos: 12,
    processos: 3,
    nomeLimpo: true
  },
];

export default function ListaPoliticos() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 p-6">
      {politicos.map((p, index) => (
        <PoliticoCard key={index} {...p} />
      ))}
    </div>
  );
}