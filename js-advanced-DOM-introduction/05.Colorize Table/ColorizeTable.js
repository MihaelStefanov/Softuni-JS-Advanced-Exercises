// function colorize() {
//     let tableRows = document.querySelectorAll('tr:nth-of-type(2n) td');

//      tableRows.forEach(el => {
//         el.style.backgroundColor = "teal";
//     });

// }

function colorize() {

    let tableRows = document.querySelectorAll('tr');
    let tableRowsArr = Array.from(tableRows);
    
    tableRowsArr.forEach((el, i) => {
        if (i % 2 !== 0) {
            el.style.backgroundColor = 'teal';
        }
    })
    
}







