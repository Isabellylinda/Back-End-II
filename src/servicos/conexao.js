import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'rood', // Substitua pelo seu usuário do MySQL
    password: 'Isalospo1410@', // Substitua pela sua senha do MySQL
    database: 'leads_db'
});

export default pool;
