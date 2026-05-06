class Lancamento {
    constructor(
        cd_lancamento,
        ds_lancamento,
        vl_lancamento,
        tp_natureza,
        dt_lancamento,
        cd_pessoa,
        cd_tipo_financeiro
    ) {
        this.cd_lancamento = cd_lancamento;
        this.ds_lancamento = ds_lancamento;
        this.vl_lancamento = vl_lancamento;
        this.tp_natureza = tp_natureza;
        this.dt_lancamento = dt_lancamento;
        this.cd_pessoa = cd_pessoa;
        this.cd_tipo_financeiro = cd_tipo_financeiro;
    }
}

module.exports = Lancamento;