# Vehicle API - Sistema de Autenticação

API REST para gerenciamento de veículos com sistema completo de autenticação e autorização usando NestJS.

## 🚀 Funcionalidades

- ✅ **Autenticação JWT** - Login seguro com tokens
- ✅ **Autorização** - Proteção de rotas com AuthGuard
- ✅ **CRUD de Veículos** - Operações completas
- ✅ **Validação de Propriedade** - Usuários só editam seus veículos
- ✅ **Criptografia de Senhas** - Hash seguro com bcrypt
- ✅ **Validação de Dados** - DTOs com class-validator

## 📋 Rotas da API

### 🔓 Rotas Públicas
- `POST /users` - Criar usuário
- `POST /auth/login` - Login

### 🔒 Rotas Protegidas (requer token JWT)
- `GET /users` - Listar usuários
- `GET /vehicles` - Listar todos os veículos
- `POST /vehicles` - Criar veículo
- `GET /vehicles/my-vehicles` - Meus veículos
- `GET /vehicles/:id` - Detalhes do veículo
- `PATCH /vehicles/:id` - Editar veículo (apenas o dono)
- `DELETE /vehicles/:id` - Deletar veículo (apenas o dono)

## 🛠️ Instalação

\`\`\`bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Executar em modo desenvolvimento
npm run start:dev
\`\`\`

## 🔑 Exemplo de Uso

### 1. Criar usuário
\`\`\`bash
POST /users
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456"
}
\`\`\`

### 2. Fazer login
\`\`\`bash
POST /auth/login
{
  "email": "joao@email.com",
  "password": "123456"
}
\`\`\`

### 3. Usar token nas requisições protegidas
\`\`\`bash
Authorization: Bearer <seu_token_jwt>
\`\`\`

## 🔒 Segurança

- Todas as rotas (exceto criação de usuário e login) são protegidas
- Senhas criptografadas com bcrypt
- Tokens JWT com expiração de 24h
- Validação de propriedade de veículos
- Validação de dados de entrada

## 🏗️ Arquitetura

- **Controllers** - Endpoints da API
- **Services** - Lógica de negócio
- **Guards** - Proteção de rotas
- **Strategies** - Autenticação JWT e Local
- **DTOs** - Validação de dados
- **Entities** - Modelos do banco de dados
