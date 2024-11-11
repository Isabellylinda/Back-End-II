// servico/servico.js

import historicoInflacao from '../dados/dados.js';

// Função para obter o histórico completo
export function obterHistoricoCompleto() {
    return historicoInflacao;
}

// Função para filtrar inflação por ano
export function filtrarPorAno(ano) {
    return historicoInflacao.filter(dado => dado.ano === ano);
}

// Função para calcular a média do IPCA em um ano específico
export function calcularMediaAnual(ano) {
    const dadosAno = filtrarPorAno(ano);
    const soma = dadosAno.reduce((acc, dado) => acc + dado.ipca, 0);
    return dadosAno.length > 0 ? (soma / dadosAno.length).toFixed(2) : 0;
}
