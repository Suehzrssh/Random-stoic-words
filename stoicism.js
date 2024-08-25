const btn = document.getElementById("btn");


btn.addEventListener('click', bringWord);

function bringWord() {
    axios.get('https://stoic.tekloon.net/stoic-quote')
    .then(response => printWord(response))
    .catch(hata => console.log(hata))
    .then(console.log("done..."));
}
function printWord(response) {
    document.querySelector('.container').innerHTML = `
    <div class="container">
        <h2>some stoic quotes</h2>
        <h4>Hit the Button and see the quote</h4>
        <div class="hero">
            <h3><span class="author">${response.data.author}</span></h3>
            <p><span class="quote">${response.data.quote}</span></p>
        </div>
    </div>
    `;
}