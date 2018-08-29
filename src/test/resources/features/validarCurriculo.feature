#language: pt
@funcionalidade
Funcionalidade: Validar Curriculo
  
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
			Dado que edito documentos pessoais País de Nacionalidade "Brasil" e Documento "Bahamas"
			Então alteracao eh realizada com sucesso

 		Cenário: validacao de CPF
			Dado que alterei o CPF de forma correta "418.976.170-20"
			#Obs.: apenas Brasil
			Então alteracao eh realizada com sucesso
 		@ignore	
		Cenário: alteracao de foto
			Dado que altero minha foto do perfil "imagem1.jpg"
			#Obs.: colocar imagem dentro do projeto pasta ...\vagasBDD\image\
			Então alteracao eh realizada com sucesso

		Cenário: alteracao de nome
			Dado que altero meu nome para "felipetest"
			Então alteracao eh realizada com sucesso
		
		Esquema do Cenário: alteracao de endereco
			Dado que altero meu endereco para <pais><Zip><estado><cidade><endereco>
			Então alteracao eh realizada com sucesso
			Exemplos:
			|pais					|Zip			|estado						|cidade				|endereco					|
			|"Brasil"			|12345678	|"São Paulo"			|"Osasco"			|"rua de teste "	|

		Cenário: alteracao de contatos
			Dado que altero meu email "gutembergtest2@mailinator.com"
			Então alteracao eh realizada com sucesso
			
			Dado que altero meu telefone de contato principal "11987654321"
			Então alteracao eh realizada com sucesso
			
		Cenário: alteracao de deficiencias
			Dado que informo que nao tenho deficiencia
			Então alteracao eh realizada com sucesso
			
			