<p align="center" style="background-color: #E83837;">
   <img src="https://deliverymuch.com.br/assets/imgs/logo-deliverymuch.svg" width="200" 
    />
</p>

<h1 align="center">
  Delivery Much - Tech Challenge 
</h1>

[![Autor](https://img.shields.io/badge/Autor-FelipeRRPereira-E83837?style=flat-square)](https://github.com/FelipeRRPereira)
[![Languages](https://img.shields.io/github/languages/count/FelipeRRPereira/dm-challenge?color=E83837&label=Langueges&style=flat-square)](#)

## 🚀 Iniciando no projeto

---

### Pré-requisitos

- Para rodar o projeto será necessário instalar o [Node](https://nodejs.org/en/download/).
- Clonar este repositório para sua maquina local.

```powershell
git clone https://github.com/FelipeRRPereira/dm-challenge
```

- Instalar dependências.

```powershell
npm install
```

### Rodar projeto

- Inicial aplicação:

```powershell
npm start
```

- Iniciar os testes:

```powershell
npm test
```

- Iniciar os testes assistidos:

```powershell
npm run test:watch
```

- Iniciar via Docker:

```powershell
docker-compose up
```

Obs.: Deve ser instalado o Docker para rodar projeto via CLI acima. Instruções podem ser encontradas no link [https://www.docker.com/get-started](https://www.docker.com/get-started).

### Variáveis de ambiente

- Para rodar o projeto é necessário configurar um arquivo `.env` na rais do projeto. Segue exemplo no arquivo `.env-example`:

```json
PORT=ADICIONAR A PORTA
HOST=HOST DA API, NORMALMENTE UTILIZADO LOCALHOST
HOST_RECIPE_PUPPY=URL DO RECIPE PUPPY
HOST_GIPHY=URL DO ENDPOINT GIPHY
API_KEY_GIPHY= ADICIONAR API KEY NECESSARIA PARA ACESSO A API DO GIPHY https://developers.giphy.com/docs/sdk
```
