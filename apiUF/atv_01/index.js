const express = require('express');
const timebaska = require('./timebasquete/timebasquete.js')

const app = express();

app.get('/time', (req, res) => {
    res.json(timebaska.timebaska)
});

app.get('/time/:idtime', (req, res) => {
    const idTIME = parseInt(req.params.idtime);
    let mensagemErro = '';
    let time;

    if (!(isNaN(idTIME))){
        time = timebaska.timebaska.find(u => u.id === idTIME);
        if (!time) {
            mensagemErro = 'Time não encontrado';
        }
    } else{
        mensagemErro = 'Requisição inválida';
    }
    
    if (time) {
        res.json(time);
    } else{
        res.status(404).json({"erro": mensagemErro})
    }
})