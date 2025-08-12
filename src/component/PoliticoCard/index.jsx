import { FaFileAlt, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FaLinkedin, FaLinkedinIn, FaScaleBalanced, FaXTwitter, FaCalendar,FaInstagram } from "react-icons/fa6";

export default function PoliticoCard({
  nome,
  cargo,
  foto,
  twitter,
  linkedin,
  projetos,
  processos,
  nomeLimpo
}) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 text-center w-full max-w-xs">
      {/* Foto */}
      <img
        className="mx-auto h-32 w-32 rounded-full object-cover"
        src={foto}
        alt={`Foto de ${nome}`}
      />

      {/* Nome e cargo */}
      <h3 className="mt-6 text-lg font-semibold text-gray-900">{nome}</h3>
      <p className="text-sm text-gray-500">{cargo}</p>

      {/* Estatísticas */}
      <div className="mt-6 flex justify-around text-sm grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <FaFileAlt className="text-gray-400 mb-1" />
          <span className="font-bold">{projetos}</span>
          <span className="text-gray-500 text-xs">Projetos</span>
        </div>
        <div className="flex flex-col items-center">
          <FaScaleBalanced className="text-gray-400 mb-1" />
          <span className="font-bold">{processos}</span>
          <span className="text-gray-500 text-xs">Processos</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCalendar className="text-gray-400 mb-1" />
          <span className="font-bold">{processos}</span>
          <span className="text-gray-500 text-xs">Faltas</span>
        </div>

      </div>

      {/* Button e Ficha limpa */}
      <div className="mt-6 flex justify-around text-sm grid grid-cols-2 gap-4">

        <div className="flex flex-col items-center">
          <button className="rounded-md bg-rose-500 px-3.5 py-2.5 
      text-sm font-semibold text-gray-900 hover:text-gray-100 shadow-xs hover:bg-rose-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Veja mais</button>
        </div>

        <div className="flex flex-col items-center">
          {nomeLimpo ? (
            <>
              <FaThumbsUp className="text-green-500" />
              <span className="text-green-500 text-xs">Ficha limpa</span>
            </>
          ) : (
            <>
              <FaThumbsDown className="text-red-500" />
              <span className="text-red-500 text-xs">Ficha suja</span>
            </>
          )}
        </div>
      </div>

      {/* Ícones sociais */}
      <div className="mt-4 flex justify-center space-x-4">
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <FaXTwitter size={20} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <FaLinkedin size={20} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <FaInstagram size={20} />
          </a>
        )}
      </div>


    </div >
  );
}
