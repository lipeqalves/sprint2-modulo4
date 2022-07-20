class ValidacoesService{
    /**
     * 
     * @param {string} dica 
     * @returns boll
     */
    static validaDica(dica){
        
        return dica.length >=5;
    }
}

export default ValidacoesService;