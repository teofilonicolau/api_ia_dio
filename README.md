# API de Produtos - DIO 🚀  

Este projeto é uma **API REST** desenvolvida em **Node.js**, utilizando **Express** para gerenciamento de rotas e **MongoDB Atlas** como banco de dados. Ele implementa um **CRUD** completo de produtos com validação de dados e documentação interativa via **Swagger**.

---

## 🔗 Tecnologias utilizadas  

✅ **Node.js** – Ambiente de execução JavaScript no servidor  
✅ **Express.js** – Framework web rápido e minimalista  
✅ **MongoDB Atlas** – Banco de dados NoSQL na nuvem  
✅ **Mongoose** – ODM para facilitar a manipulação do MongoDB  
✅ **Express Validator** – Validação de entrada de dados  
✅ **Swagger UI** – Documentação interativa da API  
✅ **Cors** – Permissão de acesso entre diferentes domínios  
✅ **Dotenv** – Gerenciamento de variáveis de ambiente  

---

## ⚙️ Funcionalidades  

🔹 **CRUD de produtos:**  
- **Create** → Criar um novo produto  
- **Read** → Listar todos os produtos  
- **Update** → Atualizar um produto existente  
- **Delete** → Excluir um produto  

🔹 **Validação de dados:** Impede entradas inválidas nos produtos  
🔹 **Documentação interativa:** A API pode ser explorada e testada via Swagger  

---

## 📂 Estrutura do projeto
 ```
    api-produtos/
│
├── src/
│   ├── config/           # Configuração do banco de dados (ex: conexão MongoDB)
│   ├── controllers/      # Lógica dos endpoints (funções para criar, editar, deletar, etc.)
│   ├── models/           # Definição dos schemas do banco (ex: Produto.js)
│   ├── routes.js         # Definição das rotas da API
│   ├── swagger.js        # Configuração da documentação Swagger
│   └── index.js          # Arquivo principal que inicia o servidor
│
├── .env                  # Variáveis de ambiente (URL do banco, porta, etc.) - não vai para o GitHub
├── .gitignore            # Arquivos e pastas a serem ignorados pelo Git (ex: node_modules, .env)
├── package.json          # Configurações do projeto e lista de dependências
└── package-lock.json     # Registro exato das versões das dependências instaladas


 ``` 



---

## 🚀 Como executar o projeto  

1️⃣ **Clone o repositório:**  
```sh
git clone https://github.com/teofilonicolau/api_ia_dio.git
```
2️⃣ **Instale as dependências:**
```
  npm install
```
3️⃣ **Configure as variáveis de ambiente:**
 - Crie um arquivo .env na raiz do projeto e adicione:

```
MONGO_URI=Sua_String_de_Conexao_Aqui
PORT=3000

```

