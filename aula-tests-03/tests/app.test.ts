import calculator from "../src/calculator"

describe("calculadora", () => {
    it("deve retornar soma de 2 numeros", () => {
        const result = calculator.sum(2, 2)
        expect(result).toBe(4)
    })
    it("deve retornar subtração de 2 numeros", () => {
        const result = calculator.sub(4, 1)
        expect(result).toBe(3)
    })
    it("deve retornar multiplicação de 2 numeros", () => {
        const result = calculator.mul(3, 4)
        expect(result).toBe(12)
    })
    it("deve retornar divisão de 2 numeros", () => {
        const result = calculator.div(4, 2)
        expect(result).toBe(2)
    })
})