// Global variable
// Store rumah tipe 1 data
var luastanah1 = 0;
var modal1 = 0;
var keuntungan1 = 0;

// Store rumah tipe 2 data
var luastanah2 = 0;
var modal2 = 0;
var keuntungan2 = 0;

// Store perumahan data
var nrumah = 0;
var luas = 0;
var modal = 0;

// Store maximum value
var maxpos = [];
var maxprofit = 0;

// Check the localstorage
function checkLocalSorage() {
    // Check whether localstorage is already set or not
    if (localStorage.length == 0) {
        window.alert('Data belum terinisialisasi');
        window.location.href = 'index.html'; // Redirect back to home to initalize
    }
}

checkLocalSorage();

// Find the intersection of 2 lines
// Input : Lines is expected to be array with the format of
// [[A1, B1, C1], [A2, B2, C2]]
// Mathematically : Ax + By = C
// Output : array of intersection with the format of [x, y]
function intersection(lines) {
    // Calculate the slope
    var delta = lines[0][0] * lines[1][1] - lines[1][0] * lines[0][1];

    // Find intersection of x and y
    var x = (lines[1][1] * lines[0][2] - lines[0][1] * lines[1][2]) / delta;
    var y = (lines[0][0] * lines[1][2] - lines[1][0] * lines[0][2]) / delta;

    return [x, y];
}

// Calculate profit
// Input : Value of pos in [x, y] and the multiplier of both x and y in [mx, my]
// Output : Value of profit
function calcprofit(pos, multiplier) {
    return (pos[0] * multiplier[0] + pos[1] * multiplier[1]);
}

// Add user input into global variable
// Triggered after calculate calls
function getInput() {
    // Put rumah tipe 1 data
    luastanah1 = document.getElementById('luastanah1').value;
    modal1 = document.getElementById('modal1').value;
    keuntungan1 = document.getElementById('keuntungan1').value;

    // Put rumah tipe 2 data
    luastanah2 = document.getElementById('luastanah2').value;
    modal2 = document.getElementById('modal2').value;
    keuntungan2 = document.getElementById('keuntungan2').value;

    // Store perumahan data
    nrumah = document.getElementById('nrumah').value;
    modal = document.getElementById('modal').value;
    luas = document.getElementById('luas').value;
}

// Put data into localstorage for further use
// Input : Both harga and jumlah (format : [tipe1, tipe2]) for both tipe rumah
// Output : Updated data, and investor true
function tostorage(harga1, harga2, jumlah) {
    localStorage.setItem('harga1', harga1);
    localStorage.setItem('harga2', harga2);

    localStorage.setItem('jumlah1', jumlah[0]);
    localStorage.setItem('jumlah2', jumlah[1]);

    localStorage.setItem('luas1', luastanah1);
    localStorage.setItem('luas2', luastanah2);

    // Set that the investor has used the menu
    localStorage.setItem('inv', true);

    // Let the user know
    window.alert("Data Sudah Masuk");
}

