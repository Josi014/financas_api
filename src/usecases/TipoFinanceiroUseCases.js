const prisma = require('../prisma/client')

const getTiposFinanceirosDB = () => {
  return prisma.tipoFinanceiro.findMany()
}

const getTipoFinanceiroPorCodigoDB = (cd_tipo_financeiro) => {
  return prisma.tipoFinanceiro.findUnique({
    where: {
      cd_tipo_financeiro: Number(cd_tipo_financeiro)
    }
  })
}

const addTipoFinanceiroDB = (data) => {
  return prisma.tipoFinanceiro.create({
    data: {
      ds_tipo: data.ds_tipo,
      id_tipo: data.id_tipo
    }
  })
}

const updateTipoFinanceiroDB = (data) => {
  return prisma.tipoFinanceiro.update({
    where: {
      cd_tipo_financeiro: Number(data.cd_tipo_financeiro)
    },
    data: {
      ds_tipo: data.ds_tipo
    }
  })
}

const deleteTipoFinanceiroDB = (cd_tipo_financeiro) => {
  return prisma.tipoFinanceiro.delete({
    where: {
      cd_tipo_financeiro: Number(cd_tipo_financeiro)
    }
  })
}

module.exports = {
  getTiposFinanceirosDB,
  getTipoFinanceiroPorCodigoDB,
  addTipoFinanceiroDB,
  updateTipoFinanceiroDB,
  deleteTipoFinanceiroDB
}