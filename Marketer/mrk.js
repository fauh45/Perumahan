// Global variable
var komisi1 = 0; // Komisi for type 1 of house
var komisi2 = 0; // Komisi for type 2 of house

// Check the localstorage
function checkLocalSorage() {
    // Check whether localstorage is already set or not
    if (localStorage.length == 0) {
        window.alert('Data belum terinisialisasi');
        window.location.href = 'index.html'; // Redirect back to home to initalize
    }
    // Check whether data from investor is set
    else if (localStorage.getItem('inv') == 'false') {
        window.alert('Data dari investor belum ada');
        window.location.href = 'investor.html'; // Redirect to investor page
    }
}

checkLocalSorage();

// Show the price from localstorage
function showprice() {
    document.getElementById('harga1').innerHTML = localStorage.getItem('harga1');
    document.getElementById('harga2').innerHTML = localStorage.getItem('harga2');
}

// Show the avability of tipe rumah
function showjumlah() {
    document.getElementById('jumlah1').innerHTML = localStorage.getItem('jumlah1');
    document.getElementById('jumlah2').innerHTML = localStorage.getItem('jumlah2');
}

// Adding harga with komisi
// Function activated onClick
function add() {
    // Getting the data from input
    // Put it onto global variable
    komisi1 = document.getElementById('komisi1').value;
    komisi2 = document.getElementById('komisi2').value;

    // Adding them into localstorage
    localStorage.setItem('komisi1', komisi1);
    localStorage.setItem('komisi2', komisi2);

    // Checked off marketer
    localStorage.setItem('mrk', true);

    // Calculate and show
    calculate();

    // Let user know
    window.alert('Data sudah masuk');
}

// Calculate profit from the input
// Input : Number of prospected sold house for each type of house
// n1 (int) : number of prospected sold house for type 1
// n2 (int) : number of prospected sold house for type 2
// Output : Profit for the marketer
function calculateProfitKomisi(n1, n2) {
    return (n1 * komisi1) + (n2 * komisi2);
}

// Trigger function to calculate profit
function calculate() {
    // Get data from localstorage
    var n1 = parseInt(localStorage.getItem('jumlah1'));
    var n2 = parseInt(localStorage.getItem('jumlah2'));

    // Get data from localstorage
    var harga1 = parseInt(localStorage.getItem('harga1'));
    var harga2 = parseInt(localStorage.getItem('harga2'));

    // Calculate profit, then put it into html
    // Calculate total price of tipe 1
    var totalTipe1 = (harga1 + komisi1) * n1;
    var totalTipe2 = (harga2 + komisi2) * n2;

    // Put it onto HTMl
    document.getElementById('totaltipe1').innerHTML = totalTipe1;
    document.getElementById('totaltipe2').innerHTML = totalTipe2;

    document.getElementById('totalsemua').innerHTML = totalTipe1 + totalTipe2;
    document.getElementById('totalkomisi').innerHTML = calculateProfitKomisi(n1, n2);
}