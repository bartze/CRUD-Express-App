import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;
const FILE_PATH = './products.json';

app.use(express.json());
app.use(express.static('public'));

// Función para cargar productos desde el archivo
const loadProducts = () => {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Función para guardar productos en el archivo
const saveProducts = (products) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(products, null, 2));
};

let products = loadProducts();

app.post('/products', (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products = [...products, newProduct];
  saveProducts(products);
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
  saveProducts(products);
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
  saveProducts(products);
  res.json(updatedProduct);
});

app.delete('/products/:id', (req, res) => {
  const deletedProduct = products.find(p => p.id === +req.params.id);
  products = products.filter(p => p.id !== +req.params.id);
  saveProducts(products);
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
  console.log(`Example app listening at http://localhost:${port}`)
);

