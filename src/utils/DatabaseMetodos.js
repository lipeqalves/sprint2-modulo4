import {Database} from "../infra/Database";

class DatabaseMetodos{
    static listaTodasDicas(){
        return Database.Dicas
    }
    static inserirDica(dica){
        Database.Dicas = [...Database.Dicas, dica]
        return Database.Dicas;
    }
}

export default DatabaseMetodos;