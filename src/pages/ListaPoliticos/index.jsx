import PoliticoCard from "../../component/PoliticoCard";
import PoliticoFilterForm from "../../component/FiltroPolitico";
import { useEffect, useState } from "react";

export default function ListaPoliticos() {

  const [deputados, setDeputados] = useState([]);


  useEffect(() => {
    fetch('https://dadosabertos.camara.leg.br/api/v2/deputados?pagina=2&itens=20&ordem=ASC&ordenarPor=nome')
      .then(res => res.json())
      .then(data => setDeputados(data.dados)) // 'dados' contém a lista
      .catch(console.error);
  }, []);

  return (
    <>
      {/* Formulário */}
      <PoliticoFilterForm />
      {console.log(deputados)}

      {/* Lista */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 p-6">
        {deputados.map((p, index) => (
          <PoliticoCard key={index} {...p} />
        ))}
      </div>

    </>
  );
}