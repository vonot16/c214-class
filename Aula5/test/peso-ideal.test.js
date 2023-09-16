import {expect} from 'chai'
import pesoIdeal from '../src/peso-ideal.js';

describe('Peso Ideal', () => {

    it('Pessoa acima do peso ideal minimo', () => {
      const altura = 150;
      const peso = 80;
      const IMCIdeal = 18.50
      const pesoIdea = parseFloat(pesoIdeal(IMCIdeal, altura))
      expect(pesoIdea).to.lessThan(parseFloat(peso));
    });
  
  
  
    it('Pessoa com o peso ideal minimo', () => {
      const peso = 74;
      const altura = 200;
      const IMCIdeal = 18.50
      const pesoIdea = pesoIdeal(IMCIdeal, altura)

      expect(pesoIdea).to.equal(peso.toFixed(2))
    });
  });