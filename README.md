<h1 align="center">Compilador Simples em JavaScript</h1>

Alunos: Ocivaldo Bruno, Isaac Angelim, Samoel Vieira, Ricardo Larrat, Herminio Bisneto, Gabriel de Oliveira.

Objetivo do compilador: traduzir operações matematicas escritas para javascript e retornar como uma operação javascript e trazer o resultado.

<h3>Principais caracteristicas:</h3>

* Análise léxica
* Análise sintática
* O parser será baseado em uma gramática EBNF
* Desenvolveremos o analisador usando um algoritmo de análise descendente recursivo
* Gerador de código

<h3>Funcionamento do compilador:</h3>

Etapa de analise Lexica:

A etapa de análise léxica é responsável por quebrar a string de entrada do programa em partes menores chamadas de tokens. Os tokens geralmente carregam informações sobre seu tipo. A localização geralmente é usada para relatar erros no caso de construções de sintaxe inválidas.

Etapa de analise Sintatica:

Um analisador é um módulo compilador que gera uma árvore de sintaxe abstrata a partir de uma lista de tokens. Ao longo do caminho, o analisador também produz erros de sintaxe no caso de programas inválidos.

A gramatica da linguagem segue as seguintes regras:
* Aceita apenas as 4 opeações basicas como: multiplicação, subtração, soma e divisão.
* Cada token de string é divido por espaços em branco.
* São aceitos apenas números naturais.

Primeiramente é definido os variados tipos de nós que vamos ter no AST. Teremos apenas números e operações.
Após declarar o tipo de nó, definimos uma função chamada parse que recebe um argumento chamado tokens.
Dentro existem algumas funções importates que são: 
* peek - Retorna o elemento de marcação associado ao valor atual da variável local. 
* consumo - retorna o elemento tokens associado ao valor atual da variável local e incrementa c. 
* parseNumero - pega o token atual, analisa-o em um número natural e retorna um novo token numérico. 
* parseExpressao - verifica se o token atual corresponde a uma expressão regular e chama parseNumero

Compilação(Tradução):

A função compilador e responsavel por percorrer o AST da linguagem e produzir o JavaScript, por fim
Chamamos analise lexica, que produz a lista de tokens, depois passamos os tokens na analise sintatica, que produz o AST e por fim, passamos compilador para traduzir a AST para JavaScript!
