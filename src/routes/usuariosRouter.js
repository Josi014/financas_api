const express = require('express')
const router = express.Router()

const controller = require('../controllers/usuariosController')

router.get('/', controller.getUsuarios)
router.post('/', controller.addUsuario)
router.put('/', controller.updateUsuario)
router.delete('/:cd_pessoa', controller.deleteUsuario)
router.get('/:cd_pessoa', controller.getUsuarioPorCodigo)
router.post('/login', controller.loginUsuario);

module.exports = router