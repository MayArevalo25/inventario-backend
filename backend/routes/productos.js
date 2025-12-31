const express = require('express');
const router = express.Router();
const db = require('../config/db');

// LISTAR PRODUCTOS
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM productos ORDER BY id');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREAR PRODUCTO
router.post('/', async (req, res) => {
  try {
    const { nombre, descripcion, categoria, precio, stock } = req.body;

    await db.query(
      'INSERT INTO productos (nombre, descripcion, categoria, precio, stock) VALUES ($1,$2,$3,$4,$5)',
      [nombre, descripcion, categoria, precio, stock]
    );

    res.json({ message: 'Producto creado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// EDITAR PRODUCTO
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, categoria, precio, stock } = req.body;

    await db.query(
      'UPDATE productos SET nombre=$1, descripcion=$2, categoria=$3, precio=$4, stock=$5 WHERE id=$6',
      [nombre, descripcion, categoria, precio, stock, id]
    );

    res.json({ message: 'Producto actualizado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ELIMINAR PRODUCTO
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await db.query('DELETE FROM productos WHERE id=$1', [id]);

    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
