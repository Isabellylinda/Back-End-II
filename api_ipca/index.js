const express = require('express');
const app = express();
const port = 8080;

// Importação dos dados e serviços
const dados = require('./dados/dados');
const servico = require('./servico/servico');

// Rota 1: Retorna todos os dados
app.get('/historicoIPCA', (req, res) => {
  res.json(dados);
});

// Rota 2: Retorna dados de um ano específico
app.get('/historicoIPCA', (req, res) => {
  const ano = parseInt(req.query.ano);

  // Validação do ano
  if (ano < 2015 || ano > 2024) {
    return res.status(404).json({ error: 'Ano inválido. O ano deve ser entre 2015 e 2024.' });
  }

  const resultado = servico.buscarPorAno(ano, dados);
  res.json(resultado);
});

// Rota 3: Retorna dados de um id específico
app.get('/historicoIPCA/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const resultado = servico.buscarPorId(id, dados);

  if (!resultado) {
    return res.status(404).json({ error: 'ID não encontrado.' });
  }

  res.json(resultado);
});

// Rota 4: Realiza o cálculo do reajuste
app.get('/historicoIPCA/calculo', (req, res) => {
  const { valor, mesInicial, anoInicial, mesFinal, anoFinal } = req.query;

  // Validação dos parâmetros
  if (!valor || !mesInicial || !anoInicial || !mesFinal || !anoFinal) {
    return res.status(400).json({ error: 'Todos os parâmetros são obrigatórios: valor, mesInicial, anoInicial, mesFinal, anoFinal.' });
  }

  const valorReajustado = servico.calcularReajuste(
    parseFloat(valor),
    parseInt(mesInicial),
    parseInt(anoInicial),
    parseInt(mesFinal),
    parseInt(anoFinal),
    dados
  );

  if (!valorReajustado) {
    return res.status(400).json({ error: 'A data final não pode ser anterior à data inicial.' });
  }

  res.json({ valorReajustado });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
