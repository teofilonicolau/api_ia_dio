const express = require('express');
const { body, validationResult } = require('express-validator');
const Produto = require('./models/Produto');

const router = express.Router();

// Validações
const validaProduto = [
  body('nome').notEmpty().withMessage('O nome é obrigatório.'),
  body('preco').isFloat({ gt: 0 }).withMessage('O preço deve ser maior que zero.')
];

/**
 * @swagger
 * /api/produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     responses:
 *       200:
 *         description: Retorna a lista de produtos cadastrados
 */
router.get('/produtos', async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
});

/**
 * @swagger
 * /api/produtos:
 *   post:
 *     summary: Cria um novo produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *               descricao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 */
router.post('/produtos', validaProduto, async (req, res) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) return res.status(400).json({ erros: erros.array() });

  const novoProduto = new Produto(req.body);
  await novoProduto.save();
  res.status(201).json(novoProduto);
});

/**
 * @swagger
 * /api/produtos/{id}:
 *   put:
 *     summary: Atualiza um produto existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 */
router.put('/produtos/:id', validaProduto, async (req, res) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) return res.status(400).json({ erros: erros.array() });

  const { id } = req.params;
  const produto = await Produto.findByIdAndUpdate(id, req.body, { new: true });

  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' });

  res.json(produto);
});

/**
 * @swagger
 * /api/produtos/{id}:
 *   delete:
 *     summary: Exclui um produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto a ser excluído
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Produto excluído com sucesso
 */
router.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  await Produto.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = router;
