import DicaModel from "../models/DicaModel.js";

class Dicas{
    static rotas(app){
        app.get("/dicas", (req, res) => {
            const dica = new DicaModel("1","Estudar nodeJS")
            res.status(200).json(dica)
        })
        app.post("/dicas",(req, res) => {
            const dica = new DicaModel("2", "Estudar Fluttar")
            res.status(201).json(dica);
        })
    }
}

export default Dicas;