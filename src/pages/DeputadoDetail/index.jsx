import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DeputadoDetail() {
    const { id } = useParams();
    const [deputado, setDeputado] = useState(null);


    useEffect(() => {
        fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados?id=${id}`)
            .then(res => res.json())
            .then(data => setDeputado(data.dados))
            .catch(console.error);
    }, [id]);

    if (!deputado) return <p>Carregando...</p>;

    { console.log(deputado) }
    return (
        <div>
            <h1>{deputado[0].nome}</h1>
            <p>Partido: {deputado[0].siglaPartido}</p>
            <p>Estado: {deputado[0].siglaUf}</p>
            <p>Nascimento: {deputado[0].email}</p>
            {/* Outras informações podem ser renderizadas */}
        </div>
    );
}