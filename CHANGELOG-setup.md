# Changelog: UI UX Pro Max + MCP setup

## 2026-03-18

### Добавлено
- **UI UX Pro Max (skill)**  
  Установлен через `npx uipro-cli init --ai cursor`.  
  Создана структура:
  - `.cursor/skills/ui-ux-pro-max/` — SKILL.md, data/*.csv, scripts/search.py, core.py, design_system.py
  - Skill подхватывается Cursor при запросах на UI/UX (build, design, create, implement, review, fix, improve).

- **MCP-конфиг**  
  Создан `.cursor/mcp.json` с пустым `mcpServers: {}` для последующего добавления MCP-серверов.  
  UI UX Pro Max **не является** MCP-сервером — это skill для Cursor.

### Не менялось
- Глобальная установка `uipro-cli` не выполнялась (требуются права на запись в `~/.nvm/...`). Для обновления skill в проекте можно снова запустить:  
  `npx --yes uipro-cli init --ai cursor`

### Проверено
- `python3 .cursor/skills/ui-ux-pro-max/scripts/search.py "SaaS landing" --design-system -p "TestApp"` выполняется успешно.
