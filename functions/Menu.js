import { rl as read }  from "./ReadTerminal.mjs"


export default function Menu(){
    var option = showMainMenu()
    switch (option){
        default: {
            console.log('Opção Invalida!')
        }
    }
}

function showMainMenu(){
    console.log('Escolha uma das opções:')
    console.log("1 - Adicionar Novo Filme")
    console.log("2 - Marcar como Assistido")
    console.log("3 - Avaliar Filme")
    console.log("4 - Exibir Lista de Filme")
    console.log("5 - Sair")

    read.prompt('\n', (option) => {return option})

    
}

function AddNewMovieOption(){
    title, year, genre, duration
    
}
