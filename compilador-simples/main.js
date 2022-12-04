const Op = Symbol("op");
const Numero = Symbol("num");

//multiplicacao 3 subtracao 2 soma 1 3 4
//3 * (2 - (1 + 3 + 4))

const valor = (arvoreSintaxica) => {
  const opAcMapeamento = {
    soma: (argumentos) => argumentos.reduce((x, y) => x + y, 0),
    subtracao: (argumentos) => argumentos.reduce((x, y) => x - y),
    divisao: (argumentos) => argumentos.reduce((x, y) => x / y),
    multiplicacao: (argumentos) => argumentos.reduce((x, y) => x * y, 1),
  };

  if (arvoreSintaxica.type === Numero) return arvoreSintaxica.val;
  return opAcMapeamento[arvoreSintaxica.val](arvoreSintaxica.expr.map(valor));
};

const analiseSintatica = (tokens) => {
  var c = 0;
  const peek = () => tokens[c];
  const consumo = () => tokens[c++];

  const parseNumero = () => ({ val: parseInt(consumo()), type: Numero });

  const parseOpe = () => {
    const node = { val: consumo(), type: Op, expr: [] };
    while (peek()) node.expr.push(parseExpressao());
    return node;
  };

  const parseExpressao = () => (/\d/.test(peek()) ? parseNumero() : parseOpe());

  return parseExpressao();
};

const analiseLexica = (str) =>
  str
    .split(" ")
    .map((s) => s.trim())
    .filter((s) => s.length);

compilador = (arvoreSintaxica) => {
  const opMap = { soma: "+", multiplicacao: "*", subtracao: "-", divisao: "/" };
  const compileNum = (arvoreSintaxica) => arvoreSintaxica.val;
  const compileOp = (arvoreSintaxica) =>
    `(${arvoreSintaxica.expr
      .map(compilador)
      .join(" " + opMap[arvoreSintaxica.val] + " ")})`;
  const compile = (arvoreSintaxica) =>
    arvoreSintaxica.type === Numero
      ? compileNum(arvoreSintaxica)
      : compileOp(arvoreSintaxica);
  return compile(arvoreSintaxica);
};

const program = prompt();
//Exemplo de teste: multiplicacao 3 subtracao 2soma 1 3 4

alert(valor(analiseSintatica(analiseLexica(program))));

alert(compilador(analiseSintatica(analiseLexica(program))));
