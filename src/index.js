
import express from 'express';
import cors from 'cors';
import { validaUsuario } from './validacao/valida.js';
import { cadastraLead } from './servicos/cadastro_servico.js';

const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.body;

    console.log('Requisição recebida:', { nome, email, telefone });

   
    if (!validaUsuario(nome, email, telefone)) {
        console.log('Dados inválidos.');
        return res.status(400).json({ mensagem: 'Dados inválidos' });
    }

    try {
        await cadastraLead(nome, email, telefone);
        console.log('Cadastro efetivado com sucesso.');
        res.status(201).json({ mensagem: 'Cadastro efetivado com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ mensagem: 'Erro ao cadastrar usuário' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});