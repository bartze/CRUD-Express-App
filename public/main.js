document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('product-form');
  const productList = document.getElementById('product-list');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const id = document.getElementById('product-id').value;

    const method = id ? 'PUT' : 'POST';
    const url = id ? `/products/${id}` : '/products';

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price: Number(price), id: Number(id) }),
    });

    const product = await response.json();
    if (method === 'POST') {
      addProductToList(product);
    } else {
      updateProductInList(product);
    }

    form.reset();
  });

  const addProductToList = (product) => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price} `;
    li.dataset.id = product.id;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editProduct(product));
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteProduct(product.id, li));
    li.appendChild(deleteButton);

    productList.appendChild(li);
  };

  const editProduct = (product) => {
    document.getElementById('name').value = product.name;
    document.getElementById('price').value = product.price;
    document.getElementById('product-id').value = product.id;
  };

  const updateProductInList = (product) => {
    const li = productList.querySelector(`[data-id='${product.id}']`);
    li.textContent = `${product.name} - $${product.price} `;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editProduct(product));
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteProduct(product.id, li));
    li.appendChild(deleteButton);
  };

  const deleteProduct = async (id, listItem) => {
    const response = await fetch(`/products/${id}`, { method: 'DELETE' });
    if (response.ok) {
      productList.removeChild(listItem);
    }
  };

  const loadProducts = async () => {
    const response = await fetch('/products');
    const products = await response.json();
    products.forEach(addProductToList);
  };

  loadProducts();
});
