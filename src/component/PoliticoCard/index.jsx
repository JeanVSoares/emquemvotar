import { FaFileAlt, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FaLinkedin, FaLinkedinIn, FaScaleBalanced, FaXTwitter, FaCalendar, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function PoliticoCard({
  email,
  id,
  idLegislatura,
  nome,
  siglaPartido,
  siglaUf,
  uri,
  uriPartido,
  urlFoto,
  nomeLimpo = false,
  twitter = true,
  linkedin = true
}) {
  return (
    <div className="bg-white rounded-sm shadow-md p-2 text-center w-full max-w-xs p-2">
      {/* Foto */}
      <img
        className="mx-auto h-20 w-20 rounded-full object-scale-down"
        src={urlFoto}
        alt={`Foto de ${nome}`}
      />

      {/* Nome e cargo */}

      <div className="h-19">
        <h3 className="mt-6 text-sm font-semibold text-gray-900">Dep. {nome}</h3>
        <p className="text-sm text-gray-500">{siglaPartido} - {siglaUf}</p>
      </div>

      <div className="flex flex-col items-center">
        <Link to={`/deputado/${id}`} className="rounded-none bg-yellow-600 w-full py-2 font-sans 
                             text-sm font-medium font-stretch-normal text-gray-900 hover:text-gray-100 
                             shadow-xs hover:bg-yellow-500 focus-visible:outline-2
                             focus-visible:outline-offset-2 focus-visible:outline-white">Veja
        </Link>
      </div>

    </div>

  );
}
