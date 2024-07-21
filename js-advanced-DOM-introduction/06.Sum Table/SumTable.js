function sumTable() {
    document.getElementById('sum').textContent = '';

    const tableRowsPrices = document.querySelectorAll('td:nth-of-type(2n)')

    let totalPrice = 0;

    tableRowsPrices.forEach(el => {
        totalPrice += Number(el.textContent);
    });
    document.getElementById('sum').textContent = totalPrice.toFixed(2);

}