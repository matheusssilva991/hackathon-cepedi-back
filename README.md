# Hackathon Cepedi BACK

<span id="topo"></span>

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

> Sistema de gestão/monitoramento de consumo de água integrado com IA.

## 🚩 Informações do projeto

<!-- Deixe apenas um -->

![Status do projeto](https://img.shields.io/badge/status-fazendo-green)
<!-- ![Status do projeto](https://img.shields.io/badge/status-pausado-yellow) -->
<!-- ![Status do projeto](https://img.shields.io/badge/status-finalizado-red) -->

A criação de um sistema de gerenciamento de consumo de água.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

<!-- Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário -->

- Você instalou a versão mais recente de `<linguagem / dependência / requeridos>`
- Você tem uma máquina `<Windows / Linux / Mac>`. Indique qual sistema operacional é compatível / não compatível.
- Você leu `<guia / link / documentação_relacionada_ao_projeto>`.

## 🚀 Instalando <HackathonCepedi>

Para instalar o <HackathonCepedi>, siga estas etapas:

Linux:

Primeiro, certifique-se que tenha o node e npm em sua máquina

```bash
Node.js -v && npm --version 
```

Caso não tenha o node e npm em sua máquina, utilize o comando

```bash
sudo apt install node 
sudo apt install npm 
```

Em seguida, instale o nest CLI

```bash
npm i -g @nestjs/cli
```

Depois Rode os seguintes comandos para instalar as dependências do projeto:

```bash
npm i
```

Depois, renomeie o arquivo .env-example para .env e configure as variáveis de ambiente.

## ☕ Usando <HackathonCepedi>

Para rodar o projeto:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Para acessar as rotas do projeto:

### • Auth

<details>
<summary><code>POST</code> <code><b>/api/login</b></code> <code>(Autentica o usuário e salva o token no cookie)</code></summary>

#### • Body

> | name       | type     | data type | description      |
> | ---------- | -------- | --------- | ---------------- |
> | `email`    | required | string    | Email de usuário  |
> | `password` | required | string    | Senha do usuário |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `200`     | `application/json` | `{"success": true, "accessToken": Bearer Token`        |
> | `401`     | `application/json` | `{"code":"400","msg":"Email e/ou senha incorreta"}` |

</details>

---

### • Usuário

<details>

<summary><code>GET</code> <code><b>/api/users</b></code> <code>(Retorna os usuários)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Query

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `name` | optional | string    | Nome do usuário |
> | `address` | optional | number    | ID do endereço do usuário |
> | `page` | optional | number   | Página |
> | `limit` | optional | number    | Limite de registros por página |
> | `sort` | optional | object   | Chave de ordenação |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `200`     | `application/json` | `{"code": "200", "users": [Users]}`      |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |

</details>

<details>

<summary><code>GET</code> <code><b>/api/user/:id</b></code> <code>(Retorna um usuário)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Parâmetros

> | name      | type     | data type | description                     |
> | --------- | -------- | --------- | ------------------------------- |
> | `id`   | required | number    | ID do usuário |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `200`     | `application/json` | `{"code": "200", "user": User}`      |
> | `400`     | `application/json` | `{"code":"400", "msg":"Bad Request"}` |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |
> | `404`     | `application/json` | `{"code":"404", "msg":"Usuário não encontrado."}` |

</details>

<details>

<summary><code>POST</code> <code><b>/api/user</b></code> <code>(Cria um usuário)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Body

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `name` | required | string    | Nome do usuário |
> | `cpf` | optional | string    | CPF do usuário |
> | `cnpj` | optional | string    | CNPJ da empresa |
> | `email` | required | string    | E-mail do usuário |
> | `password` | required | string    | Senha do usuário |
> | `addressId` | optional | number    | ID do endereço do usuário |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `201`     | `application/json` | `{"code": "201", "user": CreadtedUser }`      |
> | `400`     | `application/json` | `{"code":"400", "msg":"Bad Request"}` |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |

</details>

<details>

<summary><code>PATCH</code> <code><b>/api/user/:id</b></code> <code>(Atualiza um usuário)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Parâmetros

> | name      | type     | data type | description                     |
> | --------- | -------- | --------- | ------------------------------- |
> | `id`   | required | number    | ID do usuário |

#### • Body

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `name` | optional | string    | Nome do usuário |
> | `cpf` | optional | string    | CPF do usuário |
> | `cnpj` | optional | string    | CNPJ da empresa |
> | `email` | optional | string    | E-mail do usuário |
> | `password` | optional | string    | Senha do usuário |
> | `addressId` | optional | number    | ID do endereço do usuário |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `201`     | `application/json` | `{"code": "201", "user": UpdatedUser }`      |
> | `400`     | `application/json` | `{"code":"400", "msg":"Bad Request"}` |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |
> | `404`     | `application/json` | `{"code":"404", "msg":"Usuário não encontrado."}` |

</details>

<details>

<summary><code>DELETE</code> <code><b>/api/user/:id</b></code> <code>(Deleta um usuário)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Parâmetros

> | name      | type     | data type | description                     |
> | --------- | -------- | --------- | ------------------------------- |
> | `id`   | required | number    | ID do usuário |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `201`     | `application/json` | `{"code": "201", "user": DeletedUser }`      |
> | `400`     | `application/json` | `{"code":"400", "msg":"Bad Request"}` |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |
> | `404`     | `application/json` | `{"code":"404", "msg":"Usuário não encontrado."}` |

</details>

---

### • Endereço

<details>

<summary><code>GET</code> <code><b>/api/addresses</b></code> <code>(Retorna os endereços)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Query

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `street` | optional | string    | Rua |
> | `neighborhood` | optional | string    | Bairro |
> | `city` | optional | string    | Cidade |
> | `state` | optional | string    | Estado |
> | `postalCode` | optional | string    | Cep |
> | `number` | optional | string    | Número |
> | `amountPeople` | optional | number    | Quantidade de pessoas na residência |
> | `page` | optional | number   | Página |
> | `limit` | optional | number    | Limite de registros por página |
> | `sort` | optional | object   | Chave de ordenação |


#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `200`     | `application/json` | `{"code": "200", "addresses": [Address]}`      |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |

</details>

<details>

<summary><code>GET</code> <code><b>/api/address/:id</b></code> <code>(Retorna um endereço)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Parâmetros

> | name      | type     | data type | description                     |
> | --------- | -------- | --------- | ------------------------------- |
> | `id`   | required | number    | ID do endereço |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `200`     | `application/json` | `{"code": "200", "addresss": Address}`      |
> | `400`     | `application/json` | `{"code":"400", "msg":"Bad Request"}` |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |
> | `404`     | `application/json` | `{"code":"404", "msg":"Endereço não encontrado."}` |

</details>

<details>

<summary><code>POST</code> <code><b>/api/address</b></code> <code>(Cria um endereço)</code></summary>

#### • Auth (Nível de Acesso - Admin)

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Body

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `street` | required | string    | Rua |
> | `neighborhood` | required | string    | Bairro |
> | `complement` | optional | string    | Complemento |
> | `city` | required | string    | Cidade |
> | `state` | required | string    | Estado |
> | `postalCode` | required | string    | Cep |
> | `number` | required | string    | Número |
> | `amountPeople` | required | number    | Quantidade de pessoas na residência |
> | `cadUnico` | optional | string    | Número do cadÚnico |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `201`     | `application/json` | `{"code": "201", "address": CreatedAddress }`      |
> | `400`     | `application/json` | `{"code":"400", "msg":"Bad Request"}` |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |

</details>

<details>

<summary><code>PATCH</code> <code><b>/api/address/:id</b></code> <code>(Atualiza um endereço)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Parâmetros

> | name      | type     | data type | description                     |
> | --------- | -------- | --------- | ------------------------------- |
> | `id`   | required | number    | ID do endereço |

#### • Body

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `street` | optional | string    | Rua |
> | `neighborhood` | optional | string    | Bairro |
> | `complement` | optional | string    | Complemento |
> | `city` | optional | string    | Cidade |
> | `state` | optional | string    | Estado |
> | `postalCode` | optional | string    | Cep |
> | `number` | optional | string    | Número |
> | `amountPeople` | optional | number    | Quantidade de pessoas na residência |
> | `cadUnico` | optional | string    | Número do cadÚnico |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `201`     | `application/json` | `{"code": "201", "address": UpdatedAddress }`      |
> | `400`     | `application/json` | `{"code":"400", "msg":"Bad Request"}` |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |
> | `404`     | `application/json` | `{"code":"404", "msg":"Endereço não encontrado."}` |

</details>

<details>

<summary><code>DELETE</code> <code><b>/api/address/:id</b></code> <code>(Deleta um endereço)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Parâmetros

> | name      | type     | data type | description                     |
> | --------- | -------- | --------- | ------------------------------- |
> | `id`   | required | number    | ID do endereço |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `201`     | `application/json` | `{"code": "201", "address": DeletedAddress }`      |
> | `400`     | `application/json` | `{"code":"400", "msg":"Bad Request"}` |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |
> | `404`     | `application/json` | `{"code":"404", "msg":"Endereço não encontrado."}` |

</details>

---

### • Consumo

<details>

<summary><code>GET</code> <code><b>/api/consumptions</b></code> <code>(Retorna os consumos)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Query

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `year`  | optional | number   | Ano |
> | `month`  | optional | number   | Mês |
> | `day`  | optional | string  | Dia da semana |
> | `hour`  | optional | number   | Hora |
> | `consumption`  | optional | number   | Consumo de água (m3) |
> | `pattern`  | optional | string   | Padrão de consumo |
> | `address`  | optional | number   | ID do endereço |
> | `page` | optional | number   | Página |
> | `limit` | optional | number    | Limite de registros por página |
> | `sort` | optional | object   | Chave de ordenação |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `200`     | `application/json` | `{"code": "200", "consumptions": [Consumption]}`      |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |

</details>

<details>

<summary><code>GET</code> <code><b>/api/consumption/:id</b></code> <code>(Retorna um consumo)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Parâmetros

> | name      | type     | data type | description                     |
> | --------- | -------- | --------- | ------------------------------- |
> | `id`   | required | number    | ID do consumo |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `200`     | `application/json` | `{"code": "200", "consumption": Consumption}`      |
> | `400`     | `application/json` | `{"code":"400", "msg":"Bad Request"}` |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |
> | `404`     | `application/json` | `{"code":"404", "msg": "Consumo não encontrado."}` |

</details>

<details>

<summary><code>POST</code> <code><b>/api/consumption</b></code> <code>(Cria um consumo)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Body

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `year`  | required | number   | Ano |
> | `month`  | required | number   | Mês |
> | `day`  | required | string  | Dia da semana |
> | `hour`  | required | number   | Hora |
> | `consumption`  | required | number   | Consumo de água (m3) |
> | `pattern`  | optional | string   | Padrão de consumo |
> | `addressId`  | required | number   | ID do endereço |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `201`     | `application/json` | `{"code": "201", "consumption": CreadtedConsumption }`      |
> | `400`     | `application/json` | `{"code":"400", "msg":"Bad Request"}` |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |

</details>

<details>

<summary><code>PATCH</code> <code><b>/api/consumption/:id</b></code> <code>(Atualiza um consumo)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Parâmetros

> | name      | type     | data type | description                     |
> | --------- | -------- | --------- | ------------------------------- |
> | `id`   | required | number    | ID do consumo |

#### • Body

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `year`  | required | number   | Ano |
> | `month`  | required | number   | Mês |
> | `day`  | required | string  | Dia da semana |
> | `hour`  | required | number   | Hora |
> | `consumption`  | required | number   | Consumo de água (m3) |
> | `pattern`  | optional | string   | Padrão de consumo |
> | `addressId`  | required | number   | ID do endereço |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `201`     | `application/json` | `{"code": "201", "consumption": UpdatedConsumption }`      |
> | `400`     | `application/json` | `{"code":"400", "msg":"Bad Request"}` |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |
> | `404`     | `application/json` | `{"code":"404", "msg": "Consumo não encontrado."}` |

</details>

<details>

<summary><code>DELETE</code> <code><b>/api/consumption/:id</b></code> <code>(Deleta um consumo)</code></summary>

#### • Auth

> | name    | type     | data type | description                     |
> | ------- | -------- | --------- | ------------------------------- |
> | `accessToken` | required | string    | Token de autorização do usuário |

#### • Parâmetros

> | name      | type     | data type | description                     |
> | --------- | -------- | --------- | ------------------------------- |
> | `id`   | required | number    | ID do consumo |

#### • Respostas

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `201`     | `application/json` | `{"code": "201", "consumption": DeletedConsumption }`      |
> | `400`     | `application/json` | `{"code":"400", "msg":"Bad Request"}` |
> | `401`     | `application/json` | `{"code":"401", "msg":"Unauthorized"}` |

</details>

---

## 🤝 Equipe

Membros da equipe de desenvolvimento do projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/matheusssilva991">
        <img src="https://github.com/matheusssilva991.png" width="100px;" alt="Foto do Matheus S.Silva no GitHub"/><br>
        <b>Matheus S.Silva</b>
        <p>Desenvolvedor Back</p>
      </a>
    </td>
  </tr>
</table>

[⬆ Voltar ao topo](#topo)
