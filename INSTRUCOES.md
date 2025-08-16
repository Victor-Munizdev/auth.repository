# 🚀 Sistema de Autenticação e Autorização - NestJS

## ✅ Implementação Completa

Este projeto implementa um sistema completo de autenticação e autorização para a API de veículos conforme solicitado na atividade.

### 🔐 Funcionalidades Implementadas

1. **Autenticação JWT** ✅
   - Login com email e senha
   - Tokens JWT com expiração de 24h
   - Estratégias Local e JWT implementadas

2. **AuthGuard Personalizado** ✅
   - Proteção de todas as rotas exceto criação de usuário
   - Validação automática de tokens
   - Tratamento de erros de autenticação

3. **Autorização por Propriedade** ✅
   - Usuários só podem editar/deletar seus próprios veículos
   - Validação de ownership nos services

4. **Segurança** ✅
   - Senhas criptografadas com bcrypt
   - Validação de dados com class-validator
   - Tratamento de erros personalizado

### 📋 Rotas Implementadas

#### 🔓 **Rotas DESPROTEGIDAS**
- \`POST /users\` - Criação de usuário (única rota pública)
- \`POST /auth/login\` - Login

#### 🔒 **Rotas PROTEGIDAS** (requerem AuthGuard)
- \`GET /users\` - Listar usuários
- \`GET /vehicles\` - Listar todos os veículos  
- \`POST /vehicles\` - Criar veículo
- \`GET /vehicles/my-vehicles\` - Veículos do usuário logado
- \`GET /vehicles/:id\` - Detalhes do veículo
- \`PATCH /vehicles/:id\` - Editar veículo (apenas o dono)
- \`DELETE /vehicles/:id\` - Deletar veículo (apenas o dono)

### 🛠️ Como Executar

1. **Instalar dependências:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Configurar ambiente:**
   \`\`\`bash
   cp .env.example .env
   \`\`\`

3. **Executar:**
   \`\`\`bash
   npm run start:dev
   \`\`\`

### 🔑 Exemplo de Uso

1. **Criar usuário:**
   \`\`\`json
   POST /users
   {
     "name": "João Silva",
     "email": "joao@email.com", 
     "password": "123456"
   }
   \`\`\`

2. **Fazer login:**
   \`\`\`json
   POST /auth/login
   {
     "email": "joao@email.com",
     "password": "123456"
   }
   \`\`\`

3. **Usar token nas requisições:**
   \`\`\`
   Authorization: Bearer <seu_token_jwt>
   \`\`\`

### 🏗️ Arquitetura

- **AuthModule** - Configuração JWT e estratégias
- **AuthGuard** - Proteção automática de rotas
- **AuthService** - Lógica de autenticação
- **Guards** - JWT e Local guards
- **Strategies** - Passport JWT e Local
- **Services** - Validação de propriedade
- **DTOs** - Validação de entrada

### ✅ Requisitos Atendidos

- ✅ Todas as rotas protegidas com AuthGuard
- ✅ Apenas criação de usuário desprotegida
- ✅ Sistema JWT completo
- ✅ Validação de propriedade de veículos
- ✅ Criptografia de senhas
- ✅ Tratamento de erros
- ✅ Validação de dados

**Sistema 100% funcional e pronto para uso!** 🚀
