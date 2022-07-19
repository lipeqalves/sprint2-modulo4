import { Database } from "../infra/Database.js";
import geraNumAleatorio from "./gerarNumAleatorio.js";

class DatabaseMetodos{
    static listaTodasDicas(){
        return Database.Dicas[geraNumAleatorio()]
    }
    static inserirDica(dica){
        Database.Dicas = [...Database.Dicas, dica]
        return Database.Dicas;
    }
}

export default DatabaseMetodos;