import http from'http';

const data = JSON.stringify({
  price: 20, // Solo estamos actualizando el campo price
  // Puedes añadir más campos si lo deseas
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/products/1', // Asegúrate de que el ID del producto exista
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const request = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => {
    body += '' + chunk;
  });
  res.on('end', () => {
    console.log('response', body);
  });
  res.on('close', () => {
    console.log('Closed connection');
  });
});

request.end(data);
