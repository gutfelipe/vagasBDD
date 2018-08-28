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
formatter.scenarioOutline({
  "line": 43,
  "name": "alteracao de endereco",
  "description": "",
  "id": "validar-curriculo;alteracao-de-endereco",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 42,
      "name": "@vai"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "que altero meu endereco para \u003cpais\u003e\u003cZip\u003e\u003cestado\u003e\u003ccidade\u003e\u003cendereco\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 45,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "validar-curriculo;alteracao-de-endereco;",
  "rows": [
    {
      "cells": [
        "pais",
        "Zip",
        "estado",
        "cidade",
        "endereco"
      ],
      "line": 47,
      "id": "validar-curriculo;alteracao-de-endereco;;1"
    },
    {
      "cells": [
        "\"Brasil\"",
        "12345678",
        "\"São Paulo\"",
        "\"Osasco\"",
        "\"rua de teste \""
      ],
      "line": 48,
      "id": "validar-curriculo;alteracao-de-endereco;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 10767564592,
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
  "duration": 4990351675,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 2743668251,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "alteracao de endereco",
  "description": "",
  "id": "validar-curriculo;alteracao-de-endereco;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 42,
      "name": "@vai"
    },
    {
      "line": 2,
      "name": "@funcionalidade"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "que altero meu endereco para \"Brasil\"12345678\"São Paulo\"\"Osasco\"\"rua de teste \"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 45,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Brasil",
      "offset": 30
    },
    {
      "val": "12345678",
      "offset": 37
    },
    {
      "val": "São Paulo",
      "offset": 46
    },
    {
      "val": "Osasco",
      "offset": 57
    },
    {
      "val": "rua de teste ",
      "offset": 65
    }
  ],
  "location": "validarCurriculoSteps.queAlteroMeuEnderecoPara(String,int,String,String,String)"
});
formatter.result({
  "duration": 146581042644,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 146459480,
  "status": "passed"
});
formatter.after({
  "duration": 2312800861,
  "status": "passed"
});
});