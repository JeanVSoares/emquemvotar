import { ChevronDownIcon } from "@heroicons/react/16/solid";
import PoliticoCard from "../../component/PoliticoCard";
import ToggleSwitch from "../../component/ToggleSwitch";


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
    <>
    
      {/* Formulário */}
      <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-8 sm:grid-cols-6 p-6">
        {/* Toggle Ficha Limpa*/}
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
            Ficha limpa
          </label>
          <div className="mt-2">
            <div className="">
              <ToggleSwitch onChange={(value) => console.log("Estado:", value)} />
            </div>
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
            Estado
          </label>
          <div className="mt-2 grid grid-cols-1">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>
        </div>
      </div>



      {/* Lista */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 p-6">
        {politicos.map((p, index) => (
          <PoliticoCard key={index} {...p} />
        ))}
      </div>
    </>
  );
}