-- Atualizando dados de exemplo para usar tabelas e campos em português
-- Script para inserir dados de exemplo
-- Execute após criar as tabelas

-- Inserir usuário de exemplo (senha: 123456)
INSERT INTO usuarios (email, nome, senha, role) VALUES 
('admin@test.com', 'Administrador', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin'),
('user@test.com', 'Usuário Teste', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'usuario')
ON CONFLICT (email) DO NOTHING;

-- Inserir veículos de exemplo
INSERT INTO veiculos (marca, modelo, ano, cor, placa, preco, status, id_proprietario) VALUES 
('Toyota', 'Corolla', 2022, 'Branco', 'ABC-1234', 85000.00, 'disponivel', 1),
('Honda', 'Civic', 2021, 'Preto', 'XYZ-5678', 78000.00, 'disponivel', 1),
('Volkswagen', 'Golf', 2020, 'Azul', 'DEF-9012', 65000.00, 'vendido', 2)
ON CONFLICT DO NOTHING;
