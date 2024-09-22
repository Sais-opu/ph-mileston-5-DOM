/**
 * How to get money from an input field
 * 1.create variable
 * 2.rigth side document.getElementById(id)
 * 3. .value
 * 4. parseFloat
 *
 */
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // const addMoney = document.getElementById('input-add-money').value;
    // const addMoneyNumber= parseFloat(addMoney)
    // console.log('Add money button clicked');
    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log('add money value', addMoney);

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add money with parameter', addMoney);
    console.log('Pin number with parameter', pinNumber);



});