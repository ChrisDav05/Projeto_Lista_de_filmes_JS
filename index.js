console.log("---LISTA DE FILMES---");

let listaDeFilmes = []

let contador = true

while (contador = true){
   const opcao = prompt("\nEscolha uma opção acerca dos filmes!\n1 - Adicionar filme;\n2 - Ordenar a lista;\n3 - Pesquisar filme;\n4 - Exibir listas;\n5 - Marcar filme como assistido;\n6 - Remover filme;\n7 - Encerrar programa.\n");
   if (opcao == 1){
       const titlefilme = prompt("Qual filme você deseja adicionar a sua lista? ")
       const anofilme = parseInt(prompt("Qual o ano de lançamento desse filme?"))
       listaDeFilmes.push({ano: anofilme, titulo: titlefilme})
       console.table(listaDeFilmes)
       
   }
   else if (opcao == 2){
       const ordemlista = listaDeFilmes.sort((a, b) => (a.titulo.localeCompare(b.titulo)));
       console.log("A lista de filmes em ordem alfabética é:", ordemlista)
   }
   else if (opcao == 3){
       const pesqfilme = prompt("Qual filme você deseja pesquisar na lista?")
       const pesquisa = listaDeFilmes.find(filme => filme.titulo === pesqfilme)
       console.log(`O filme`,pesquisa,`está na lista de filmes!`)
   }
   else if (opcao == 4){
       console.log("Sua lista de filmes é:")
       console.table(listaDeFilmes)
   }
   else if (opcao == 5){
       const filmejaass = listaDeFilmes.splice(listaDeFilmes[0],1)
       console.log(`Filmes para assistir:`, listaDeFilmes)
       console.log(`Filmes já assistidos:`, filmejaass)
   }
   else if (opcao == 6){
       const filmeremov = prompt("Qual filme você deseja remover e não assistir mais?")
       const filmerest = listaDeFilmes.splice(listaDeFilmes[filmeremov],1)
       console.table(`Filmes restantes:`, filmerest)
   }
   else if (opcao == 7) {
       console.log("Obrigado por usar o sistema! :)")
       break
   }
   else {
       console.log("Não uma opção válida!")
   }
}