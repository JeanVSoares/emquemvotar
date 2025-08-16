import PoliticoCard from "../../component/PoliticoCard";
import { useEffect, useState } from "react";
import Pagination from "../../component/Pagination";
import Loading from "../../component/Loading";
import { getDeputados } from "../../services/apiListaDeputado";

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
      <div className="p-6">
        {/* Formulário */}
        <div className="grid grid-cols-4 md:grid-cols-6 sm:grid-cols-1 py-6">
          <div className="">
            <label value={quantidade} onChange={(e) => setQuantidade(e.target.value)} className="text-sm/6 font-medium text-gray-900">
              Mostrar:
              <select>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </label>
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
        <Pagination paginaPorPagina={quantidade} onPageChange={setPagina}/>
      </div>
    </>
  );
}