/**
 * func detalhes
 * avaliar
 * 
 */

class Movie{
    constructor(title, year, genre, duration){
        this.title = title
        this.year = year
        this.genre = genre
        this.duration = duration
        this.isWatched = false
        this.rate = 0
    }

    watchedToggle(){
        this.isWatched= !this.isWatched

        this.isWatched ? console.log(`${this.title} marcado como assistido.`) : console.log(`${this.title} marcado como não assistido.`) 
    }

    showDetails() {
        console.log(`Titulo: ${this.title}`)
        console.log(`Ano de Lançamento: ${this.year}`)
        console.log(`Generos: ${this.genre}`)
        console.log(`Duração: ${this.duration} minutes`)
        this.isWatched ? console.log(`Filme Asstido`) : console.log(`Filme Não assistido`)
        console.log(`Nota: ${this.rate == 0 ? `Não classificado`: this.rate + ' Estrelas'}`)
        console.log('\n')
    }

    rateMovie(rate){
        if(rate>=0){
            this.rate = rate
            console.log(`${this.title} recebeu a nota de ${this.rate} estrelas`)
            return
        }
        console.log('A nota tem que ser maior ou igual a 0')
        return
        
    }
     
}

const mv1 = new Movie('Nimona', 2023, ['Fantasy', 'Animation'],101)
const mv2 = new Movie('One Pice Film: Red', 2022, ['Adventure', 'Anime'],115)
const mv3 = new Movie('Spider-Man: Across the SpiderVerse', 2023, ['Action', 'Fantasy'],140)
mv1.watchedToggle()
mv2.rateMovie(4)
mv3.rateMovie()

mv1.showDetails()
mv2.showDetails()
mv3.showDetails()