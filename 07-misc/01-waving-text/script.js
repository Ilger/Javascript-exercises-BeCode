/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {
    // const paragrf = document.getElementById('target')
    // paragrf.ine
    var fontsize = [10, 12 , 14, 16, 18, 20]
    
    var text = document.getElementById("target").innerText
    document.getElementById("target").innerText = ""

    var array = []
    // your code here

})();

let newArray = [];
for (let index = 0; index < array1.length; index++) {
    const array1 = array1[index];
    const array2 = array2[index];
    newArray.push(array1)
    newArray.push(array2)
}

function fakeBin(x){
    let binary
    for (let index = 0; index < x.length; index++) {
        const digit = x[index];
        digit < 5 ? binary += 0 : binary += 1;
    }
    return binary
}