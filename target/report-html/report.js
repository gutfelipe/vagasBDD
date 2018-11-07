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
  "duration": 11088724900,
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
  "duration": 6150032600,
  "status": "passed"
});
formatter.match({
  "location": "validarCurriculoSteps.acessoAAreaAFuncionalidadeDeAtualizarCurriculo()"
});
formatter.result({
  "duration": 5550111700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "validacao de documentos pessoais",
  "description": "",
  "id": "validar-curriculo;validacao-de-documentos-pessoais",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 24,
      "name": "@aqui"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "que edito documentos pessoais Pais de Nacionalidade \"Brasil\" e Documento \"Bahamas\"",
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
  "location": "validarCurriculoSteps.queEditoDocumentosPessoaisPaisDeNacionalidadeEDocumento(String,String)"
});
formatter.result({
  "duration": 164918400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(@href, \u0027/servicos/curriculo/dados_pessoais/edit\u0027)]\"}\n  (Session info: chrome\u003d70.0.3538.77)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LP1308\u0027, ip: \u002710.10.6.243\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\Inmetrics\\AppData\\...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64713}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.77, webStorageEnabled: true}\nSession ID: 32ce154e54564e85ae29642908df2b31\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(@href, \u0027/servicos/curriculo/dados_pessoais/edit\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat steps.DSL.abrirEditarDadosPessoais(DSL.java:125)\r\n\tat steps.validarCurriculoSteps.queEditoDocumentosPessoaisPaisDeNacionalidadeEDocumento(validarCurriculoSteps.java:58)\r\n\tat ✽.Dado que edito documentos pessoais Pais de Nacionalidade \"Brasil\" e Documento \"Bahamas\"(validarCurriculo.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "validarCurriculoSteps.alteracaoEhRealizadaComSucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 27001,
  "status": "passed"
});
});