class Calculator{
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add(){
        return this.num1 + this.num2
    }
    subtract(){
        return this.num1 - this.num2
    }
    multiply(){
        return this.num1 * this.num2
    }
    divide(){
        if(this.num < 0){
            throw Error("Can not divinde by zero")
        } else {
            return this.num1 / this.num2
        }
    }
}

const num1 = prompt("Please enter number 1")
const num2 = prompt("Please enter number 2")

let myCalc = Calculator(num1, num2)
let options = new Set("a", "b", "c", "d", "e")
let menu_options = "\n (a) Add \n (b) Subtract \n (c) Divide \n (d) Multiply \n (e) Modulus"
console.log(menu_options)

const option_choice = prompt("Enter your choice: ")

while(true){
    if (!options.has(option_choice.toLowerCase()) ){
        option_choice = prompt("Please enter a valid choice:")
    } else{
        if (option_choice === "a"){
            console.log(`Addition: ${myCalc.add()}`)
            break
        } else if (option_choice === "b"){
            console.log(`Sucbtraction: ${myCalc.subtract()}`)
            break
        }
        else if (option_choice === "c"){
            console.log(`Division: ${myCalc.divide()}`)
            break
        }
        else if (option_choice === "d"){
            console.log(`Multiplication: ${myCalc.multiply()}`)
            break
        }
        else if (option_choice === "e"){
            console.log(`Modulus: ${myCalc.mod()}`)
            break
        }
    }
}