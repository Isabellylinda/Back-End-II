import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', 
    password: 'Isalospo1410@', 
    database: 'usuarios_db'
});

export default pool;
