import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Pagination({ paginaPorPagina, onPageChange }) {

    const totalPaginas = Math.ceil(513 / paginaPorPagina);
    const [paginaAtual, setPaginaAtual] = useState(1);

    const mudarPagina = (pagina) => {
        setPaginaAtual(pagina);
        onPageChange(pagina);
        // Aqui você colocaria a função para buscar os dados da nova página
    };

    const gerarPaginas = () => {
        const paginas = [];
        const maximoVisivel = 3;

        // Sempre mostra a primeira página
        paginas.push(1);

        // Reticências antes da página atual (se necessário)
        if (paginaAtual > maximoVisivel) {
            paginas.push("...");
        }

        // Páginas próximas da atual
        for (
            let i = Math.max(2, paginaAtual - 1);
            i <= Math.min(totalPaginas - 1, paginaAtual + 1);
            i++
        ) {
            paginas.push(i);
        }

        // Reticências depois da página atual (se necessário)
        if (paginaAtual < totalPaginas - (maximoVisivel - 1)) {
            paginas.push("...");
        }

        // Sempre mostra a última página
        if (totalPaginas > 1) {
            paginas.push(totalPaginas);
        }

        return paginas;
    };

    return (
        <>
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <a
                        href="#"
                        className="relative inline-flex items-center rounded-md border border-gray-300 
                        bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Previous
                    </a>
                    <a
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 
                        bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </a>

                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to <span className="font-medium">{paginaPorPagina}</span> of{' '}
                            <span className="font-medium">{totalPaginas}</span> results
                        </p>
                    </div>
                    <div>
                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">

                            <button
                                disabled={paginaAtual === 1}
                                onClick={() => mudarPagina(paginaAtual - 1)}
                                href="#"
                                className={paginaAtual === 1?"relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-100 inset-ring inset-ring-gray-100 focus:z-20 focus:outline-offset-0":"relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"}
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon aria-hidden="true" className="size-5" />
                            </button>
                            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                            {gerarPaginas().map((num, index) => (
                                <button
                                    key={index}
                                    href="#"
                                    aria-current="page"
                                    onClick={() => num !== "..." && mudarPagina(num)}
                                    className={paginaAtual === num ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"}
                                >
                                    {num}
                                </button>
                            ))}

                            <button
                                disabled={paginaAtual === totalPaginas}
                                onClick={() => mudarPagina(paginaAtual + 1)}
                                href="#"
                                className= {paginaAtual === totalPaginas ? "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-100 inset-ring inset-ring-gray-100 focus:z-20 focus:outline-offset-0" : "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" }
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon aria-hidden="true" className="size-5" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}