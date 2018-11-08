$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("validarCurriculo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Validar Curriculo",
  "description": "\r\nComo usuário desejo validar todas as informacoes mais relevantes do meu curriculo\r\nvia Selenium WebDriver com BDD",
  "id": "validar-curriculo",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@funcionalidade"
    }
  ]
});
formatter.before({
  "duration": 10739643500,
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
  "name": "acesso a area da funcionalidade de atualizar curriculo",
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
  "duration": 5771118100,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 7734179000,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "alteracao de foto",
  "description": "",
  "id": "validar-curriculo;alteracao-de-foto",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 38,
      "name": "@foto"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "que altero minha foto do perfil \"imagem1.jpg\"",
  "keyword": "Dado "
});
formatter.step({
  "comments": [
    {
      "line": 41,
      "value": "#Obs.: colocar imagem dentro do projeto pasta ...\\vagasBDD\\image\\"
    }
  ],
  "line": 42,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "imagem1.jpg",
      "offset": 33
    }
  ],
  "location": "validarCurriculoSteps.queAlteroMinhaFotoDoPerfil(String)"
});
