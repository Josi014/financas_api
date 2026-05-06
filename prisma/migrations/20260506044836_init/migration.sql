-- CreateTable
CREATE TABLE "usuario" (
    "cd_pessoa" SERIAL NOT NULL,
    "nm_pessoa" TEXT NOT NULL,
    "ds_email" TEXT NOT NULL,
    "ds_senha" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("cd_pessoa")
);

-- CreateTable
CREATE TABLE "tipoFinanceiro" (
    "cd_tipo_financeiro" SERIAL NOT NULL,
    "ds_tipo" TEXT NOT NULL,
    "id_tipo" INTEGER NOT NULL,

    CONSTRAINT "tipoFinanceiro_pkey" PRIMARY KEY ("cd_tipo_financeiro")
);

-- CreateTable
CREATE TABLE "lancamento" (
    "cd_lancamento" SERIAL NOT NULL,
    "ds_lancamento" TEXT NOT NULL,
    "vl_lancamento" DECIMAL(15,2) NOT NULL,
    "tp_natureza" TEXT NOT NULL,
    "dt_lancamento" TIMESTAMP(3) NOT NULL,
    "cd_pessoa" INTEGER NOT NULL,
    "cd_tipo_financeiro" INTEGER NOT NULL,

    CONSTRAINT "lancamento_pkey" PRIMARY KEY ("cd_lancamento")
);

-- AddForeignKey
ALTER TABLE "lancamento" ADD CONSTRAINT "lancamento_cd_pessoa_fkey" FOREIGN KEY ("cd_pessoa") REFERENCES "usuario"("cd_pessoa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lancamento" ADD CONSTRAINT "lancamento_cd_tipo_financeiro_fkey" FOREIGN KEY ("cd_tipo_financeiro") REFERENCES "tipoFinanceiro"("cd_tipo_financeiro") ON DELETE RESTRICT ON UPDATE CASCADE;
