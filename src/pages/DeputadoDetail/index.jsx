import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatarData from "../../component/FormataDataHora";
import { getDeputadoDetalhes } from "../../services/apiListaDeputado";
import Loading from "../../component/Loading";
import { FaChildren, FaGraduationCap, FaCalendarDays } from 'react-icons/fa6';
import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";

const situacaoIcones = {
    "Exercício": <CheckCircleIcon className="w-6 h-6 text-green-500" />,
    "Afastado": <ExclamationCircleIcon className="w-6 h-6 text-yellow-500" />,
    "Falecido": <XCircleIcon className="w-6 h-6 text-red-500" />,
    "Outro": <ExclamationCircleIcon className="w-6 h-6 text-gray-400" /> // fallback
};

export default function DeputadoDetail() {

    const { id } = useParams();
    const [deputado, setDeputado] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function foundDeputado() {
            setLoading(true);
            try {
                const resultado = await getDeputadoDetalhes(id);
                setDeputado(resultado.dados);
            } catch (erro) {
                console.error("Erro ao buscar deputado:", erro.message);
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            foundDeputado();
        }
    }, [id]); // ✅ roda só quando id muda

    if (loading) {
        return <Loading />;
    }

    if (!deputado) {
        return <p className="text-center text-red-500">Deputado não encontrado.</p>;
    }
    console.log(deputado)
    return (
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-10 grid gap-4 sm:mt-10 lg:grid-cols-3 auto-rows-max">
                {/* Apresentação */}
                <div className="relative">
                    <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">

                        <div className="flex flex-1 pt-3 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-1">
                            <img
                                className="size-32 object-center rounded-full object-scale-down object-cover"
                                src={deputado?.ultimoStatus?.urlFoto}
                                alt={`Foto de ${deputado?.ultimoStatus?.nome}`}
                            />
                        </div>

                        <div className="px-8 sm:px-10 text-center">
                            <p className="max-w-lg text-dm/6 text-gray-600">
                                {deputado?.ultimoStatus?.nome}
                            </p>
                            <p className="max-w-lg text-sm/6 text-gray-600">
                                {deputado?.ultimoStatus?.siglaPartido} -{" "}
                                {deputado?.ultimoStatus?.siglaUf}
                            </p>
                            <p className="max-w-lg text-xs text-gray-500">
                                {deputado?.nomeCivil}
                            </p>
                        </div>

                        <div className="grid sm:mt-2 lg:grid-cols-4 auto-rows-max py-5 flex justify-center">
                            <div className="grid-col-1 flex flex-col items-center">
                                <strong><FaChildren className="w-6 h-6" /></strong>
                                <span className="mt-2 text-xs text-gray-500">{(deputado?.sexo) === "M" ? "Masculino" : "Feminino"}</span>
                            </div>
                            <div className="grid-col-1 flex flex-col items-center">
                                <strong><FaGraduationCap className="w-6 h-6" /></strong>
                                <span className="mt-2 text-xs text-gray-500">{deputado?.escolaridade}</span>
                            </div>
                            <div className="grid-col-1 flex flex-col items-center">
                                <strong><FaCalendarDays className="w-6 h-6" /></strong>
                                <span className="mt-2 text-xs text-gray-500 text-center">{formatarData(deputado?.dataNascimento)}</span>
                            </div>
                            <div className="grid-col-1 flex flex-col items-center">
                                <strong>{situacaoIcones[deputado?.ultimoStatus?.situacao] || situacaoIcones["Outro"]}
                                </strong>
                                <span className="mt-2 text-xs text-gray-500 text-center"> {deputado?.ultimoStatus?.situacao}</span>
                            </div>

                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
                </div>
                {/* Locallização*/}
                <div className="relative">
                    <div className="absolute inset-px rounded-lg bg-white" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Gabinete</p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                <strong>Prédio:</strong> <span>{deputado?.ultimoStatus?.gabinete?.predio}</span>
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                <strong>Andar:</strong> <span>{deputado?.ultimoStatus?.gabinete?.andar}</span>
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                <strong>Sala:</strong> <span>{deputado?.ultimoStatus?.gabinete?.sala}</span>
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                <strong>Telefone:</strong> <span>{deputado?.ultimoStatus?.gabinete?.telefone}</span>
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                <strong>Email:</strong> <span>{deputado?.ultimoStatus?.gabinete?.email}</span>
                            </p>
                        </div>

                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
                </div>

                <div className="relative">
                    <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                Powerful APIs
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                            </p>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                </div>

            </div>
        </div>
    );
}