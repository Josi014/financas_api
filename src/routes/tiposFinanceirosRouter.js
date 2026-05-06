const express = require('express')
const router = express.Router()

const controller = require('../controllers/tiposFinanceirosController')

router.get('/', controller.getTiposFinanceiros)
router.post('/', controller.addTipoFinanceiro)
router.put('/', controller.updateTipoFinanceiro)
router.delete('/:cd_tipo_financeiro', controller.deleteTipoFinanceiro)
router.get('/:cd_tipo_financeiro', controller.getTipoFinanceiroPorCodigo)

module.exports = router