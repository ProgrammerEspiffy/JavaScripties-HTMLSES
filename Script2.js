// Variáveis
let N1 = prompt("Digite O Primeiro Número")
let N2 = prompt("Digite O Segundo Número")
let N3 = prompt("Digite O Terceiro Número")

// Se N1 > do que N2 e N3
if (N1 > N2 && N1 > N3) {
    alert(N1 + " é o Maior")
}

// Se N2 > do que N1 e N3
else if (N2 > N1 && N2 > N3) {
    alert(N2 + " é o Maior")
}

// Se N3 > do que N1 e N2
else if (N3 > N1 && N3 > N2) {
    alert(N3 + " é o Maior")
}

// Se Nenhum for Maior
else{
    alert("Nenhum é o Maior")
}