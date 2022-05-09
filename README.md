# NLW Return Server (Backend)

## Conteúdo

- [Sobre](#about)
- [Para usar esse projeto](#getting_started)
- [Uso](#usage)
- [Contributing](../CONTRIBUTING.md)

## Sobre <a name = "about"></a>

Este é o projeto que desenvolvi durante o NLW Return, que ocorreu entre os dias 2 e 8 de maio de 2022. Este servidor tem o objetivo de servir de backend da aplicação de Widget para receber feedbacks em uma página ou sistema.

Nesse projeto, foi utilizado NodeJS, Typescript, Express, Prisma e MySQL. Também utilizamos conceitos de Injeção de Dependência, um dos princípios do SOLID e efetuei algumas melhorias no projeto original:

 - Error Middleware (para a aplicação não parar sem retornar erro);
 - Inclusão de um controller para receber a requisição e enviar o retorno, tirando a responsabilidade da rota neste caso;
 - Implementação do CORS para não permitir uso indevido.

## Para usar esse projeto <a name = "getting_started"></a>

As instruções abaixo vão te ajudar a fazer uma cópia e rodar esse projeto em seu próprio PC para desenvolvimento ou testes.

### Pré requisitos

Para esse projeto funcionar, é necessário ter os seguintes softwares instalados:

```
Node (versão 14.15.5);
NPM (versão 6.14.11);
MySQL Server (versão 8.0.27).
```

### Instalação

Para usar este projeto, faça um fork dele e copie o mesmo para um local de armazenamento em seu PC.

Depois de executar o clone ou fork do projeto, abra o terminal ou prompt de comandos na pasta do projeto. Você deve ter o NodeJS e o NPM instalados para executar os passos abaixo:

```
$ npm install
```

Para executar o projeto em ambiente de desenvolvimento:

```
$ npm run dev
```

Para buildar o projeto em ambiente de produção:

```
$ npm build
```

Para executar os testes unitário do projeto:

```
$ npm test
```

Este servidor trabalha apenas com rota do tipo POST, não retorna nenhum dado para o usuário, por enquanto...

## Uso <a name = "usage"></a>

Para usar o servidor, é necessário enviar via POST no endpoint 'feedbacks' os dados do feedback que deseja postar.

Através do POSTMAN ou do Insomnia é possível testar o servidor.

Para testar em ambiente de desenvolvimento, crie uma request do tipo POST:

```
http://localhost:3333/feedbacks
```

E envie um JSON como o modelo abaixo:

```
{
	"type": "IDEA",
	"comment": "Esse é um comentário para adicionar uma ideia"
}
```
O retorno do servidor será um status 201 caso esteja tudo certo com sua requisição.
