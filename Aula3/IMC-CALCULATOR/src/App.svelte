<script>
	let height = 0
	let weight = 0
	let imcResult = ""

	function heightInputHandle(event){
		height = parseInt(event.target.value)
	}

	function weightInputHandle(event){
		weight = parseInt(event.target.value)
	}

	function calculateIMC(event){
		event.preventDefault();
		if(weight > 0 && height > 0){
			let imc = (weight / Math.pow((height/100), 2))

			if (imc < 18.5)
				imcResult = "Abaixo do peso"
			else if (imc >= 18.5 && imc <= 24.9) 
				imcResult = "Peso ideal"
			else if (imc >= 25.0 && imc <= 29.9) 
				imcResult = "Acima do peso"
			else if (imc >= 30.0 && imc <= 34.9) 
				imcResult = "Obesidade"
			else if (imc >= 35.0 && imc <= 39.9) 
				imcResult = "Obesidade Severa"
			else 
				imcResult = "Obesidade Mórbida"
		} else imcResult = ''
	}
</script>

<main class="center">
	<h1>Calculadora de IMC</h1>
  <form on:submit={calculateIMC} class="center">
    <label for="weight">Peso (KG): </label>
    <input
      type="number"
      name="weight"
      bind:value={weight}
      on:input={weightInputHandle}
    />
    <label for="height">Altura (CM): </label>
    <input
      type="number"
      name="height"
      bind:value={height}
      on:input={heightInputHandle}
    />
    <button type="submit">Calcular</button>
	<p>{imcResult}</p>
  </form>
</main>

<style>
	.center{
		display: flex;
		flex-flow: column;
		align-items: center;
	}
	form {
	  width: 300px;
	  padding: 20px;
	  background-color: #f5f5f5;
	  border: 1px solid #ccc;
	  border-radius: 5px;
	}
  
	label {
	  display: block;
	  margin-bottom: 10px;
	  font-weight: bold;
	  align-self: start;
	}
  
	input {
	  width: 100%;
	  padding: 8px;
	  margin-bottom: 15px;
	  border: 1px solid #ccc;
	  border-radius: 5px;
	}
  
	button {
	  background-color: #dab924;
	  color: #fff;
	  border: none;
	  border-radius: 5px;
	  padding: 10px 15px;
	  cursor: pointer;
	  font-size: 16px;
	  margin: auto;
	}
  
	button:hover {
	  background-color: #c1a320;
	}
  </style> 