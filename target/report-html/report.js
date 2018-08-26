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
  "description": "\r\nComo usuário desejo validar todas as informacoes mais relevantes do meu curriculo\r\nvia Selenium WebDriver com BDD",
  "id": "validar-currico",
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
  "id": "validar-currico;dados-pessoais-validacao-de-campos",
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
  "id": "validar-currico;dados-pessoais-validacao-de-campos;",
  "rows": [
    {
      "cells": [
        "dataNascimento",
        "genero",
        "estadoCivil",
        "filhos"
      ],
      "line": 18,
      "id": "validar-currico;dados-pessoais-validacao-de-campos;;1"
    },
    {
      "cells": [
        "02/03/1980",
        "\"feminino\"",
        "\"casado\"",
        "2"
      ],
      "line": 19,
      "id": "validar-currico;dados-pessoais-validacao-de-campos;;2"
    },
    {
      "cells": [
        "03/12/1995",
        "\"masculino\"",
        "\"solteiro\"",
        "1"
      ],
      "line": 20,
      "id": "validar-currico;dados-pessoais-validacao-de-campos;;3"
    },
    {
      "cells": [
        "03/12/1991",
        "\"feminino\"",
        "\"viuvo\"",
        "3"
      ],
      "line": 21,
      "id": "validar-currico;dados-pessoais-validacao-de-campos;;4"
    },
    {
      "cells": [
        "03/12/1992",
        "\"masculino\"",
        "\"separado\"",
        "0"
      ],
      "line": 22,
      "id": "validar-currico;dados-pessoais-validacao-de-campos;;5"
    },
    {
      "cells": [
        "03/12/1993",
        "\"feminino\"",
        "\"divorciado\"",
        "0"
      ],
      "line": 23,
      "id": "validar-currico;dados-pessoais-validacao-de-campos;;6"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 13914922337,
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
  "duration": 8340626308,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 3945074438,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "dados pessoais validacao de campos",
  "description": "",
  "id": "validar-currico;dados-pessoais-validacao-de-campos;;2",
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
  "duration": 10690999491,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 259885540,
  "status": "passed"
});
formatter.after({
  "duration": 2323731829,
  "status": "passed"
});
formatter.before({
  "duration": 7929006106,
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
  "duration": 5493588487,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 4193395053,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "dados pessoais validacao de campos",
  "description": "",
  "id": "validar-currico;dados-pessoais-validacao-de-campos;;3",
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
  "duration": 2369351531,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 276883100,
  "status": "passed"
});
formatter.after({
  "duration": 2150880952,
  "status": "passed"
});
formatter.before({
  "duration": 7528874556,
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
  "duration": 5559041005,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 4016632439,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "dados pessoais validacao de campos",
  "description": "",
  "id": "validar-currico;dados-pessoais-validacao-de-campos;;4",
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
  "duration": 3584281156,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 250130737,
  "status": "passed"
});
formatter.after({
  "duration": 2315201143,
  "status": "passed"
});
formatter.before({
  "duration": 7581329228,
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
  "duration": 4453956840,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 6186922938,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "dados pessoais validacao de campos",
  "description": "",
  "id": "validar-currico;dados-pessoais-validacao-de-campos;;5",
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
  "duration": 2309222149,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 258334438,
  "status": "passed"
});
formatter.after({
  "duration": 2077327059,
  "status": "passed"
});
formatter.before({
  "duration": 7418152353,
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
  "duration": 6568213956,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 6359682062,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "dados pessoais validacao de campos",
  "description": "",
  "id": "validar-currico;dados-pessoais-validacao-de-campos;;6",
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
  "duration": 4208913250,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 268848556,
  "status": "passed"
});
formatter.after({
  "duration": 2448698648,
  "status": "passed"
});
formatter.before({
  "duration": 8802267298,
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
  "duration": 4480099032,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 5382693730,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "validacao de documentos pessoais",
  "description": "",
  "id": "validar-currico;validacao-de-documentos-pessoais",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 26,
  "name": "que edito documentos pessoais País de Nacionalidade \"Brasil\" e Documento \"Brasil\"",
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
      "val": "Brasil",
      "offset": 74
    }
  ],
  "location": "validarCurriculoSteps.queEditoDocumentosPessoaisPaísDeNacionalidadeEDocumento(String,String)"
});
formatter.result({
  "duration": 2003821,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat steps.validarCurriculoSteps.queEditoDocumentosPessoaisPaísDeNacionalidadeEDocumento(validarCurriculoSteps.java:70)\r\n\tat ✽.Dado que edito documentos pessoais País de Nacionalidade \"Brasil\" e Documento \"Brasil\"(validarCurriculo.feature:26)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2118071059,
  "status": "passed"
});
formatter.before({
  "duration": 7405303653,
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
  "duration": 4464242899,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 11284953137,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "validacao de CPF",
  "description": "",
  "id": "validar-currico;validacao-de-cpf",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 30,
  "name": "que alterei o CPF de forma correta \"123.123.123-23\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 31,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "123.123.123-23",
      "offset": 36
    }
  ],
  "location": "validarCurriculoSteps.queAltereiOCPFDeFormaCorreta(String)"
});
formatter.result({
  "duration": 293003,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat steps.validarCurriculoSteps.queAltereiOCPFDeFormaCorreta(validarCurriculoSteps.java:76)\r\n\tat ✽.Dado que alterei o CPF de forma correta \"123.123.123-23\"(validarCurriculo.feature:30)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 253923538,
  "status": "passed"
});
});