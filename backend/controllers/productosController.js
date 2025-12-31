const pool = require('../config/db');

// CREAR PRODUCTO
const crearProducto = async (req, res) => {
  const { nombre, descripcion, categoria, precio, stock } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO productos (nombre, descripcion, categoria, precio, stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nombre, descripcion, categoria, precio, stock]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// LISTAR PRODUCTOS
const listarProductos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ACTUALIZAR PRODUCTO
const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, categoria, precio, stock } = req.body;

  try {
    await pool.query(
      'UPDATE productos SET nombre=$1, descripcion=$2, categoria=$3, precio=$4, stock=$5 WHERE id=$6',
      [nombre, descripcion, categoria, precio, stock, id]
    );

    res.json({ mensaje: 'Producto actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ELIMINAR PRODUCTO
const eliminarProducto = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM productos WHERE id=$1', [id]);
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearProducto,
  listarProductos,
  actualizarProducto,
  eliminarProducto
};
