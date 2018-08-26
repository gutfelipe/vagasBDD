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
        "0"
      ],
      "line": 20,
      "id": "validar-currico;dados-pessoais-validacao-de-campos;;3"
    },
    {
      "cells": [
        "03/12/1995",
        "\"masculino\"",
        "\"viuvo\"",
        "0"
      ],
      "line": 21,
      "id": "validar-currico;dados-pessoais-validacao-de-campos;;4"
    },
    {
      "cells": [
        "03/12/1995",
        "\"masculino\"",
        "\"separado\"",
        "0"
      ],
      "line": 22,
      "id": "validar-currico;dados-pessoais-validacao-de-campos;;5"
    },
    {
      "cells": [
        "03/12/1995",
        "\"masculino\"",
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
  "duration": 8953387259,
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
  "duration": 5098426281,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 2946460537,
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
  "duration": 13230678525,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "duration": 1447268,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat steps.validarCurriculoSteps.alteracaoEhRealizadaComSucesso(validarCurriculoSteps.java:71)\r\n\tat ✽.Então alteracao eh realizada com sucesso(validarCurriculo.feature:15)\r\n",
  "status": "pending"
});
formatter.after({
  "duration": 2320726284,
  "status": "passed"
});
formatter.before({
  "duration": 7569740893,
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
  "duration": 5186068473,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 6129116812,
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
  "name": "que edito dados pessoais 03/12/1995 \"masculino\" \"solteiro\" 0",
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
      "val": "0",
      "offset": 59
    }
  ],
  "location": "validarCurriculoSteps.queEditoDadosPessoais(int,int,int,String,String,int)"
});
formatter.result({
  "duration": 247815411,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"class name\",\"selector\":\"modal-footer\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027ZAPL10657\u0027, ip: \u0027192.168.1.36\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\GOLIVE~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53804}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: 2eb0bc16e5860601d7c403650aa4bda7\n*** Element info: {Using\u003dclass name, value\u003dmodal-footer}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:405)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat steps.validarCurriculoSteps.queEditoDadosPessoais(validarCurriculoSteps.java:51)\r\n\tat ✽.Dado que edito dados pessoais 03/12/1995 \"masculino\" \"solteiro\" 0(validarCurriculo.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 252476648,
  "status": "passed"
});
formatter.before({
  "duration": 3580533288,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027ZAPL10657\u0027, ip: \u0027192.168.1.36\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\GOLIVE~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53991}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: 7de9d91e08b6704ef0b36483b2c4c614\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat steps.validarCurriculoSteps.acessarPagina(validarCurriculoSteps.java:101)\r\n\tat steps.validarCurriculoSteps.acessoInicial(validarCurriculoSteps.java:27)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "status": "skipped"
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
  "name": "que edito dados pessoais 03/12/1995 \"masculino\" \"viuvo\" 0",
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
      "val": "viuvo",
      "offset": 49
    },
    {
      "val": "0",
      "offset": 56
    }
  ],
  "location": "validarCurriculoSteps.queEditoDadosPessoais(int,int,int,String,String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2152301412,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027ZAPL10657\u0027, ip: \u0027192.168.1.36\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\GOLIVE~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53991}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: 7de9d91e08b6704ef0b36483b2c4c614\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:435)\r\n\tat steps.validarCurriculoSteps.fecharPagina(validarCurriculoSteps.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
