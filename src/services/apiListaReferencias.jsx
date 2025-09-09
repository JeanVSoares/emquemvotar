const BASE_URL = "https://dadosabertos.camara.leg.br/api/v2";

/**
 * Busca a lista de deputados com paginação e quantidade de itens
 * @param {number} pagina - Página que deseja buscar
 * @param {number} itens - Quantidade de itens por página
 * @returns {Promise<Object>} - Retorna os dados da API
 */
export async function getAllPartidos() {
//https://dadosabertos.camara.leg.br/api/v2/partidos?ordem=ASC&ordenarPor=sigla
  const url = `${BASE_URL}/partidos?ordem=ASC&ordenarPor=sigla`;
 
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("Erro ao buscar todos partido");
  }
  const data = await resposta.json();
  return data;
}