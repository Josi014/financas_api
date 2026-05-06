const express = require('express')
const router = express.Router()

const controller = require('../controllers/lancamentosController')

router.get('/', controller.getLancamentos)
router.post('/', controller.addLancamento)
router.put('/', controller.updateLancamento)
router.delete('/:cd_lancamento', controller.deleteLancamento)
router.get('/:cd_lancamento', controller.getLancamentoPorCodigo)

module.exports = router