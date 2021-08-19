export default()=>{ 
function calculadora (a,b,calc) {
    if(calc == "+"){
        return a + b
    }
    if(calc == "-"){
        return a - b
    }
    if(calc == "*"){
        return a * b
    }
    if(calc == "/"){
        return a / b
    }

}

const sum = calculadora(1,2,"+")
const sub = calculadora(4,20,"-")
const mult = calculadora(3,3,"*")
const div = calculadora(15,5,"/")

console.log('Somar 1 e 2 = 3:', sum === 3)
console.log('Subtrair 4 de 20 = 16:', sub === -16)
console.log('Multiplicar 3 com 3 = 9:', mult === 9)
console.log('Dividir 15 por 5 = 3:', div === 3)
}