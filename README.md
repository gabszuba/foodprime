# Foodprime: Seu Bot de Cardápio Personalizado

Foodprime é um bot que extrai dados de diversas fontes e os exibe.
![Screenshot 2024-05-27 at 18-28-49 FoodPrime](https://github.com/gabszuba/foodprime/assets/118292803/e0e000ec-4948-4668-a4a6-589818ddc581)

## Requisitos

Para executar o Foodprime, você precisará ter o seguinte instalado:

* **Node.js:** [https://nodejs.org/](https://nodejs.org/)
* **MongoDB:** [https://www.mongodb.com/](https://www.mongodb.com/)
* **ReactJS:** [https://reactjs.org/](https://reactjs.org/)

## Instalação e Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/gabszuba/foodprime.git
   cd foodprime
   ```

2. Instale as dependências:

   ```bash
   cd server
   npm install
   cd ../client
   npm install
   ```

3. Configure o servidor:

   Configure o arquivo `.env` na pasta `server` ou utilize o arquivo de exemplo e adicione as seguintes variáveis:

     ```env
     PORT=3000
     DB_URL=sua-url-do-mongodb
     USER=seu-usuario-do-mongodb
     USER_KEY=sua-senha-do-mongodb
     ```

     * **`PORT`:** Porta onde o servidor será executado (padrão: 3000).
     * **`DB_URL`:** URL do seu banco de dados MongoDB.
     * **`USER`:** Nome de usuário do MongoDB (opcional).
     * **`USER_KEY`:** Senha do MongoDB (opcional).

4. Inicie o servidor:

   ```bash
   cd server
   npm start
   ```
Aguarde enquanto o bot coleta as informações dos restaurantes

5. **Inicie o cliente:**

   ```bash
   cd ../client
   npm run dev
   ```

Isso abrirá o aplicativo no seu navegador padrão.

