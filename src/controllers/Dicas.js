import DicaModel from "../models/DicaModel.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Dicas{
    static rotas(app){
        app.get("/dicas", (req, res) => {

            const response = DatabaseMetodos.listaTodasDicas()
            res.status(200).json(response)
            
        })
        
        app.post("/dicas",(req, res) => {  

            const dica = new DicaModel(...Object.values(req.body)) 
            const response = DatabaseMetodos.inserirDica(dica)
            
            res.status(201).json(response)
        })
    }
}

// function geraNumAleatorio() {
//     return Math.floor(Math.random() * 10)
//   }
//   //let id = geraNumAleatorio();
  
//   function buscalivro(id){
//     return Dicas.findIndex(dica => dica.id == id)
//   }

export default Dicas;