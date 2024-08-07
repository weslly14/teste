/**
 * Função para validar um CNPJ
 * @param {string} cnpj - O CNPJ a ser validado
 * @returns {boolean} - Retorna true se o CNPJ for válido, false caso contrário
 */
function isValidCNPJ(cnpj) {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/[^\d]+/g, '');

    // Validação básica de comprimento
    if (cnpj.length !== 14) return false;

    // Validação de todos os dígitos iguais (ex: 11111111111111)
    if (/^(\d)\1+$/.test(cnpj)) return false;

    // Validação dos dígitos verificadores
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) return false;

    return true;
}

// Exemplo de uso
const cnpjInput = "12.345.678/0001-95"; // Substitua pelo CNPJ que você deseja validar
if (isValidCNPJ(cnpjInput)) {
    console.log("CNPJ válido!");
} else {
    console.log("CNPJ inválido.");
}
module.exports ={isValidCNPJ}