function calc() {
    
    const inputs = {
        num1: document.getElementById('num1'),
        num2: document.getElementById('num2'),
        sum: document.getElementById('sum')
    }

    console.log(inputs.sum);
    inputs.sum.value = Number(Number(inputs.num1.value) + Number(inputs.num2.value));

}
