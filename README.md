# Athenium — Biblioteca Escolar Digital

Protótipo funcional do Athenium, um app de biblioteca escolar para consulta de
empréstimos, prazos de devolução, histórico de leitura e carteira digital de
leitor. Construído em HTML, CSS e JavaScript puros (sem frameworks nem build
step), pronto para publicar direto no GitHub Pages.

## Telas incluídas

- **Login** (`index.html`) — acesso por matrícula e senha
- **Início** (`home.html`) — resumo de leitura anual, livro em andamento e próximas devoluções
- **Prazos** (`prazos.html`) — calendário interativo com dias de devolução destacados
- **Empréstimos por período** (`emprestimos.html`) — accordion mensal com o histórico de empréstimos
- **Meus Livros** (`meus-livros.html`) — biblioteca pessoal com status "em andamento" / "devolução pendente"
- **Detalhe do livro** (`livro-detalhe.html`) — tela de devolução pendente com aviso de multa
- **Histórico** (`historico.html`) — últimos empréstimos já devolvidos
- **Notificações** (`notificacoes.html`) — avisos recentes e não lidos
- **Menu** (`menu.html`) — dados do usuário e sair do app

## Como rodar localmente

Não precisa de instalação — é só servir a pasta como um site estático:

```bash
python3 -m http.server 8000
# depois abra http://localhost:8000
```

Ou simplesmente abra `index.html` direto no navegador.

Use qualquer matrícula e senha (não vazias) para entrar — os dados exibidos
depois do login são simulados em `js/data.js` e guardados no `localStorage`
do navegador, para dar a sensação de estado persistente entre as telas.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub e suba esta pasta:
   ```bash
   git init
   git add .
   git commit -m "Athenium — protótipo funcional"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/athenium.git
   git push -u origin main
   ```
2. No repositório, vá em **Settings → Pages**.
3. Em "Build and deployment", selecione **Deploy from a branch**, escolha a
   branch `main` e a pasta `/ (root)`.
4. Aguarde alguns segundos — o link (algo como
   `https://SEU-USUARIO.github.io/athenium/`) aparece no topo da página.

## Estrutura do projeto

```
athenium/
├── index.html            Login
├── home.html              Início
├── prazos.html            Calendário de prazos
├── emprestimos.html        Empréstimos por período
├── meus-livros.html        Minha biblioteca
├── livro-detalhe.html      Detalhe / devolução pendente
├── historico.html          Histórico de empréstimos
├── notificacoes.html        Notificações
├── menu.html                Menu
├── assets/                    Imagens (logo)
├── css/styles.css            Design system (tokens, componentes)
└── js/
    ├── data.js               Dados simulados + estado (localStorage)
    └── app.js                 Ícones SVG e helpers de UI compartilhados
```

## Próximos passos sugeridos

- Trocar o `js/data.js` por chamadas reais a uma API/backend (autenticação,
  catálogo de livros, empréstimos).
- Adicionar validação de matrícula real e recuperação de senha.
- Persistir notificações lidas/não lidas por usuário.
