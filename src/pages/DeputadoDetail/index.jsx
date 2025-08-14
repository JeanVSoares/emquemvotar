import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatarData from "../../component/FormataDataHora";

export default function DeputadoDetail() {
    const { id } = useParams();
    const [deputado, setDeputado] = useState(null);
    const [history, setHistory] = useState(null);
    const [profissao, setProfissao] = useState(null);


    useEffect(() => {
        fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados?id=${id}`)
            .then(res => res.json())
            .then(data => setDeputado(data.dados))
            .catch(console.error);
    }, [id]);

    useEffect(() => {
        fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/historico`)
            .then(res => res.json())
            .then(data => setHistory(data.dados))
            .catch(console.error);
    }, [id]);

    useEffect(() => {
        fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/profissoes`)
            .then(res => res.json())
            .then(data => setProfissao(data.dados))
            .catch(console.error);
    }, [id]);

    if (!deputado) return <p>Carregando Deputado...</p>;
    if (!history) return <p>Carregando Despesas...</p>;
    if (!profissao) return <p>Carregando Profissão...</p>;

    { console.log(history) }

    return (
        <div className="bg-gray-50 py-12 sm:py-6">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-indigo-600">Quem é</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold 
                    tracking-tight text-balance text-gray-950 sm:text-5xl">
                    Deputada
                </p>
                <div className="flex flex-1 pt-3 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-1">
                    <img
                        className="mx-auto h-32 w-32 rounded-full object-scale-down"
                        src={deputado[0].urlFoto}
                        alt={`Foto de ${deputado[0].nome}`}
                    />
                </div>
                <p className="mx-auto mt-2 max-w-lg text-center text-gray-600">
                    {`${deputado[0].nome}`}
                </p>
                <p className="mx-auto max-w-lg text-center text-gray-600">
                    {`${deputado[0].siglaPartido} - ${deputado[0].siglaUf} `}
                </p>


                <div className="mt-10 grid gap-4 sm:mt-10 lg:grid-cols-3 lg:grid-rows-12 auto-rows-max">
                    {/* Histórico */}
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Profissão</p>
                                {profissao.map((p, index) => (
                                    <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm/6 font-medium text-gray-900">{formatarData(p.dataHora)}</dt>
                                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{p.titulo}</dd>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                            </div>
                            <div className="flex flex-1 pt-3 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-1">
                                <img
                                    className="mx-auto h-32 w-32 rounded-full object-scale-down"
                                    src={deputado[0].urlFoto}
                                    alt={`Foto de ${deputado[0].nome}`}
                                />
                            </div>
                            <div className="px-8 sm:px-10 sm:pb-10">
                                <p className="max-w-lg text-dm/6 text-gray-600 text-center">
                                    {`${deputado[0].nome}`}
                                </p>
                                <p className="max-w-lg text-sm/6 text-gray-600 text-center">
                                    {`${deputado[0].siglaPartido} - ${deputado[0].siglaUf} `}
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                                </p>
                            </div>
                            <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                                    className="h-[min(152px,40cqw)] object-cover"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
                    </div>
                    <div className="relative lg:row-span-2">
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
                            <div className="relative min-h-120 w-full grow">
                                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                                    <div className="flex bg-gray-900 outline outline-white/5">
                                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                            <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                NotificationSetting.jsx
                                            </div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                        </div>
                                    </div>
                                    <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                    </div>
                    <div className="relative lg:row-span-2 col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-6">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Histórico
                                </p>
                                {history.map((p, index) => (
                                    <div className="mt-4 border-t border-gray-100">
                                        <div className="divide-y divide-gray-100">
                                            <div className="px-4 py-2 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                                                <dt className="text-sm/6 font-medium text-gray-900">{formatarData(p.dataHora)}</dt>
                                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{p.descricaoStatus}</dd>
                                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-1 sm:mt-0">{p.siglaPartido}</dd>
                                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-1 sm:mt-0">{p.situacao}</dd>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}