import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function PoliticoList({
  email,
  id,
  idLegislatura,
  nome,
  siglaPartido,
  siglaUf,
  uri,
  uriPartido,
  urlFoto,

}) {
  return (
    <div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-0">
        <dt className="text-gray-900 flex flex-row">
          <img
            className="size-10 object-center rounded-full object-scale-down"
            src={urlFoto}
            alt={`Foto de ${nome}`}
          />
          <p className='mt-3 text-sm/6 font-medium ml-3'>{nome}</p>
        </dt>
        <dd className="text-sm/6 text-gray-700 sm:mt-0">
          <p className='mt-3 text-sm text-gray-500'>{siglaPartido} - {siglaUf}</p>
        </dd>
        <dd className="flex justify-end mt-1 text-sm/6 sm:col-span-2 text-gray-700 sm:mt-0">
          <Link to={`/deputado/${id}`} className="text-center rounded-full bg-yellow-600 w-20 mt-3 py-1 font-sans 
                             text-sm font-medium font-stretch-normal text-gray-900 hover:text-gray-100 
                             shadow-xs hover:bg-yellow-500 focus-visible:outline-2
                             focus-visible:outline-offset-2 focus-visible:outline-white">Veja
          </Link>
        </dd>
      </div>

    </div>
  )
}
