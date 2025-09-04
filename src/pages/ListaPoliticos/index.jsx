import PoliticoCard from "../../component/PoliticoCard";
import { useEffect, useState } from "react";
import Pagination from "../../component/Pagination";
import Loading from "../../component/Loading";
import { getDeputados } from "../../services/apiListaDeputado";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function ListaPoliticos() {

  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [quantidade, setQuantidade] = useState(10);

  useEffect(() => {
    async function buscar() {
      setLoading(true);
      try {
        const resultado = await getDeputados(pagina, quantidade); // página, quantidade
        setDados(resultado.dados);

      } catch (erro) {
        console.error(erro.message);
      } finally {
        setLoading(false);
      }
    }

    buscar();
  })

  return (
    <>
      <div className="p-6 mt-10">
        {/* Formulário */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
              Country
            </label>
            <div className="mt-2 grid grid-cols-1">
              <select
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                id="quantidade"
                name="quantidade"
                autoComplete="quantidade-name"
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

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {dados.map((p, index) => (
            <PoliticoCard key={index} {...p} />
          ))}
        </div>


        <div className="flex justify-between mt-4">
          <button
            disabled={pagina === 1}
            onClick={() => setPagina((p) => p - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            onClick={() => setPagina((p) => p + 1)}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Próxima
          </button>
        </div>
        <Pagination paginaPorPagina={quantidade} onPageChange={setPagina} />
      </div >
    </>
  );
}