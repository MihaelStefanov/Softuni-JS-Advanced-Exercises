function extract(content) {
    const textEl = document.getElementById('content');

    let resultText = '';
    let pattern = /\(([^(]+)\)/g;
    let matches = textEl.textContent.matchAll(pattern);
    for (let match of matches) {
       resultText += match[1] + '; ';  
    }

    resultText = resultText.substring(0, resultText.length - 2);

    textEl.textContent = resultText;

}