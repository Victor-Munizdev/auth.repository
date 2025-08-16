CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    nome VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'usuario',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS veiculos (
    id SERIAL PRIMARY KEY,
    marca VARCHAR(255) NOT NULL,
    modelo VARCHAR(255) NOT NULL,
    ano INTEGER NOT NULL,
    cor VARCHAR(100) NOT NULL,
    placa VARCHAR(20),
    preco DECIMAL(10,2),
    status VARCHAR(50) DEFAULT 'disponivel',
    id_proprietario INTEGER NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("id_proprietario") REFERENCES usuarios(id) ON DELETE CASCADE
);

--  Índices para as consultas  
CREATE INDEX IF NOT EXISTS idx_usuarios_email ON usuarios(email);
CREATE INDEX IF NOT EXISTS idx_veiculos_proprietario ON veiculos("id_proprietario");
CREATE INDEX IF NOT EXISTS idx_veiculos_status ON veiculos(status);
