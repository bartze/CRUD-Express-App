import express from 'express';

const app = express();
const port = 3000;

// Datos en memoria para la versión demo
let products = [];

app.use(express.json());
app.use(express.static('public'));

// Rutas CRUD para manejar los productos
app.post('/products', (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.json(newProduct);
});

app.put('/products/:id', (req, res) => {
  let updatedProduct;
  products = products.map(p => {
    if (p.id === +req.params.id) {
      updatedProduct = { ...p, ...req.body };
      return updatedProduct;
    }
    return p;
  });
  res.json(updatedProduct);
});

app.patch('/products/:id', (req, res) => {
  let updatedProduct;
  products = products.map(p => {
    if (p.id === +req.params.id) {
      updatedProduct = { ...p, ...req.body }; // Mezclar el objeto existente con los cambios
      return updatedProduct;
    }
    return p;
  });
  res.json(updatedProduct);
});

app.delete('/products/:id', (req, res) => {
  const deletedProduct = products.find(p => p.id === +req.params.id);
  products = products.filter(p => p.id !== +req.params.id);
  res.json(deletedProduct);
});

// Nueva ruta para obtener un producto por su ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === +req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => 
  console.log(`Demo app listening at http://localhost:${port}`)
);

