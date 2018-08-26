#language: pt
@funcionalidade
Funcionalidade: Validar Currico
  
  Como usuário desejo validar todas as informacoes mais relevantes do meu curriculo
  via Selenium WebDriver com BDD

	Contexto:
		Dado que acesso minha conta com "gutembergtest" e 123456
	  E acesso a area da funcionalidade de atualizar curriculo

	
	Esquema do Cenário: dados pessoais validacao de campos
		Dado que edito dados pessoais <dataNascimento> <genero> <estadoCivil> <filhos>
		Então alteracao eh realizada com sucesso
	
		Exemplos:
			|dataNascimento	|genero	 		|estadoCivil		|filhos	|
			| 02/03/1980		|"feminino"	|"casado" 			|2			|
			| 03/12/1995		|"masculino"|"solteiro"			|1			|
			| 03/12/1991		|"feminino" |"viuvo"				|3			|
			| 03/12/1992		|"masculino"|"separado"			|0			|
 			| 03/12/1993		|"feminino" |"divorciado"		|0			|
		
		Cenário: validacao de documentos pessoais
			Dado que edito documentos pessoais País de Nacionalidade "Brasil" e Documento "Brasil"
			Então alteracao eh realizada com sucesso
		
		Cenário: validacao de CPF
			Dado que alterei o CPF de forma correta "123.123.123-23"
			Então alteracao eh realizada com sucesso
	
	




