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
  "duration": 9876509521,
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
  "duration": 5064985828,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 3479857757,
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
  "duration": 2251586690,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 273342902,
  "status": "passed"
});
formatter.after({
  "duration": 2654403216,
  "status": "passed"
});
formatter.before({
  "duration": 7597285797,
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
  "duration": 4927846931,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 5848594210,
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
  "duration": 2222494458,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 266904015,
  "status": "passed"
});
formatter.after({
  "duration": 326763048,
  "status": "passed"
});
formatter.before({
  "duration": 7034592074,
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
  "duration": 4855325722,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 2584042902,
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
  "duration": 3525092705,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 374395634,
  "status": "passed"
});
formatter.after({
  "duration": 2455279507,
  "status": "passed"
});
formatter.before({
  "duration": 7264549419,
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
  "duration": 4634017246,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 2466304491,
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
  "duration": 2800413376,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 281452962,
  "status": "passed"
});
formatter.after({
  "duration": 2659385019,
  "status": "passed"
});
formatter.before({
  "duration": 7085380482,
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
  "duration": 4968136703,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 2702479461,
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
  "duration": 3605939952,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 338089343,
  "status": "passed"
});
formatter.after({
  "duration": 2519193759,
  "status": "passed"
});
formatter.before({
  "duration": 6695357152,
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
  "duration": 4209194548,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 3762543521,
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
  "duration": 2284205526,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 325815697,
  "status": "passed"
});
formatter.after({
  "duration": 2615178601,
  "status": "passed"
});
formatter.before({
  "duration": 7215173542,
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
  "duration": 4355504885,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 2667182820,
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
  "duration": 2999077192,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 196590897,
  "status": "passed"
});
formatter.after({
  "duration": 2460856753,
  "status": "passed"
});
formatter.before({
  "duration": 6652179265,
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
  "duration": 4564683197,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 2420128611,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "alteracao de nome",
  "description": "",
  "id": "validar-curriculo;alteracao-de-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 40,
  "name": "que altero meu nome para \"felipetest\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 41,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "felipetest",
      "offset": 26
    }
  ],
  "location": "validarCurriculoSteps.queAlteroMeuNomePara(String)"
});
formatter.result({
  "duration": 4514702057,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 183206787,
  "status": "passed"
});
formatter.after({
  "duration": 2317413390,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "alteracao de endereco",
  "description": "",
  "id": "validar-curriculo;alteracao-de-endereco",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
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
  "duration": 7125881699,
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
  "duration": 4483833684,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 2415125664,
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
  "duration": 2225459223,
  "error_message": "cucumber.api.PendingException: campo não encontrado: Brasil\r\n\tat steps.validarCurriculoSteps.editarEnderecoInfomaCombo(validarCurriculoSteps.java:144)\r\n\tat steps.validarCurriculoSteps.queAlteroMeuEnderecoPara(validarCurriculoSteps.java:117)\r\n\tat ✽.Dado que altero meu endereco para \"Brasil\"12345678\"São Paulo\"\"Osasco\"\"rua de teste \"(validarCurriculo.feature:44)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2594742413,
  "status": "passed"
});
formatter.before({
  "duration": 6341098285,
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
  "duration": 4941690935,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 2301256703,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "alteracao de contatos",
  "description": "",
  "id": "validar-curriculo;alteracao-de-contatos",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 51,
  "name": "que altero meu email \"gutembergtest2@mailinator.com\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 52,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.step({
  "line": 54,
  "name": "que altero meu telefone de contato principal \"11987654321\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 55,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "gutembergtest2@mailinator.com",
      "offset": 22
    }
  ],
  "location": "validarCurriculoSteps.queAlteroMeuEmail(String)"
});
formatter.result({
  "duration": 3329069690,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 247566963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11987654321",
      "offset": 46
    }
  ],
  "location": "validarCurriculoSteps.queAlteroMeuTelefoneDeContatoPrincipal(String)"
});
formatter.result({
  "duration": 1314471657,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 146555387,
  "status": "passed"
});
formatter.after({
  "duration": 2531867640,
  "status": "passed"
});
formatter.before({
  "duration": 7556253325,
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
  "duration": 4445197340,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 3853736107,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "alteracao de deficiencias",
  "description": "",
  "id": "validar-curriculo;alteracao-de-deficiencias",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 58,
  "name": "que informo que nao tenho deficiencia",
  "keyword": "Dado "
});
formatter.step({
  "line": 59,
  "name": "alteracao eh realizada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "validarCurriculoSteps.queInformoQueNaoTenhoDeficiencia()"
});
formatter.result({
  "duration": 1063926335,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 279464998,
  "status": "passed"
});
formatter.after({
  "duration": 2412257183,
  "status": "passed"
});
});