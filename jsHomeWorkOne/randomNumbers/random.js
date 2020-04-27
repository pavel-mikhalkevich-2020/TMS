function generateNewRandomNumber () {
    return Math.floor(Math.random()*100);
}

let createNumbersArray = [];

for (let i = 0; i < 10 ; i++) {
    createNumbersArray.push(generateNewRandomNumber())
}

for ( let i = 0 ; i < createNumbersArray.length ; i++ ) {
    if (createNumbersArray [i] == 0) {
        createNumbersArray [i] = 'zero'
    } else
        if (createNumbersArray [i] == 100) {
            createNumbersArray [i] = '1zerozero'
        }
        else
            if (createNumbersArray[i] % 10 == 0) {
                createNumbersArray [i] = String (createNumbersArray [i]) [0] + 'zero'
            }
    }
      
console.log (createNumbersArray);