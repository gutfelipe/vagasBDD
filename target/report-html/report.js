$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("validarCurriculo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Validar Currico",
  "description": "\r\nComo usuário desejo validar todas as informações mais relevantes do meu curriculo\r\nvia Selenium WebDriver com BDD",
  "id": "validar-currico",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@funcionalidade"
    }
  ]
});
formatter.before({
  "duration": 14618602128,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acesso minha conta com \"gutembergtest\" e 123456",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "acesso a area a funcionalidade de atualizar curriculo",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "gutembergtest",
      "offset": 28
    },
    {
      "val": "123456",
      "offset": 45
    }
  ],
  "location": "validarCurriculoSteps.queAcessoMinhaContaComE(String,String)"
});
formatter.result({
  "duration": 7952704971,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 2646239917,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validar-currico;",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 13,
  "name": "adiciono a conta",
  "keyword": "Quando "
});
formatter.match({
  "location": "validarCurriculoSteps.adicionoAConta()"
});
formatter.result({
  "duration": 1858831,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat steps.validarCurriculoSteps.adicionoAConta(validarCurriculoSteps.java:43)\r\n\tat ✽.Quando adiciono a conta(validarCurriculo.feature:13)\r\n",
  "status": "pending"
});
});