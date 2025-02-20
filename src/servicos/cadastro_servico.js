import pool from './conexao.js';

export async function cadastrarUsuario(nome, email, telefone) {
    const sql = 'INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)';
    const [resultado] = await pool.execute(sql, [nome, email, telefone]);
    return resultado;
}
