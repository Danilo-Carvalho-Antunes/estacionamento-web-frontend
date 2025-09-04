# Estacionamento Web — Frontend

[![Coverage](https://codecov.io/gh/OWNER/REPO/branch/main/graph/badge.svg?token=CODECOV_TOKEN_PLACEHOLDER)](https://codecov.io/gh/OWNER/REPO)

Este projeto é o frontend em React (Vite + TypeScript + MUI) do sistema de Estacionamento.

- Arquitetura e diretrizes: ver `../../etapa-4-frontend-react.mkd`.
- CI: ver workflow em `.github/workflows/frontend-ci.yml`.
- Coverage local: `coverage/` é gerado via Vitest (V8). Thresholds definidos em `vitest.config.ts`.

## Variáveis de ambiente

- `VITE_API_BASE_URL` — Base URL da API (ex.: `http://localhost:8000`).
- `VITE_USE_MOCKS` — `true` para usar MSW (mocks) no desenvolvimento, `false` para apontar para a API real.

No ambiente dockerizado, estas variáveis são injetadas pelo `docker-compose.yml` na raiz do repositório.

## Integração com Codecov

O workflow do CI já publica o `lcov.info` para o Codecov. Configure o segredo `CODECOV_TOKEN` do repositório e ajuste o slug do badge acima (`OWNER/REPO`).
