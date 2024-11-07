import express from 'express';
import { buscarHist, buscarPorAno, buscarUfPorId } from './servicos/servico.js';

const app = express();

app.get('/historicoIPCA', (req, res) => {
    const historico = buscarHist();
    res.json(historico)

});

app.get('/historicoIPCA/:ano', (req, res) => {
  const ano = parseInt(req.params.ano, 10);
  const historico = buscarPorAno(ano);
  res.json(historico)

});

app.get('/historicoIPCA/:id', (req, res) => {
  const id= parseInt(req.params.id);
  const historico = buscarUfPorId(id)
  res.json(historico)

});


app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});