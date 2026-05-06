const {
  getUsuariosDB,
  addUsuarioDB,
  deleteUsuarioDB,
  getUsuarioPorCodigoDB,
  updateUsuarioDB,
  loginUsuarioDB
} = require('../usecases/UsuarioUseCases');

const getUsuarios = async (request, response) => {
  await getUsuariosDB()
    .then(data => response.status(200).json(data))
    .catch(err => response.status(400).json({
      status: 'error',
      message: 'Erro ao consultar usuários: ' + err
    }));
};

const addUsuario = async (request, response) => {
  await addUsuarioDB(request.body)
    .then(data => response.status(200).json({
      cd_pessoa: data.cd_pessoa,
      nm_pessoa: request.body.nm_pessoa,
      ds_email: request.body.ds_email
    }))
    .catch(err => response.status(400).json({
      status: 'error',
      message: err
    }));
};

const updateUsuario = async (request, response) => {
  await updateUsuarioDB(request.body)
    .then(data => response.status(200).json({
      status: "success",
      message: "Usuário atualizado com sucesso",
      objeto: data
    }))
    .catch(err => response.status(400).json({
      status: 'error',
      message: err
    }));
};

const deleteUsuario = async (request, response) => {
  await deleteUsuarioDB(parseInt(request.params.cd_pessoa))
    .then(data => response.status(200).json({
      status: "success",
      message: data
    }))
    .catch(err => response.status(400).json({
      status: 'error',
      message: err
    }));
};

const getUsuarioPorCodigo = async (request, response) => {
  await getUsuarioPorCodigoDB(parseInt(request.params.cd_pessoa))
    .then(data => response.status(200).json(data))
    .catch(err => response.status(400).json({
      status: 'error',
      message: err
    }));
};

const loginUsuario = async (request, response) => {
  await loginUsuarioDB(request.body)
    .then(data => {
      if (!data) {
        return response.status(401).json({
          status: "error",
          message: "Email ou senha inválidos"
        });
      }

      return response.status(200).json({
        status: "success",
        message: "Login realizado com sucesso",
        usuario: data
      });
    })
    .catch(err => response.status(400).json({
      status: 'error',
      message: 'Erro ao fazer login: ' + err
    }));
};

module.exports = {
  getUsuarios,
  addUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarioPorCodigo,
  loginUsuario
};