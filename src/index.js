import express from 'express';
import cors from 'cors';
import { cadastrarUsuario } from './servicos/cadastro_servico.js';
import { validarUsuario } from './validacao/valida.js';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.body;

    // Valida os dados antes de cadastrar
    const erro = validarUsuario(nome, email, telefone);
    if (erro) {
        return res.status(400).json({ erro });
    }

    try {
        const resultado = await cadastrarUsuario(nome, email, telefone);
        res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!', id: resultado.insertId });
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao cadastrar usuário.' });
    }
});

// Porta do servidor
const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

