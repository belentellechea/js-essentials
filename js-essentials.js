// 0 - Bajar repo, hacer hola mundo console.log
console.log("Hola mundo"); 


// 2 - Funciones:
// add(firstOperator, secondOperator),
function add(firstOperator,secondOperator){
    let suma = firstOperator + secondOperator; 
    console.log(suma);
}
add(4,5);
// subtract(firstOperator, secondOperator),
function subtract(firstOperator, secondOperator){
    let resta = firstOperator - secondOperator; 
    console.log(resta);
}
subtract(3,2);
// divide(firstOperator, secondOperator),
function divide(firstOperator,secondOperator){
    let division = firstOperator/secondOperator; 
    console.log(division); 
}
divide(8,2); 
// multiply(firstOperator, secondOperator)
function multiply(firstOperator,secondOperator){
    let multi = firstOperator * secondOperator; 
    console.log(multi); 
}
multiply(2,3); 

// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶
function dress(temperature, isRaining){
    if (isRaining){
        console.log("Llevar paraguas"); 
    }
    if (temperature < 10){
        console.log("Ir en auto"); 
    } else if (temperature > 30){
        console.log("Ir de short");
    } else if (temperature === 30){
        console.log("Usar lentes"); 
    }
}
dress(9,true); 

// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)
function calculate(operation, firstOperator, secondOperator){
    switch (operation){
        case "add":
            return add(firstOperator,secondOperator); 
        case "subtract":
            return subtract(firstOperator,secondOperator); 
        case "divide": 
            return divide(firstOperator,secondOperator); 
        case "multiply": 
            return multiply(firstOperator,secondOperator); 
        default:
            console.log("Operación no encontrada");   
    }
}
calculate("add",3,2);

// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])
function eating(name, foods){
    for (let index = 0; index < foods.length; index++){
        console.log(`${name} is eating ${foods[index]}`); 
    }
}
eating("belen", ['🍔','🍟','🍗']);

// 6 - Funcion
// finalCountDown(count)
function finalCountDown(count){
    console.log(`Countdown from ${count}:`)
    while (count >= 0){
        console.log(count); 
        count--; 
    }
}
finalCountDown(10); 

// 7 - Funcion
// getGrade(score)
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S
function getGrad(score){
    if (score>=0 && score<=40){
        console.log("D");
    } else if (score>=41 && score<=60){
        console.log("R");
    } else if (score>=61 && score<=74){
        console.log("B");
    } else if (score>=75 && score<=84){
        console.log("BMB");
    } else if (score>=85 && score<=96){
        console.log("MB");
    } else if (score>=97 && score<=100){
        console.log("S"); 
    } else {
        console.log("Cifra inválida");
    }
}
getGrad(77); 

// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the the new collection of articles
function fillCart(person, articlesCollection){
    for (let i = 0; i < articlesCollection.length; i++) {
        person.cart.push(articlesCollection[i]);
    }
    console.log(person.cart);
}

let person = {name: 'Pepe', cart: []};
let articlesCollection = [
    {article: '👟', amount: 1, price: 25},
    {article: '🩳', amount: 2, price: 10},
    {article: '☂️', amount: 2, price: 15}
];

fillCart(person, articlesCollection); 

// 9 - Funcion
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})
function countBanana(inventory){
    let count = 0; 
    for (let i=0; i<inventory.length; i++){
        if (inventory[i]==='🍌'){
            count++; 
        }
    }
    console.log(`Banana count: ${count}`); 
}
countBanana(['🥑','🍌','🥭', '🍌']); 

// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
function getTotal(inventory){
    let total = 0;
    for(let i = 0; i < inventory.length; i++){
        total += inventory[i].price * inventory[i].quantity;
    }
    console.log(total);
}

let inventory = [
    {article: '🍔', price: 15, quantity: 1},
    {article: '🍟', price: 10, quantity: 2}
];

getTotal(inventory);
