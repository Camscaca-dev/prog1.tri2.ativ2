# prog1.tri2.ativ2

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run 
```

This project was created using `bun init` in bun v1.3.14. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.


Trimestre 2 - Atividade 2
Enunciado
Esta atividade é continuidade direta da Atividade 1.

O trabalho consiste em desenvolver uma API REST para o domínio implementado anteriormente em core.ts, utilizando Bun como ambiente de execução e Bun.serve() como mecanismo de servidor HTTP.

O objetivo central da atividade é estudar a criação de APIs e servidores web, com foco em modelagem de rotas, tratamento de requisições e respostas HTTP, validação de dados e integração com regras de negócio.

Paralelamente, o trabalho desenvolve uma interface HTML simples para depuração e teste dos endpoints REST. Essa interface possui finalidade exclusivamente técnica de validação da API; o frontend definitivo permanece como etapa posterior do projeto.

O escopo funcional do servidor inclui:

inicialização de servidor HTTP com Bun.serve();
exposição de endpoints REST integrados ao domínio implementado em core.ts;
recebimento, parsing e validação de payload JSON quando aplicável;
envio de respostas HTTP com status code e corpo coerentes com cada cenário;
tratamento de rotas inexistentes com retorno 404;
serviço de arquivos estáticos da pasta public, incluindo a página de depuração.
O escopo funcional da interface de depuração inclui:

seleção do método HTTP (GET, POST, PUT, DELETE, etc.);
informação do caminho/rota da requisição;
informação do corpo (body) da requisição;
envio da requisição ao servidor;
exibição da resposta em elemento <pre>.
O foco da atividade permanece na comunicação cliente-servidor e na validação funcional dos endpoints.

Objetivos Didáticos
Compreender arquitetura cliente-servidor: analisa como navegador e servidor se comunicam por HTTP.
Aplicar princípios REST: organiza recursos, métodos e códigos de status de forma coerente.
Manipular o DOM com JavaScript: seleciona elementos, lê entradas e atualiza conteúdo dinamicamente.
Utilizar Fetch API: realiza requisições assíncronas do cliente para a API.
Tratar respostas HTTP: interpreta status code, cabeçalhos e corpo da resposta.
Validar entradas: garante dados válidos antes do envio da requisição.
Estruturar o projeto web: separa código de servidor (TypeScript/Bun) e código de cliente (HTML/JavaScript).
Passos para Implementação
Passo 1: Preparar a Estrutura do Projeto
Cria a pasta public/ na raiz do projeto, caso inexistente.
Cria a pasta src/ na raiz do projeto, caso inexistente.
Verifica a existência de arquivo package.json com dependências necessárias.
Passo 2: Criar a API REST com Bun (src/server.ts)
O servidor:

Importa módulos necessários do ecossistema Bun e os módulos internos da aplicação.
Inicializa o servidor HTTP com Bun.serve().
Implementa roteamento REST para os recursos do core.ts da atividade anterior.
Interpreta e valida corpo JSON quando aplicável.
Serve arquivos estáticos da pasta public.
Define a rota GET / para disponibilizar api-debugger.html.
Implementa tratamento de erro para rota inexistente (404).
Configura a porta de execução (ex.: 3000).
Conceitos abordados:

Servidor HTTP com Bun.serve()
Roteamento REST
Serviço de arquivos estáticos
Parsing e validação de JSON
Integração da camada HTTP com regras de negócio
Passo 3: Criar a Interface Web de Depuração (public/api-debugger.html)
A página HTML inclui:

3.1 Estrutura HTML
Seção de Entrada:

seletor para método HTTP (GET, POST, PUT, DELETE, PATCH);
campo de texto para rota/caminho (ex.: /items, /items/1);
área de texto para corpo (body) da requisição;
botão "Enviar Requisição".
Seção de Saída:

exibição de status code;
exibição opcional de cabeçalhos;
elemento <pre> para exibição formatada da resposta.
3.2 Funcionalidades JavaScript
Registra event listener no botão de envio.
Valida dados de entrada antes de enviar requisição.
Envia requisição com fetch() conforme método, rota e body informados.
Trata respostas de sucesso (2xx), erros de cliente/servidor (4xx/5xx) e falhas de rede.
Formata JSON quando aplicável; quando não aplicável, exibe texto bruto.
Limpa estado anterior ou desabilita campos durante carregamento.
Conceitos abordados:

Manipulação de DOM (document.querySelector, textContent, etc.)
Event listeners
Fetch API
Programação assíncrona com async/await
Tratamento de erros com try/catch
Serialização e desserialização JSON
Checklist de Implementação
Servidor (src/server.ts)
 Importa módulos necessários do Bun e módulos internos.
 Inicializa servidor com Bun.serve().
 Implementa endpoints REST para recursos do core.ts.
 Trata corpo JSON quando aplicável.
 Serve arquivos estáticos da pasta public.
 Define rota GET / para servir api-debugger.html.
 Implementa tratamento de erro 404.
 Configura porta de execução (ex.: 3000).
Cliente (public/api-debugger.html)
 Cria formulário com seletor de método, campo de rota, body e botão de envio.
 Cria elemento <pre> para resposta.
 Cria elemento para exibição de status code.
 Implementa envio de requisições com Fetch API.
 Implementa validação de entrada.
 Implementa tratamento de erros.
 Implementa formatação JSON na resposta.
 Testa diferentes métodos e cenários de erro.
Exemplo de Uso (Cliente)
Abre o navegador em http://localhost:3000.
Seleciona o método GET.
Informa o caminho de um endpoint REST (ex.: /items).
Aciona "Enviar Requisição".
Observa status e corpo da resposta na seção de saída.
Para requisição POST:

Seleciona o método POST.
Informa o caminho do recurso (ex.: /items).
Informa corpo JSON válido.
Aciona "Enviar Requisição".
Observa resposta de sucesso ou erro de validação.
Observação Final
Esta atividade prioriza o estudo de criação de APIs e servidores web. A página api-debugger.html atua como ferramenta de apoio para depuração e validação técnica dos endpoints REST. O frontend definitivo constitui etapa futura.
