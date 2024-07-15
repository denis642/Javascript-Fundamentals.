// Declare variables of different data types
var myString = "Welcome!";
var myNumber = 52;
var myBoolean = true;

// Define and call functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Call the functions and print output using console.log()
console.log("String value:", myString);
console.log("Number value:", myNumber);
console.log("Boolean value:", myBoolean);

console.log("Addition (5 + 3):", add(5, 3));
console.log("Subtraction (5 - 3):", subtract(5, 3));
console.log("Division (6 / 2):", divide(6, 2));
console.log("Division by zero (6 / 0):", divide(6, 0));
console.log("Multiplication (5 * 3):", multiply(5, 3));

// DOM manipulation and event handling
document.getElementById('addBtn').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').textContent = "Result: " + add(num1, num2);
});

document.getElementById('subtractBtn').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').textContent = "Result: " + subtract(num1, num2);
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').textContent = "Result: " + multiply(num1, num2);
});

document.getElementById('divideBtn').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').textContent = "Result: " + divide(num1, num2);
});

document.getElementById('toggleMessageBtn').addEventListener('click', function() {
    var messageElement = document.getElementById('message');
    if (messageElement.classList.contains('hidden')) {
        messageElement.classList.remove('hidden');
    } else {
        messageElement.classList.add('hidden');
    }
});

// Initialize and render the chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
