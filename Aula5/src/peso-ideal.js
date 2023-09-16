export default function pesoIdeal(imc, altura){
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    return (imc*(alturaMetros*alturaMetros)).toFixed(2)
}