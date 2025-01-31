import express from 'express';
import { retornaCampeonatos} from './servico/retornaCampeonatos_servico.js';
import { retornaCampeonatosID } from './servico/retornaCampeonatos_servico.js';
import { retornaCampeonatosAno} from './servico/retornaCampeonatos_servico.js';
import { retornaCampeonatosTime} from './servico/retornaCampeonatos_servico.js';

// import pool from './servico/conexao.js';

const app = express();
 
//  app.get('/campeonatos', async (req, res) => {
//      const campeonatos = await retornaCampeonatos();
//    res.json(campeonatos)
//  })

 app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const campeonato = await retornaCampeonatosID(id);
    if(campeonato.length > 0){
      res.json(campeonato);
    } else{
      res.status(404).json({ mensagem: "Nenhum campeonato encontrado"});
    }
});

// app.get('/campeonatos', async (req, res) => {
//   let campeonatos;

//   const ano = req.query.ano;

//   if (typeof ano === 'undefined'){
//     campeonatos = await retornaCampeonatos();
//   } else {
//     campeonatos = await retornaCampeonatosAno(parseInt(ano));
//   }

//   if(campeonatos.length > 0) {
//     res.json(campeonatos);
//   } else{
//     res.status(404).json({ mensagem: "Nenhum campeonato encontrado"});
//   }

// });

app.get('/campeonatos', async (req, res) => {
    let campeonatos;
    const ano = req.query.ano;
    const time = req.query.time;
  
    if (typeof ano === 'undefined' && typeof time === 'undefined'){
      campeonatos = await retornaCampeonatos();
    } 
    else if (typeof ano !== 'undefined'){
      campeonatos = await retornaCampeonatosAno(parseInt(ano));
    }
    else if (typeof time !== 'undefined'){
        campeonatos = await retornaCampeonatosTime(parseInt(time));
      }

    if(campeonatos.length > 0) {
      res.json(campeonatos);
    } else{
      res.status(404).json({ mensagem: "Nenhum campeonato encontrado"});
    }
  
  });




app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor node iniciado em: "+data);

    // const conexao = await pool.getConnection();
    // console.log(conexao.threadId);
    // conexao.release();
    //testar no mysql, caso erro
    // pra pesquisar por ano ou time http://localhost:9000/campeonatos?ano=2023
})