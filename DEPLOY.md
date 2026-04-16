# Tutorial: Publicar o site na internet (GitHub + Vercel)

---

## Passo 1 — Criar conta no GitHub

1. Acesse **https://github.com** e clique em **Sign up**
2. Escolha um nome de usuário, e-mail e senha
3. Confirme o e-mail recebido

---

## Passo 2 — Instalar o GitHub Desktop

1. Acesse **https://desktop.github.com** e baixe o instalador
2. Instale e faça login com sua conta GitHub

---

## Passo 3 — Criar o repositório no GitHub Desktop

1. Abra o GitHub Desktop
2. Clique em **File → New Repository**
3. Preencha:
   - **Name:** `portifolio`
   - **Local Path:** `C:\PROJETOS\` *(a pasta pai, não a do projeto)*
   - Desmarque "Initialize this repository with a README"
4. Clique em **Create Repository**

> Se pedir para mover arquivos: clique em **"use existing folder"**.

---

## Passo 4 — Fazer o primeiro commit e push

1. No GitHub Desktop, veja todos os arquivos listados à esquerda
2. Na caixa **Summary** (abaixo), escreva: `primeiro commit`
3. Clique em **Commit to main**
4. Clique em **Publish repository** (canto superior direito)
5. Deixe o repositório como **Public** (necessário para Vercel gratuito)
6. Clique em **Publish Repository**

Seu código está no GitHub agora.

---

## Passo 5 — Criar conta no Vercel

1. Acesse **https://vercel.com** e clique em **Sign Up**
2. Escolha **Continue with GitHub** — isso vincula as duas contas automaticamente

---

## Passo 6 — Importar o projeto no Vercel

1. No painel do Vercel, clique em **Add New → Project**
2. Localize o repositório `portifolio` e clique em **Import**
3. Configure:
   - **Framework Preset:** Vite *(detectado automaticamente)*
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Clique em **Deploy**

Aguarde ~1 minuto. Ao terminar, o Vercel vai gerar um link como:

```
https://portifolio-xyz.vercel.app
```

---

## Passo 7 — Atualizações futuras (fluxo do dia a dia)

Sempre que fizer uma alteração no código:

1. Abra o **GitHub Desktop**
2. Escreva um resumo do que mudou no campo **Summary**
3. Clique em **Commit to main**
4. Clique em **Push origin**

O Vercel detecta o push automaticamente e publica a nova versão em ~30 segundos.

---

## Passo 8 — Domínio personalizado (opcional)

1. No painel do Vercel, vá em **Settings → Domains**
2. Digite seu domínio (ex: `nardiello.com.br`)
3. O Vercel mostra os registros DNS para configurar no seu provedor (Registro.br, GoDaddy, etc.)
4. Após configurar o DNS, o Vercel ativa o HTTPS automaticamente

> Lembre de atualizar o `Sitemap` no arquivo `public/robots.txt` com seu domínio real antes de publicar.

---

## Resumo de segurança aplicada no projeto

| Medida | O que faz |
|---|---|
| `vercel.json` headers | Bloqueia clickjacking, sniffing de MIME, XSS e força HTTPS |
| `robots.txt` | Controla o que os robôs de busca podem indexar |
| Validação do formulário | Limita tamanho, valida e-mail, rejeita campos vazios |
| Sanitização de inputs | Remove caracteres perigosos antes de enviar |
| `.gitignore` | Impede que `node_modules` e `.env` vão para o GitHub |
