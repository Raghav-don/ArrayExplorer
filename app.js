let numbers = [];

function getArray(){
    const input=document.getElementById("arrayInput").value;

    numbers=input.split(",")
    .map((num) => parseFloat(num.trim())).filter(num => !isNaN(num));
}


function displayResult(text) {
    document.getElementById("result").innerText=text;
    
}
function sortArray() {
    getArray();

    displayResult("Ascending Sorted:"+numbers.sort((a, b) => a - b));
}

function findEven(){
    getArray();
   
    displayResult("Even Numbers: " + numbers.filter((num)=> num % 2 === 0));
}
function findOdd() {
    getArray();

    displayResult("Odd Numbers: " + numbers.filter((num) => num % 2 !== 0));
}

function findPrime() {
    getArray();

    function isPrime(num) {
        if (num <= 1) return false;
        for (let i= 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    displayResult("Prime Numbers: " + numbers.filter(isPrime));
    }

function Reverse() {
    getArray();

    displayResult("Reversed Array: " + numbers.reverse());
}



function findMax() {
    getArray();

    if (numbers.length === 0) {
        displayResult("Array is empty");
        return;
    }
    
    const max = Math.max(...numbers);
    displayResult("Maximum Number: " + max);
}

function findMin() {
    getArray();

    if (numbers.length === 0) {
        displayResult("Array is empty");
        return;
    }
    
    const min = Math.min(...numbers);
    displayResult("Minimum Number: " + min);
}

function findSum() {
    getArray();

    if (numbers.length === 0) {
        displayResult("Array is empty");
        return;
    }
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    displayResult("Sum of Numbers: " + sum);
}

function findAverage() {
    getArray();

    if (numbers.length === 0) {
        displayResult("Array is empty");
        return;
    }
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    displayResult("Average of Numbers: " + average);
}

function findMedian() {
    getArray();

    if (numbers.length === 0) {
        displayResult("Array is empty");
        return;
    }
    
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    let median;

    if (sorted.length % 2 === 0) {
        median = (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        median = sorted[mid];
    }
    
    displayResult("Median of Numbers: " + median);
}
function findMode() {
    getArray();

    if (numbers.length === 0) {
        displayResult("Array is empty");
        return;
    }
    
    const frequency = {};
    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(num => frequency[num] === maxFreq);

    displayResult("Mode of Numbers: " + modes.join(", "));
}

function findDuplicates() {
    getArray();

    if (numbers.length === 0) {
        displayResult("Array is empty");
        return;
    }
    
    const frequency = {};
    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    const duplicates = Object.keys(frequency).filter(num => frequency[num] > 1);

    displayResult("Duplicate Numbers: " + duplicates.join(", "));
}

function removeDuplicates() {
    getArray();

    if (numbers.length === 0) {
        displayResult("Array is empty");
        return;
    }
    
    const uniqueNumbers = [...new Set(numbers)];
    displayResult("Array without Duplicates: " + uniqueNumbers);
}   

function squareNumbers() {
    getArray();

    if (numbers.length === 0) {
        displayResult("Array is empty");
        return;
    }
    
    const squaredNumbers = numbers.map(num => num * num);
    displayResult("Squared Numbers: " + squaredNumbers);
}

function factorial() {
    getArray();

    if (numbers.length === 0) {
        displayResult("Array is empty");
        return;
    }
    
    function factorial(num) {
        if (num < 0) return "undefined";
        if (num === 0 || num === 1) return 1;
        return num * factorial(num - 1);
    }

    const factorials = numbers.map(num => factorial(num));
    displayResult("Factorials: " + factorials.join(", "));
}