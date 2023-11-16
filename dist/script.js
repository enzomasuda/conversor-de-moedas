function start() {
  var valorDolar = document.getElementById('valorDolar').value;
  
  if (isNaN(valorDolar) || valorDolar === "") {
    alert("Por favor, digite um número válido.");
    return;
  }
  
  var taxaDeCambio = 4.86;
  var valorReal = (valorDolar * taxaDeCambio);
  
  var resultado = `R$ ${valorReal.toFixed(2)}`
  alert(`USD ${valorDolar} dólares em reais é igual a ${resultado}.`)
}