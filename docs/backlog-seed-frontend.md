# Backlog Seed — Frontend (Estacionamento Web)

Base: histórias de usuário (US1–US10) e protótipos em `docs/prototipos/` (01–08). Conteúdo final para planejamento do board.

## Épicos e Itens (Frontend)

### EP-US1 — Criar estacionamento (Gestão de Estacionamentos)
- Protótipo: 03 (lista) e 03 (form)
- Itens
  - FE-US1-01 Página lista (CRUD, paginação, busca, estados loading/empty/error)
  - FE-US1-02 Página/Modal de formulário (nome, capacidade, abre/fecha) com validações
  - FE-US1-03 Máscaras/inputs de hora; mensagens de erro consistentes
- Critérios de aceite
  - Criar/editar/listar com validação; feedback visual; acessibilidade básica

### EP-US2 — Configurar perfil de preços (Perfis de Preço)
- Protótipo: 04
- Itens
  - FE-US2-01 Tela de configuração (fração, desconto hora, diária, noturna, mensal)
  - FE-US2-02 Máscaras BRL e %; tooltips de ajuda; validações
- Critérios de aceite
  - Valores exibidos/salvos corretamente; formatação BRL; validações claras

### EP-US3 — Check-in (Terminal do Operador)
- Protótipo: 01
- Itens
  - FE-US3-01 Ação de check-in com feedback (sucesso/erro)
  - FE-US3-02 Estado “lotado” com exibição de `queued` e posição
- Critérios de aceite
  - Estados de sucesso/erro visíveis; caso lotado mostra fila

### EP-US4 — Check-out e valor calculado (Terminal do Operador)
- Protótipo: 01
- Itens
  - FE-US4-01 Ação de check-out mostrando `charged_value` em BRL e breakdown
- Critérios de aceite
  - Regras refletidas no UI: frações (15min ↑), bordas noturnas (18:00/06:00), evento por ENTRADA, mensalista R$ 0,00

### EP-US5 — Listar acessos (Terminal do Operador)
- Protótipo: 01
- Itens
  - FE-US5-01 Filtros por placa/data; tabela responsiva; paginação
- Critérios de aceite
  - Filtragem correta; estados vazio/erro padronizados

### EP-US6 — Cadastrar evento (Eventos)
- Protótipo: 05 (lista) e 05 (form)
- Itens
  - FE-US6-01 Lista de eventos com indicadores (ativo, período)
  - FE-US6-02 Formulário criação/edição; aviso de sobreposição
- Critérios de aceite
  - Evento ativo aparece destacado; validações no form

### EP-US7 — Associar mensalista (Mensalistas)
- Protótipo: 06 (lista) e 06 (associar)
- Itens
  - FE-US7-01 Lista com estados de associação/pausa/cancelamento
  - FE-US7-02 Modal associar/pausar/cancelar; feedback
- Critérios de aceite
  - Ações refletem estado na lista; validações de placa

### EP-US8 — Simular valor (Cotação Pública)
- Protótipo: 08
- Itens
  - FE-US8-01 Página pública (lot, placa opcional, início/fim) com resultado e breakdown
  - FE-US8-02 Badges de contexto (evento/noturna/mensalista); validação fim > início
- Critérios de aceite
  - Exibição correta do total estimado e tipo tarifário; formatação BRL

### EP-US9 — Relatórios do Contratante
- Protótipo: 07
- Itens
  - FE-US9-01 KPIs + gráfico empilhado + tabela; filtros e agrupamentos
  - FE-US9-02 Detalhamento por estacionamento (drawer/modal)
- Critérios de aceite
  - KPIs, gráfico e tabela coerentes; exportar CSV (mock)

### EP-US10 — Fila de espera (Capacidade)
- Protótipo: 01 (estados de fila)
- Itens
  - FE-US10-01 Exibir status queued e posição; feedback de liberação de vaga
- Critérios de aceite
  - Estados de fila evidentes e acessíveis

## Definition of Done (Frontend)
- Formatação BRL, acessibilidade básica (foco visível, contraste, labels)
- Estados loading/empty/error cobertos; testes de UI essenciais
- Integração com mocks (sem dependência de backend real na fase inicial)
