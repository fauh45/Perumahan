// Show the price from localstorage
function showprice() {
    document.getElementById('harga1').innerHTML = localStorage.getItem('harga1');
    document.getElementById('harga2').innerHTML = localStorage.getItem('harga2');
}

// Show the avability of tipe rumah
function showjumlah() {
    document.getElementById('jumlah1').innerHTML = localStorage.getItem('jumlah1');
    document.getElementById('jumlah2').innerHTML = localStorage.getItem('jumlah1');
}

// Adding harga with komisi
function add() {
    // Getting the data from input
    var komisi1 = document.getElementById('komisi1').value;
    var komisi2 = document.getElementById('komisi2').value;

    // Adding them into localstorage
    localStorage.getItem('harga1') += komisi1;
    localStorage.getItem('harga2') += komisi2;

    // Checked off marketer
    localStorage.setItem('mrk', true);
}