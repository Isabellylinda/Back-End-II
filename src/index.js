import express from 'express';
import cors from 'cors';
import {validaUsuario} from './validacao/valida.js';
import {cadastraLead} from './servivos/cadastro_servico.js';

const app = new express();

app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) =>  {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    await cadastraLead (nome, email, telefone);
  res.status(204).send({"Mensagem": "Cadastro efetivado com sucesso!"});


})