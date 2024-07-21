function extractText() {
    const result = document.getElementById('result');
    const itemsArray = Array.from(document.getElementById('items').children) 
    console.log(itemsArray);

    for (let itemEl of itemsArray) {
            result.innerHTML += `${itemEl.textContent} \n`;
            console.log(result);
    }

 }
    
