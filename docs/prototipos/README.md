# Protótipos de UI — Estacionamento Web

Este diretório contém os protótipos (alta fidelidade) gerados no V0. Eles são a base visual para a futura implementação em React e se conectam diretamente às histórias de usuário (backlog do produto).

- Formatação: PT‑BR, moeda BRL (R$ 12.345,67).
- Regras de negócio refletidas: frações com arredondamento para cima, bordas 18:00/06:00 como noturna, precedência de evento pelo horário de entrada, mensalista com check‑out R$ 0,00, fila de espera (202 queued) quando lotado.
- Artefatos de apoio: `../user-stories.md`, `../requirements.md`, `../api-spec.yaml`, `../domain.puml`.

## Convenção de nomes (imagens)

Para facilitar a referência e manter ordenação, adotamos prefixo numérico e sufixo funcional:

- 01–08: código da tela
- sufixo: função/estado (ex.: `-lista`, `-form`, `-detalhe`)

Ex.: `01-terminal-operador.jpeg`.

## Inventário de telas (arquivo → funcionalidade)

- 01 — Terminal do Operador
  - `01-terminal-operador.jpeg` — fluxo de check‑in/out, busca por placa/data, estados de fila (queued)
- 02 — Dashboard do Gerente
  - `02-dashboard-gerente.jpeg` — visão operacional (ocupação, alertas, eventos)
- 03 — Gestão de Estacionamentos
  - `03-gestao-estacionamentos-lista.jpeg` — lista/CRUD de estacionamentos
  - `03-gestao-estacionamentos-form.jpeg` — formulário/modal de cadastro/edição
- 04 — Perfis de Preço
  - `04-perfis-de-preco.jpeg` — configuração de pricing (fração/horas/diária/noturna/mensal)
- 05 — Eventos
  - `05-eventos-lista.jpeg` — lista/agenda de eventos
  - `05-eventos-form.jpeg` — criação/edição de evento
- 06 — Mensalistas
  - `06-mensalistas-lista.jpeg` — listagem/estado de associação
  - `06-mensalistas-associar.jpeg` — modal de associar/pausar/cancelar
- 07 — Relatórios do Contratante
  - `07-relatorios-contratante.jpeg` — KPIs, gráfico empilhado, tabela com breakdown
- 08 — Cotação Pública
  - `08-cotacao-publica.jpeg` — simulador (sem login) com breakdown do cálculo

Obs.: os nomes acima são o padrão final adotado para referência dos protótipos.

## Mapeamento telas ↔ histórias de usuário

Fonte: `../user-stories.md`

- 01 Terminal do Operador → US3 (Check‑in), US4 (Check‑out/valor), US5 (Listar acessos), US10 (Fila de espera)
- 02 Dashboard do Gerente → suporte operacional; indicadores relacionados aos domínios de US1/US6/US7/US9 (não cria endpoints novos)
- 03 Gestão de Estacionamentos → US1 (Criar estacionamento)
- 04 Perfis de Preço → US2 (Configurar perfil de preços)
- 05 Eventos → US6 (Cadastrar evento)
- 06 Mensalistas → US7 (Associar veículo como mensalista)
- 07 Relatórios do Contratante → US9 (Ver receita acumulada)
- 08 Cotação Pública → US8 (Simular valor do estacionamento)

Este mapeamento deve servir de ponte direta para o backlog: cada US origina épicos/itens front‑end e back‑end correspondentes.