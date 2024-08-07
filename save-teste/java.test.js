const {isValidCNPJ} = require('./java')

it('Testando se um cnpj é valido ou nao ', () => {
    expect(isValidCNPJ("33.041.260/1951-51")).toBe(true)
})

it('Testando se um cnpj é invalido', () => {
    expect(isValidCNPJ("33.041.211/1951-51")).toBe(false)
})