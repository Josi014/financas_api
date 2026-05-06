const {
  getLancamentosDB,
  addLancamentoDB,
  deleteLancamentoDB,
  getLancamentoPorCodigoDB,
  updateLancamentoDB
} = require('../usecases/LancamentoUseCases');

const getLancamentos = async (request, response) => {
  await getLancamentosDB()
    .then(data => response.status(200).json(data))
    .catch(err => response.status(400).json({
      status: 'error',
      message: 'Erro ao consultar lançamentos: ' + err
    }));
};

const addLancamento = async (request, response) => {

  try {

    console.log("BODY RECEBIDO:");
    console.log(request.body);

    const data = await addLancamentoDB(request.body);

    response.status(200).json({
      status: "success",
      message: "Lançamento cadastrado com sucesso",
      objeto: data
    });

  } catch (err) {

    console.log("ERRO COMPLETO:");
    console.log(err);

    response.status(400).json({
      status: 'error',
      message: err.message || err
    });
  }
};

const updateLancamento = async (request, response) => {
  await updateLancamentoDB(request.body)
    .then(data => response.status(200).json({
      status: "success",
      message: "Lançamento atualizado com sucesso",
      objeto: data
    }))
    .catch(err => response.status(400).json({
      status: 'error',
      message: err
    }));
};

const deleteLancamento = async (request, response) => {
  await deleteLancamentoDB(parseInt(request.params.cd_lancamento))
    .then(data => response.status(200).json({
      status: "success",
      message: data
    }))
    .catch(err => response.status(400).json({
      status: 'error',
      message: err
    }));
};

const getLancamentoPorCodigo = async (request, response) => {
  await getLancamentoPorCodigoDB(parseInt(request.params.cd_lancamento))
    .then(data => response.status(200).json(data))
    .catch(err => response.status(400).json({
      status: 'error',
      message: err
    }));
};

module.exports = {
  getLancamentos,
  addLancamento,
  updateLancamento,
  deleteLancamento,
  getLancamentoPorCodigo
};