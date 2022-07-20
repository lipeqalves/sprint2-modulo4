import DicaModel from "../models/DicaModel.js";
import ValidacoesService from "../services/ValidacoesService.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Dicas{
    static rotas(app){
        app.get("/dicas", (req, res) => {

            const response = DatabaseMetodos.escolheDica()
            res.status(200).json(response)

        })
        
        app.post("/dicas",(req, res) => {  
            const ehValido = ValidacoesService.validaDica(req.body.dica)
            
            if(ehValido){
                const dica = new DicaModel(...Object.values(req.body)) 
                const response = DatabaseMetodos.inserirDica(dica)
                
                res.status(201).json(response)
            }else{
                res.status(400).send(`Erro: ${req.body.dica} é uma dica ?`);
            }
        })
    }
}

export default Dicas;