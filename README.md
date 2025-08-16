
## API REST para gerenciamento de veículos

##  Funcionalidades

-  **Autenticação JWT** - Login seguro com tokens
-  **Autorização** - Proteção de rotas com AuthGuard
-  **CRUD de Veículos** - Operações completas
-  **Validação de Propriedade** - Usuários só podem editar/deletar seus próprios veículos
-  **Criptografia de Senhas** - Hash seguro com bcrypt
-  **Validação de Dados** - DTOs com class-validator

##  Endpoints da API

###  Rotas Públicas
- `POST /users` - Criar usuário
- `POST /auth/register` - Registrar novo usuário
- `POST /auth/login` - Login e obtenção de token JWT

###  Rotas Protegidas (necessário token JWT)
- `GET /users` - Listar usuários
- `GET /users/:id` - Detalhes de um usuário
- `PATCH /users/:id` - Atualizar usuário
- `DELETE /users/:id` - Deletar usuário

- `GET /vehicles` - Listar todos os veículos
- `POST /vehicles` - Criar veículo
- `GET /vehicles/my-vehicles` - Listar veículos do usuário autenticado
- `GET /vehicles/:id` - Detalhes do veículo
- `PATCH /vehicles/:id` - Editar veículo (apenas dono)
- `DELETE /vehicles/:id` - Deletar veículo (apenas dono)

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Criar arquivo .env com as variáveis de ambiente
 .env.example 

npm r
un start:dev

```bash
## Exemplos de Requisições
` Criar usuário
POST /users
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "123456"
}

 Registrar usuário
POST /auth/register
{
  "nome": "Novo Usuário",
  "email": "novo@email.com",
  "senha": "123456"
}

 Fazer login
POST /auth/login
{
  "email": "novo@email.com",
  "senha": "123456"
}


Resposta de sucesso:

{
  "access_token": "<seu_token_jwt>",
  "user": {
    "id": 1,
    "email": "novo@email.com",
    "nome": "Novo Usuário",
    "role": "usuario",
    "criadoEm": "2025-08-16T12:34:50.934Z",
    "atualizadoEm": "2025-08-16T12:34:50.934Z"
  }
}

 Usar token nas requisições protegidas
GET /vehicles/my-vehicles
Authorization: Bearer <seu_token_jwt>
´