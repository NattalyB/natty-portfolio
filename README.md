# Natty Buralde — Nail Designer (Portfólio pessoal)

Landing page pessoal em HTML, CSS e JavaScript puro, feita a partir do material que a Natty já usa (cores, textos e preços do catálogo de serviços).

## Estrutura

```
natty-portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

## O que tem no site

- Cabeçalho com o nome e navegação (Sobre, Serviços, Atendimento, Agendar horário).
- Hero com assinatura em script, slogan e CTA "Agendar horário".
- Seção "Sobre mim" com o texto de apresentação e números de destaque.
- Mostruário de serviços (Manicure Tradicional, Esmaltação em Gel, Blindagem, Soft Gel Express) com preços, cada um com uma cor de esmalte diferente.
- Seção "Atendimento" com as regras de conduta e horários de funcionamento.
- Formulário de agendamento (nome, e-mail, CEP, mensagem).
- JavaScript: ao enviar o formulário, mostra mensagem de agradecimento personalizada sem recarregar a página.
- Consumo da API ViaCEP: ao digitar um CEP válido, preenche cidade/UF automaticamente.

## Pendência

O placeholder de WhatsApp/Instagram na seção "Agendar horário" está marcado como "em breve" —
basta editar o trecho `<p class="contact-placeholder">` no `index.html` com os links reais.

## Como rodar localmente

```bash
npx serve .
# ou
python3 -m http.server 8080
```

## Configurando o Git e as branches (main / develop)

```bash
git init
git add .
git commit -m "commit inicial: portfólio da Natty Buralde"
git branch -M main
git checkout -b develop

# opcional: conectar a um repositório remoto
git remote add origin https://github.com/SEU_USUARIO/natty-portfolio.git
git push -u origin main
git push -u origin develop
```

Fluxo sugerido: trabalhar na `develop` e, quando estiver estável, fazer merge para `main`:

```bash
git checkout main
git merge develop
git push
```

## Publicando gratuitamente (opcional)

- **GitHub Pages**: Settings → Pages → branch `main`, pasta raiz.
- **Netlify** ou **Vercel**: conectar o repositório do GitHub, sem necessidade de build.
