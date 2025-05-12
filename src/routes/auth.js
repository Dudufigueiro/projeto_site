const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    if (result.rows.length === 0) return res.send('Usuário não encontrado.');

    const usuario = result.rows[0];
   if (senha === usuario.senha) {
  req.session.userId = usuario.id;
  res.send('Login bem-sucedido!');
} else {
  res.send('Senha incorreta.');
}

  } catch (err) {
    console.error(err);
    res.send('Erro no login.');
  }
});

module.exports = router;