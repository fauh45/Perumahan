// Find the intersection of 2 lines
// Input : Lines is expected to be array with the format of
// [[A1, B1, C1], [A2, B2, C2]]
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
    return (pos[0] * multiplier[0] + pos[1] * multiplier[1])
}

function calculate()