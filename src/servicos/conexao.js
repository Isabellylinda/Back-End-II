import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'usuario',
    password: 'liberta123',
    database: 'banco_de_dados'
});

export default pool;