import PoliticoCard from "../../component/PoliticoCard";
import PoliticoList from "../../component/PoliticoList";
import { useEffect, useState } from "react";
import Pagination from "../../component/Pagination";
import Loading from "../../component/Loading";
import { getDeputados } from "../../services/apiListaDeputado";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { FaGripLines, FaGrip } from 'react-icons/fa6';

const itensOrdemPor = [
  { name: "Nome", query: "nome" },
  { name: "Estado", query: "siglaUF" },
  { name: "Partido", query: "siglaPartido" },
]
const itensSentido = [
  { name: "A a Z ou 0 a 9", query: "asc" },
  { name: "Z a A ou 9 a 0", query: "desc" },
]
const itensUF = [
  {
    "cod": "6",
    "sigla": "AC",
    "nome": "ACRE",
    "descricao": ""
  },
  {
    "cod": "14",
    "sigla": "AL",
    "nome": "ALAGOAS",
    "descricao": ""
  },
  {
    "cod": "4",
    "sigla": "AM",
    "nome": "AMAZONAS",
    "descricao": ""
  },
  {
    "cod": "2",
    "sigla": "AP",
    "nome": "AMAPÁ",
    "descricao": ""
  },
  {
    "cod": "16",
    "sigla": "BA",
    "nome": "BAHIA",
    "descricao": ""
  },
  {
    "cod": "9",
    "sigla": "CE",
    "nome": "CEARÁ",
    "descricao": ""
  },
  {
    "cod": "22",
    "sigla": "DF",
    "nome": "DISTRITO FEDERAL",
    "descricao": ""
  },
  {
    "cod": "18",
    "sigla": "ES",
    "nome": "ESPÍRITO SANTO",
    "descricao": ""
  },
  {
    "cod": "23",
    "sigla": "GO",
    "nome": "GOIÁS",
    "descricao": ""
  },
  {
    "cod": "8",
    "sigla": "MA",
    "nome": "MARANHÃO",
    "descricao": ""
  },
  {
    "cod": "17",
    "sigla": "MG",
    "nome": "MINAS GERAIS",
    "descricao": ""
  },
  {
    "cod": "24",
    "sigla": "MS",
    "nome": "MATO GROSSO DO SUL",
    "descricao": ""
  },
  {
    "cod": "21",
    "sigla": "MT",
    "nome": "MATO GROSSO",
    "descricao": ""
  },
  {
    "cod": "3",
    "sigla": "PA",
    "nome": "PARÁ",
    "descricao": ""
  },
  {
    "cod": "12",
    "sigla": "PB",
    "nome": "PARAÍBA",
    "descricao": ""
  },
  {
    "cod": "13",
    "sigla": "PE",
    "nome": "PERNAMBUCO",
    "descricao": ""
  },
  {
    "cod": "10",
    "sigla": "PI",
    "nome": "PIAUÍ",
    "descricao": ""
  },
  {
    "cod": "25",
    "sigla": "PR",
    "nome": "PARANÁ",
    "descricao": ""
  },
  {
    "cod": "19",
    "sigla": "RJ",
    "nome": "RIO DE JANEIRO",
    "descricao": ""
  },
  {
    "cod": "11",
    "sigla": "RN",
    "nome": "RIO GRANDE DO NORTE",
    "descricao": ""
  },
  {
    "cod": "5",
    "sigla": "RO",
    "nome": "RONDÔNIA",
    "descricao": ""
  },
  {
    "cod": "1",
    "sigla": "RR",
    "nome": "RORAIMA",
    "descricao": ""
  },
  {
    "cod": "27",
    "sigla": "RS",
    "nome": "RIO GRANDE DO SUL",
    "descricao": ""
  },
  {
    "cod": "26",
    "sigla": "SC",
    "nome": "SANTA CATARINA",
    "descricao": ""
  },
  {
    "cod": "15",
    "sigla": "SE",
    "nome": "SERGIPE",
    "descricao": ""
  },
  {
    "cod": "20",
    "sigla": "SP",
    "nome": "SÃO PAULO",
    "descricao": ""
  },
  {
    "cod": "7",
    "sigla": "TO",
    "nome": "TOCANTINS",
    "descricao": ""
  }
]
//pagina = 1, itens = 20, ordem = 'ASC' , ordenarPor ='nome'
export default function ListaPoliticos() {

  const [dados, setDados] = useState([]);
  const [siglaUF, setSiglaUF] = useState('');
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [quantidade, setQuantidade] = useState(16);
  const [ordem, setOrdem] = useState('ASC');
  const [ordenarPor, setOrdenarPor] = useState('nome');
  const [visual, setVisual] = useState(0)



  useEffect(() => {

    console.log(visual);
    async function buscar() {
    
      setLoading(true);
      setDados([]);
      try {
        const resultado = await getDeputados(pagina, quantidade, ordem, ordenarPor, siglaUF); // página, quantidade
        setDados(resultado.dados);
      } catch (erro) {
        console.error(erro.message);
      } finally {
        setLoading(false);
      }
    }
    buscar();
  }, [pagina, quantidade, ordem, ordenarPor, siglaUF, visual])

  return (

    <div className="py-6">
      {/* Formulário */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-6 px-6">
        {/* Quantidade */}
        <div className="sm:col-span-1 sm:col-start-1">
          <label htmlFor="quantidade" className="block text-sm/6 font-medium text-gray-900">
            Quantidade
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
              <option value={16}>16</option>
              <option value={24}>24</option>
              <option value={64}>64</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>
        </div>
        {/* Sigla UF */}
        <div className="sm:col-span-1">
          <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
            Estado
          </label>
          <div className="mt-2 grid grid-cols-1">
            <select
              value={siglaUF}
              onChange={(e) => setSiglaUF(e.target.value)}
              id="siglaUF"
              name="siglaUF"
              autoComplete="siglaUF-name"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              <option value=''>-</option>
              {itensUF.map((p, item) => (
                <option value={p.sigla}>{p.sigla}</option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>

        </div>
        {/* Ordem */}
        <div className="sm:col-span-1">
          <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
            Ordenado por
          </label>
          <div className="mt-2 grid grid-cols-1">
            <select
              onChange={(e) => setOrdenarPor(e.target.value)}
              id=""
              name="quantidade"
              autoComplete="quantidade-name"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              {itensOrdemPor.map((p, item) => (
                <option value={p.query}>{p.name}</option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>

        </div>
        {/* Asc Desc */}
        <div className="sm:col-span-1">
          <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
            Sentido
          </label>
          <div className="mt-2 grid grid-cols-1">
            <select
              onChange={(e) => setOrdem(e.target.value)}
              id="quantidade"
              name="quantidade"
              autoComplete="quantidade-name"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              {itensSentido.map((p, item) => (
                <option value={p.query}>{p.name}</option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>

        </div>
        {/*Lista ou Card*/}
        <div className="sm:col-span-2">
          <div className="flex flex-row justify-center mt-10">
            {/*Botão Card*/}
            <button
              className={!visual ? "text-base text-stone-950 hover:text-stone-700 cursor-pointer px-2" : "text-base text-stone-400 hover:text-stone-700 cursor-pointer px-2"}
              onClick={() => setVisual(1)}>
              <FaGrip />
            </button >
            {/*Botão linha*/}
            <button className={visual ? "text-base text-stone-950 hover:text-stone-700 cursor-pointer px-2" : "text-base text-stone-400 hover:text-stone-700 cursor-pointer px-2"}
              onClick={() => setVisual(0)} >
              <FaGripLines />
            </button>
          </div>
        </div>
      </div>

      {/* Fim Formulário */}

      {/* Carregando */}
      {loading ? <Loading /> : ''}
      {/* Carregando */}

      {/* Lista de Deputado - em card  */}
      <div className="container w-auto mx-auto px-10 bg-white">
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {dados.map((p, index) => (
              !visual ? <PoliticoList key={index} {...p} /> : ""
            ))}
          </dl>
        </div>
      </div>
      
      {/* Lista de Deputado - em card */}
      <div className={visual ? "grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-3 px-6" : ""}>
        {dados.map((p, index) => (
          visual ? <PoliticoCard key={index} {...p} /> : ""
        ))}
      </div>


      {/* Paginação */}
      <Pagination paginaPorPagina={quantidade} onPageChange={setPagina} />
    </div >

  );
}