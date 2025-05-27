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
```bash
git clone https://github.com/teofilonicolau/api_ia_dio.git
```

2️⃣ **Instale as dependências:**
```bash
npm install
```

3️⃣ **Configure as variáveis de ambiente:**  
Crie um arquivo `.env` na raiz do projeto e adicione:

```env
MONGO_URI=Sua_String_de_Conexao_Aqui
PORT=3000
```

4️⃣ **Inicie o servidor:**
```bash
npm start
```

Ou, se estiver usando `nodemon` para desenvolvimento:
```bash
npm run dev
```

---

## 📘 Acesse a documentação Swagger  

Abra no navegador após iniciar o servidor:

```
http://localhost:3000/api-docs/

```
![image](https://github.com/user-attachments/assets/22b15596-e803-4804-9e7a-ed4a356fceac)


---

## 📫 Exemplos de requisições

### 🔸 Criar um produto (POST)
![image](https://github.com/user-attachments/assets/9521e0a8-bca5-4e8d-af5c-34964bfddfad)



**Endpoint:** `POST /produtos`  
**Body (JSON):**

```json
{
  "nome": "Camiseta Tech",
  "descricao": "Camiseta com estampa geek",
  "preco": 59.90,
  "estoque": 20
}
```
![image](https://github.com/user-attachments/assets/6a38a625-91ad-41d5-9bd4-e471f13ee999)

---

### 🔸 Listar todos os produtos (GET)
![image](https://github.com/user-attachments/assets/cdf7c5cb-6b32-46c1-a145-c87f23cdd32c)


**Endpoint:** `GET /produtos`

![image](https://github.com/user-attachments/assets/107679c4-482d-45a4-b043-41a41ee90ac0)


---

### 🔸 Atualizar um produto (PUT)

![image](https://github.com/user-attachments/assets/60e3fcfd-e969-45ed-afd7-293734fc46b9)


**Endpoint:** `PUT /produtos/:id`  
**Body (JSON):**

```json
{
  "nome": "Camiseta Tech Atualizada",
  "descricao": "Nova descrição",
  "preco": 69.90,
  "estoque": 25
}
```
![image](https://github.com/user-attachments/assets/67706d08-61b1-46e2-b063-fcef3da51aee)

---

### 🔸 Deletar um produto (DELETE)
![image](https://github.com/user-attachments/assets/09fb6ad3-b70d-4d29-9628-7704d2dfafd8)


**Endpoint:** `DELETE /produtos/:id`

![image](https://github.com/user-attachments/assets/c0d2757c-9b09-4ab0-8f93-9e4886e32850)


---

## 🛠️ Contribuindo

Sinta-se à vontade para abrir **issues** ou enviar **pull requests** com melhorias. Toda contribuição é bem-vinda!

---

## 🧠 Autor

Desenvolvido por **Teofilo Nicolau**  
📫 [LinkedIn](https://www.linkedin.com/in/teofilonicolau/) • 💻 [GitHub](https://github.com/teofilonicolau)
