function inverterString(inputString) {
    var caracteres = inputString.split('');

    var caracteresInvertidos = [];
    for (var i = caracteres.length - 1; i >= 0; i--) {
        caracteresInvertidos.push(caracteres[i]);
    }

    var stringInvertida = caracteresInvertidos.join('');

    return stringInvertida;
}

var stringOriginal = "Você conseguiu o estágio!"; 

var stringInvertida = inverterString(stringOriginal);

console.log('String Original: ' + stringOriginal);
console.log('String Invertida: ' + stringInvertida);
