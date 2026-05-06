const express = require('express');
const cors = require('cors');

const lancamentosRoutes = require('./src/routes/lancamentosRouter');
const usuariosRoutes = require('./src/routes/usuariosRouter');
const tiposFinanceirosRoutes = require('./src/routes/tiposFinanceirosRouter');

const app = express();
app.use(express.json());

app.use(cors());
app.use(express.json());

app.use('/api/lancamentos', lancamentosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/tiposfinanceiros', tiposFinanceirosRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});