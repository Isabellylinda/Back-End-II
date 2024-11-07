import historicoInflacao from "../dados/dados";

export const buscarHist = () => {
    return historicoInflacao;
}

export const buscarPorAno = (ano) => {
    return historicoInflacao.filter(item => item.ano === ano);
}

export const buscarUfPorId = (id) => {
    const idHT = parseInt(id);
    return historicoInflacao.find(item => item.id === idHT);
}