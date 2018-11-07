package steps;

import java.io.File;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;

public class validarCurriculoSteps {

	private WebDriver driver;
	private WebDriverWait wait;
	private DSL dsl;

	@Before
	public void acessoInicial() {
		driver = utils.criarDriver();
		wait = new WebDriverWait(driver, 10);
		dsl = new DSL(driver, wait);
	}

	@After
	public void fecharPagina() {
		// driver.close();
	}

	@Dado("^que acesso minha conta com \"([^\"]*)\" e (\\d+)$")
	public void queAcessoMinhaContaComE(String login, String senha) throws Throwable {
		dsl.fazerLogin(login, senha);
	}

	@Dado("^acesso a area da funcionalidade de atualizar curriculo$")
	public void acessoAAreaAFuncionalidadeDeAtualizarCurriculo() throws Throwable {
		dsl.verificaLogadao();
		dsl.acessaAtualizarCurriculo();
	}

	@Dado("^que edito dados pessoais (\\d+)/(\\d+)/(\\d+) \"([^\"]*)\" \"([^\"]*)\" (\\d+)$")
	public void queEditoDadosPessoais(int dia, int mes, int ano, String genero, String estadoCivil, int filhos)
			throws Throwable {
		dsl.abrirEditarDadosPessoais();
		dsl.esperaAbrirParaEdicao();
		dsl.alteraDataNascimento(dia, mes, ano);
		dsl.alteraEstadoCivil(estadoCivil);
		dsl.alterarGenero(genero);
		dsl.alteraFilhos(filhos);
	}

	@Dado("^que edito documentos pessoais Pais de Nacionalidade \"([^\"]*)\" e Documento \"([^\"]*)\"$")
	public void queEditoDocumentosPessoaisPaisDeNacionalidadeEDocumento(String nascionalidade, String documentos)
			throws Throwable {
		dsl.abrirEditarDadosPessoais();
		dsl.esperaAbrirParaEdicao();
		dsl.alterarDocumentos(nascionalidade, documentos);
		dsl.alterarTipoDocumento();
	}

	@Dado("^que alterei o CPF de forma correta \"([^\"]*)\"$")
	public void queAltereiOCPFDeFormaCorreta(String cpf) throws Throwable {
		dsl.abrirEditarDadosPessoais();
		dsl.esperaAbrirParaEdicao();
		dsl.alterarDocumentos("Brasil", "Brasil");
		dsl.alterarTipoDocumento();
		dsl.preencherPorID("dados_pessoais_documentos_attributes_0_numero", cpf);
	}

	@Dado("^que informo um CPF incorreto \"([^\"]*)\"$")
	public void queInformoUmCPFIncorreto(String cpf) throws Throwable {
		dsl.esperarTelaDisponivelParaIterecao();
		dsl.abrirEditarDadosPessoais();
		dsl.esperaAbrirParaEdicao();
		dsl.alterarDocumentos("Brasil", "Brasil");
		dsl.alterarTipoDocumento();
		dsl.preencherPorID("dados_pessoais_documentos_attributes_0_numero", cpf);
	}

	@Dado("^que altero minha foto do perfil \"([^\"]*)\"$")
	public void queAlteroMinhaFotoDoPerfil(String foto) throws Throwable {

		driver.findElement(By.className("cv-header__photo")).click();

		String caminho1 = System.getProperty("user.dir") + "\\image\\" + foto;
		String caminho2 = new File("image/" + foto).getCanonicalPath();
		// duas formas de pegar o caminho relativo de um arquivo e transformar em absoluto
		
		
		System.out.println(caminho1); 
		System.out.println(caminho2);

		driver.findElement(By.id("candidato_imagem")).sendKeys(caminho1);

		// TODO
		// implementação assert 
	}

	@Dado("^que altero meu nome para \"([^\"]*)\"$")
	public void queAlteroMeuNomePara(String nome) throws Throwable {
		dsl.abrirEdicaoEAlterarNome(nome);
	}

	@Dado("^que informo o nome em branco \"([^\"]*)\"$")
	public void queInformoONomeEmBranco(String nome) throws Throwable {
		dsl.esperarTelaDisponivelParaIterecao();
		dsl.abrirEdicaoEAlterarNome(nome);
	}

	@Dado("^que altero meu endereco para \"([^\"]*)\"(\\d+)\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void queAlteroMeuEnderecoPara(String pais, int Zip, String estado, String cidade, String endereco)
			throws Throwable {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/endereco/edit')]")).click();
		dsl.esperaAbrirParaEdicao();
		dsl.editarEnderecoInfomaCombo("endereco_pais_id", pais);
		dsl.preencherPorID("endereco_cep", String.format("%d", Zip));
		dsl.editarEnderecoInfomaCombo("endereco_uf_id", estado);
		dsl.editarEnderecoInfomaCombo("endereco_cidade_id", cidade);
		dsl.preencherPorID("endereco_logradouro", endereco);
	}

	@Dado("^que altero meu email \"([^\"]*)\"$")
	public void queAlteroMeuEmail(String email) throws Throwable {
		abrirEdicaoDeInformacoesDeContato();
		dsl.esperaAbrirParaEdicao();
		dsl.preencherPorID("informacoes_de_contato_email", email);
		dsl.preencherPorID("informacoes_de_contato_confirmacao_de_email", email);
	}

	@Dado("^que informo um email invalido \"([^\"]*)\"$")
	public void queInformoUmEmailInvalido(String email) throws Throwable {
		dsl.esperarTelaDisponivelParaIterecao();
		abrirEdicaoDeInformacoesDeContato();
		dsl.esperaAbrirParaEdicao();
		dsl.preencherPorID("informacoes_de_contato_email", email);
	}

	private void abrirEdicaoDeInformacoesDeContato() {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/informacoes_de_contato/edit')]")).click();
	}

	@Dado("^que altero meu telefone de contato principal \"([^\"]*)\"$")
	public void queAlteroMeuTelefoneDeContatoPrincipal(String telefone) throws Throwable {
		dsl.esperarTelaDisponivelParaIterecao();
		abrirEdicaoDeInformacoesDeContato();
		dsl.esperaAbrirParaEdicao();
		dsl.preencherPorID("informacoes_de_contato_telefone_numero", telefone);
	}

	@Dado("^que informo que nao tenho deficiencia$")
	public void queInformoQueNaoTenhoDeficiencia() throws Throwable {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/deficiencias/edit')]")).click();
		dsl.esperaAbrirParaEdicao();
		driver.findElement(By.id("deficiencias_possui_alguma_deficiencia_false")).click();
	}

	@Então("^alteracao eh realizada com sucesso$")
	public void alteracaoEhRealizadaComSucesso() throws Throwable {
		dsl.salvarEdicao();
		dsl.verificaMensagemComSucesso();
	}

	@Então("^eh exibido a seguinte mensagem de erro \"([^\"]*)\"$")
	public void ehExibidoASeguinteMensagemDeErro(String mensagem) throws Throwable {
		dsl.salvarEdicao();
		wait.until(ExpectedConditions.elementToBeClickable(By.className("btn-success")));

		if (mensagem.equals("Insira um e-mail válido.")) {
			dsl.verificaMessagemDeErro("span.help-block", mensagem);
		} else if (mensagem.equals("Insira seu nome completo.")) {
			dsl.verificaMessagemDeErro("p.validate-error", mensagem);
		} else if (mensagem.equals("Insira um CPF válido.")) {
			dsl.verificaMessagemDeErro("div.controls > p.validate-error", mensagem);
		} else {
			throw new PendingException("Erro na validação da mensagem de erro");
		}
	}

}
