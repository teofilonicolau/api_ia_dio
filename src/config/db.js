require('dotenv').config();
const mongoose = require('mongoose');

const conectarBanco = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Banco de dados conectado!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error);
    process.exit(1);
  }
};

module.exports = conectarBanco;
