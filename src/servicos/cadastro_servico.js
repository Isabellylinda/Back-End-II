
import pool from './conexao.js';

export async function cadastraLead(nome, email, telefone) {
    const conexao = await pool.getConnection();
    try {
        console.log('Dados recebidos para cadastro:', { nome, email, telefone });

        const [resposta] = await conexao.query(
            'INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)', 
            [nome, email, telefone]
        );

        console.log('Resposta do banco de dados:', resposta);
        return resposta;
    } catch (error) {
        console.error('Erro ao cadastrar lead:', error);
        throw error; 
    } finally {
        conexao.release(); 
        console.log('Conexão liberada.');
    }
}