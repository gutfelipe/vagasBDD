# vagasBDD

# Como rodar

1 Abrir Eclipse Java Photon
 - File -> Open Projects From File System...
 
2 Clicar com o botão direito no projeto
 - Maven -> Update Project..
 
3 Clicar com botão direito no projeto
```
 - Properties -> Java Build Path -> `aba` Libraries -> remove `JRE System Library [jrex.x.x_xxx]` 
   -> add Library... -> clicar `JRE System Library` next 
   -> Adicionar `jre1.8.0_181` (no meu caso bastou deixar checado a opção default JRE) 
   -> Finish -> Apply and Close
```

Obs.: Em alguns casos a IDE perde a acentuação do `Então` ajustar manualmente e alterar `Text file encoding` para `Other:` selecionar `UTF-8` em Properties -> resource.  

4 Executar arquivo `RunnerTest.java`

# Evidências
`...`vagasBDD/target/report-html/index.html

 
