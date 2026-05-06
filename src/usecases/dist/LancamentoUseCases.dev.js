"use strict";

var prisma = require('../prisma/client');

var getLancamentosDB = function getLancamentosDB() {
  return prisma.lancamento.findMany({
    include: {
      usuario: true,
      tipo_financeiro: true
    }
  });
};

var getLancamentoPorCodigoDB = function getLancamentoPorCodigoDB(cd_lancamento) {
  return prisma.lancamento.findUnique({
    where: {
      cd_lancamento: Number(cd_lancamento)
    },
    include: {
      usuario: true,
      tipo_financeiro: true
    }
  });
};

var addLancamentoDB = function addLancamentoDB(data) {
  return prisma.lancamento.create({
    data: {
      ds_lancamento: data.ds_lancamento,
      vl_lancamento: data.vl_lancamento,
      dt_lancamento: data.dt_lancamento,
      tp_natureza: data.tp_natureza,
      cd_tipo_financeiro: data.cd_tipo_financeiro,
      usuario: {
        connect: {
          cd_pessoa: Number(data.cd_pessoa)
        }
      }
    }
  });
};

var updateLancamentoDB = function updateLancamentoDB(data) {
  return prisma.lancamento.update({
    where: {
      cd_lancamento: Number(data.cd_lancamento)
    },
    data: {
      ds_lancamento: data.ds_lancamento,
      vl_lancamento: data.vl_lancamento,
      tp_natureza: data.tp_natureza,
      dt_lancamento: new Date(data.dt_lancamento),
      cd_pessoa: Number(data.cd_pessoa),
      cd_tipo_financeiro: Number(data.cd_tipo_financeiro)
    }
  });
};

var deleteLancamentoDB = function deleteLancamentoDB(cd_lancamento) {
  return prisma.lancamento["delete"]({
    where: {
      cd_lancamento: Number(cd_lancamento)
    }
  });
};

module.exports = {
  getLancamentosDB: getLancamentosDB,
  getLancamentoPorCodigoDB: getLancamentoPorCodigoDB,
  addLancamentoDB: addLancamentoDB,
  updateLancamentoDB: updateLancamentoDB,
  deleteLancamentoDB: deleteLancamentoDB
};