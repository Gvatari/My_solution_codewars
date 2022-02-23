/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x) {
    let result = [];
    let massiv_str = Array.from(x);
    let massiv_num = massiv_str.map(i => Number(i));
    for (j = 0; j < massiv_num.length; j++) {
        if (massiv_num[j] < 5) {
            result.push(0)
        } else if (massiv_num[j] >= 5) {
            result.push(1)
        }
    }
    return result.join('');
}