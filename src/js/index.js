/* 
quando clicar no pokemon da listagem, temos que esconder o cartão do pkmn aberto e mostrar o cartão do pkmn selecionado

para isso vms precisar trabalharcom 2 elementos
1- listagem
2- cartão do pokemon

É preciso criar 2 variáveis JS para trabalhar com os elementos da tela

Será preciso trabalhar com um evento de clique que será feito pelo usuario na listagem de pokemon

> Remover a classe 'aberto' só do cartão que está aberto
> Ao clicar em um pkmn da listagem pegaremos o id dele para sabermos qual cartão mostrar
> Remover a classe 'ativo' que marca o pokemon que está selecionado
> Adicionar a classe 'ativo' no pkmn que foi selecionado

*/

/* Precisaremos criar duas variaveis no JS para trabalhar com os elementos da tela*/
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    /*Será preciso trabalhar com um evento de clique que será feito pelo usuario na listagem de pokemon*/

    pokemon.addEventListener('click', () => {
        //> Remover a classe 'aberto' só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        //> Ao clicar em um pkmn da listagem pegaremos o id dele para sabermos qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //> Remover a classe 'ativo' que marca o pokemon que está selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //> Adicionar a classe 'ativo' no pkmn que foi selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})