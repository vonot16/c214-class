import { rl as read }  from "./ReadTerminal.mjs"


export default function Menu(){
    showMainMenu()
    read.question('\n', (option) => {
        switch (option){
            case '1': {
                addMovieMenu()
                break
            }
            case '2': {
                markAsWatchedMenu()
                break
            }
            case '3': {
                rateMovieMenu()
                break
            }
            case '4': {
                showMovieList()
                break
            }
            case '5': break; 
            default: {
                console.log('Opção Invalida!')
            }
        }
    })
    
}

function showMainMenu(){
    console.log('Escolha uma das opções:')
    console.log("1 - Adicionar Novo Filme")
    console.log("2 - Marcar como Assistido")
    console.log("3 - Avaliar Filme")
    console.log("4 - Exibir Lista de Filme")
    console.log("5 - Sair")

   

    
}

function addMovieMenu(){
    console.log('1')
}

function markAsWatchedMenu(){
    console.log('2')
}

function rateMovieMenu(){
    console.log('3')
}

function showMovieList(){
    console.log('4')
}