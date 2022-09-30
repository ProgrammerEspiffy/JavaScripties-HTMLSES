window.onload = () => {
    let button = document.querySelector("#CIMC");
  
    // Calculando A Função IMC
    button.addEventListener("click", calculateIMC);
};
  
function calculateIMC() {
  
    // Valor Da Altura
    let Altura = parseInt(document
            .querySelector("#altura").value);
  
    // Valor do peso
    let Peso = parseInt(document
            .querySelector("#peso").value);
  
    let Resultado = document.querySelector("#resultado");
  
    // Checando se é valor ou não
    if (Altura === "" || isNaN(Altura)) 
        result.innerHTML = "Coloque uma Altura válida";
  
    else if (Peso === "" || isNaN(Peso)) 
        result.innerHTML = "Coloque um Peso Válido";
  
    // Se ambos forem Válidos Calcule o IMC
    else {
  
        // Fixar o Decimal
        let imc = (Peso / ((Altura * Altura) 
                            / 10000)).toFixed(2);
  
        // Dividindo As Condições
        if (imc < 18.6) Resultado.innerHTML =
            `Abaixo do Peso : <span>${imc}</span>`;
  
        else if (imc >= 18.6 && imc < 24.9) 
            Resultado.innerHTML = 
                `Normal : <span>${imc}</span>`;
  
        else Resultado.innerHTML =
            `Acima do Peso : <span>${imc}</span>`;
    }
}
// Créditos á esse site: https://acervolima.com/projete-uma-calculadora-de-imc-usando-javascript/