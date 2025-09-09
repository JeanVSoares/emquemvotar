const BASE_URL = "https://dadosabertos.camara.leg.br/api/v2";

/**
 * Busca a lista de deputados com paginação e quantidade de itens
 * @param {number} pagina - Página que deseja buscar
 * @param {number} itens - Quantidade de itens por página
 * @returns {Promise<Object>} - Retorna os dados da API
 */
export async function getDeputados(pagina = 1, itens = 20, ordem = "ASC", ordenarPor = "nome", siglaUf = '', siglaPartido = '') {
  console.log(`${BASE_URL}/deputados?
    ${siglaUf === '' ? '' : 'siglaUf=' + siglaUf + '&'}
    ${siglaPartido === '' ? '' : 'siglaPartido=' + siglaPartido + '&'}
    pagina=${pagina}&itens=${itens}&ordem=${ordem}&ordenarPor=${ordenarPor}`)
  //console.log(`siglaUf=MG&`)
  const url = `${BASE_URL}/deputados?${siglaUf === '' ? '' : 'siglaUf=' + siglaUf + '&'}${siglaPartido === '' ? '' : 'siglaPartido=' + siglaPartido + '&'}pagina=${pagina}&itens=${itens}&ordem=${ordem}&ordenarPor=${ordenarPor}`;

  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("Erro ao buscar deputados");
  }
  const data = await resposta.json();
  //console.log(data);
  return data;
}

/**
 * Busca detalhes de um deputado específico
 * @param {number} id - ID do deputado
 * @returns {Promise<Object>}
 */

export async function getDeputadoDetalhes(id) {
  //console.log(`${BASE_URL}/deputados/${id}`);
  const url = `${BASE_URL}/deputados/${id}`;
  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar detalhes do deputado");
  }

  const data = await resposta.json();
  //  console.log(data);
  return data;
}

/**
 * Busca detalhes de todos
 * @returns {Promise<Object>}
 */
export async function getDeputadoAll() {
  const url = `${BASE_URL}/deputados`;
  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar todos os deputados");
  }
  return await resposta.json();
}

