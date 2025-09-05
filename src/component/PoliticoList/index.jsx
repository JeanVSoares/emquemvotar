import { PaperClipIcon } from '@heroicons/react/20/solid'

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
  nomeLimpo = false,
  twitter = true,
  linkedin = true
}) {
  return (
    <div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              <img
                className="h-10 w-10 rounded-full object-scale-down"
                src={urlFoto}
                alt={`Foto de ${nome}`}
              />
              {nome}
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-1 sm:mt-0">{idLegislatura}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