// Calculate maximum profit
// Trigger this after the button to calculate
// Shows the calculation result
function calculate() {
    // Collect input
    getInput();

    // Profit model
    var multiplier = [keuntungan1 / 100 * modal1, keuntungan2 / 100 * modal2];

    // Model rumah
    var A1 = modal1;
    var B1 = modal2;
    var C1 = modal;

    // Limitation model on number of home built
    var A2 = 1;
    var B2 = 1;
    var C2 = nrumah;

    // Limitation model on area
    var A3 = luastanah1;
    var B3 = luastanah2;
    var C3 = luas;

    // Get Intersection between Rumah Model and x-azis
    var temppos = intersection([
        [A1, B1, C1],
        [0, 1, 0]
    ]);
    //Check if intersection is in the range
    if (temppos[0] + temppos[1] <= nrumah && temppos[0] >= 0 && temppos[1] >= 0 && luastanah1 * temppos[0] + luastanah2 * temppos[1] <= luas && modal1 * temppos[0] + modal2 * temppos[1] <= modal) {
        if (calcprofit(temppos, multiplier) > maxprofit) {
            maxpos = temppos;
            maxprofit = calcprofit(temppos, multiplier);
        }
    }

    // Get Intersection between Limitation Model on number of house built and x-axis
    temppos = intersection([
        [A2, B2, C2],
        [0, 1, 0]
    ]);
    //Check if intersection is in the range
    if (temppos[0] + temppos[1] <= nrumah && temppos[0] >= 0 && temppos[1] >= 0 && luastanah1 * temppos[0] + luastanah2 * temppos[1] <= luas && modal1 * temppos[0] + modal2 * temppos[1] <= modal) {
        if (calcprofit(temppos, multiplier) > maxprofit) {
            maxpos = temppos;
            maxprofit = calcprofit(temppos, multiplier);
        }
    }

    // Get Intersection between Limitation Model on area and x-axis
    temppos = intersection([
        [A3, B3, C3],
        [0, 1, 0]
    ]);
    if (temppos[0] + temppos[1] <= nrumah && temppos[0] >= 0 && temppos[1] >= 0 && luastanah1 * temppos[0] + luastanah2 * temppos[1] <= luas) //Check if intersection is in the range
    {
        if (calcprofit(temppos, multiplier) > maxprofit) {
            maxpos = temppos;
            maxprofit = calcprofit(temppos, multiplier);
        }
    }

    // Get Intersection between Rumah Model and y-axis
    temppos = intersection([
        [A1, B1, C1],
        [1, 0, 0]
    ]);
    //Check if intersection is in the range
    if (temppos[0] + temppos[1] <= nrumah && temppos[0] >= 0 && temppos[1] >= 0 && luastanah1 * temppos[0] + luastanah2 * temppos[1] <= luas && modal1 * temppos[0] + modal2 * temppos[1] <= modal) {
        if (calcprofit(temppos, multiplier) > maxprofit) {
            maxpos = temppos;
            maxprofit = calcprofit(temppos, multiplier);
        }
    }

    // Get Intersection between Limitation Model on number of house and y-axis
    temppos = intersection([
        [A2, B2, C2],
        [1, 0, 0]
    ]);
    //Check if intersection is in the range
    if (temppos[0] + temppos[1] <= nrumah && temppos[0] >= 0 && temppos[1] >= 0 && luastanah1 * temppos[0] + luastanah2 * temppos[1] <= luas && modal1 * temppos[0] + modal2 * temppos[1] <= modal) {
        if (calcprofit(temppos, multiplier) > maxprofit) {
            maxpos = temppos;
            maxprofit = calcprofit(temppos, multiplier);
        }
    }

    // Get Intersection between Limitation Model on area and y-axis
    temppos = intersection([
        [A3, B3, C3],
        [1, 0, 0]
    ]);
    if (temppos[0] + temppos[1] <= nrumah && temppos[0] >= 0 && temppos[1] >= 0 && luastanah1 * temppos[0] + luastanah2 * temppos[1] <= luas) //Check if intersection is in the range
    {
        if (calcprofit(temppos, multiplier) > maxprofit) {
            maxpos = temppos;
            maxprofit = calcprofit(temppos, multiplier);
        }
    }

    // Get Intersection between Rumah Model and Limitation Model on number of house
    temppos = intersection([
        [A1, B1, C1],
        [A2, B2, C2]
    ]);
    //Check if intersection is in the range
    if (temppos[0] + temppos[1] <= nrumah && temppos[0] >= 0 && temppos[1] >= 0 && luastanah1 * temppos[0] + luastanah2 * temppos[1] <= luas && modal1 * temppos[0] + modal2 * temppos[1] <= modal) {
        if (calcprofit(temppos, multiplier) > maxprofit) {
            maxpos = temppos;
            maxprofit = calcprofit(temppos, multiplier);
        }
    }

    // Get Intersection between Rumah Model and Limitation Model on area
    temppos = intersection([
        [A1, B1, C1],
        [A3, B3, C3]
    ]);
    //Check if intersection is in the range
    if (temppos[0] + temppos[1] <= nrumah && temppos[0] >= 0 && temppos[1] >= 0 && luastanah1 * temppos[0] + luastanah2 * temppos[1] <= luas && modal1 * temppos[0] + modal2 * temppos[1] <= modal) {
        if (calcprofit(temppos, multiplier) > maxprofit) {
            maxpos = temppos;
            maxprofit = calcprofit(temppos, multiplier);
        }
    }

    // Get Intersection between Limitation model on area and Limitation Model on number of house
    temppos = intersection([
        [A3, B3, C3],
        [A2, B2, C2]
    ]);
    //Check if intersection is in the range
    if (temppos[0] + temppos[1] <= nrumah && temppos[0] >= 0 && temppos[1] >= 0 && luastanah1 * temppos[0] + luastanah2 * temppos[1] <= luas && modal1 * temppos[0] + modal2 * temppos[1] <= modal) {
        if (calcprofit(temppos, multiplier) > maxprofit) {
            maxpos = temppos;
            maxprofit = calcprofit(temppos, multiplier);
        }
    }

    // Shows calcultion result
    document.getElementById('tipe1').innerHTML = "Tipe 1: " + math.floor(maxpos[0]);
    document.getElementById('tipe2').innerHTML = "Tipe 2: " + math.floor(maxpos[1]);
    document.getElementById('totalkeuntungan').innerHTML = "Keuntungan: " + math.floor(maxprofit);

    // Calculate and put into localstorage
    tostorage((modal1 * (1 + (keuntungan1 / 100))), (modal2 * (1 + (keuntungan2 / 100))), maxpos);
}