const prisma = require('../prisma/client');
const bcrypt = require('bcrypt');

const getUsuariosDB = () => {
  return prisma.usuario.findMany();
};

const getUsuarioPorCodigoDB = (cd_pessoa) => {
  return prisma.usuario.findUnique({
    where: { cd_pessoa: Number(cd_pessoa) }
  });
};

const addUsuarioDB = async (obj) => {

  const senhaHash = await bcrypt.hash(obj.ds_senha, 10);

  return await prisma.usuario.create({
    data: {
      nm_pessoa: obj.nm_pessoa,
      ds_email: obj.ds_email,
      ds_senha: senhaHash
    }
  });
};

const updateUsuarioDB = (data) => {
  return prisma.usuario.update({
    where: { cd_pessoa: Number(data.cd_pessoa) },
    data: {
      nm_pessoa: data.nm_pessoa,
      ds_email: data.ds_email
    }
  });
};

const deleteUsuarioDB = (cd_pessoa) => {
  return prisma.usuario.delete({
    where: { cd_pessoa: Number(cd_pessoa) }
  });
};

const loginUsuarioDB = async (obj) => {

  const usuario = await prisma.usuario.findFirst({
    where: { ds_email: obj.ds_email }
  });

  if (!usuario) return null;

  const senhaOk = await bcrypt.compare(obj.ds_senha, usuario.ds_senha);

  if (!senhaOk) return null;

  return usuario;
};

module.exports = {
  getUsuariosDB,
  getUsuarioPorCodigoDB,
  addUsuarioDB,
  updateUsuarioDB,
  deleteUsuarioDB,
  loginUsuarioDB
};