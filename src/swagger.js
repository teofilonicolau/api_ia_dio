const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Produtos',
      version: '1.0.0',
      description: 'CRUD de produtos com validação e persistência no MongoDB',
    },
  },
  apis: ['./src/routes.js'], // Lendo as rotas documentadas
};

module.exports = swaggerJSDoc(options);
