package steps;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
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

	@Before
	public void acessoInicial() {
		driver = utils.criarDriver();
		wait = new WebDriverWait(driver, 5);
	}

	@After
	public void fecharPagina() {
		driver.close();
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

	@Então("^alteracao eh realizada com sucesso$")
	public void alteracaoEhRealizadaComSucesso() throws Throwable {
		salvarEdicao();
		verificaMensagemComSucesso();
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
		preencherPorID("dados_pessoais_documentos_attributes_0_numero", cpf);
	}

	@Dado("^que altero minha foto do perfil \"([^\"]*)\"$")
	public void queAlteroMinhaFotoDoPerfil(String foto) throws Throwable {

		String endereco = System.getProperty("user.dir") + "\\image\\" + foto;

		driver.findElement(By.id("cv-edit-foto")).click();

		driver.findElement(By.id("adicionar-foto")).click();

		WebElement userName = driver.switchTo().activeElement();
		userName.sendKeys(endereco);
		userName.sendKeys(Keys.ENTER);

		// TODO
		// implementação n funciona
	}

	@Dado("^que altero meu nome para \"([^\"]*)\"$")
	public void queAlteroMeuNomePara(String nome) throws Throwable {
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

	private void editarEnderecoInfomaCombo(String elementID, String campo) {
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

	@Dado("^que altero meu email \"([^\"]*)\"$")
	public void queAlteroMeuEmail(String email) throws Throwable {
		abrirEdicaoDeInformacoesDeContato();
		esperaAbrirParaEdicao();

		preencherPorID("informacoes_de_contato_email", email);

		preencherPorID("informacoes_de_contato_confirmacao_de_email", email);
	}

	private void abrirEdicaoDeInformacoesDeContato() {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/informacoes_de_contato/edit')]")).click();
	}

	@Dado("^que altero meu telefone de contato principal \"([^\"]*)\"$")
	public void queAlteroMeuTelefoneDeContatoPrincipal(String telefone) throws Throwable {

		wait.until(ExpectedConditions.elementToBeClickable(
				By.xpath("//a[contains(@href, '/servicos/curriculo/informacoes_de_contato/edit')]")));

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

	private void abrirEdicaoEAlterarNome(String nome) {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/nome_completo/edit')]")).click();
		esperaAbrirParaEdicao();

		preencherPorID("curriculo_nome_completo", nome);
	}

	private void alterarTipoDocumento() {
		String tipos = driver.findElement(By.id("dados_pessoais_documentos_attributes_0_tipo_id")).getText();
		String[] fn = tipos.split("\n");

		new Select(driver.findElement(By.id("dados_pessoais_documentos_attributes_0_tipo_id")))
				.selectByVisibleText(fn[1]);
	}

	private void fazerLogin(String login, String senha) {
		driver.findElement(By.id("btLogin")).click();

		preencherPorID("login_candidatos_form_usuario", login);
		preencherPorID("login_candidatos_form_senha", senha);

		driver.findElement(By.name("commit")).click();
	}

	private void alteraDataNascimento(int dia, int mes, int ano) {
		String data = String.format("%02d/%02d/%d", dia, mes, ano);

		preencherPorID("dados_pessoais_data_de_nascimento", data);
	}

	private void alterarGenero(String genero) {
		if (genero.equals("masculino")) {
			driver.findElement(By.id("dados_pessoais_genero_masculino")).click();
		}
		if (genero.equals("feminino")) {
			driver.findElement(By.id("dados_pessoais_genero_feminino")).click();
		}
	}

	private void preencherPorID(String elementID, String descricao) {
		driver.findElement(By.id(elementID)).click();
		driver.findElement(By.id(elementID)).clear();
		driver.findElement(By.id(elementID)).sendKeys(descricao);
	}

	private void alteraEstadoCivil(String estadoCivil) {
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

	private void alteraFilhos(int filhos) {
		if (filhos != 0) {
			driver.findElement(By.id("filhos_sim")).click();
			preencherPorID("dados_pessoais_filhos", String.format("%d", filhos));
		} else {
			driver.findElement(By.id("filhos_nao")).click();
		}
	}

	private void esperaAbrirParaEdicao() {
		wait.until(ExpectedConditions.elementToBeClickable(By.className("btn-success")));
	}

	private void salvarEdicao() {
		driver.findElement(By.className("btn-success")).click();
	}

	private void verificaMensagemComSucesso() {
		assertTrue(driver.findElement(By.className("ico-ok")).isEnabled());
	}

	private void abrirEditarDadosPessoais() {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/dados_pessoais/edit')]")).click();
	}

	private void alterarDocumentos(String nascionalidade, String documentos) {
		new Select(driver.findElement(By.id("dados_pessoais_pais_de_nacionalidade")))
				.selectByVisibleText(nascionalidade);
		new Select(driver.findElement(By.id("dados_pessoais_documentos_attributes_0_pais_id")))
				.selectByVisibleText(documentos);
	}

	private void verificaLogadao() {
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.id("msgLogado"))));
	}

	private void acessaAtualizarCurriculo() {
		driver.findElement(By.xpath("//nav[@id='menuTopo']/a/span")).click();
		driver.findElement(By.xpath("//a[contains(text(),'Atualizar currículo')]")).click();
	}

}
