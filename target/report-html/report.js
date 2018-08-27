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
  "line": 13,
  "name": "dados pessoais validacao de campos",
  "description": "",
  "id": "validar-curriculo;dados-pessoais-validacao-de-campos",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 14,
  "name": "que edito dados pessoais \u003cdataNascimento\u003e \u003cgenero\u003e \u003cestadoCivil\u003e \u003cfilhos\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "validar-curriculo;dados-pessoais-validacao-de-campos;",
  "rows": [
    {
      "cells": [
        "dataNascimento",
        "genero",
        "estadoCivil",
        "filhos"
      ],
      "line": 18,
      "id": "validar-curriculo;dados-pessoais-validacao-de-campos;;1"
    },
    {
      "cells": [
        "02/03/1980",
        "\"feminino\"",
        "\"casado\"",
        "2"
      ],
      "line": 19,
      "id": "validar-curriculo;dados-pessoais-validacao-de-campos;;2"
    },
    {
      "cells": [
        "03/12/1995",
        "\"masculino\"",
        "\"solteiro\"",
        "1"
      ],
      "line": 20,
      "id": "validar-curriculo;dados-pessoais-validacao-de-campos;;3"
    },
    {
      "cells": [
        "03/12/1991",
        "\"feminino\"",
        "\"viuvo\"",
        "3"
      ],
      "line": 21,
      "id": "validar-curriculo;dados-pessoais-validacao-de-campos;;4"
    },
    {
      "cells": [
        "03/12/1992",
        "\"masculino\"",
        "\"separado\"",
        "0"
      ],
      "line": 22,
      "id": "validar-curriculo;dados-pessoais-validacao-de-campos;;5"
    },
    {
      "cells": [
        "03/12/1993",
        "\"feminino\"",
        "\"divorciado\"",
        "0"
      ],
      "line": 23,
      "id": "validar-curriculo;dados-pessoais-validacao-de-campos;;6"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 9892594845,
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
  "duration": 4790325546,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 4914441677,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "dados pessoais validacao de campos",
  "description": "",
  "id": "validar-curriculo;dados-pessoais-validacao-de-campos;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionalidade"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "que edito dados pessoais 02/03/1980 \"feminino\" \"casado\" 2",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 25
    },
    {
      "val": "03",
      "offset": 28
    },
    {
      "val": "1980",
      "offset": 31
    },
    {
      "val": "feminino",
      "offset": 37
    },
    {
      "val": "casado",
      "offset": 48
    },
    {
      "val": "2",
      "offset": 56
    }
  ],
  "location": "validarCurriculoSteps.queEditoDadosPessoais(int,int,int,String,String,int)"
});
formatter.result({
  "duration": 3661034292,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 245082480,
  "status": "passed"
});
formatter.after({
  "duration": 2312690985,
  "status": "passed"
});
formatter.before({
  "duration": 7365050129,
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
  "duration": 4639400795,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 4936031376,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "dados pessoais validacao de campos",
  "description": "",
  "id": "validar-curriculo;dados-pessoais-validacao-de-campos;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionalidade"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "que edito dados pessoais 03/12/1995 \"masculino\" \"solteiro\" 1",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 25
    },
    {
      "val": "12",
      "offset": 28
    },
    {
      "val": "1995",
      "offset": 31
    },
    {
      "val": "masculino",
      "offset": 37
    },
    {
      "val": "solteiro",
      "offset": 49
    },
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "validarCurriculoSteps.queEditoDadosPessoais(int,int,int,String,String,int)"
});
formatter.result({
  "duration": 1993579236,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 231521663,
  "status": "passed"
});
formatter.after({
  "duration": 2321427075,
  "status": "passed"
});
formatter.before({
  "duration": 7186588024,
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
  "duration": 4499759670,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 5767242515,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "dados pessoais validacao de campos",
  "description": "",
  "id": "validar-curriculo;dados-pessoais-validacao-de-campos;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionalidade"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "que edito dados pessoais 03/12/1991 \"feminino\" \"viuvo\" 3",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 25
    },
    {
      "val": "12",
      "offset": 28
    },
    {
      "val": "1991",
      "offset": 31
    },
    {
      "val": "feminino",
      "offset": 37
    },
    {
      "val": "viuvo",
      "offset": 48
    },
    {
      "val": "3",
      "offset": 55
    }
  ],
  "location": "validarCurriculoSteps.queEditoDadosPessoais(int,int,int,String,String,int)"
});
formatter.result({
  "duration": 4486262285,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 217070131,
  "status": "passed"
});
formatter.after({
  "duration": 2071133222,
  "status": "passed"
});
formatter.before({
  "duration": 7267535707,
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
  "duration": 4267718833,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 2968503711,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "dados pessoais validacao de campos",
  "description": "",
  "id": "validar-curriculo;dados-pessoais-validacao-de-campos;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionalidade"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "que edito dados pessoais 03/12/1992 \"masculino\" \"separado\" 0",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 25
    },
    {
      "val": "12",
      "offset": 28
    },
    {
      "val": "1992",
      "offset": 31
    },
    {
      "val": "masculino",
      "offset": 37
    },
    {
      "val": "separado",
      "offset": 49
    },
    {
      "val": "0",
      "offset": 59
    }
  ],
  "location": "validarCurriculoSteps.queEditoDadosPessoais(int,int,int,String,String,int)"
});
formatter.result({
  "duration": 2671688115,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 214237897,
  "status": "passed"
});
formatter.after({
  "duration": 2319677364,
  "status": "passed"
});
formatter.before({
  "duration": 7764657219,
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
  "duration": 4938120531,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 7455998420,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "dados pessoais validacao de campos",
  "description": "",
  "id": "validar-curriculo;dados-pessoais-validacao-de-campos;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionalidade"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "que edito dados pessoais 03/12/1993 \"feminino\" \"divorciado\" 0",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 25
    },
    {
      "val": "12",
      "offset": 28
    },
    {
      "val": "1993",
      "offset": 31
    },
    {
      "val": "feminino",
      "offset": 37
    },
    {
      "val": "divorciado",
      "offset": 48
    },
    {
      "val": "0",
      "offset": 60
    }
  ],
  "location": "validarCurriculoSteps.queEditoDadosPessoais(int,int,int,String,String,int)"
});
formatter.result({
  "duration": 1663574656,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 223742363,
  "status": "passed"
});
formatter.after({
  "duration": 2310011671,
  "status": "passed"
});
formatter.before({
  "duration": 7680556358,
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
  "duration": 4382491347,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 5042062135,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "validacao de documentos pessoais",
  "description": "",
  "id": "validar-curriculo;validacao-de-documentos-pessoais",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 26,
  "name": "que edito documentos pessoais País de Nacionalidade \"Brasil\" e Documento \"Bahamas\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Brasil",
      "offset": 53
    },
    {
      "val": "Bahamas",
      "offset": 74
    }
  ],
  "location": "validarCurriculoSteps.queEditoDocumentosPessoaisPaísDeNacionalidadeEDocumento(String,String)"
});
formatter.result({
  "duration": 1948426224,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 222656063,
  "status": "passed"
});
formatter.after({
  "duration": 2326109078,
  "status": "passed"
});
formatter.before({
  "duration": 7424180054,
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
  "duration": 4610714462,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 4895964755,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "validacao de CPF",
  "description": "",
  "id": "validar-curriculo;validacao-de-cpf",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 30,
  "name": "que alterei o CPF de forma correta \"418.976.170-20\"",
  "keyword": "Dado "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Obs.: apenas Brasil"
    }
  ],
  "line": 32,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "418.976.170-20",
      "offset": 36
    }
  ],
  "location": "validarCurriculoSteps.queAltereiOCPFDeFormaCorreta(String)"
});
formatter.result({
  "duration": 2506575761,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 137230270,
  "status": "passed"
});
formatter.after({
  "duration": 2326039226,
  "status": "passed"
});
});