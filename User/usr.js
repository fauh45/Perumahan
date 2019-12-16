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
    // Check whether data from marketer is set
    else if (localStorage.getItem('mrk') == 'false') {
        window.alert('Data dari marketer belum ada');
        window.location.href = 'marketer.html';
    }
}

checkLocalSorage();

// Show the price from localstorage
function showprice() {
    document.getElementById('harga1').innerHTML = localStorage.getItem('harga1') + localStorage.getItem('komisi1');
    document.getElementById('harga2').innerHTML = localStorage.getItem('harga2') + localStorage.getItem('komisi1');
}

// Show the avability of tipe rumah
function showjumlah() {
    document.getElementById('jumlah1').innerHTML = localStorage.getItem('jumlah1');
    document.getElementById('jumlah2').innerHTML = localStorage.getItem('jumlah1');
}

// Show the area of tipe rumah
function showluas() {
    document.getElementById('luas1').innerHTML = localStorage.getItem('luas1');
    document.getElementById('luas2').innerHTML = localStorage.getItem('luas1');
}