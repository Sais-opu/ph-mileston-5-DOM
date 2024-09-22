/**
 * common shared function here
 */
// function getInputFieldValueById() {
//     // console.log('will get value by id');
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney; // addMoney.js line-15
// };
function getInputFieldValueById(id) { // (id) as parametre for all id eta mane holo all id mann niye nibe ora
    const inputValue = document.getElementById(id).value;
    return inputValue; // addMoney.js line-18
}