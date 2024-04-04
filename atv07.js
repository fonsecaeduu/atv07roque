const prompt = require('prompt-sync')();

function calcularPotencia(base, expoente) {
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }
    return resultado;
}

function contarParesImpares() {
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < 10; i++) {
        const numero = parseInt(prompt(`Digite o ${i + 1}º número: `));
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log(`Quantidade de números pares: ${pares}`);
    console.log(`Quantidade de números ímpares: ${impares}`);
}

function gerarFibonacci(n) {
    let fibonacci = [1, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function calcularEstatisticas(numeros) {
    let menor = Infinity;
    let maior = -Infinity;
    let soma = 0;
    for (let numero of numeros) {
        if (numero < menor) menor = numero;
        if (numero > maior) maior = numero;
        soma += numero;
    }
    return { menor, maior, soma };
}

function verificarPrimo(numero) {
    if (numero < 2) {
        return "Não é primo.";
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return `Não é primo, é divisível por ${i}.`;
        }
    }
    return "É primo.";
}

function mostrarPrimosAteN(N) {
    let primos = [];
    let divisoes = 0;
    for (let numero = 2; numero <= N; numero++) {
        let divisivel = false;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            divisoes++;
            if (numero % i === 0) {
                divisivel = true;
                break;
            }
        }
        if (!divisivel) primos.push(numero);
    }
    console.log("Números primos:", primos);
    console.log("Número de divisões:", divisoes);
}

function calcularMediaAritmetica(N) {
    let soma = 0;
    for (let i = 0; i < N; i++) {
        const nota = parseFloat(prompt(`Digite a ${i + 1}ª nota: `));
        soma += nota;
    }
    return soma / N;
}

function main() {
    console.log("1. Calcular potência");
    console.log("2. Contar números pares e ímpares");
    console.log("3. Gerar série de Fibonacci até o n-ésimo termo");
    console.log("4. Calcular fatorial");
    console.log("5. Calcular estatísticas de um conjunto de números");
    console.log("6. Verificar se um número é primo");
    console.log("7. Mostrar todos os primos até N");
    console.log("8. Calcular média aritmética de N notas");

    const opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            const base = parseFloat(prompt("Digite a base: "));
            const expoente = parseInt(prompt("Digite o expoente: "));
            console.log(`Resultado: ${calcularPotencia(base, expoente)}`);
            break;
        case 2:
            contarParesImpares();
            break;
        case 3:
            const nFibonacci = parseInt(prompt("Digite o n-ésimo termo: "));
            console.log("Série de Fibonacci:", gerarFibonacci(nFibonacci).join(", "));
            break;
        case 4:
            const numeroFatorial = parseInt(prompt("Digite o número para calcular o fatorial: "));
            console.log(`Fatorial de ${numeroFatorial}: ${calcularFatorial(numeroFatorial)}`);
            break;
        case 5:
            const quantidadeNumeros = parseInt(prompt("Digite a quantidade de números: "));
            let numeros = [];
            for (let i = 0; i < quantidadeNumeros; i++) {
                numeros.push(parseFloat(prompt(`Digite o ${i + 1}º número: `)));
            }
            const estatisticas = calcularEstatisticas(numeros);
            console.log("Menor valor:", estatisticas.menor);
            console.log("Maior valor:", estatisticas.maior);
            console.log("Soma dos valores:", estatisticas.soma);
            break;
        case 6:
            const numeroPrimo = parseInt(prompt("Digite um número para verificar se é primo: "));
            console.log(verificarPrimo(numeroPrimo));
            break;
        case 7:
            const numeroLimite = parseInt(prompt("Digite um número limite para encontrar os primos: "));
            mostrarPrimosAteN(numeroLimite);
            break;
        case 8:
            const quantidadeNotas = parseInt(prompt("Digite a quantidade de notas: "));
            console.log("Média aritmética:", calcularMediaAritmetica(quantidadeNotas));
            break;
        default:
            console.log("Opção inválida.");
    }
}

main();
