const {
  getTiposFinanceirosDB,
  addTipoFinanceiroDB,
  deleteTipoFinanceiroDB,
  getTipoFinanceiroPorCodigoDB,
  updateTipoFinanceiroDB
} = require('../usecases/TipoFinanceiroUseCases');

const getTiposFinanceiros = async (request, response) => {
  await getTiposFinanceirosDB()
    .then(data => response.status(200).json(data))
    .catch(err => response.status(400).json({
      status: 'error',
      message: 'Erro ao consultar tipos financeiros: ' + err
    }));
};

const addTipoFinanceiro = async (request, response) => {
  await addTipoFinanceiroDB(request.body)
    .then(data => response.status(200).json({
      cd_tipo_financeiro: data.cd_tipo_financeiro,
      ds_tipo: data.ds_tipo,
      id_tipo: data.id_tipo
    }))
    .catch(err => response.status(400).json({
      status: 'error',
      message: err
    }));
};

const updateTipoFinanceiro = async (request, response) => {
  await updateTipoFinanceiroDB(request.body)
    .then(data => response.status(200).json({
      status: "success",
      message: "Tipo financeiro atualizado com sucesso",
      objeto: data
    }))
    .catch(err => response.status(400).json({
      status: 'error',
      message: err
    }));
};

const deleteTipoFinanceiro = async (request, response) => {
  await deleteTipoFinanceiroDB(parseInt(request.params.cd_tipo_financeiro))
    .then(data => response.status(200).json({
      status: "success",
      message: data
    }))
    .catch(err => response.status(400).json({
      status: 'error',
      message: "Não é possível remover. Existem lançamentos utilizando este tipo financeiro."
    }));
};

const getTipoFinanceiroPorCodigo = async (request, response) => {
  await getTipoFinanceiroPorCodigoDB(parseInt(request.params.cd_tipo_financeiro))
    .then(data => response.status(200).json(data))
    .catch(err => response.status(400).json({
      status: 'error',
      message: err
    }));
};

module.exports = {
  getTiposFinanceiros,
  addTipoFinanceiro,
  updateTipoFinanceiro,
  deleteTipoFinanceiro,
  getTipoFinanceiroPorCodigo
};