package steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.File;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
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
	}

	@After
	public void fecharPagina() {
		// driver.close();
	}

	@Dado("^que acesso minha conta com \"([^\"]*)\" e (\\d+)$")
	public void queAcessoMinhaContaComE(String login, String senha) throws Throwable {
		 fazerLogin(login, senha);
	}

	@Dado("^acesso a area da funcionalidade de atualizar curriculo$")
	public void acessoAAreaAFuncionalidadeDeAtualizarCurriculo() throws Throwable {
		 verificaLogadao();
		 acessaAtualizarCurriculo();
	}

	@Dado("^que edito dados pessoais (\\d+)/(\\d+)/(\\d+) \"([^\"]*)\" \"([^\"]*)\" (\\d+)$")
	public void queEditoDadosPessoais(int dia, int mes, int ano, String genero, String estadoCivil, int filhos)
			throws Throwable {
		 abrirEditarDadosPessoais();
		 esperaAbrirParaEdicao();
		 alteraDataNascimento(dia, mes, ano);
		 alteraEstadoCivil(estadoCivil);
		 alterarGenero(genero);
		 alteraFilhos(filhos);
	}

	@Dado("^que edito documentos pessoais Pais de Nacionalidade \"([^\"]*)\" e Documento \"([^\"]*)\"$")
	public void queEditoDocumentosPessoaisPaisDeNacionalidadeEDocumento(String nascionalidade, String documentos)
			throws Throwable {
		 abrirEditarDadosPessoais();
		 esperaAbrirParaEdicao();
		 alterarDocumentos(nascionalidade, documentos);
		 alterarTipoDocumento();
	}

	@Dado("^que alterei o CPF de forma correta \"([^\"]*)\"$")
	public void queAltereiOCPFDeFormaCorreta(String cpf) throws Throwable {
		 abrirEditarDadosPessoais();
		 esperaAbrirParaEdicao();
		 alterarDocumentos("Brasil", "Brasil");
		 alterarTipoDocumento();
		 preencherPorID("dados_pessoais_documentos_attributes_0_numero", cpf);
	}

	@Dado("^que informo um CPF incorreto \"([^\"]*)\"$")
	public void queInformoUmCPFIncorreto(String cpf) throws Throwable {
		 esperarTelaDisponivelParaIterecao();
		 abrirEditarDadosPessoais();
		 esperaAbrirParaEdicao();
		 alterarDocumentos("Brasil", "Brasil");
		 alterarTipoDocumento();
		 preencherPorID("dados_pessoais_documentos_attributes_0_numero", cpf);
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
		// implementação n funciona :/
	}

	@Dado("^que altero meu nome para \"([^\"]*)\"$")
	public void queAlteroMeuNomePara(String nome) throws Throwable {
		 abrirEdicaoEAlterarNome(nome);
	}

	@Dado("^que informo o nome em branco \"([^\"]*)\"$")
	public void queInformoONomeEmBranco(String nome) throws Throwable {
		 esperarTelaDisponivelParaIterecao();
		 abrirEdicaoEAlterarNome(nome);
	}

	@Dado("^que altero meu endereco para \"([^\"]*)\"(\\d+)\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void queAlteroMeuEnderecoPara(String pais, int Zip, String estado, String cidade, String endereco)
			throws Throwable {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/endereco/edit')]")).click();
		 esperaAbrirParaEdicao();
		 editarEnderecoInfomaCombo("endereco_pais_id", pais);
		 preencherPorID("endereco_cep", String.format("%d", Zip));
		 editarEnderecoInfomaCombo("endereco_uf_id", estado);
		 editarEnderecoInfomaCombo("endereco_cidade_id", cidade);
		 preencherPorID("endereco_logradouro", endereco);
	}

	@Dado("^que altero meu email \"([^\"]*)\"$")
	public void queAlteroMeuEmail(String email) throws Throwable {
		abrirEdicaoDeInformacoesDeContato();
		 esperaAbrirParaEdicao();
		 preencherPorID("informacoes_de_contato_email", email);
		 preencherPorID("informacoes_de_contato_confirmacao_de_email", email);
	}

	@Dado("^que informo um email invalido \"([^\"]*)\"$")
	public void queInformoUmEmailInvalido(String email) throws Throwable {
		 esperarTelaDisponivelParaIterecao();
		abrirEdicaoDeInformacoesDeContato();
		 esperaAbrirParaEdicao();
		 preencherPorID("informacoes_de_contato_email", email);
	}

	private void abrirEdicaoDeInformacoesDeContato() {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/informacoes_de_contato/edit')]")).click();
	}

	@Dado("^que altero meu telefone de contato principal \"([^\"]*)\"$")
	public void queAlteroMeuTelefoneDeContatoPrincipal(String telefone) throws Throwable {
		 esperarTelaDisponivelParaIterecao();
		abrirEdicaoDeInformacoesDeContato();
		 esperaAbrirParaEdicao();
		 preencherPorID("informacoes_de_contato_telefone_numero", telefone);
	}

	@Dado("^que informo que nao tenho deficiencia$")
	public void queInformoQueNaoTenhoDeficiencia() throws Throwable {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/deficiencias/edit')]")).click();
		 esperaAbrirParaEdicao();
		driver.findElement(By.id("deficiencias_possui_alguma_deficiencia_false")).click();
	}

	@Então("^alteracao eh realizada com sucesso$")
	public void alteracaoEhRealizadaComSucesso() throws Throwable {
		 salvarEdicao();
		 verificaMensagemComSucesso();
	}

	@Então("^eh exibido a seguinte mensagem de erro \"([^\"]*)\"$")
	public void ehExibidoASeguinteMensagemDeErro(String mensagem) throws Throwable {
		 salvarEdicao();
		wait.until(ExpectedConditions.elementToBeClickable(By.className("btn-success")));

		if (mensagem.equals("Insira um e-mail válido.")) {
			 verificaMessagemDeErro("span.help-block", mensagem);
		} else if (mensagem.equals("Insira seu nome completo.")) {
			 verificaMessagemDeErro("p.validate-error", mensagem);
		} else if (mensagem.equals("Insira um CPF válido.")) {
			 verificaMessagemDeErro("div.controls > p.validate-error", mensagem);
		} else {
			throw new PendingException("Erro na validação da mensagem de erro");
		}
	}
	
	public void verificaMessagemDeErro(String elementeCssSelector, String mensagen) {
		String span = driver.findElement(By.cssSelector(elementeCssSelector)).getAttribute("innerText");
		assertEquals(mensagen, span);
	}

	public void abrirEdicaoEAlterarNome(String nome) {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/nome_completo/edit')]")).click();
		esperaAbrirParaEdicao();
		preencherPorID("curriculo_nome_completo", nome);
	}

	public void editarEnderecoInfomaCombo(String elementID, String campo) {
		String todoCombo = driver.findElement(By.id(elementID)).getText();
		String[] lista = todoCombo.split("\n");

		for (String elementoDoCombo : lista) {
			if (elementoDoCombo.equals(campo)) {
				new Select(driver.findElement(By.id(elementID))).selectByVisibleText(campo);
				break;
			}
		}
		throw new PendingException("campo não encontrado: " + campo);
	}

	public void alterarTipoDocumento() {
		String tipos = driver.findElement(By.id("dados_pessoais_documentos_attributes_0_tipo_id")).getText();
		String[] fn = tipos.split("\n");

		new Select(driver.findElement(By.id("dados_pessoais_documentos_attributes_0_tipo_id")))
				.selectByVisibleText(fn[1]);
	}

	public WebDriver fazerLogin(String login, String senha) {
		this.driver.findElement(By.id("btLogin")).click();
		preencherPorID("login_candidatos_form_usuario", login);
		preencherPorID("login_candidatos_form_senha", senha);
		this.driver.findElement(By.name("commit")).click();
		return driver;
	}

	public void alteraDataNascimento(int dia, int mes, int ano) {
		String data = String.format("%02d/%02d/%d", dia, mes, ano);
		preencherPorID("dados_pessoais_data_de_nascimento", data);
	}

	public void alterarGenero(String genero) {
		if (genero.equals("masculino")) {
			driver.findElement(By.id("dados_pessoais_genero_masculino")).click();
		}
		if (genero.equals("feminino")) {
			driver.findElement(By.id("dados_pessoais_genero_feminino")).click();
		}
	}

	public void preencherPorID(String elementID, String descricao) {
		driver.findElement(By.id(elementID)).click();
		driver.findElement(By.id(elementID)).clear();
		driver.findElement(By.id(elementID)).sendKeys(descricao);
	}

	public void alteraEstadoCivil(String estadoCivil) {
		String text = "";

		if (estadoCivil.equals("separado")) {
			text = "Separado(a)";
		} else if (estadoCivil.equals("casado")) {
			text = "Casado(a)";
		} else if (estadoCivil.equals("solteiro")) {
			text = "Solteiro(a)";
		} else if (estadoCivil.equals("divorciado")) {
			text = "Divorciado(a)";
		} else if (estadoCivil.equals("viuvo")) {
			text = "Viúvo(a)";
		}

		new Select(driver.findElement(By.id("dados_pessoais_estado_civil"))).selectByVisibleText(text);
	}

	public void alteraFilhos(int filhos) {
		if (filhos != 0) {
			driver.findElement(By.id("filhos_sim")).click();
			preencherPorID("dados_pessoais_filhos", String.format("%d", filhos));
		} else {
			driver.findElement(By.id("filhos_nao")).click();
		}
	}

	public void esperaAbrirParaEdicao() {
		wait.until(ExpectedConditions.elementToBeClickable(By.className("btn-success")));
	}

	public void salvarEdicao() {
		driver.findElement(By.className("btn-success")).click();
	}

	public void verificaMensagemComSucesso() {
		assertTrue(driver.findElement(By.className("ico-ok")).isEnabled());
	}

	public void abrirEditarDadosPessoais() {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/dados_pessoais/edit')]")).click();
	}

	public void alterarDocumentos(String nascionalidade, String documentos) {
		new Select(driver.findElement(By.id("dados_pessoais_pais_de_nacionalidade")))
				.selectByVisibleText(nascionalidade);
		new Select(driver.findElement(By.id("dados_pessoais_documentos_attributes_0_pais_id")))
				.selectByVisibleText(documentos);
	}

	public void verificaLogadao() {
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.id("msgLogado"))));
	}

	public void acessaAtualizarCurriculo() {
		driver.findElement(By.xpath("//nav[@id='menuTopo']/a/span")).click();
		driver.findElement(By.xpath("//a[contains(text(),'Atualizar currículo')]")).click();
	}

	public void esperarTelaDisponivelParaIterecao() {
		wait.until(ExpectedConditions.elementToBeClickable(
				By.xpath("//a[contains(@href, '/servicos/curriculo/informacoes_de_contato/edit')]")));
	}


}
