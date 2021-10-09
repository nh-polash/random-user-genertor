const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}
loadQuotes();

const displayQuotes = quote => {
    const blockQuote = document.getElementById('quotes');
    blockQuote.innerHTML = `
        <q class="fadeIn">${quote.quote}</q>
    `;
    const span = document.createElement('span');
    span.classList.add('span');
    span.innerText = "- Kanye West";
    blockQuote.appendChild(span);
}