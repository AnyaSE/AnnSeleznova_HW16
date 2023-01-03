const number = 12345; 

function reverseNumber (num) {
    const newNumber = (num.toString()).split('');
    const numberReverse = newNumber.reverse();
    const finalResult = numberReverse.join('');
    return finalResult;
}

console.log(reverseNumber(number));