/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // const data = dataCollection()
    const data = { 'age': age , 'gender': gender , 'town': town }
    // function dataCollection() {
        
    //     const age = window.prompt('Your age')
    //     const gender = window.prompt('Your gender')
    //     const town = window.prompt('Your town you live in')
    //     return { 'age': age , 'gender': gender , 'town': town }
    // }
    // console.log(data.length);
    
    window.alert(`${strify(data)}`)
})();

